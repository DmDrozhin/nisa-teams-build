<template>
  <section class="top-section">
    <div class="container">
      <div class="wrapper">
        <hgroup class="title">
          <div class="title__sub-title">Teams Build</div>
          <h1 class="title__title">Better Products With Nisa</h1>
        </hgroup>
        <div class="catcher">
          <div class="catcher__txt">
            Nisa is constantly improving to move forward through dashboard, statistics, data and verify and superior human resources.
          </div>
          <uiButtonBase class="catcher__btn" />
        </div>
        <div class="main-pic">
          <img class="main-pic__img" src="" alt="and this is our happy customer">
          <div class="main-pic__pop"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" coped>
.top-section {
  &__container { @include container; }
  &__wrapper {
    @include wrapper;
  }
  & .title {
    &__sub-title {}
    &__title {}
  }
  & .catcher {
    &__txt {}
    &__btn {}
  }
  & .main-pic {
    &__img {}
    &__pop {}
  }
}
</style>
