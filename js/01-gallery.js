import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

const item = [];

galleryItems.forEach((el) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery__item";
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = el.original;
  const galleryImg = document.createElement("img");
  galleryImg.className = "gallery__image";
  galleryImg.src = el.preview;
  galleryImg.setAttribute("data-source", el.original);
  galleryImg.alt = el.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImg);
  item.push(galleryItem);
});
gallery.append(...item);

gallery.addEventListener("click", (elm) => {
  elm.preventDefault();
  if (elm.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = elm.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", (elm) => {
    if (elm.key === "Escape") {
      instance.close();
    }
  });
});
