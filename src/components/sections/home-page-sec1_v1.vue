<template>
  <section class="top-section">
    <div class="top-section__container">
      <div class="top-section__wrapper">

        <div class="top-section__title-block">

          <hgroup class="title">
            <div class="title__sub-title">{{ sec1[1]['sub-title'] }}</div>
            <h1 class="title__title">{{ sec1[0].title }}</h1>
          </hgroup>

          <div class="catcher">
            <div class="catcher__txt">{{ sec1[2].catcher }}</div>
            <ui-button-base class="catcher__btn btn" col="pink">
              <span class="btn__txt">{{ sec1[3].button }}</span>
            </ui-button-base>
          </div>

        </div>

        <div class="top-section__picture picture">
          <div class="picture__img-wrap">
            <picture class="picture__img">
              <source media="(min-width: 1440px)" srcset="
                  @/assets/img/page-1/head-v1/webp/img-head-1040@1x.webp 1x,
                  @/assets/img/page-1/head-v1/webp/img-head-1040@2x.webp 2x,
                  @/assets/img/page-1/head-v1/webp/img-head-1040@3x.webp 3x" type="image/webp">
              <source media="(min-width: 834px)" srcset="
                  @/assets/img/page-1/head-v1/webp/img-head-786@2x.webp 2x,
                  @/assets/img/page-1/head-v1/webp/img-head-786@3x.webp 3x" type="image/webp">
              <source media="(min-width: 0px)" srcset="
                  @/assets/img/page-1/head-v1/webp/img-head-343@2x.webp 2x,
                  @/assets/img/page-1/head-v1/webp/img-head-343@2.5x.webp 2.5x,
                  @/assets/img/page-1/head-v1/webp/img-head-343@3x.webp 3x" type="image/webp">
              <img src="@/assets/img/page-1/head-v1/webp/img-head-1040@1x.webp" alt="and this is our happy customer">
            </picture>
          </div>
          <overlayBlock class="picture__overlay" />
        </div>

      </div>
    </div>
  </section>
  <div class="top-section__divider"></div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { computed } from 'vue'
import { useStore } from 'vuex'
import overlayBlock from '@/components/overlay-phone.vue'
const store = useStore()
const sec1 = computed(() => store.getters['structure/HOME_PAGE_PL']('s1'))
</script>

<style lang="scss" coped>
.top-section {
  background-color: $bl-1E;
  &__container { @include container; }
  &__wrapper {
    border: 0.5px dashed orange;
    @include wrapper;
    color: $wt;
    @include media('min', 'xs') { padding: 21px 0 38px; }
    @include media('min', 'lg') { padding: 42px 0 67px; }
    @include media('min', 'xxl') { padding: 40px 0 45px; }
  }
  &__title-block {
    // @include fr-sb;
    @include media('min', 'xs') { @include fc-st; }
    @include media('min', 'sm') { @include fr-sb; }

    & .title {
      @include media('min', 'xs') { flex: 0 0 53%; }
      @include media('min', 'lg') { flex: 0 0 57%; }
      @include media('min', 'xxl') { flex: 0 0 58%; }
      &__sub-title {
        @include media('min', 'xs') { @include H1-ITS }
        @include media('min', 'lg') { @include H1-ITM }
        @include media('min', 'xxl') { @include H1-ITL; }
      }
      &__title {
        @include media('min', 'xs') { @include H1-BDS }
        @include media('min', 'lg') { @include H1-BDM }
        @include media('min', 'xxl') { @include H1-BDL }
      }
    }
    & .catcher {
      // border: 0.5px dashed peru;
      flex: 1;
      align-self: end;
      @include media('min', 'xs') { margin-bottom: 20px; }
      @include media('min', 'lg') { margin-bottom: 21px; }
      @include media('min', 'xxl') { margin-bottom: -6px; }
      &__txt {
        @include media('min', 'xs') { @include P10-R; margin-bottom: 16px; padding-right: 5px; }
        @include media('min', 'lg') { @include P9-R; margin-bottom: 23px; padding-right: 5px; }
        @include media('min', 'xxl') { @include P3-R; margin-bottom: 30px; padding-right: 0; }
      }
      &__btn, .btn {
        height: 48px;
        width: fit-content;
        @include media('min', 'xs') { padding-inline: 31px 23px; margin-left: 0; }
        @include media('min', 'lg') { padding-inline: 31px 40px; margin-left: 2px; }
        @include media('min', 'xxl') { padding-inline: 33px 41px; margin-left: 4px; }
        &__content {
          @include fr-sb-c;
        }
        &__txt {
          @include fr-c-c;
          white-space: nowrap;
        }
        &__txt::after {
          content: url(@/assets/svg/arr-right.svg);
          position: relative;
          display: block;
          $sz: 24px;
          width: $sz;
          height: $sz;
          @include media('min', 'xs') { left: 18px; }
          @include media('min', 'lg') { left: 25px; }
          @include media('min', 'xxl') { left: 25px; }
        }
      }
    }
  }

  &__picture, .picture {
    position: relative;
    @include media('min', 'xs') { padding: 24px 0 0 0; }
    @include media('min', 'lg') { padding: 45px 0 0 0; }
    @include media('min', 'xxl') { padding: 85px 0 0 0; }
    grid-area: picture;
    &__img-wrap {
      position: relative;
      max-width: 100%;
      @include media('min', 'xs') { padding-bottom: 53.2%; }
      @include media('min', 'lg') { padding-bottom: 358px; }
      @include media('min', 'xxl') { padding-bottom: 474px; }
    }
    &__img > img {
      // border: 0.5px dashed lawngreen; // tech
      border-radius: 16px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__overlay {
      position: absolute;
      @include media('min', 'xs') { right: 5%; top: 58.5%; }
      @include media('min', 'lg') { right: 4%; top: 27%; }
      @include media('min', 'xxl') { right: 6.5%; top: 44%; }
    }
  }
  &__divider {
    border-left: 100vw solid transparent;
    @include media('min', 'xs') { border-top: 42px solid $bl-1E; margin-bottom: 39px; }
    @include media('min', 'lg') { border-top: 74px solid $bl-1E; margin-bottom: 56px; }
    @include media('min', 'xxl') { border-top: 95px solid $bl-1E; margin-bottom: 96px; }
  }
}</style>
