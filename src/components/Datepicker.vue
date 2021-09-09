<template>
  <a-space direction="vertical">
    <label class="input-label">{{ label }}</label>
    <a-date-picker
      :format="dateFormatList"
      @change="handleChange"
      placeholder="gg/mm/aa"
      :size="size"
    >
      <template #suffixIcon>
        <CalendarIcon />
      </template>
    </a-date-picker>
  </a-space>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Moment } from 'moment'
import CalendarIcon from './CalendarIcon.vue'

enum Sizes {
  small = 'small',
  default = 'default',
  large = 'large',
}

export default defineComponent({
  name: 'Datepicker',
  components: { CalendarIcon },
  props: {
    label: {
      type: String as PropType<string>,
    },
    size: {
      default: 'default',
      type: String as PropType<Sizes>,
    },
  },
  setup(props, { emit }) {
    const handleChange = (date: Moment, dateString: string[]) => {
      emit('onChange', { date: date, dateString: dateString })
    }
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    return {
      handleChange,
      dateFormatList,
    }
  },
})
</script>


<style>
</style>