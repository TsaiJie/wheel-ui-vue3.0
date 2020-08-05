<template>
  <button
    :class="{ checked: value, [`${size}`]: true }"
    @click="toggle"
    :style="colorStyle"
  >
    <span class="circle"></span>
    <span class="innerText" :class="{ checked: value }">
      <slot name="open" v-if="value"></slot>
      <slot name="close" v-else></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
export default {
  props: {
    value: Boolean,
    size: {
      type: String,
      default: 'normal',
    },
    openColor: String,
    closeColor: String,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    const colorStyle = computed(() => {
      let style = {}
      if (props.openColor && props.value === true) {
        style['background-color'] = props.openColor
      }
      if (props.closeColor && props.value === false) {
        style['background-color'] = props.closeColor
      }
      return style
    })
    return { toggle, colorStyle }
  },
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$sm-w: 28px;
$sm-h: 16px;
button {
  position: relative;
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  cursor: pointer;
  vertical-align: middle;
  > .innerText {
    position: absolute;
    top: 2px;
    left: 23px;
    line-height: 20px;
    font-size: 12px;
    color: #fff;
    &.checked {
      left: 7px;
    }
  }
  > .circle {
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
      > .circle {
        width: $h2 + 10px;
      }
    }
    &.checked:active {
      > .circle {
        // width: $h2 + 4px;
        margin-left: -10px;
      }
    }
  }
  &.small {
    width: $sm-w;
    height: $sm-h;
    border-radius: $sm-h/2;
    > .circle {
      width: 12px;
      height: 12px;
      top: 2px;
      left: 2px;
    }
    &:active {
      > .circle {
        width: 12 + 2px;
      }
    }
    &.checked:active {
      > .circle {
        // width: $h2 + 4px;
        margin-left: -2px;
      }
    }
    &.checked {
      background: #1890ff;
      > .circle {
        left: calc(100% - 12px - 2px);
      }
    }
  }
  &:focus {
    outline: none;
  }

  &.checked {
    background: #1890ff;
    > .circle {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:active {
    > .circle {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > .circle {
      // width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
