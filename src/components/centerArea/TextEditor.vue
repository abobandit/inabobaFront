<template>
  <div class="text-editor">
      <!-- <el-text v-if="handlePlaceholder" class="el-text">{{ placeholder }}</el-text> -->
    <editor-content   class="textEditor" :editor="editor" />
  </div>
</template>

<script setup lang="ts">
import {Editor, EditorContent, useEditor} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import {onBeforeUnmount, type ShallowRef, toRefs, watch} from "vue";

const props = defineProps<{
  placeholder:string,
  modelValue: string|null
}>()
const emits = defineEmits(['update:modelValue'])

const {modelValue} = toRefs(props)
const editor:ShallowRef<Editor | undefined> = useEditor({
  content: modelValue.value,
  extensions: [
    StarterKit,
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
    },
  },
  onUpdate:({editor})=>{
    emits('update:modelValue',editor.getHTML())
  }
})
watch(modelValue,(newValue, oldValue) => {
  const isSame = newValue=== oldValue
  if(isSame){
    return
  }
  editor.value?.commands.setContent(newValue,false)
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