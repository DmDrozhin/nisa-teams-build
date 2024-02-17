<template>
  <div class="author">
    <div class="author__side-1 side-1">
      <div class="side-1__img"></div>
      </div>
    <div class="author__side-2 person">
      <div class="person__name">{{ setts.author }}</div>
      <div class="person__job">{{ setts.job }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({ setts: { type: Object } })
const path = computed(() => `url(${getURL(props.setts.img)})`)
// eslint-disable-next-line no-unused-vars
const getURL = (el) => require('@/assets/svg/' + el)
</script>

<style lang="scss" scoped>
.author {
  // border: 0.5px dashed rgb(63, 65, 205); // tech
  width: 100%;
  @include fr-st-c;
  column-gap: 16px;
  &__side-1, .side-1 {
    &__img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      background-image: v-bind(path);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  &__side-2, .person {
    &__name { @include P4-B; margin-bottom: 5px; }
    &__job { @include P9-R; }
  }
}

</style>
