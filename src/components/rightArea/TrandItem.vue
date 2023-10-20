<script setup lang="ts">
import BoxItem from "@/components/rightArea/BoxItem.vue";
interface Trend {
  id:number,
  countPosted: number,
  tag: string,
  title: string
}

const trends: Array<Trend> = [
  {
    id: 1,
    countPosted: 123,
    tag: 'petrolPrice',
    title: "Trending in Pakistan"
  },
  {
    id: 2,
    countPosted: 12323,
    tag: 'petrolPrice',
    title: "Trending in Basketball"
  },
  {
    id: 3,
    countPosted: 8123,
    tag: 'petrolPrice',
    title: "Trending in Sport"
  },
  {
    id: 4,
    countPosted: 5123,
    tag: 'petrolPrice',
    title: "Trending in Palestine"
  },
  {
    id: 5,
    countPosted: 123423,
    tag: 'petrolPrice',
    title: "Trending in Kazakhstan"
  },
  {
    id: 6,
    countPosted: 42123,
    tag: 'petrolPrice',
    title: "Trending in Afghanistan"
  },
]
</script>
<template>
  <div class="bg-[#16181C] rounded-xl h-fit ml-4 ">
    <h2 class="text-[1.2rem] font-bold py-4 px-5">Trends for you</h2>
    <BoxItem
        v-for="trend in trends"
        :key="trend.id"
        :count-posted="trend.countPosted"
        :tag="trend.tag"
        :title="trend.title"/>
  </div>
</template>

<style scoped>



</style>