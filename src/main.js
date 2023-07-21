import { createApp } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import VueAwesomePaginate from "vue-awesome-paginate";

import App from './App.vue'
import * as bootstrap from "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

library.add(fas);

import { router } from './router';

createApp(App)
    .use(router)
    .use(VueAwesomePaginate)
    .component('fa', FontAwesomeIcon)
    .mount('#app')

const icon = ["wine-bottle", "wine-glass", "whiskey-glass", "martini-glass-empty", "martini-glass-citrus", "martini-glass", "champagne-glasses", "beer-mug-empty"];
let rndIcon = Math.floor(Math.random() * 8);
let favicon = document.getElementById('favicon');
favicon.setAttribute('href', icon[rndIcon] + "-solid.svg");