<template>
    <editor-content @input="emits('input',$event.target.innerHTML)" class="textEditor" :editor="editor" />
</template>

<script setup lang="ts">
import { EditorContent, useEditor} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { SkeletonBlock } from 'skeleton-elements/vue';
const props = defineProps<{
  modelValue: string|null
}>()
const emits = defineEmits(['input'])
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
  width:95%;
}
.textEditor:active, .textEditor:focus {
  outline: none;
  border: none;
}

@media (max-width: 900px) {
}

@media (min-width: 900px) {
}

@media (min-width: 800px) and (max-width: 1000px) {
}

@media (min-width: 1000px) and (max-width: 1200px) {
}

@media (min-width: 1200px) and (max-width: 1600px) {
}

@media (min-width: 1600px) and (max-width: 1800px) {
}

@media (min-width: 1800px) {
}
</style>