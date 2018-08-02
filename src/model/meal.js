import { database } from 'firebase';

export function addMeal(meal) {
  database()
    .user.child('meals')
    .push({ ...meal, date: database.ServerValue.TIMESTAMP });
}

export function updateMeal(meal) {
  database()
    .user.child('meals')
    .child(meal.id)
    .update(meal);
}

export function removeMeal(meal) {
  database()
    .user.child('meals')
    .child(meal.id)
    .remove();
}

export function fetchMeals({ start, end, ascending = true }) {
  return database()
    .user.child('meals')
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

      if (!ascending) {
        return meals.reverse();
      }

      return meals;
    });
}
