<template>
  <button :class="{ checked: value, [`${size}`]: true }" @click="toggle">
    <span></span>
  </button>
  <div>{{ value }} {{ size }}</div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    value: Boolean,
    size: {
      type: String,
      default: 'normal',
    },
  },
  setup(props, context) {
    const toggle = () => {
      console.log(111)
      context.emit('update:value', !props.value)
    }
    return { toggle }
  },
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  position: relative;
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  cursor: pointer;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }

  &.large {
    width: 56px;
    &:active {
      > span {
        width: $h2 + 10px;
      }
    }
    &.checked:active {
      > span {
        // width: $h2 + 4px;
        margin-left: -10px;
      }
    }
  }
  &.small {
    width: 28px;
    height: 16px;
    border-radius: 8px;
    > span {
      width: 12px;
      height: 12px;
      top: 2px;
      left: 2px;
    }
    &:active {
      > span {
        width: 12 + 2px;
      }
    }
    &.checked:active {
      > span {
        // width: $h2 + 4px;
        margin-left: -2px;
      }
    }
    &.checked {
      background: #1890ff;
      > span {
        left: calc(100% - 12px - 2px);
      }
    }
  }
  &:focus {
    outline: none;
  }

  &.checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      // width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
