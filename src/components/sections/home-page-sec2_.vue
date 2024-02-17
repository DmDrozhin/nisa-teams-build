<template>
  <section class="sec-1">
    <div class="sec-1__container">
      <div class="sec-1__wrapper">

        <div class="sec-1__side-1 side-1">
            <picture class="side-1__picture picture">
              <source
                v-for="it in picDt.srcSetts"
                :key="it.id"
                :media="it.media"
                :srcset="it.srcs"
              />
              <img class="picture__img" :src="picDt.src" :alt="picDt.alt">
            </picture>
          </div>
          <div class="sec-1__side-2 side-2">
            <div class="side-2__name">{{ sec2[0].title }}</div>
            <div class="side-2__txt">{{ sec2[1].txt }}</div>
            <ui-button-base class="side-2__btn" :col="sec2[2].color">{{ sec2[2].name }}</ui-button-base>
            <div class="side-2__trigger">{{ sec2[3].trigger }}</div>
            <author-block class="side-2__author" :setts="sec2[4]" />
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import authorBlock from '@/components/ui/ui-author-block.vue'
// this fn generates object with data for tag picture
// import genPicture from '@/methods/gen-picture-data.js'
import { useStore } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { computed, onMounted, ref, unref } from 'vue'
const store = useStore()
const sec2 = store.getters['structure/HOME_PAGE_PL']('s2') // all data for 2nd section

// This one Webpack import - Ok
// eslint-disable-next-line no-unused-vars
const sample = computed(() => require(`@/assets/img/${sec2[5].path}${sec2[5].breaks[0][1][1]}`))

const picDt = computed(() => {
  const srcSetts = [] // for picture sources
  const pic = sec2[6] // object with picture settings
  for (let idx = 0; idx < pic.breaks.length; idx++) {
    const dt = pic.breaks[idx] // each break settings ("1440px", "LG", ["1x", "2x"])
    const source = {}
    source.media = `${pic.media}: ${dt[0]}` // media="(min-width: 1440px)"
    source.arr = [] // array with Webpack links to img files
    for (let idx2 = 0; idx2 < dt[2].length; idx2++) {
      const path = pic.path + '_' + pic.name + '_' // "page-1/sec-2/" + "man-with-tablet"
      const dt2 = dt[2][idx2] // each display density rate constant -> 2x, 3x
      const url = require(`@/assets/img/${path}${dt[1]}-@${dt2}.webp`) // Webpack's path
      source.arr.push(url + ' ' + dt2) // adding DPR to the end ...2x, 3x
    }
    source.srcs = source.arr.join(', ')
    srcSetts.push(source)
  }
  const pictureData = {}
  pictureData.srcSetts = srcSetts
  pictureData.alt = pic.alt
  pictureData.src = srcSetts[0].arr[srcSetts[0].arr.length - 1].slice(0, -3) // URL for img src (large picture)
  return pictureData
})

</script>

<style lang="scss" scoped>
.sec-1 {
  margin-bottom: 100px; // !
  background-color: $cream-F2;
  width: 100%;
  &__container {
    @include container;
    @include media('min', 'xs') { padding-top: 40px; min-height: 795px; }
    @include media('min', 'lg') { padding-top: 43px; min-height: 467px; }
    @include media('min', 'xxl') { padding-top: 89px; min-height: 590px; }
  }
  &__wrapper {
    border: 0.5px dashed orangered;
    @include wrapper;
    @include media('min', 'xs') { @include fc-st-c; }
    @include media('min', 'lg') { @include fr-st; align-items: flex-start; }
    @include media('min', 'xxl') {@include fr; }
  }
  &__side-1, .side-1 {
    position: relative;
    // border: 0.5px dashed rgb(13, 255, 0); // tech
    @include media('min', 'xs') { padding: 24px 0 0 15px; margin-bottom: 60px; }
    @include media('min', 'lg') { flex: 0 0 50%; padding: 24px 0 0 49px; margin-bottom: 0; }
    @include media('min', 'xxl') { flex: 0 0 50%; padding: 0; }
    &__picture, .picture {
      // border: 0.5px dashed rgb(255, 0, 115);
      display: inline-block;
      @include media('min', 'xs') { height: 303px; }
      @include media('min', 'lg') { height: 334px; }
      @include media('min', 'xxl') { height: 432px; }
      &::before {
        content: '';
        position: absolute;
        display: block;
        $sm: 70px;
        $md: 80px;
        $lg: 105px;
        background-image: url(../../assets/svg/pattern-1.svg);
        background-repeat: no-repeat;
        @include media('min', 'xs') { width: $sm; height: $sm; top: -15px; left: -28px; }
        @include media('min', 'lg') { width: $md; height: $md; top: -21px; left: -2px; }
        @include media('min', 'xxl') { width: $lg; height: $lg; top: -59px; left: -68px; }
      }
      &::after {
        // border: 0.5px dashed rgb(0, 251, 255);
        content: '';
        position: absolute;
        display: block;
        $sm: 140px;
        $md: 150px;
        $lg: 195px;
        background-image: url(../../assets/svg/pattern-2.svg);
        background-repeat: no-repeat;
        @include media('min', 'xs') { width: $sm; height: $sm; bottom: -78px; right: -33px; }
        @include media('min', 'lg') { width: $md; height: $md; bottom: -83px; right: 14px; }
        @include media('min', 'xxl') { width: $lg; height: $lg; bottom: -112px; right: 94px; }
      }
      &__img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        object-fit: contain;
        // overflow: hidden;
      }
    }
  }
  &__side-2, .side-2 {
    @include media('min', 'xs') {padding: 0; }
    @include media('min', 'lg') { flex: 1; padding: 0 0 0 16px; }
    @include media('min', 'xxl') { flex: 1; padding: 0 0 0 21px; }
    &__name {
      @include media('min', 'xs') { @include H8; margin-bottom: 16px; }
      @include media('min', 'lg') { @include H6; margin-bottom: 16px; }
      @include media('min', 'xxl') { @include H5; margin-bottom: 15px; }
    }
    &__txt {
      @include media('min', 'xs') { @include P9-R; margin-bottom: 16px; padding-right: 0; }
      @include media('min', 'lg') { @include P9-R; margin-bottom: 16px; padding-right: 35px; }
      @include media('min', 'xxl') { @include P6-R; margin-bottom: 32px; padding-right: 0; }
    }
    &__btn {
      width: fit-content;
      height: 48px;
      border-radius: 16px;
      @include media('min', 'xs') { margin-bottom: 24px; min-width: 160px; }
      @include media('min', 'lg') { margin-bottom: 16px; min-width: 160px; }
      @include media('min', 'xxl') { margin-bottom: 32px; }
    }
    &__trigger {
      @include P4-B;
      @include media('min', 'xs') { margin-bottom: 23px; }
      @include media('min', 'lg') { margin-bottom: 15px; }
      @include media('min', 'xxl') { margin-bottom: 24px; }
    }
    // &__author { }
  }
}
</style>
