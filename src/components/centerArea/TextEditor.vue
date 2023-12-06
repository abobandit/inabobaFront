<template>
  <div class="text-editor">
      <!-- <el-text v-if="handlePlaceholder" class="el-text">{{ placeholder }}</el-text> -->
    <editor-content @input="emits('update:modelValue',$event.target.innerHTML)" class="textEditor" :editor="editor" />
  </div>
</template>

<script setup lang="ts">
import {EditorContent, useEditor} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const props = defineProps<{
  placeholder:string,
  modelValue: string|null
}>()
const emits = defineEmits(['update:modelValue'])
const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
    },
  },
})
</script>

<style scoped>
.textEditor{
  padding: .4rem 1rem;
  width:95%;
}
.textEditor:active, .textEditor:focus {
  outline: none;
  border: none;
}
.text-editor{
  background: inherit;
  outline: 1px solid white;
  border-radius: .3rem;
}

</style>