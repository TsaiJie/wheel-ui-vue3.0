<template>
  <button><span></span></button>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  position: relative;
  height: $h;
  width: $h * 2;
  border: none;
  background: blue;
  border-radius: $h/2;
  outline: none;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
}
button:hover > span {
  left: calc(100% - #{$h2} - 2px);
}
</style>
