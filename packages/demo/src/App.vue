<template>
  <div :class="$style.app">
    <Navbar>
      <RouterLink
        :class="[$style.logo, 'text-ui-large']"
        to="/"
      >
        AI Pulse
      </RouterLink>
      <Tabbar
        :tabs="pageTabs"
        @click="onPageTabClick"
      />
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
    <RouterView />

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter, RouterView, RouterLink } from 'vue-router';
import { Navbar, Tabbar, useTheme, Theme } from '@codexteam/ui/vue';
import HawkLogo from './assets/hawk-logo.png';
import GitHubLogo from './assets/github.svg';

/**
 * Initialize theme with Pure base and Violet accent
 */
const { setBaseTheme, setAccentTheme } = useTheme();

setBaseTheme(Theme.Pure);
setAccentTheme(Theme.Violet);

const route = useRoute();
const router = useRouter();

const pageTabsConfig = [
  { path: '/', title: 'Demo' },
  { path: '/links', title: 'Links' },
  { path: '/hawk', title: 'Hawk' },
];

const pageTabs = computed(() =>
  pageTabsConfig.map((tab) => ({
    id: tab.path,
    title: tab.title,
    path: tab.path,
    isActive: route.path === tab.path
  }))
);

function onPageTabClick(tab: { path: string }) {
  router.push(tab.path);
}
</script>

<style module>
.app {
  min-height: 100vh;
}

.logo {
  color: var(--base--text-primary);
  text-decoration: none;
  margin-right: var(--spacing-l);
  white-space: nowrap;
}

.logo:hover {
  color: var(--accent--text);
}

:global(.codex-page-block__sidebar) {
  display: none;
}
</style>
