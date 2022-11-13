// *Напиши скрипт, який для кожного елемента масиву ingredients:

// * 1 Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// * 2 Додасть назву інгредієнта як його текстовий вміст.
// * 3 Додасть елементу клас item.
// * 4 Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const dish = document.querySelector('#ingredients')

const liArr = []

ingredients.forEach(el => {
	const list = document.createElement('li')
	list.className = 'item'
	list.textContent = el
	liArr.push(list)
})

dish.append(...liArr)
console.log(dish);
