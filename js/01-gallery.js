import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
console.log(galleryItems);
const markup = galleryItems.map(({preview, original, description}) => {
    const item = `<div class="gallery__item">
    <a class="gallery__link" href= ${original}>
    <img
        class="gallery__image"
        src= ${preview}
        data-source= ${original}
        alt= ${description}
    />
    </a>
</div>`
return item
}).join('');

galleryRef.innerHTML = markup;

galleryRef.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG')  {
        return;
    }
    event.target.src = event.target.dataset.source;
    
    const instance = basicLightbox.create(`<img
    class="gallery__image"
    src= ${event.target.src}
    
/>`,{
    onShow: (instance) => {document.addEventListener("keydown", onEscape)}, 
    onClose: (instance) => {document.removeEventListener("keydown", onEscape)}}
)
function onEscape (event) {
    if (event.key === "Escape") {  
    instance.close()
        
    }}
instance.show()

}


