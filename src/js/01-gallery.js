// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const onGalleryRef = document.querySelector('.gallery');
const onImgRef = document.querySelector('.gallery__image');

const createdGalleryItem = galleryItems.map(item => {
  return `<div><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></div>`;
});

const createdGallery = createdGalleryItem.join('');
onGalleryRef.insertAdjacentHTML('beforeend', createdGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionData: 'alt',
});
