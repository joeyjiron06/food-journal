import firebase from 'firebase';

export function addMeal(meal) {
  firebase.user.db
    .child('meals')
    .push({ ...meal, date: firebase.database.ServerValue.TIMESTAMP });
}

export function removeMeal(meal) {
  firebase.user.db
    .child('meals')
    .child(meal.id)
    .remove();
}

export function fetchMeals({ start, end }) {
  return firebase.user.db
    .child('meals')
    .orderByChild('date')
    .startAt(start)
    .endAt(end)
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