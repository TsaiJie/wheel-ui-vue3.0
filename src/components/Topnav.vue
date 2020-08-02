<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toggleMenu }
  },
}
</script>
<style lang="scss" scoped>
.topnav {
  position: relative;
  background: rgb(33, 36, 41);
  color: #fff;
  display: flex;
  padding: 16px;
  z-index: 10;
  > .logo {
    max-width: 6em;
    // 把其他元素挤到右边去
    margin-right: auto;
    user-select: none;
    cursor: pointer;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      font-weight: 600;
      margin: 0 1em;
    }
  }
}
</style>
