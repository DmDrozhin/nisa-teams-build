<template>
  <div class="overlay-phone-block block-with-circle">
    <div class="block__row block__row--1">+380</div>
    <div class="block__row block__row--2"></div>
    <div class="block__row block__row--3"></div>
    <div class="block__row block__row--4"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.overlay-phone-block, .block {
  position: absolute;
  height: auto;
  background-color: $wt;
  @include media('min', 'xs') {
    width: 99px;
    padding: 16px 10px 0;
    border-radius: 7px;
    background: radial-gradient(circle at 50% -3px, transparent calc(12px - 1px), $wt 12px);
  }
  @include media('min', 'lg') {
    width: 246px;
    padding: 40px 25px 0;
    border-radius: 16px;
    background: radial-gradient(circle at 50% -7px, transparent calc(28px - 1px), $wt 28px);
  }
  & ::before {
    content: '';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: $pink-78;
    background-image: url('@/assets/svg/browserslistrc.svg');
    background-repeat: no-repeat;
    background-position: center;
    @include media('min', 'xs') {
      width: 18.2px; height: 18.2px;
      background-size: 11px;
      top: -12px;
    }
    @include media('min', 'lg') {
      width: 45px; height: 45px;
      background-size: 24px;
      top: -30px; }
  }
  &__row {
    &--1 { @include H3-STSH; }
    color: $bl-1E;
    text-align: center;
    @include media('min', 'xs') { margin-bottom: 8px; }
    @include media('min', 'lg') { margin-bottom: 16px; }
    &--2 {
      background-color: $gr-DE;
      border-radius: 8px;
      @include media('min', 'xs') { height: 4.5px; margin: 0 5px 4px; }
      @include media('min', 'lg') { height: 12px; margin: 0 12px 9px; }
    }
    &--3 {
      background-color: $gr-DE;
      border-radius: 8px;
      @include media('min', 'xs') { height: 4px; margin: 0 10px 8px; }
      @include media('min', 'lg') { height: 7.3px; margin: 0 25px 23px; }
    }
    &--4 {
      background-color: $cyan-C9;
      margin-bottom: 23px;
      @include media('min', 'xs') { height: 17px; border-radius: 88px; margin-bottom: 10px;}
      @include media('min', 'lg') { height: 42px; border-radius: 88px; margin-bottom: 23px;}
    }
  }
}
// .block-with-circle {
//   padding: 100px 40px 80px;
//   width: 400px;
//   height: auto;
//   position: relative;
//   background: radial-gradient(circle at 50% 0, transparent calc(50px - 1px), #fff 50px);
//   border-radius: 20px;
//   text-align: center
// }
</style>
