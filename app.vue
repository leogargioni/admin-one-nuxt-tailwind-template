<script setup>
// import { useDarkModeStore } from '@/stores/darkMode.js'
// import { darkModeKey } from '@/configs/config.js'

useHead({
  titleTemplate: (titleChunk) => {
    const titleBase = 'Admin One Vue 3 Tailwind'

    return titleChunk ? `${titleChunk} - ${titleBase}` : titleBase
  }
})

// const darkModeStore = useDarkModeStore()

// const currentStoredDarkMode =
//   typeof localStorage !== 'undefined' && localStorage[darkModeKey] === '1'

// if (
//   (!currentStoredDarkMode &&
//     typeof window !== 'undefined' &&
//     window.matchMedia('(prefers-color-scheme: dark)').matches) ||
//   currentStoredDarkMode
// ) {
//   darkModeStore.set(true)
// }
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>