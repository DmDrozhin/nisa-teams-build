<template>
  <div class="main">
    <div class="main__container" ref="elem">
      <topSectionV1 />
      <div class="main__wrapper">
        Main section
      </div>
    </div>
  </div>
</template>

<script setup>
import topSectionV1 from '../components/page1-top-section-v1.vue'
</script>

<style lang="scss" scoped>
.main {
  background-color: #5a5959;
  height: 600px;
  width: 100%;
  margin: 0 auto;
  &__container {
    @include container;
    margin: 0 auto;
  }
  &__wrapper {
    @include wrapper;
    height: 50px;
    border: 0.5px dashed orange;
    margin: 0 auto;
  }
}
</style>
