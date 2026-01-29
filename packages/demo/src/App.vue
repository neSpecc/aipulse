<template>
  <div :class="$style.app">
    <Navbar>
      <a
        :class="[$style.logo, 'text-ui-large']"
        href="/"
      >
        AI Pulse
      </a>
      <template #right>
        <Tabbar
          :tabs="[{
            title: 'Hawk Tracker',
            id: 'hawk-button',
            picture: HawkLogo,
            link: 'https://hawk-tracker.ru/?utm_source=aipulse&utm_medium=link&utm_campaign=demo'
          }, {
            title: 'GitHub',
            id: 'github-button',
            picture: GitHubLogo,
            link: 'https://github.com/neSpecc/aipulse'
          }]"
        />
      </template>
    </Navbar>
    <PageBlock>
      <div :class="$style.content">
        <h1 class="text-h1">
          Hawk Auto Bugfix
        </h1>
        <p class="text-p">
          This is a demo app showcasing the <strong>Auto Bugfix</strong> feature
          of <a href="https://hawk-tracker.ru/" target="_blank">Hawk Error Tracker</a>.
        </p>

        <DemoForm />
      </div>
    </PageBlock>
    <Popover />
    <Popup />
  </div>
</template>

<script setup lang="ts">
import { Navbar, PageBlock, Tabbar, Popover, Popup, useTheme, Theme } from '@codexteam/ui/vue';
import DemoForm from './components/DemoForm.vue';
import HawkLogo from './assets/hawk-logo.png';
import GitHubLogo from './assets/github.svg';

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
  color: var(--base--text-primary);
  text-decoration: none;
}

.logo:hover {
  color: var(--accent--text);
}

.content {
  a {
    color: var(--base-text-primary);
  }
}

:global(.codex-page-block__sidebar) {
  display: none;
}
</style>
