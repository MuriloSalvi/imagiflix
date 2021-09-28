const URL = `https://api.themoviedb.org/3`;
const IMAGEURL = 'https://image.tmdb.org/t/p/'
const APIKEY = '98c2d7ed7ae253872872bdfb01a19bb9';
const APISTRING= `?api_key=${APIKEY}&language=pt-BR`;
const EVENTS = {
  PosterClick : 'PosterClick',
  ModalClose : 'ModalClose'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  URL,
  IMAGEURL,
  APIKEY,
  APISTRING,
  EVENTS
};