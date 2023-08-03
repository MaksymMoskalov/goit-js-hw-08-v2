// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryListEl = document.querySelector('.gallery');
const renderedGalleryItems = createGalleryItem(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', renderedGalleryItems);

function createGalleryItem(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
