import { galleryItems } from "./gallery-items.js";

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

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
