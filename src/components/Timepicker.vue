<template>
  <a-space direction="vertical" style="width: 100%">
    <label class="input-label">{{ label }}</label>
    <a-time-picker
      v-model:value="value"
      format="HH:mm"
      placeholder="Seleziona un orario"
      @change="handleChange"
      style="width: 100%"
      size="default"
    />
  </a-space>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from 'vue'
import moment, { Moment } from 'moment'

type MarkerTime = `${number}${number}:${number}${number}`

export default defineComponent({
  name: 'Timepicker',
  props: {
    defaultTime: {
      default: '12:00',
      type: String as PropType<MarkerTime>,
    },
    label: {
      type: String as PropType<string>,
    },
  },
  setup(props, { emit }) {
    const handleChange = (value: Moment, timeString: string) => {
      emit('onChange', { value: value, timeString: timeString })
    }

    const value = ref<Moment>(moment(props.defaultTime, 'HH:mm'))

    return {
      value,
      moment,
      handleChange,
    }
  },
})
</script>
<style lang="less" scoped>
</style>