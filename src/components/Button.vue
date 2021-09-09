<template>
  <a-button
    :class="[isSecondary ? 'secondary-button' : '']"
    :type="type"
    :size="size"
    :block="block"
  >
    <template v-if="icon" #icon><component :is="icon" /></template>
    {{ text }}
  </a-button>
</template>

<script lang="ts">
import { defineComponent, PropType, FunctionalComponent } from 'vue'
import { Sizes, Types } from '@/types/buttons'

export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String as PropType<string>,
    },
    type: {
      default: 'primary',
      type: String as PropType<Types>,
    },
    size: {
      default: 'middle',
      type: String as PropType<Sizes>,
    },
    block: {
      default: false, // set true for let button get all parent width
      type: Boolean as PropType<boolean>,
    },
    icon: {
      type: Function as PropType<FunctionalComponent>,
    },
    isSecondary: {
      default: false,
      type: Boolean as PropType<boolean>,
    },
  },
  setup() {},
})
</script>


<style lang="less">
@import '@/assets/style/ant-variables';

.secondary-button {
  background: @secondary-color !important;
  border-color: transparent !important;
}
</style>