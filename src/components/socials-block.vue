<template>
  <section class="socials">
    <a
      class="socials__icon"
      v-for="it, idx in props.setts"
      :key="idx" href=""
      :style="{
        backgroundImage: 'url(' + require(`../assets/svg/socials/${it.icon}.svg`) + ')'
      }"
      :src="it.link"
    ></a>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ setts: { type: Array } })
</script>

<style lang="scss" scoped>
.socials {
  // border: 0.5px dashed orange;
  width: 100%;
  height: 19px;
  @include fr-sb-c;
  &__icon {
    // border: 0.5px dashed rgb(0, 21, 255);
    flex: 0 0 20%;
    background-repeat: no-repeat;
    height: 17px;
  }
}
</style>
