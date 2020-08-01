<template>
  <div>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>wheel UI</h1>
      <h2>一个简单的 UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.topnav {
  background: rgb(33, 36, 41);
  color: #fff;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    // 把其他元素挤到右边去
    margin-right: auto;
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
