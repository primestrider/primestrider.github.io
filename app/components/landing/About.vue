<script setup lang="ts">
import type { IndexCollectionItem } from "@nuxt/content";

defineProps<{
  page: IndexCollectionItem;
}>();
</script>

<template>
  <UPageSection
    :ui="{
      container: '!p-0 max-w-none !gap-4',
    }"
  >
    <template #title>
      <div class="w-full">
        <h2 class="text-xl lg:text-2xl font-medium text-left">
          {{ page.about.title }}
        </h2>

        <hr class="mt-4 border-neutral-700" />
      </div>
    </template>

    <div class="space-y-6">
      <p
        v-for="(paragraph, index) in page.about.description"
        :key="index"
        class="text-left text-base lg:text-lg font-medium leading-relaxed"
      >
        {{ paragraph }}
      </p>
    </div>
  </UPageSection>
</template>
