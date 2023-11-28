<template>
  <div v-if="isFromCache" class="basis-full text-red-500 text-slate-800">
     This search result is from cache
  </div>
  <PaginationElement @update:page="currentPage = $event" class="basis-full text-slate-800" :page="currentPage" :totalPages="totalPages"></PaginationElement>
  <MovieCard v-if="movies.length !== 0" v-for="movie in movies" :key="movie.id" :movie="movie" />
  <div v-else class="text-center text-2xl font-bold text-slate-800">
    No movies found
  </div>
</template>

<script setup lang="ts">
import { useFetchMovies } from '../../composables/useFetchMovies'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import type { Movie } from '../../models'

const query = useRoute().query.search as string;

const isFromCache: Ref<Boolean> = ref(false);
const currentPage = ref(1);
const movies: Ref<Movie[]> = ref([]);
const totalPages = ref(0);

watch(currentPage, async () => {
  const { movies: fetchedMovies, fromCache, totalPages: fetchedTotalPages }  = await useFetchMovies(query as string, currentPage.value);
  movies.value = fetchedMovies;
  isFromCache.value = fromCache;
  totalPages.value = fetchedTotalPages;

}, {
  immediate: true,
});

// Get movies for the search query
</script>