<script setup>
import { containerMaxW } from '@/configs/config'
</script>

<template>
  <section class="p-6" :class="containerMaxW">
    <slot />
  </section>
</template>
