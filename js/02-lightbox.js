import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

const item = [];

galleryItems.forEach((el) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__item";
  galleryLink.href = el.original;

  const galleryImg = document.createElement("img");
  galleryImg.className = "gallery__image";
  galleryImg.src = el.preview;
  galleryImg.setAttribute("title", el.description);
  galleryImg.alt = el.description;

  galleryLink.append(galleryImg);
  item.push(galleryLink);
});
gallery.append(...item);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
