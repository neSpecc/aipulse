<template>
  <PageBlock
    :class="$style.pageBlock"
  >
    <div :class="$style.linksPage">
      <h1 :class="$style.linksTitle">
        Ссылки
      </h1>
      <Section
        title="О Хоук"
        :with-background="true"
        data-dimensions="large"
      >
        <a
          v-for="link in linksHawk"
          :key="link.url"
          :href="link.url"
          :class="$style.linkRow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row
            :title="link.title"
            :has-delimiter="true"
          >
            <template #left>
              <img
                :src="link.picture"
                :class="$style.rowIcon"
                alt=""
              >
            </template>
            <template #right>
              <Icon name="ChevronRight" />
            </template>
          </Row>
        </a>
      </Section>

      <Section
        title="Об авторе"
        :with-background="true"
        data-dimensions="large"
      >
        <a
          v-for="link in linksAuthor"
          :key="link.url"
          :href="link.url"
          :class="$style.linkRow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row
            :title="link.title"
            :has-delimiter="true"
          >
            <template #left>
              <img
                :src="link.picture"
                :class="$style.rowIcon"
                alt=""
              >
            </template>
            <template #right>
              <Icon name="ChevronRight" />
            </template>
          </Row>
        </a>
      </Section>

      <Section
        title="Материалы"
        :with-background="true"
        data-dimensions="large"
      >
        <a
          v-for="link in linksMaterials"
          :key="link.url"
          :href="link.url"
          :class="$style.linkRow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row
            :title="link.title"
            :has-delimiter="true"
          >
            <template #left>
              <img
                :src="link.picture"
                :class="$style.rowIcon"
                alt=""
              >
            </template>
            <template #right>
              <Icon name="ChevronRight" />
            </template>
          </Row>
        </a>
      </Section>
    </div>
  </PageBlock>
</template>

<script setup lang="ts">
import { PageBlock, Section, Container, Row, Icon } from '@codexteam/ui/vue';
import hawkLogo from '../assets/hawk-logo.png';
import tgSvg from '../assets/tg.svg';
import githubSvg from '../assets/github.svg';

const linksHawk = [
  { title: 'hawk-tracker.ru', url: 'https://hawk-tracker.ru', picture: hawkLogo }
];

const linksAuthor = [
  { title: 't.me/specc', url: 'https://t.me/specc', picture: tgSvg },
];

const linksMaterials = [
  { title: 'https://github.com/neSpecc/aipulse', url: 'https://github.com/neSpecc/aipulse', picture: githubSvg }
];
</script>

<style module>
.linksPage {
  padding: var(--spacing-l);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.rowIcon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.linkRow {
  display: block;
  color: inherit;
  text-decoration: none;

  &:last-of-type {
    :global(.codex-row__delimiter) {
      display: none;
    }
  }
}

</style>
