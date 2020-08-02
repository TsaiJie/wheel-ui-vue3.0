<template>
  <div>
    <!--$event 的值是emit的第二个参数 -->
    <Switch v-model:value="y" />
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: { Switch },
  setup() {
    const y = ref(true)
    return { y }
  },
}
</script>
