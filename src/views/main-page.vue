<template>
  <div class="main">
    <div class="main__container" ref="elem">
      <div class="main__wrapper">
      </div>
    </div>
  </div>
</template>

<script setup>

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
    border: 0.5px dashed orange;
    margin: 0 auto;
  }
}
</style>
