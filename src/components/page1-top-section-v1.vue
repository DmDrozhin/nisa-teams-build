<template>
  <section class="top-section">
    <div class="top-section__container">
      <div class="top-section__wrapper">
        <hgroup class="title">
          <div class="title__sub-title">Teams Build</div>
          <h1 class="title__title">Better Products With Nisa</h1>
        </hgroup>
        <div class="catcher">
          <div class="catcher__txt">
            Nisa is constantly improving to move forward through dashboard, statistics, data and verify and superior human
            resources.
          </div>
          <ua-button-base class="catcher__btn btn" col="pink">
            <span class="btn__txt">Get Started</span>
          </ua-button-base>
        </div>
        <div class="main-pic">
          <div class="main-pic__img-wrap">
            <picture class="main-pic__img">
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
          <div class="main-pic__pop"></div>
        </div>
      </div>
    </div>
  </section>
  <div class="top-section__divider"></div>
</template>

<script setup>

</script>

<style lang="scss" coped>
.top-section {
  background-color: $bl-1E;
  &__container { @include container; }
  &__wrapper {
    border: 0.5px dashed orange;
    @include wrapper;
    color: $wt;
    display: grid;
    grid-template-areas:
      "title catcher"
      "picture picture";
    @include media('min', 'xs') {
      grid-template-columns: 53% auto;
      padding: 21px 0 37px;
    }
    @include media('min', 'lg') {
      grid-template-columns: 57% 1fr;
      padding: 42px 0 65px;
    }
    @include media('min', 'xxl') {
      grid-template-columns: 58% 1fr;
      padding: 40px 0 45px;
    }
  }

  & .title {
    grid-area: title;
    &__sub-title {
      @include media('min', 'xs') { @include H1-ITS }
      @include media('min', 'lg') { @include H1-ITM }
      @include media('min', 'xxl') { @include H1-ITL }
    }
    &__title {
      @include media('min', 'xs') { @include H1-BDS }
      @include media('min', 'lg') { @include H1-BDM }
      @include media('min', 'xxl') { @include H1-BDL }
    }
  }
  & .catcher {
    // border: 0.5px dashed peru;
    align-self: end;
    grid-area: catcher;
    @include media('min', 'xs') { margin-bottom: 20px; }
    @include media('min', 'lg') { margin-bottom: 21px; }
    @include media('min', 'xxl') { margin-bottom: -6px; }
    &__txt {
      @include media('min', 'xs') { @include P10-R; margin-bottom: 15px; padding-right: 5px; }
      @include media('min', 'lg') { @include P9-R; margin-bottom: 23px; padding-right: 5px; }
      @include media('min', 'xxl') { @include P3-R; margin-bottom: 30px; padding-right: 0; }
    }
    &__btn, .btn {
      height: 48px;
      width: fit-content;
      @include media('min', 'xs') { padding-inline: 31px 23px; margin-left: 0; }
      @include media('min', 'lg') { padding-inline: 31px 40px; margin-left: 2px; }
      @include media('min', 'xxl') { padding-inline: 32px 40px; margin-left: 3px; }
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

  & .main-pic {
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
    &__pop {}
  }
  &__divider {
    border-left: 100vw solid transparent;
    @include media('min', 'xs') { border-top: 42px solid $bl-1E; }
    @include media('min', 'lg') { border-top: 74px solid $bl-1E; }
    @include media('min', 'xxl') { border-top: 95px solid $bl-1E; }
  }
}</style>
