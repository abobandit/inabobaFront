<script setup lang="ts">
import LeftArrow from "@/assets/svg/LeftArrow.vue";
import {ref} from "vue";
import CreatePostForm from "@/components/centerArea/CreatePostForm.vue";

const textarea = ref('')
</script>

<template>
  <el-container class="centerarea ">
    <div class="top border-b">
      <LeftArrow/>
    </div>
    <RouterView/>
  </el-container>
</template>

<style scoped>
.centerarea {
  margin: 1rem 0;
  border-radius:1rem;
  max-width: 50%;
  justify-content: space-between;
  background: #1e1e1e;
  display: flex;
  flex-wrap: wrap;
}

.centerarea .top {
  justify-content: space-between;
  display: flex;
  padding: 10px 0 10px 25px ;
}

@media(min-width: 900px) {
}
@media (min-width: 800px) and (max-width:1000px) {
  .centerarea{
    max-width: 45%;
  }
}
@media (min-width: 1000px) and (max-width:1200px) {
  .centerarea{
    max-width: 45%;
  }
}
@media (min-width: 1200px) and (max-width:1600px) {
  .centerarea{
    max-width: 45%;
  }
}
@media (min-width: 1600px) and (max-width:1800px) {
  .centerarea{
    max-width: 35%;
  }
}
@media (min-width: 1800px) {
  .centerarea{
    max-width: 25%;
  }
}
</style>