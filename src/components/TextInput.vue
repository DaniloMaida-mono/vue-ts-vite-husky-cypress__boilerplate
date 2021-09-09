<template>
  <a-space direction="vertical">
    <label class="input-label" v-if="label" :for="id">{{ label }}</label>
    <a-input v-model:value="value" :placeholder="placeHolder" :id="id" />
  </a-space>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

enum Sizes {
  small = 'small',
  middle = 'default',
  large = 'large',
}

enum Types {
  text = 'text',
  email = 'email',
}

export default defineComponent({
  props: {
    placeHolder: {
      type: String as PropType<string>,
    },
    id: {
      required: true,
      type: String as PropType<string>,
    },
    label: {
      type: String as PropType<string>,
    },
    type: {
      default: 'text',
      type: String as PropType<Types>,
    },
    size: {
      default: 'default',
      type: String as PropType<Sizes>,
    },
  },
  setup() {
    const value = ref<string>('')
    return {
      value,
    }
  },
})
</script>


<style lang="less" scoped>
</style>