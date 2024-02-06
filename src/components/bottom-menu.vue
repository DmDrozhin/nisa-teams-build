<template>
  <section class="bottom-menu">
    <div class="bottom-menu__container">
      <div class="bottom-menu__ wrap">
        <div class="bottom-menu__side-l">

          <div class="adv">
            <h2 class="adv__title">{{ footerDt.title }}</h2>
            <p class="adv__sub-title">{{ footerDt.subTitle }}</p>
            <div>
              <socialsBlock />
            </div>
          </div>

        </div>
        <div class="bottom-menu_side-r">

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import socialsBlock from '../components/socials-block.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const footerDt = computed(() => store.getters['structure/FOOTER_DATA'])

</script>

<style lang="scss" scoped>
.bottom-menu {
  background-color: $bl-1E;
  width: 100%;
  @include media('min', 'xs') { height: 723px; }
  @include media('min', 'lg') { height: 537px; }
  @include media('min', 'xxl') { height: 587px; }
  &__container {
    @include container;
  }
  &__wrap {
    @include wrapper;
  }
  &__side-l {
    & .adv {
      color: $wt;
      &__title {
        @include media('min', 'xs') { @include H8; }
        @include media('min', 'lg') { @include H6; }
        @include media('min', 'xxl') { @include H5; }
      }
      &__sub-title {
        @include media('min', 'xs') { @include P9-R; }
        @include media('min', 'xxl') { @include P6-R; }
      }
    }
  }
}
</style>
