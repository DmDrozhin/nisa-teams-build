<template>
  <topMenu />
    <router-view/>
  <bottomMenu />
  <bottomFinRow />
</template>

<script setup>
import topMenu from '@/components/top-menu.vue'
import bottomMenu from '@/components/bottom-menu.vue'
import bottomFinRow from '@/components/bottom-final-row.vue'
// import { onMounted } from 'vue'
// import { useStore } from 'vuex'
// const store = useStore()
// onMounted(() => store.dispatch('structure/LOAD_UI_DATA'))
</script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
}
</style>
