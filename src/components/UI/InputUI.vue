<template>
  <input :value="modelValue" :type="type" :placeholder="placeholder"
         @input="updateInput"
         class="w-min px-1 py-0.5 rounded-lg outline-none hover:bg-gray-100 active:bg-gray-200 mb-2 ">
</template>
<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
  },
})
const {modelValue} = toRefs(props)

const emits = defineEmits(['update:modelValue'])

const updateInput = (event) =>{
  console.log(event.target.value)
  emits('update:modelValue',event.target.value)

}

const log =()=> console.log(modelValue)
</script>
