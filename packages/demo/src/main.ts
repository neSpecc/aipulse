import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Import CodeX UI base styles
import '@codexteam/ui/styles';

// Import fonts (optional)
import '@codexteam/ui/styles/fonts';

// Import themes we need (Pure base and Violet accent)
import '@codexteam/ui/styles/themes/pure';
import '@codexteam/ui/styles/themes/violet';

createApp(App).mount('#app');
