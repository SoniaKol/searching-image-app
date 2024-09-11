import 'modern-normalize/modern-normalize.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImg, checkResult } from './js/pixabay-api';
import {
  createMarkUp,
  loaderVisibly,
  loaderHidden,
  elementHidden,
  btnVisibly,
  textVisibly,
} from './js/render-functions';

const form = document.querySelector('.form');
const list = document.querySelector('.img-list');
const button = document.querySelector('.load-button');
const text = document.querySelector('.load-text');

form.addEventListener('submit', formHandler);
button.addEventListener('click', loadMoreHandler);

elementHidden(button);
elementHidden(text);

const params = {
  q: '',
  page: 1,
  per_page: 15,
  maxPage: 0,
};

async function formHandler(evt) {
  evt.preventDefault();

  list.innerHTML = '';
  params.page = 1;

  params.q = evt.currentTarget.elements.input.value.trim();

  if (!params.q) return;

  loaderVisibly();

  try {
    const { hits, totalHits } = await getImg(params);
    params.maxPage = Math.ceil(totalHits / params.per_page);

    if (checkResult(hits)) {
      loaderHidden();
      createMarkUp(hits);
    }
    if (params.maxPage > 1) {
      btnVisibly(button);
    }
  } catch (err) {
    console.log(err);
    iziToast.show({
      message: `We're sorry, but something went wrong. Please try again.`,
      color: 'red',
      position: 'topRight',
    });
  } finally {
    form.reset();
  }
}

async function loadMoreHandler() {
  params.page += 1;
  elementHidden(button);
  textVisibly(text);
  try {
    const { hits } = await getImg(params);

    if (checkResult(hits)) {
      elementHidden(text);
      createMarkUp(hits);

      const imgCard = document.querySelector('.img-card');
      const imgCardHeight = imgCard.getBoundingClientRect().height;
      window.scrollBy({
        top: imgCardHeight * 2,
        behavior: 'smooth',
      });
    }
    if (params.maxPage > 1) {
      btnVisibly(button);
    }
    if (params.page === params.maxPage) {
      elementHidden(button);
      iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        color: 'blue',
        position: 'bottomRight',
      });
    }
  } catch (err) {
    console.log(err);
    iziToast.show({
      message: `We're sorry, but something went wrong. Please try again.`,
      color: 'red',
      position: 'topRight',
    });
  } finally {
    form.reset();
  }
}

export { list, button, text };
