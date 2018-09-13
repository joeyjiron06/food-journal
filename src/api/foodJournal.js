import { database, auth } from 'firebase';

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
  const meals = await fetchMeals({ userId });

  const stats = meals.reduce(
    (stats, meal) => {
      if (meal.type === 'meat') stats.meat++;
      if (meal.type === 'vegetarian') stats.vegetarian++;
      if (meal.type === 'vegan') stats.vegan++;
      if (meal.type === 'junk') stats.junkFood++;
      return stats;
    },
    {
      meat: 0,
      vegetarian: 0,
      vegan: 0,
      junkFood: 0
    }
  );

  for (let key in stats) {
    stats[key] = (stats[key] * 100) / meals.length;
  }

  stats.totalMeals = meals.length;

  if (meals.length > 0) {
    stats.lastMeal = meals[meals.length - 1];
  }

  await database()
    .ref(userId)
    .child('statistics')
    .set(stats);
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

export async function login() {
  await auth().signInWithRedirect(new auth.FacebookAuthProvider());
}

export async function logout() {
  await auth().log();
}

// OTHER APIs
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
