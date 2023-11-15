<script lang="ts" setup>
import {ref} from "vue";


</script>
<template>
  <RouterView/>
</template>
<style>
svg {
  fill: white;
}

* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  color: white;
}

#app {
  height:max-content;
  background: black;
  font-size: 16px;

}

@media (max-width: 600px) {
  * {
    font-size: 12px;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  * {
    font-size: 12px;
  }
}

@media (min-width: 900px) and (max-width: 1200px) {
  * {
    font-size: 14px;
  }
}

@media (min-width: 1200px) and (max-width: 1600px) {
  * {
    font-size: 16px;
  }
}

@media (min-width: 1600px) and (max-width: 2000px) {
  * {
    font-size: 18px;
  }
}
</style>