<script setup lang="ts">

import TextEditor from "@/components/centerArea/TextEditor.vue";
import {ref} from "vue";

const message = ref<string>(' ')
</script>

<template>
<el-container class="el-container">
  <TextEditor class="textEditor" :model-value="message"/>
</el-container>
</template>

<style scoped>
.textEditor{
  background: gray;
  position:sticky;
  height: fit-content;
}
.el-container{
  padding: 1rem 2rem;
}
</style>