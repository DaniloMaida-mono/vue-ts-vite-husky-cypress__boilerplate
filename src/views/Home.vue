<template>
  <Title text="Home" />
  <div class="init">
    <Button
      text="Pimary Button"
      :icon="SearchOutlined"
      @onClick="clickButton"
    />
    <br />
    <Button text="Default Button" type="default" /> <br />
    <Button text="Secondary Button" :isSecondary="true" /> <br />
    <Button :icon="SearchOutlined" /> <br />

    <TextInput placeHolder="Placeholder" id="address" label="Indirizzo" />
    <div class="select">
      <SelectInput
        @onChange="handleSelectChange"
        :options="[
          { label: 'Test', value: 'test' },
          { label: 'Test2', value: 'test2' },
        ]"
        defaultValue="test"
        label="Seleziona"
      />
    </div>

    <Datepicker label="Scegli una data" @onChange="handleDateChange" />
    <Timepicker label="Scegli un orario" @onChange="handleTimeChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import Title from '@/components/Title.vue'
import Button from '@/components/Button.vue'
import Dropdown from '@/components/Dropdown.vue'
import TextInput from '@/components/TextInput.vue'
import SelectInput from '@/components/SelectInput.vue'
import Datepicker from '@/components/Datepicker.vue'
import Timepicker from '@/components/Timepicker.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Title,
    Button,
    SearchOutlined,
    TextInput,
    Dropdown,
    SelectInput,
    Datepicker,
    Timepicker,
  },
  setup() {
    const clickButton = (args: object) => {
      console.log(args)
    }
    const handleSelectChange = (args: object) => {
      console.log(args)
    }
    const handleDropDownChange = (args: object) => {
      console.log(args)
    }

    const handleDateChange = (args: object) => {
      console.log(args)
    }

    const handleTimeChange = (args: object) => {
      console.log(args)
    }

    return {
      SearchOutlined,
      clickButton,
      handleSelectChange,
      handleDropDownChange,
      handleDateChange,
      handleTimeChange,
    }
  },
})
</script>


<style>
h1 {
  text-align: center;
}

div.init {
  height: 70vh;
  width: fit-content;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
</style>