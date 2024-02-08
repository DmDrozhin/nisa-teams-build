<template>
  <section class="bottom-menu">
    <div class="bottom-menu__container">
      <div class="bottom-menu__wrap">
        <div class="bottom-menu__side-l">

          <div class="adv">
            <h2 class="adv__title">{{ data.title }}</h2>
            <p class="adv__sub-title">{{ data.subTitle }}</p>
            <div>
              <socialsBlock :setts="data.socials" />
            </div>
          </div>

        </div>
        <div class="bottom-menu__side-r">

          <div class="links">
            <div class="links__group" v-for="grp, idx in menu" :key="idx">
              <h3 class="links__title">{{ idx }}</h3>
              <ol class="links__list">
                <li class="links__link" v-for="link, idx in grp" :key="idx">
                  <a :href="link.link">{{ link.name }}</a>
                </li>
              </ol>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import socialsBlock from '@/components/socials-block.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const data = computed(() => store.getters['structure/FOOTER_DATA'])
const menu = computed(() => data.value[Object.keys(data.value)[3]])
</script>

<style lang="scss" scoped>
.bottom-menu {
  background-color: $bl-1E;
  width: 100%;
  @include media('min', 'xs') { height: 645px; }
  @include media('min', 'lg') { height: 486px; }
  @include media('min', 'xxl') { height: 519px; }
  &__container {
    @include container;
  }
  &__wrap {
    @include wrapper;
    @include media('min', 'xs') { @include fc; padding-top: 40px; }
    @include media('min', 'lg') { @include fr; column-gap: 20px; padding-top: 75px; padding-inline: 18px; }
    @include media('min', 'xxl') { column-gap: 20px; padding-top: 80px; }
  }
  &__side-l {
    border: 0.5px dashed rgb(0, 128, 122);
    @include media('min', 'xs') { flex: 1 1 100%; }
    @include media('min', 'lg') { flex: 0 0 349px; padding-right: 80px; }
    @include media('min', 'xxl') { flex: 0 0 474px; padding-right: 100px; }
    & .adv {
      color: $wt;
      &__title {
        @include media('min', 'xs') { @include H8; }
        @include media('min', 'lg') { @include H6; }
        @include media('min', 'xxl') { @include H5; }
        margin-bottom: 23px;
      }
      &__sub-title {
        border: 0.5px dashed rgb(70, 228, 220);
        @include media('min', 'xs') { @include P9-R; }
        @include media('min', 'xxl') { @include P6-R; }
        margin-bottom: 23px;
      }
    }
  }
  &__side-r {
    flex: 1 1 100%;
    & .links {
      @include fr-sb;
      &__group {
        color: $wt;
        border: 0.5px dashed olive;
        @include fc-st-st;
        row-gap: 10px;
      }
      &__title {
        @include media('min', 'xs') { @include P7-B; }
        @include media('min', 'lg') { @include P4-B; }
        @include media('min', 'xxl') { @include P1-B; }
      }
      &__list {
        @include media('min', 'xs') { @include P10-R; }
        @include media('min', 'lg') { @include P9-R; }
        @include media('min', 'xxl') { @include P6-R; }
        @include fc-st-st;
        row-gap: 10px;
      }
      &__link {}
    }
  }
}
</style>
