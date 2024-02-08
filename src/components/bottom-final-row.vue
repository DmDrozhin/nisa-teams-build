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
  border-top: 0.5px solid $gr-69;
  $sz-s: 13px;
  $sz-l: 20px;
  &__container { @include container; }
  &__wrapper {
    @include wrapper;
    @include fr-sb-c;
    color: $wt;
    @include media('min', 'xs') { height: 78px; }
    @include media('min', 'lg') { height: 51px; padding-inline: 30px; }
    @include media('min', 'xxl') { height: 68px; }
  }
  &__part { @include fr-sb-c; }
  &__part.c {
    // border: 0.5px dashed olivedrab; // tech
    position: relative;
    left: -64px;
  }
  &__part.r { column-gap: 10px; }

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
    margin-right: 14px;
  }
  &__pages {
    @include p10-10-9;
  }
}
span {
  color: $green-53;
}
</style>
