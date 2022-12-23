<template>
  <section id="ongoing-anime" class="mb-14 pt-14">
    <div class="w-full h-full">
      <div class="flex justify-between font-bold items-center py-2">
        <h2 class="text-xl text-white">On Going Anime</h2>
        <a href="#" class="text-purple text-base">Lihat Lainnya</a>
      </div>
      <div class="w-full h-[1px] bg-white mb-8"></div>
    </div>
    <div class="grid grid-cols-4 gap-4 w-full items-center">
      <CardsPreviewCard
        v-for="(data, index) in animeData"
        :key="index"
        :link="data.link"
        :title="data.title"
        :episode="data.episode"
        :day="data.day"
      />
    </div>
  </section>
</template>

<script>
const animeData = [
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episode: "69",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episode: "69",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episode: "69",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episode: "69",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episode: "69",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episode: "69",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episode: "69",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episode: "69",
    day: "Rabu",
  },
];
export default {
  data() {
    return {
      animeData: animeData,
    };
  },
};
</script>
