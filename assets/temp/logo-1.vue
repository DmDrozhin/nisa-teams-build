<template>
  <div class="logo-1">
    <div class="logo-1__icon">isa</div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.logo-1 {
  &__icon {
    border: 0.5px solid orange;
    position: relative;
    padding-left: 42px;
    @include logo;
    color: $pink-78;
    // color: $wt;
  }
  &__icon::before {
    content: '';
    position: absolute;
    background-image: url('@/assets/svg/logo/logo-1.svg');
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    width: 42px;
    height: 42px;
  }
}
</style>
