import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
console.log(galleryItems);
const markup = galleryItems.map(({preview, original, description}) => {
    const item = `<a class="gallery__item" href=${original}>
    <img class="gallery__image" src=${preview} alt=${description} />
</a>`
return item
}).join('');

galleryRef.innerHTML = markup;
console.log(galleryItems);

galleryRef.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
}
// 
