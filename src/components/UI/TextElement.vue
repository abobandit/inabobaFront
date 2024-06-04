<script setup lang="ts">

const props = defineProps({
  color: {
    type: String,
    default: 'white'
  },
  textAlign: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <el-text :style="{
  color: props.color,
  'text-align': textAlign
}">
    <slot/>
  </el-text>
</template>

<style scoped>

</style>