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

const hawkToken = import.meta.env.VITE_HAWK_TOKEN;

if (!hawkToken || hawkToken.trim() === '') {
  console.warn(
    '[Hawk] Token is not defined. Create packages/demo/.env from .env.example and set VITE_HAWK_TOKEN. See README.',
  );
} else {
  new Hawk({
    token: hawkToken,
    vue: app,
  });
}
