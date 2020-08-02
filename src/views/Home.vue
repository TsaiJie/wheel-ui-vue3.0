<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>wheel UI</h1>
      <h2>一个简单的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/TsaiJie/wheel-ui-vue3.0">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
}
</script>
<style lang="scss" scoped>
$height: 28px;
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(203, 255, 210);
  > .actions {
    padding: 8px 0;
    a {
      background: #fff;
      display: inline-block;
      height: $height;
      line-height: $height;
      border-radius: $height/2;
      padding: 0 8px;
      margin: 0 5px;
    }
  }
}
</style>
