<template>
  <nav class="w-full h-20 bg-grey-1 absolute top-0 left-0">
    <div
      class="max-w-[1240px] mx-auto h-full flex items-center justify-between w-full"
    >
      <img src="~/assets/logo.png" class="h-6 w-auto object-contain" />
      <div class="grid grid-flow-col gap-4 items-center text-white">
        <a href="#">Home</a>
        <a href="#">Genres</a>
        <a href="#">Anime Lists</a>
        <a href="#">Jadwal</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
