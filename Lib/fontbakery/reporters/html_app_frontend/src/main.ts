import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
// @ts-ignore TODO: WebStorm doesn't recognise the .vue extension here...
import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.mount('#app');
