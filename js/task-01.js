const categoriesEL = document.querySelectorAll('.item');
const categoryTitles = document.querySelectorAll('.item h2');
const categoryLists = document.querySelectorAll('.item ul');

console.log(`Number of categories: ${categoriesEL.length}`);

categoriesEL.forEach((category, index) => {
    const categoryTitle = categoryTitles[index].textContent;
    const elementsLength = categoryLists[index].children.length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsLength}`);
})