import * as R from 'ramda';
// eslint-disable-next-line import/no-extraneous-dependencies
import $ from 'jquery';

const Impure = {
  getJSON: R.curry((callback, url) => $.getJSON(url, callback)),
  setHtml: R.curry((sel, html) => $(sel).html(html)),
  trace: R.curry((tag, x) => { console.log(tag, x); return x; }),
};

const host = 'api.flickr.com';
const path = '/services/feeds/photos_public.gne';
const query = t => `?tags=${t}&format=json&jsoncallback=?`;
const url = t => `https://${host}${path}${query(t)}`;

// const app = R.compose(Impure.getJSON(Impure.trace('response')), url);

const mediaUrl = R.compose(R.prop('m'), R.prop('media'));
const mediaUrls = R.compose(R.map(mediaUrl), R.prop('items'));

// const render = R.compose(Impure.setHtml('#js-main'), mediaUrls);
// const app = R.compose(Impure.getJSON(render), url);

const img = src => $('<img />', { src });

const images = R.compose(R.map(img), mediaUrls);
const render = R.compose(Impure.setHtml('#js-main'), images);
const app = R.compose(Impure.getJSON(render), url);


app('cats');
