<template>
  <div :class="$style.app">
    <Navbar>
      <a
        :class="$style.logo"
        href="/"
      >
        AI Pulse
      </a>
      <template #right>
        <Tabbar
          :tabs="[{
            title: 'Hawk Tracker',
            id: 'hawk-button',
            picture: 'https://hawk.so/assets/logo.svg',
            link: 'https://hawk-tracker.ru/'
          }, {
            title: 'GitHub',
            id: 'github-button',
            picture: 'https://cdn.svgporn.com/logos/github-icon.svg',
            link: 'https://github.com/neSpecc/aipulse'
          }]"
        />
      </template>
    </Navbar>
    <PageBlock :stretched="true">
      <div :class="$style.content">
        <h1>AI Pulse - Auto Bugfix Demo</h1>
        <p>
          This is a demonstration application showcasing the <strong>Auto Bugfix</strong> feature 
          of <a href="https://hawk-tracker.ru/" target="_blank">Hawk Error Tracker</a>.
        </p>
        
        <section :class="$style.section">
          <h2>About Hawk Error Tracker</h2>
          <p>
            Hawk is an advanced error tracking service that helps developers monitor, 
            analyze, and fix bugs in their applications. The Auto Bugfix feature uses 
            AI to automatically suggest fixes for common errors.
          </p>
        </section>

        <section :class="$style.section">
          <h2>Technologies Used</h2>
          <ul>
            <li><strong>CodeX UI</strong> - A modern Vue 3 component library with theming support</li>
            <li><strong>CodeX TypeScript Library Template</strong> - A quick start template for TypeScript libraries</li>
            <li><strong>Vue 3</strong> - Progressive JavaScript framework</li>
            <li><strong>Vite</strong> - Next generation frontend tooling</li>
          </ul>
        </section>

        <section :class="$style.section">
          <h2>Theme Configuration</h2>
          <p>
            This demo uses CodeX UI with:
          </p>
          <ul>
            <li><strong>Base Theme:</strong> Pure</li>
            <li><strong>Accent Theme:</strong> Violet</li>
          </ul>
        </section>
      </div>
    </PageBlock>
    <Popover />
    <Popup />
  </div>
</template>

<script setup lang="ts">
import { Navbar, PageBlock, Tabbar, Popover, Popup, useTheme, Theme } from '@codexteam/ui/vue';

/**
 * Initialize theme with Pure base and Violet accent
 */
const { setBaseTheme, setAccentTheme } = useTheme();

setBaseTheme(Theme.Pure);
setAccentTheme(Theme.Violet);
</script>

<style module>
.app {
  min-height: 100vh;
}

.logo {
  font-weight: 600;
  font-size: 18px;
  color: var(--base--text);
  text-decoration: none;
}

.logo:hover {
  color: var(--accent--text);
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.content h1 {
  font-size: 32px;
  margin-bottom: 20px;
  color: var(--base--text);
}

.content p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--base--text-secondary);
}

.content a {
  color: var(--accent--text);
  text-decoration: none;
}

.content a:hover {
  text-decoration: underline;
}

.section {
  margin-top: 40px;
}

.section h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--base--text);
}

.section ul {
  padding-left: 20px;
}

.section li {
  margin-bottom: 8px;
  line-height: 1.6;
  color: var(--base--text-secondary);
}
</style>
