<template>
  <div class="main">
    <section1Ver1 />
    <div class="main__container" ref="elem">
      <div class="main__wrapper">
        Main section
      </div>
    </div>
  </div>
</template>

<script setup>
import section1Ver1 from '@/components/sections/home-page-sec1-v1.vue'
</script>

<style lang="scss" scoped>
.main {
  background-color: #c3c3c3;
  width: 100%;
  margin: 0 auto;
  &__container {
    @include container;
    margin: 0 auto;
  }
  &__wrapper {
    @include wrapper;
    height: 50px;
    // border: 0.5px dashed orange;
    margin: 0 auto;
  }
}
</style>
