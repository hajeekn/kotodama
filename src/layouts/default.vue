<template>
  <main
    class="p-2 text-center text-gray-700 dark:text-gray-200 min-h-screen"
    bg="cover center no-repeat fixed gradient-to-tl"
    :class="isDark ? [''] : ['from-blue-50', 'to-gray-200']"
  >
    <BaseHeader />
    <router-view />
    <BaseFooter />
  </main>
</template>

<script setup lang="ts">
import { isDark } from '~/logic'
</script>
