import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. 
// Використовуй готовий код з першого завдання.
const listGallary = document.querySelector(".gallery");

const makeGallaryCards = ({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
  };

  const galleryArray = galleryItems.map((el) => {
    return makeGallaryCards(el);
});

    listGallary.insertAdjacentHTML("afterbegin", galleryArray.join(""));

const onlistGallaryClick = (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }

  let imgSRC = event.target.src;
  const linkHREF = event.target.parentNode.href;
 
  imgSRC = linkHREF;

  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
};


listGallary.addEventListener("click", onlistGallaryClick);