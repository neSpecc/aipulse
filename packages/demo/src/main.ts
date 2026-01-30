import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import Hawk from '@hawk.so/javascript';

// Import CodeX UI base styles, font and themes
import '@codexteam/ui/styles';
import '@codexteam/ui/styles/fonts';
import '@codexteam/ui/styles/themes/pure';
import '@codexteam/ui/styles/themes/violet';

const app = createApp(App);

app.use(router);
app.mount('#app');

new Hawk({
  token: import.meta.env.VITE_HAWK_TOKEN,
  vue: app,
});
