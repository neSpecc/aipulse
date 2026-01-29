<template>
  <PageBlock>
    <div
      :class="$style.content">
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
</template>

<script setup lang="ts">
import { PageBlock } from '@codexteam/ui/vue';
import DemoForm from '../components/DemoForm.vue';
</script>

<style module>
.content {
  a {
    color: var(--base-text-primary);
  }

  :global(.codex-row:last-of-type) {
    :global(.codex-row__delimiter) {
      display: none;
    }
  }
}


</style>
