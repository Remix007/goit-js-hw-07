import { galleryItems } from "./gallery-items.js";

// Change code below this line

// console.log(galleryItems);
/*
Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
*/

const listGallary = document.querySelector(".gallery");

const makeGallaryCards = ({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
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

    const instance = basicLightbox.create(
        `
    <img src="${linkHREF}" class="gallery__image"
>
`,
        {
            onShow: (instance) => {
                window.addEventListener("keydown", onEscPressKey);
            },
            onClose: (instance) => {
                window.removeEventListener("keydown", onEscPressKey);
            },
        }
    );

    instance.show();

    function onEscPressKey(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
};

listGallary.addEventListener("click", onlistGallaryClick);
