import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

import {createMarkup} from "./js/render-functions.js"
import {searchImages} from "./js/pixabay-api.js"

const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', 
{
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('submit', handleSearch);
loader.style.display = 'none';

function handleSearch(event) {
  event.preventDefault();

  loader.style.display = 'grid';

  gallery.innerHTML = '';
  const form = event.currentTarget;
  const QUERY = form.elements.query.value.trim();

  if (QUERY === '') {
    iziToast.show({
      title: 'Error',
      color: 'yellow',
      message: 'Please search for something',
    });
    loader.style.display = 'none';
    return;
  }

  searchImages(QUERY)
  .then(arr => {
    gallery.innerHTML = createMarkup(arr);
    lightbox.refresh();
    form.reset();
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => loader.style.display = 'none');
}
