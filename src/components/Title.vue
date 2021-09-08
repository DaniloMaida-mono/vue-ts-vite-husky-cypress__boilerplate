<template>
  <h1 class="text-primary">{{ text }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>