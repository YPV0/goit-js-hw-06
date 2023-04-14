const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryEl = document.querySelector('.gallery');

// Перший спосіб *****

const insertImg = ({url, alt}) => {
  return ` <li class="item"> <img src="${url}" alt="${alt}"></li>`
 }
 const itemsElArr = images.map(image => insertImg(image));
 galleryEl.insertAdjacentHTML("afterbegin", itemsElArr.join(''));

// Другий спосіб *****

// const insertImg = ({url, alt}) => {
//   const itemEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   itemEl.classList.add('item');
//   imageEl.src = url;
//   imageEl.alt = alt;
//   itemEl.appendChild(imageEl);
//   return itemEl.outerHTML; 
// };

// const itemsElArr = images.map(image => insertImg(image));
// galleryEl.insertAdjacentHTML("afterbegin", itemsElArr.join('')); 

// Третій спосіб *****

// const galleryImgEl = images.forEach(image => {
//   const itemEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   itemEl.classList.add('item');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   itemEl.appendChild(imageEl);
//   galleryEl.insertAdjacentElement("afterbegin", itemEl);
// });



// Стилі **********
const stylesForUl = `
display: flex;
flex-wrap: wrap;
justify-content: center;
list-style : none; `;
const stylesForImg = `
width: 600px;
height: 500px;
margin: 10px; `;

galleryEl.style.cssText = stylesForUl;
document.querySelectorAll('img').forEach(img => img.style.cssText = stylesForImg);