<template>
  <PageBlock :stretched="true" :class="$style.pageBlock">
    <div :class="$style.content">
      <section :class="$style.hero">
        <h2 :class="$style.heroTitle">
          Хоук
        </h2>
        <img
          :class="$style.heroImage"
          :src="projectOverview"
          alt="Project overview"
        >
      </section>
    </div>
  </PageBlock>
</template>

<script setup lang="ts">
import { PageBlock } from '@codexteam/ui/vue';
import projectOverview from '../assets/project-overview.png';
</script>

<style module>
.content {
  padding: var(--spacing-l);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('./../assets/bg.png');
  flex: 1;
  height: calc(100% - var(--layout-navbar-height));
  overflow: hidden;

  --title-size: 17vh;
  --image-width: min(70vw, 1400px);
  --image-transform: translateY(-20px);

  @media (max-width: 1200px) {
    --title-size: 16vw;
    overflow: visible;
    --image-width: 80%;
    --image-transform: translateY(0);
  }
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  margin-top: 5vh;
}

.heroTitle {
  font-size: var(--title-size);
  font-weight: 800;
  line-height: 1;
  margin: 0;
  background: linear-gradient(to bottom, #EEF0FF 30%, #0D1021 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.heroImage {
  display: block;
  max-width: var(--image-width);
  border-radius: 20px;
  transform: var(--image-transform);
  position: relative;
  z-index: 1;
}

.pageBlock {
  :global(.codex-page-block__content) {
    padding: 0;
    height: 100%;
  }

  height: calc(100% - var(--layout-navbar-height));
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
</style>
