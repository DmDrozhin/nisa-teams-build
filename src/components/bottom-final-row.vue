<template>
  <section class="bottom-row">
    <div class="bottom-row__container">
      <div class="bottom-row__wrapper">

        <div class="bottom-row__part l">
          <div class="bottom-row__icon icon">
            <span class="icon__txt">isa</span>
          </div>
          <div class="bottom-row__txt" v-html="data[0].txt"></div>
        </div>

        <div class="bottom-row__part c">
          <a class="bottom-row__terms" :src="data[1].link">{{ data[1].name }}</a>
        </div>

        <div class="bottom-row__part r">
          <a class="bottom-row__over" :src="data[2].link">{{ data[2].name }}</a>
          <a class="bottom-row__pages" :src="data[3].link">{{ data[3].name }}</a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = computed(() => store.getters['structure/FOOTER_DATA_PL']('footer'))
</script>

<style lang="scss"  scoped>
.bottom-row {
  width: 100%;
  background-color: $bl-1E;
  border-top: 0.5px solid $gr-69; // real line
  $sz-s: 13px; // icon & logo
  $sz-l: 20px; // icon & logo
  &__container { @include container; }
  &__wrapper {
    @include wrapper;
    color: $wt;
    @include media('min', 'xs') {
      @include fr; flex-wrap: wrap; align-content: flex-start; row-gap: 12px;
      height: 78px;
      padding: 7px 0 0 0;
    }
    @include media('min', 'lg') {
      @include fr-sb-c; flex-wrap: nowrap; row-gap: unset;
      height: 51px;
      padding: 0 17px 0 40px;
    }
    @include media('min', 'xxl') {
      height: 68px;
      padding: 0 0 0 0;
    }
  }
  &__part {
    @include media('min', 'xs') { @include fr-st-c; }
    @include media('min', 'lg') { @include fr-sb-c; }
  }
  &__part.l {
    @include media('min', 'xs') { flex: 1 0 100%; @include fr-c-c; }
    @include media('min', 'lg') { flex: auto; @include fr-st-c; }
  }
  &__part.c {
    // border: 0.5px dashed olivedrab; // tech
    @include media('min', 'xs') { flex: 0 1 70%; }
    @include media('min', 'lg') { flex: auto; position: relative; left: -20px; }
    @include media('min', 'xxl') { position: relative; left: -64px; }
  }
  &__part.r {
    @include media('min', 'xs') { flex: 1; @include fr-nd-c; }
    @include media('min', 'lg') { flex: 0; }
    column-gap: 10px;
  }

  // ICON
  &__icon, .icon {
    // border: 0.5px solid orange;
    position: relative;
    margin-right: 10px;
    display: grid;
    place-content: center;
    @include media('min', 'xs') { padding-left: 13px; }
    @include media('min', 'lg') { padding-left: 20px; }
    &__txt {
      font-family: 'Roboto-Bold';
      color: $pink-78;
      @include media('min', 'xs') { font-size: 9px; line-height: $sz-s; }
      @include media('min', 'lg') { font-size: 14px; line-height: $sz-l; }
    }
  }
  &__icon::before {
    content: '';
    position: absolute;
    background-image: url('@/assets/svg/logo/site-logo-2.svg');
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    @include media('min', 'xs') { height: $sz-s; width: $sz-s; }
    @include media('min', 'lg') { height: $sz-l; width: $sz-l; }
  }
  // END ICON
  // mix for icon text, overview and pages & not terms of services
  @mixin p10-10-9 {
    @include media('min', 'xs') { @include P10-R; }
    @include media('min', 'lg') { @include P10-R; }
    @include media('min', 'xxl') { @include P9-R; }
  }

  &__txt {
    @include p10-10-9;
  }
  &__terms {
    @include media('min', 'xs') { @include P9-R; }
    @include media('min', 'lg') { @include P10-R; }
    @include media('min', 'xxl') { @include P9-R; }
  }
  &__over {
    @include p10-10-9;
    @include media('min', 'xs') { margin-right: 3px; }
    @include media('min', 'lg') { margin-right: 10px; }
    @include media('min', 'xxl') { margin-right: 14px; }
  }
  &__pages {
    @include p10-10-9;
  }
}
span {
  color: $green-53;
}
</style>
