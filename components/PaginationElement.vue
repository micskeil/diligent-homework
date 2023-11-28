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
    <span v-if="page-1" class="text-lg" @click="emit('update:page', page - 1)">{{ page - 1  }}</span>
    <span class="font-bold text-xl">{{ page  }}</span>
    <span class=" text-lg"  @click="emit('update:page', page + 1)">{{ page + 1 }}</span>
    <button
      class=" px-4 cursor-pointer"
      :disabled="page === totalPages"
      @click="emit('update:page', page + 1)"
    >
       >>
    </button>
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