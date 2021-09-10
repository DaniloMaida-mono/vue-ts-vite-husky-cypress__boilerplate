<template>
  <a-space direction="vertical" style="width: 100%">
    <label class="input-label">{{ label }}</label>
    <a-select
      ref="select"
      v-model:value="value"
      :options="options"
      @change="handleChange"
      style="width: 100%"
    >
    </a-select>
  </a-space>
</template>

<script lang="ts">
import { SelectTypes } from 'ant-design-vue/es/select'
import { computed, defineComponent, PropType, ref } from 'vue'
export default defineComponent({
  name: 'SelectInput',
  props: {
    options: {
      required: true,
      type: Array as PropType<SelectTypes['options']>,
    },
    defaultValue: {
      required: true,
      type: String as PropType<string>,
    },
    label: {
      type: String as PropType<string>,
    },
  },
  setup(props, { emit }) {
    const handleChange = (value: string) => {
      emit('onChange', { value: value })
    }
    return {
      handleChange,
      value: ref(props.defaultValue),
    }
  },
})
</script>

<style lang="less">
div.ant-space-item {
  width: 100%;
}

.ant-time-picker-panel-input::selection {
  background: rgba(0, 0, 0, 0.3);
}
</style>