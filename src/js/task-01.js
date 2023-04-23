const categoriesList = document.querySelector("#categories");

const categoriesItems = categoriesList.querySelectorAll("li.item");

// liczba kategorii
const numOfCategories = categoriesItems.length;
console.log(`Number of categories: ${numOfCategories}`);

// nagłówek kategorii
categoriesItems.forEach((item) => {
  const categoryHeader = item.querySelector("h2");
  const categoryName = categoryHeader.textContent;
  console.log(`Category: ${categoryName}`);

  // ilość li w danej kategorii
  const categoryElements = item.querySelectorAll("li");
  const numOfElements = categoryElements.length;
  console.log(`Elements: ${numOfElements}`);
});
