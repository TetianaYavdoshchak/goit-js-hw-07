import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onModalImg);

galleryList.innerHTML = galleryItems
.map(({ preview, original, description }) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img 
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a>
</li>`)
.join("");

function onModalImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`, {
        onShow: () => galleryList.addEventListener('keydown', onCloseModal),
        onClose: () => galleryList.removeEventListener('keydown', onCloseModal),
    }
    )
instance.show();
function onCloseModal(event) {
    if (event.key === "Escape") {
        instance.close();
    }
}
}



// console.log(galleryItems);
// console.log(galleryList);