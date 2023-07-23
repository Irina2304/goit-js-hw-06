const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector("#ingredients")
const list = [];

ingredients.forEach(el => {
  const li = document.createElement("li")
  li.classList.add("item")
  li.textContent = el;
  list.push(li);
});

ul.append(...list);

