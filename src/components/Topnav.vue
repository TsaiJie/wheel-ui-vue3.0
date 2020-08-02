<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside">
      <svg
        height="24"
        class="octicon octicon-three-bars"
        viewBox="0 0 16 16"
        version="1.1"
        width="24"
        aria-hidden="true"
        fill="#fff"
      >
        <path
          fill-rule="evenodd"
          d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
        ></path>
      </svg>
    </span>
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
  justify-content: center;
  align-items: center;
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
  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    color: #fff;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
