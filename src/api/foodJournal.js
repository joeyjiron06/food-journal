import { database, auth } from 'firebase';
import moment from 'moment';

// USER API
export function getUser() {
  return auth().user;
}

export async function addMeal(meal) {
  await database()
    .user.child('meals')
    .push({ ...meal, date: database.ServerValue.TIMESTAMP });

  await updateStats();
}

export async function updateMeal(meal) {
  await database()
    .user.child('meals')
    .child(meal.id)
    .update(meal);

  await updateStats();
}

export async function removeMeal(meal) {
  await database()
    .user.child('meals')
    .child(meal.id)
    .remove();

  await updateStats();
}

export async function updateStats() {
  const userId = auth().user.id;
  const meals = await fetchMeals({ userId, ascending: false });

  const stats = {
    meat: 0,
    vegetarian: 0,
    vegan: 0,
    junkFood: 0,
    dateOfAllVeganDay: 0,
    junkFoodCountThisWeek: 0,
    meatCountThisWeek: 0,
    totalMeals: meals.length,
    lastMeal: meals[0] || null
  };

  const startOfWeek = moment().startOf('week');
  const endOfWeek = moment().endOf('week');

  meals.forEach(meal => {
    if (meal.type === 'meat') stats.meat++;
    if (meal.type === 'vegetarian') stats.vegetarian++;
    if (meal.type === 'vegan') stats.vegan++;
    if (meal.type === 'junk') stats.junkFood++;

    // this week
    if (moment(meal.date).isBetween(startOfWeek, endOfWeek)) {
      if (meal.type === 'meat') stats.meatCountThisWeek++;
      if (meal.type === 'junk') stats.junkFoodCountThisWeek++;
    }
  });

  // prevent divide by zero errors
  if (meals.length) {
    stats['vegan'] = (stats['vegan'] * 100) / meals.length;
    stats['meat'] = (stats['meat'] * 100) / meals.length;
    stats['vegetarian'] = (stats['vegetarian'] * 100) / meals.length;
    stats['junkFood'] = (stats['junkFood'] * 100) / meals.length;
  }

  const days = arrangeByDays(meals);

  const allVeganDay = days.find(day =>
    day.meals.every(meal => meal.type === 'vegan')
  );

  if (allVeganDay) {
    stats.dateOfAllVeganDay = allVeganDay.date.getTime();
  }

  await database()
    .ref(userId)
    .child('statistics')
    .set(stats);
}

function onAuthSuccess(authUser) {
  const user = {
    id: authUser.uid,
    photoUrl: authUser.photoURL,
    displayName: authUser.displayName
  };

  auth().user = user;
  database().user = database().ref(user.id);
  database()
    .user.child('info')
    .set(user);

  return user;
}

export async function onAuthStateChanged() {
  const authUser = await new Promise((resolve, reject) => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      } else {
        reject(user);
      }

      unsubscribe();
    });
  });

  return onAuthSuccess(authUser);
}

export async function login() {
  const result = await auth().signInWithRedirect(
    new auth.FacebookAuthProvider()
  );
  const authUser = result.user;
  return onAuthSuccess(authUser);
}

export async function signOut() {
  await auth().signOut();
}

export async function deleteAccount() {
  await database()
    .ref(auth().user.id)
    .set(null);
}

// OTHER APIs

export function arrangeByDays(meals) {
  return meals.reduce((days, meal) => {
    const date = new Date(meal.date);
    let day = days[days.length - 1];
    const mealDay = date.getDate();
    const currentDay = day && day.date.getDate();

    if (mealDay !== currentDay) {
      days.push({
        date: date,
        meals: []
      });
      day = days[days.length - 1];
    }

    day.meals.push(meal);

    return days;
  }, []);
}

export async function fetchHistory(userId) {
  const meals = await fetchMeals({ userId, ascending: false });
  return arrangeByDays(meals);
}

export async function fetchMeals({ userId, ascending = true }) {
  const snapshot = await database()
    .ref(userId)
    .child('meals')
    .orderByChild('date')
    .once('value');

  const meals = [];
  snapshot.forEach(mealSnapshot => {
    meals.push({
      ...mealSnapshot.val(),
      id: mealSnapshot.key
    });
  });

  if (!ascending) {
    return meals.reverse();
  }

  return meals;
}

export async function fetchUser(userId) {
  const snapshot = await database()
    .ref(userId)
    .child('info')
    .once('value');
  return snapshot.val();
}

export async function fetchUserStats(userId) {
  const snapshot = await database()
    .ref(userId)
    .child('statistics')
    .once('value');
  return snapshot.val();
}

export async function fetchUserIds() {
  const res = await fetch(
    'https://food-journal-6eb44.firebaseio.com/.json?shallow=true'
  );
  const userIdHash = await res.json();
  return Object.keys(userIdHash);
}

export async function fetchUsersFeed() {
  const userIds = await fetchUserIds();
  const users = [];

  for (let userId of userIds) {
    const user = await fetchUser(userId);

    // for people who havent logged in
    if (!user) {
      console.warn(userId, 'hasnt logged in for a while');
      continue;
    }

    user.stats = await fetchUserStats(userId);

    // put us at the front of the list
    if (userId === auth().user.id) {
      users.unshift(user);
    } else {
      users.push(user);
    }
  }

  return users;
}
