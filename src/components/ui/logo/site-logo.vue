<template>
  <div class="logo">
    <div class="logo__icon">
      <svg
        viewBox="0 0 26 26"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        display="flex"
      >
        <path d="M26 26L0 0H8.66667L19.3968 10.7302V0H26V26Z" :fill="col"/>
        <path d="M1 12.1841L5.71014 16.957L10.4203 21.73H1V12.1841Z" :fill="col"/>
      </svg>
    </div>
    <span class="logo__name">Nisa</span>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const col = ref('#FF3C78')
    return { col }
  }
}
</script>

<style lang="scss" scoped>
@mixin logo {
  font-family: 'Roboto-Bold';
  letter-spacing: 0.4px;
  @include media('min', 'xs') { font-size: 22px; }
  @include media('min', 'lg') { font-size: 24px; }
  @include media('min', 'xxl') { font-size: 32px; }
}
.logo {
  // border: 0.5px solid orange;
  @include fr-st-c;
  &__icon {
    position: relative;
    @include media('min', 'xs') { width: 18px; height: 18px; margin-right: 5px; }
    @include media('min', 'lg') { width: 19px; height: 19px; margin-right: 6px; }
    @include media('min', 'xxl') { width: 26px; height: 26px; margin-right: 8px; }
  }
  &__name {
    @include logo;
    color: $wt;
    position: relative;
  }
}
</style>
