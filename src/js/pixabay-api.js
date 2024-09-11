import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { button, text } from '../main.js';
import { loaderHidden, elementHidden } from './render-functions.js';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '44792163-757e44859b12a96dc64963414';

async function getImg({ q = '', page = 1, per_page = 15 } = {}) {
  return (
    await axios.get(BASE_URL, {
      params: {
        key: KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page,
      },
    })
  ).data;
}

function checkResult(arr) {
  if (arr.length === 0) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      color: 'red',
      position: 'topRight',
    });
    loaderHidden();
    elementHidden(button);
    elementHidden(text);
    return;
  }

  return true;
}

export { getImg, checkResult };
