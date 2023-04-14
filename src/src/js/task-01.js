const categoriesEL = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEL.length}`);

categoriesEL.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`) ;
    console.log(`Elements: ${category.querySelectorAll('li').length}`) ;
})