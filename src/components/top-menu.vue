<template>
  <section class="top-menu">
    <div class="top-menu__container">
      <div class="top-menu__probe" ref="elem" data-i="width meter"></div>
      <burger class="top-menu__burger" @toggle="toggle()" :isOpen="isOpen"/>
      <div class="top-menu__wrap">

          <a class="top-menu__logo" :src="nav1[0].path">
            <logo />
          </a>

          <transition name="menu" appear>
            <div class="top-menu__nav" v-show="isOpen" appear out-in>
              <nav class="nav-1">
                <ol class="nav-1__list">
                  <transition-group name="links">
                    <li
                      class="nav-1__item"
                      v-show="isOpen"
                      v-for="link, idx in nav1"
                      :key="`key${idx}`"
                      :style="`--i: ${idx}`"
                    >
                      <a class="nav-1__link" :href="link.path">{{ link.name }}</a>
                    </li>
                  </transition-group>
                </ol>
              </nav>

              <nav class="nav-2" v-show="isOpen">
                <a
                  class="nav-2__link"
                  :key="11"
                  :src="nav2[0].path"
                >
                  {{ nav2[0].name }}
                </a>
                <ua-button-base
                  class="nav-2__btn" col="pink"
                  :key="12"
                >
                  {{ nav2[1].name }}
                </ua-button-base>
              </nav>
            </div>
          </transition>
      </div>
    </div>
  </section>
</template>

<script setup>

import logo from '@/components/ui/logo/site-logo.vue'
import burger from '@/components/ui/ui-button-nav.vue'
// eslint-disable-next-line no-unused-vars
import { ref, toRef, toRefs, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'

const isOpen = ref(true)
const toggle = () => { isOpen.value = !isOpen.value }

const store = useStore()
const getData = (pl) => {
  return store.getters['structure/HEADER_DATA_PL'](pl)
}
const nav1 = computed(() => getData('nav1'))
const nav2 = computed(() => getData('nav2'))

// Observe elem width for specifying viewport type
const onResize = (w) => {
  w <= 375 ? isOpen.value = false : isOpen.value = true
}
const elem = ref(null)
const obz = new ResizeObserver((el) => onResize(el[0].contentRect.width))
onMounted(() => { obz.observe(elem.value) })
onUnmounted(() => { obz.unobserve(elem.value) })

</script>

<style lang="scss" scoped>
.top-menu {
  background-color: $bl-1E;
  width: 100%;
  &__container {
    position: relative;
    @include container;
    // border: 0.5px dotted palegreen; // tech
  }
  &__wrap {
    @include wrapper;
    @include media('min', 'xs') { @include fc; }
    @include media('min', 'lg') { @include fr-sb-c; }
  }
  &__logo {
    // border: 0.5px dashed rgb(0, 13, 255);
    width: fit-content;
    @include fr-st-c;
    @include media('min', 'xs') { height: 42px; padding-right: 13px; }
    @include media('min', 'lg') { height: 64px; }
    @include media('min', 'xxl') { height: 94px; }
  }
  &__burger {
    position: absolute;
    top: 6px;
    right: 15px;
    @include media('min', 'xs') { display: static; }
    @include media('min', 'lg') { display: none; }
  }
  &__nav {
    flex-grow: 1;
    @include media('min', 'xs') {
      @include fc;
      padding-bottom: 10px;
    }
    @include media('min', 'lg') {
      @include fr-sb-c;
      padding-bottom: 0;
    }

    // this mixin is for links of both nav-1 and nav-2
    @mixin link {
      // border: 0.5px dashed orangered;
      @include media('min', 'xs') { @include P9-R; height: 44px; @include fr-st-c; }
      @include media('min', 'lg') { @include P9-R; height: 30px; width: 81px; @include fr-c-c; }
      @include media('min', 'xxl') { @include P6-R; height: 40px; width: 91px; @include fr-c-c; }
      color: $wt;
      transition: color 0.3s ease;
      &:hover {
        color: $pink-78;
        @include media('min', 'sm') { @include P7-B; }
        @include media('min', 'xxl') { @include P4-B; }
      }
    }
    & .nav-1 {
      // border: 0.5px dotted rgb(220, 227, 32); // tech
      @include fr-st-c;
      &__list {
        flex-basis: 100%;
        @include media('min', 'xs') { @include fc; }
        @include media('min', 'lg') { @include fr; }
      }
      &__item {}
      &__link {
        @include link;
        @include media('min', 'xs') { padding-left: 8px; } // Q
        @include media('min', 'lg') { padding-left: 0px; } // Q
      }

    }
    & .nav-2 {
      flex: 1;
      // border: 0.5px dotted rgb(152, 170, 251); // tech
      @include fr-nd-c;
      &__link {
        @include link;
        @include media('min', 'xs') { flex-basis: 96px; justify-content: center; } // Q
        @include media('min', 'lg') { flex-basis: 81px; }
        @include media('min', 'xxl') { flex-basis: 91px; }
      }
      &__btn {
        @include media('min', 'xs') { margin-left: 0; margin-right: -7px; }
        @include media('min', 'lg') { margin-left: 8px; margin-right: 0; }
        @include media('min', 'xxl') { margin-left: 16px; }
      }
    }
  }
}
// .menu-enter-active, .menu-leave-active {
//   transition: all 0.5s ease;
// }
// .menu-enter-from, .menu-leave-to {
//   opacity: 0;
//   transform: scaleX(0.5);
// }

.links-enter-active {
  transition: all 0.5s ease;
  transition-delay: calc(0.1s * var(--i));
}
.links-enter-from {
  transform: scaleX(0.5);
  opacity: 0.5;
}
</style>
