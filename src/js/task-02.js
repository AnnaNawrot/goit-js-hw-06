const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// dla każdego składnika w tablicy tworzymy nowy element li i dodajemy go do listy ul#ingredients
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ingredientsList.appendChild(li);

  console.log(ingredients);
});
