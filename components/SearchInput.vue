<template>
  <div role="search" class="w-full bg-white flex justify-between p-2 md:px-4 md:py-4 rounded-xl shadow-md">
    <form  action="/movies" class="flex gap-2">
      <label class="font-bold" for="movie">Find a Movie</label>
      <input type="search" class="border-b-2 px-2 border-slate-600" id="movie" name="search" />
      <button type="submit" class="bg-red-500 text-white font-bold px-4 rounded-xl">Search</button>
    </form>
  </div>
</template>

<script setup lang="ts">
 /**
  * Component to search for movies
  */


</script>