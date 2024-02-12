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
            <div
              class="links__group"
              v-for="grp, key, idx in menu" :key="key"
              :class="`links__group--${idx + 1}`"
            >
              <h3 class="links__title">{{ key }}</h3>
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
  &__container { @include container; height: inherit; }
  &__wrap {
    // border: 0.5px dashed rgb(0, 128, 122); // tech
    @include wrapper;
    @include media('min', 'xs') { @include fc; padding: 39px 0 0 0; }
    @include media('min', 'lg') { @include fr; column-gap: 20px; padding: 74px 0 0 22px; }
    @include media('min', 'xxl') { column-gap: 20px; padding: 80px 0 0 0; }
  }
  &__side-l {
    @include media('min', 'xs') { flex: 1 1 100%; padding-right: 5%; padding-bottom: 34px; }
    @include media('min', 'lg') { flex: 0 0 331px; padding-right: 6%; }
    @include media('min', 'xxl') { flex: 0 0 455px; padding-right: 7%; }
    & .adv {
      color: $wt;
      &__title {
        @include media('min', 'xs') { @include H8; margin-bottom: 15px; padding-right: 6%; }
        @include media('min', 'lg') { @include H6; margin-bottom: 16px; padding-right: 0; }
        @include media('min', 'xxl') { @include H5; margin-bottom: 25px; }

      }
      &__sub-title {
        // border: 0.5px dashed rgb(70, 228, 220); // tech
        @include media('min', 'xs') { @include P9-R; }
        @include media('min', 'xxl') { @include P6-R; }
        margin-bottom: 24px;
      }
    }
  }
  &__side-r {
    flex: 1 1 100%;
    & .links {
      @include fr-st;
      @include media('min', 'xs') { @include P7-B; }
      @include media('min', 'lg') { @include P4-B; }
      @include media('min', 'xxl') { @include P1-B; }
      &__group {
        // border: 0.5px dashed olive; // tech
        color: $wt;
        @include fc-st-st;
        @include media('min', 'xs') { row-gap: 25px; }
        @include media('min', 'lg') { row-gap: 22px; }
        @include media('min', 'xxl') { row-gap: 17px; }
        &--1 {
          @include media('min', 'xs') { flex: 0 1 35%; }
          @include media('min', 'lg') { flex: 0 1 33.5%; }
          @include media('min', 'xxl') { flex: 0 1 36%; }
        }
        &--2 {
          @include media('min', 'xs') { flex: 0 1 36%; }
          @include media('min', 'lg') { flex: 0 1 35%; }
          @include media('min', 'xxl') { flex: 0 1 36%; }
        }
        &--3 {
          @include media('min', 'xs') { flex: 1 1 auto; }
        }
      }
      &__title {
        @include media('min', 'xs') { @include P7-B; }
        @include media('min', 'lg') { @include P4-B; }
        @include media('min', 'xxl') { @include P1-B; }
      }
      &__list {
        @include media('min', 'xs') { @include P10-R; row-gap: 16px; }
        @include media('min', 'lg') { @include P9-R; row-gap: 16px; }
        @include media('min', 'xxl') { @include P6-R; row-gap: 16px; }
        @include fc-st-st;
      }
      &__link {
        transition: color 0.3s ease;
        &:hover { color: $pink-78; }
      }

    }
  }
}
</style>
