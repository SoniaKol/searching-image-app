import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { list } from '../main';

const downloaderContainer = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.img-card a');

function createMarkUp(arr) {
  const markup = arr
    .map(
      ({
        webformatURL: img,
        largeImageURL: originalImg,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="img-card">
      <a class="img-card-link" href="${originalImg}"><img src="${img}" alt="${tags}" class="img-card-image" /></a>
        <ul class="img-card-container">
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Likes</h4>
            <p class="img-card-descr-text">${likes}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Views</h4>
            <p class="img-card-descr-text">${views}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Comments</h4>
            <p class="img-card-descr-text">${comments}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Downloads</h4>
            <p class="img-card-descr-text">${downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function loaderVisibly() {
  downloaderContainer.style.visibility = 'visible';
}

function loaderHidden() {
  downloaderContainer.style.visibility = 'hidden';
}

function btnVisibly(btn) {
  btn.style.display = 'flex';
}

function textVisibly(txt) {
  txt.style.display = 'block';
}

function elementHidden(el) {
  el.style.display = 'none';
}

export {
  createMarkUp,
  loaderVisibly,
  loaderHidden,
  elementHidden,
  btnVisibly,
  textVisibly,
};
