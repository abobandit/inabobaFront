<script setup lang="ts">
const props = defineProps<{
  title: String,
  link: String
}>()

</script>

<template>
  <RouterLink :to="props.link">
  <div class="menu text-[1.1rem] font-bold font-serif">
    <slot/>
    <p>{{ props.title }}</p>
  </div>
  </RouterLink>

</template>

<style scoped>
.menu {
  padding: 10px 0px;
  align-items: center;
  display: flex;
  margin-top: 12px;
  cursor: pointer;
}

</style>