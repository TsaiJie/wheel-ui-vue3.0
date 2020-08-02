<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
export default {
  name: 'App',
  components: {},
  setup() {
    // 获取屏幕宽度
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width <= 500 ? false : true)
    provide('asideVisible', asideVisible)
  },
}
</script>
