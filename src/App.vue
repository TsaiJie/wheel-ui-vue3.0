<template>
  <div>
    vite 导航栏 |
    <router-link to="/">Tsai</router-link> |
    <router-link to="/xxx">Tsai2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
import Tsai from './components/Tsai.vue'

export default {
  name: 'App',
  components: {
    Tsai,
  },
}
</script>
