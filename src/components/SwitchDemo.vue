<template>
  <div>
    <!--$event 的值是emit的第二个参数 -->
    <Switch v-model:value="show" />
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: { Switch },
  setup() {
    const show = ref(true)
    return { show }
  },
}
</script>
