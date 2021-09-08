<template>
  <Title text="Home" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from '@/components/Title.vue'

export default defineComponent({
  name: 'Home',
  components: { Title },
  setup() {},
})
</script>


<style>
h1 {
  text-align: center;
}
</style>