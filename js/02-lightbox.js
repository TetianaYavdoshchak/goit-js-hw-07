import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

galleryList.innerHTML = galleryItems
.map(({ preview, original, description }) => 
`<li>
<a class="gallery__item" href="${original}">
<img 
class="gallery__image"
src="${preview}"
alt="${description}"
title="${description}"/>
</a>
</li>`)
.join("");

const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });

// console.log(galleryItems);
// console.log(galleryList);