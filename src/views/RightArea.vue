<script setup lang="ts">

import SearchBar from "@/components/rightArea/SearchBar.vue";
import TrandItem from "@/components/rightArea/TrandItem.vue";
import SuggestedProfiles from "@/components/rightArea/SuggestedProfiles.vue";
</script>

<template>
  <el-aside
      class="rightArea grid grid-cols-1 max-h-fit grid-rows-[repeat(4,min-content)] gap-y-20 max-w-fit py-6">
      <SearchBar/>
      <TrandItem/>
      <SuggestedProfiles/>
      <div class="trandlink">
        <div class="link">
          <p><a href="#">Terms of Service</a> <a href="#">Privacy Policy</a> <a href="#">Cookie Policy</a> <a
              href="#">Accessibility</a> <a href="#"></a> <a href="#">Ads info</a> <a href="#">More</a> <br> <a
              href="#">© 2022 Twitter, Inc.</a></p>
        </div>
      </div>
    </el-aside>
</template>

<style scoped>
.rightArea{
  overflow: visible;
  height: fit-content;
  position:sticky;
}
.link a {
  text-decoration: none;
  color: rgb(137, 135, 135);
  padding-right: 10px;
  font-size: 13px;
  font-family: sans-serif;
}

.link a:hover {
  text-decoration: underline;
}
.trandlink {
  margin: 20px;
  padding: 10px;
  width: 100%;
}

</style>