import { createApp } from 'vue';
import { Quasar } from 'quasar';
import { worker } from '@/mocks/browser';

import '@quasar/extras/roboto-font/roboto-font.css' // Roboto font
import '@quasar/extras/mdi-v6/mdi-v6.css'; // Import icon libraries
import 'quasar/src/css/index.sass'; // Quasar
import '@/assets/scss/index.scss'; // App
import 'uno.css'; // unoCSS

import App from './App.vue';
import { createPinia } from 'pinia';
import { QuasarConfig } from './helpers';
import router from './router';

// To start mock server
if (import.meta.env.VITE_MOCK_API) {
  worker.start({ onUnhandledRequest: 'bypass' });
}

const app = createApp(App);
//Router
app.use(router)
// Add store
app.use(createPinia());
// Quasar
app.use(Quasar, QuasarConfig);
// Mount app
app.mount('#app')
