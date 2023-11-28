<template>
  <header class="mx-2 mt-2 shadow bg-white rounded-xl border-1 border-slate-200 h-32 text-center text-7xl text-slate-800 font-bold flex justify-center items-center">
    Diligent movie search
  </header>
  <main class="flex-grow my-4 mx-2">
    <SearchInput />
    <section class="flex flex-wrap gap-2 md:gap-4 my-2 md:my-4 ">
      <slot></slot>
    </section>
  </main>
  <footer class="text-center">@homework by Lajos Micskei</footer>
</template>