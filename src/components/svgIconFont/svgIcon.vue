<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :fill="color" :xlink:href="iconClassName" />
  </svg>
</template>

<script setup>
/* 全局svgicon标签组件 */
import { computed } from 'vue'

const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#409eff'
  }
})

// 图标在Iocnfont中的名字
const iconClassName = computed(() => {
  return `#${props.iconName}`
})

// 给图标添加上类名
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})
</script>
<style scoped>
.svg-icon {
  position: relative;
  width: 1em;
  height: 1em;
  vertical-align: -2px;
  fill: currentColor;
}
</style>