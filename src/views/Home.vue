<template>
  <Title text="Home" />
  <div>
    <Button text="Pimary Button" :icon="SearchOutlined" /> <br />
    <Button text="Secondary Button" :isSecondary="true" /> <br />
    <Button :icon="SearchOutlined" /> <br />
    <Dropdown
      text="Dropdown"
      :items="[
        { label: 'item1', value: 'value1' },
        { label: 'item2', value: 'value2' },
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import Title from '@/components/Title.vue'
import Button from '@/components/Button.vue'
import Dropdown from '@/components/Dropdown.vue'

export default defineComponent({
  name: 'Home',
  components: { Title, Button, SearchOutlined, Dropdown },
  setup() {
    console.log(typeof SearchOutlined)
    return {
      SearchOutlined,
    }
  },
})
</script>


<style>
h1 {
  text-align: center;
}

div {
  width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>