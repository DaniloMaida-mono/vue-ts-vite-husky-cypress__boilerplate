<template>
  <a-checkbox-group
    v-model:value="value"
    name="checkboxgroup"
    :options="items"
  />
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, ref, toRefs } from 'vue'

interface Item {
  label: string
  value: number | string
  active: boolean
}

export default defineComponent({
  props: {
    items: {
      required: true,
      type: Array as PropType<Item[]>,
    },
    label: {
      type: String as PropType<string>,
    },
  },
  setup(props) {
    const state = reactive({
      value: props.items
        .filter((item) => item.active === true)
        .map((item) => item.value),
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style>
</style>