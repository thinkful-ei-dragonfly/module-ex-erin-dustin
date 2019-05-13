/* global shoppingList, store, api */

import api from './api';
import $ from 'jquery';
import shoppingList from './shopping-list';
import store from './store';

$(document).ready(function() {
  console.log('working');
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message))
});

