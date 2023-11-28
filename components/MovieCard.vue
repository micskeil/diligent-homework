<template>
  <div class="relative cursor-pointer flex-grow min-w-[12rem] max-w-[22rem] h-80 bg-white rounded-xl overflow-hidden border-1 shadow-md hover:scale-105">
    <div class="absolute text-slate-700 font-bold top-1 right-1 z-10 rounded-full bg-yellow-300 p-1">
      {{  movie.vote_average.toFixed(1) }}
    </div>
    <div class="flex-grow flex flex-col justify-center items-center">
      <img
        :src="imgSrc"
        :alt="movie.title"
        class="w-full h-full object-cover absolute top-0 left-0 "
      />
    </div>
    <div class="absolute font-bold w-full p-2 bg-white bg-opacity-70 bottom-0">
      {{  movie.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/models'


const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
    required: true
  }
})

const imgSrc =  props.movie.poster_path ? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}` :
  props.movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}` : 'https://via.placeholder.com/500x750.png?text=No+image+available'

</script>