const numberOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numberOfCategories.length}`);

for (const categories of numberOfCategories) {
  const titleOfcategories = categories.querySelector('h2');
  const numberOfSubcategories = categories.querySelectorAll('li');
  console.log(`categories: ${titleOfcategories.textContent}`);
  console.log(`Elements: ${numberOfSubcategories.length}`);
}