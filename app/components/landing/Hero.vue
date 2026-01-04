<script setup lang="ts">
import type { IndexCollectionItem } from "@nuxt/content";

defineProps<{
  page: IndexCollectionItem;
}>();
</script>

<template>
  <!-- HEADER ATAS -->
  <div class="flex items-center justify-between px-4 py-6 mt-5">
    <!-- KIRI -->
    <span class="text-sm font-medium text-neutral-300"> @primestrider </span>

    <!-- KANAN -->
    <div class="flex items-center gap-4">
      <a
        href="https://github.com/primestrider"
        target="_blank"
        aria-label="GitHub"
        class="text-neutral-300 hover:text-white transition"
      >
        <UIcon name="i-simple-icons-github" class="w-5 h-5" />
      </a>
    </div>
  </div>

  <!-- HERO -->
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-lg mx-auto',
    }"
    :title="page.title"
    :description="page.description"
  />
</template>
