<template>
  <a-dropdown :trigger="trigger">
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item v-for="(item, index) in items" :key="index">{{
          item.label
        }}</a-menu-item>
      </a-menu>
    </template>
    <a-button :size="size">
      {{ text }}
      <DownOutlined />
    </a-button>
  </a-dropdown>
</template>

<script lang="ts">
import { DownOutlined } from '@ant-design/icons-vue'
import { defineComponent, PropType } from 'vue'
import { Sizes } from '@/types/buttons'

type triggers = 'click' | 'hover'

interface Item {
  label: string
  value: string
}

export default defineComponent({
  components: {
    DownOutlined,
  },
  props: {
    trigger: {
      default: ['click'],
      type: Array as PropType<triggers[]>,
    },
    text: {
      type: String as PropType<string>,
    },
    items: {
      required: true,
      type: Array as PropType<Item[]>,
    },
    size: {
      default: 'middle',
      type: String as PropType<Sizes>,
    },
  },
  setup() {
    const handleMenuClick = (e: Event) => {
      console.log('click', e)
    }
    return {
      handleMenuClick,
    }
  },
})
</script>


<style>
</style>