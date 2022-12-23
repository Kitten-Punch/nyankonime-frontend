<template>
  <nav class="w-full h-20 bg-grey-1 absolute top-0 left-0">
    <div
      class="max-w-[1240px] mx-auto h-full flex items-center justify-between w-full"
    >
      <img src="~/assets/logo.png" class="h-6 w-auto object-contain" />
      <div class="grid grid-flow-col gap-4 items-center text-white">
        <nuxt-link
          v-for="(navButton, index) in navButtonData"
          :key="index"
          :to="`${navButton.to}`"
          class="hover:text-purple transition-all duration-300"
          >{{ navButton.title }}</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navButtonData: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Genres",
          to: "/genres",
        },
        {
          title: "Anime Lists",
          to: "/lists",
        },
        {
          title: "Jadwal",
          to: "/jadwal",
        },
      ],
    };
  },
};
</script>
