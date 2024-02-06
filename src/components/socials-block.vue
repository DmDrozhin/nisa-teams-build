<template>
  <section class="socials">
    <div class="socials__icon twitter"></div>
    <div class="socials__icon fb"></div>
    <div class="socials__icon google"></div>
    <div class="socials__icon pint"></div>
    <div class="socials__icon linked"></div>
  </section>
</template>

<script setup>

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
  &__icon.twitter { background-image: url('@/assets/svg/socials/twit.svg'); }
  &__icon.fb { background-image: url('@/assets/svg/socials/fb.svg'); }
  &__icon.google { background-image: url('@/assets/svg/socials/ggl.svg'); }
  &__icon.pint { background-image: url('@/assets/svg/socials/pint.svg'); }
  &__icon.linked { background-image: url('@/assets/svg/socials/in.svg'); }

}
</style>
