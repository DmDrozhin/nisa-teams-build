<template>
  <span class="base" :class="set">
    <slot></slot>
  </span>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({ col: { type: String, default: 'pink' } })
const set = computed(() => props.col === 'blue' ? 'set1' : 'set2')
</script>

<style lang="scss" scoped>
  .base {
    width: 100%;
    @include media('min', 'xs') { height: 40px; padding-inline: 20px; border-radius: 12px; }
    @include media('min', 'xxl') { height: 48px; padding-inline: 24px; border-radius: 16px; }
    padding-inline: 24px;
    @include P5-M;
    color: $wt;
    border-radius: 16px;
    @include fr-c-c;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }
  // BLUE button
  .set1 { background-color: $blue-CF; }
  .set1:hover { background-color: $blue-BA; }
  // PINK button
  .set2 { background-color: $pink-78; }
  .set2:hover { background-color: $pink-67; }
</style>
