<script setup lang="ts">
import {toRefs} from "vue";

interface Props {
  title: string,
  tag: string,
  countPosted: number
}

const props = defineProps<Props>()
const {countPosted} = toRefs(props)

//Функция считает сколько раз количество разрядов числа
//и преобразует число в строку, у которой после каждого разряда идет запятая
const spliceDotByFloat = (value: number): string => {
  if (value<1000) return value.toString()
  const reverseValue = convertNumberToArray(value)
  const digits = countDigits(reverseValue)
  for (let i = 0; i < digits; i++) {
    const currentDigitIndex = calcCurrentDigitId(i)
    reverseValue.splice(currentDigitIndex, 0, ',')
  }
  return reverseValue.reverse().join('')
}
const convertNumberToArray = (value: number): string[] => value.toString().split('').reverse()
const countDigits = (arr: string[]) :number => Math.floor((arr.length - 1) / 3)

const calcCurrentDigitId = (id: number): number =>  (id + 1) * 3 + id

</script>
<template>
  <div class="flex justify-between cursor-pointer  py-2 px-9 transition-colors duration-300 ease-in hover:bg-neutral-950">
    <div class="font-sans">
      <p>{{ title }}</p>
      <h3 >#{{ tag }}</h3>
      <p class="text-[.8rem]">{{ spliceDotByFloat(countPosted) }} Tweets</p>
    </div>
    <div class=""><i class="fa-solid fa-ellipsis"></i></div>
  </div>
</template>
