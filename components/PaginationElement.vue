<template>
  <div class="flex justify-center items-center gap-4">
    <button
      v-show="page > 1"
      class="px-4 cursor-pointer"
      :disabled="page === 1"
      @click="emit('update:page', page - 1)"
    >
      &lt;&lt;
    </button>
    <div v-if="page-1">
      <span class="text-lg cursor-pointer" @click="emit('update:page', 1)">1</span>
      ..
      <span class="text-lg cursor-pointer" @click="emit('update:page', page - 1)">{{ page - 1  }}</span>
    </div>
    <span class="font-bold text-xl">{{ page  }}</span>
    <span v-if="totalPages > page + 1" class=" text-lg cursor-pointer"  @click="emit('update:page', page + 1)">{{ page + 1 }}</span>
    <div v-if="totalPages > page">
      ..
      <span class=" text-lg cursor-pointer"  @click="emit('update:page', totalPages)">{{ totalPages }}</span>
      <button
        class=" px-4 cursor-pointer"
        :disabled="page === totalPages"
        @click="emit('update:page', page + 1)"
      >
         >>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  })

  const emit= defineEmits(['update:page'])
</script>