import firebase from 'firebase';

export function addMeal(meal) {
  firebase.user.db
    .child('meals')
    .push({ ...meal, date: firebase.database.ServerValue.TIMESTAMP });
}

export function fetchMeals(startTime, endTime) {
  return firebase.user.db
    .child('meals')
    .orderByChild('date')
    .startAt(startTime)
    .endAt(endTime)
    .once('value')
    .then(snapshot => {
      const meals = [];
      snapshot.forEach(mealSnapshot => {
        meals.push({
          ...mealSnapshot.val(),
          id: mealSnapshot.key
        });
      });
      return meals;
    });
}
