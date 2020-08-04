<template>
  <div>
    <!--$event 的值是emit的第二个参数 -->
    <Switch v-model:value="show1" size="large" />
    <Switch v-model:value="show2" />
    <Switch v-model:value="show3" size="small" />
    <Switch v-model:value="show3">
      <template #open>
        <span>开</span>
      </template>
      <template #close>
        <span>关</span>
      </template>
    </Switch>
    <Switch v-model:value="show3" size="large">
      <template #open>
        <span>开启</span>
      </template>
      <template #close>
        <span>关闭</span>
      </template>
    </Switch>
    <Switch v-model:value="show3" size="large">
      <template #open>
        <span>ON</span>
      </template>
      <template #close>
        <span>OFF</span>
      </template>
    </Switch>
    <Switch
      v-model:value="show1"
      size="large"
      open-color="#39cb58"
      close-color="#f13e46"
    />
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: { Switch },
  setup() {
    const show1 = ref(true)
    const show2 = ref(true)
    const show3 = ref(true)
    return { show1, show2, show3 }
  },
}
</script>
