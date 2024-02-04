<template>
  <button :class="cls" @click="toggle">
    <div :class="`icon-${cls}`"></div>
  </button>
</template>

<script setup>
import { computed, defineEmits, defineProps } from 'vue'
const props = defineProps({ isOpen: { type: Boolean } })
const cls = computed(() => props.isOpen ? 'nav-closed' : 'nav-open')
const emits = defineEmits(['toggle'])
const toggle = () => { emits('toggle') }
</script>

<style lang="scss" scoped>
.nav-open {
  // background-color: rgba($color: #fff, $alpha: .14);
  width: 46px;
  height: 30px;
}
.icon-nav-open {
  // background-color: #dc6c6c;
  position: relative;
  width: 100%;
  height: 12px;
}
@mixin nav-open {
  content: '';
  display: inline-block;
  position: absolute;
  left: 0;
  height: 2%;
  width: 100%;
  background-color: $wt;
}
.icon-nav-open::before {
  @include nav-open;
  top: 0;
}
.icon-nav-open::after {
  @include nav-open;
  bottom: 0;
}
// closed icon cross
.nav-closed {
  background-color: rgba($color: #fff, $alpha: .14);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  @include fr-c-c;
}
.icon-nav-closed {
  // background-color: #dc6c6c;
  position: relative;
  width: 18px;
  height: 18px;

}
@mixin nav-closed {
  content: '';
  display: inline-block;
  position: absolute;
  // left: 0;
  height: 8%;
  width: 12px;
  background-color: $pink-78;
  inset: 0;
  margin: auto;
}
.icon-nav-closed::before {
  @include nav-closed;
  transform: rotate(45deg);
}
.icon-nav-closed::after {
  @include nav-closed;
  transform: rotate(-45deg);
}
</style>
