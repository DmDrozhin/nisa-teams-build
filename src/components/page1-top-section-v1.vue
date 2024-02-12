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
          <ua-button-base class="catcher__btn" col="pink">
            <div class="catcher__btn-content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                display="flex"
              >
                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              <span>Get Started</span>
            </div>
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

  &__container {
    @include container;
  }

  &__wrapper {
    border: 0.5px dashed orange;
    @include wrapper;
    color: $wt;
    display: grid;
    grid-template-columns: 58% 1fr;
    grid-template-areas:
      "title catcher"
      "picture picture";

    @include media('min', 'xxl') {
      padding: 40px 0;
    }
  }

  & .title {
    grid-area: title;

    &__sub-title {
      font-family: 'Roboto-LightItalic';
      font-size: 74px;
      line-height: 81px;
      letter-spacing: -3.3px;
    }

    &__title {
      font-family: 'Roboto-Bold';
      font-size: 74px;
      line-height: 81px;
      letter-spacing: -3.2px;
    }
  }

  & .catcher {
    align-self: end;
    grid-area: catcher;

    &__txt {
      @include P3-R;

      @include media('min', 'xxl') {
        margin-bottom: 40px;
      }
    }
    &__btn {}
    &__btn-content {
      @include fr-c-c;
      column-gap: 5px;
    }
  }

  & .main-pic {
    @include media('min', 'xxl') {
      padding: 40px 0 0 0;
    }

    grid-area: picture;

    &__img-wrap {
      position: relative;

      @include media('min', 'xxl') {
        padding-bottom: 474px;
      }

      width: 100%;
    }

    &__img>img {
      // border: 0.5px dashed lawngreen; // tech
      position: absolute;
      object-fit: cover;
      border-radius: 16px;
      overflow: hidden;
    }

    &__pop {}
  }

  &__divider {
    border-top: 100px solid $bl-1E;
    border-left: 100vw solid transparent;
  }
}</style>
