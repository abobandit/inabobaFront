<script setup lang="ts">

import NavItem from "@/components/NavItem.vue";
import LogotypeComponent from "@/components/header/LogotypeComponent.vue";
</script>

<template>
  <header class="flex justify-between pt-4 pb-3 px-24 border-b-[.14rem] border-black">
    <div class="w-[43px] h-[43px] grid grid-cols-2 gap-x-24">
      <LogotypeComponent/>
      <button class="w-fit">
        <div class="grid-cols-2 grid w-max">
          <svg width="25" height="36" viewBox="0 -5 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.5" cy="11.5" r="8.5" stroke="#666666" stroke-width="2"/>
            <rect width="0.882967" height="9.84495" transform="matrix(0.650792 -0.759257 0.650792 0.759257 17.2057 17.5771)" fill="#666666" stroke="#666666"/>
            <circle cx="11" cy="11" r="10.5" stroke="#2E2E2E"/>
          </svg>
          <p class="text-stone-500 text-xs font-bold mt-4">Искать</p>
        </div>
      </button>
    </div>
    <ul class="list-none w-min flex shrink ">
      <NavItem title="Новости" :to="{name:'news'}"/>
      <NavItem title="Мессенджер" :to="{name:'messenger'}"/>
      <NavItem title="Друзья" :to="{name:'friends'}"/>
      <NavItem :is-not-last-element="false" title="Профиль" :to="{name:'profile'}"/>
    </ul>  </header>
</template>

<style scoped>

</style>