<template>
  <section id="top-airing">
    <div class="w-full h-full">
      <div class="flex justify-between font-bold items-center py-2">
        <h2 class="text-xl text-white">Top Airing Anime</h2>
        <a href="#" class="text-purple text-base">Lihat Lainnya</a>
      </div>
      <div class="w-full h-[1px] bg-white mb-8"></div>
    </div>
    <div class="grid grid-cols-4 gap-4 w-full items-center">
      <CardsTopAiringCard
        v-for="(data, index) in topAiringAnime"
        :key="index"
        :link="data.link"
        :title="data.title"
        :episodes="data.episodes"
        :genre="data.genre"
        :day="data.day"
      />
    </div>
  </section>
</template>

<script>
const topAiringAnime = [
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episodes: "69",
    genre: "Petualangan / Adventures",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episodes: "69",
    genre: "Petualangan / Adventures",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episodes: "69",
    genre: "Petualangan / Adventures",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episodes: "69",
    genre: "Petualangan / Adventures",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episodes: "69",
    genre: "Petualangan / Adventures",
    day: "Rabu",
  },
  {
    link: "https://ik.imagekit.io/kuromaru/BOCCHI-THE-ROCK-Cover_SD0waPcsB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669951846671",
    title: "My Anime Title",
    episodes: "69",
    genre: "Petualangan / Adventures",
    day: "Rabu",
  },
];
export default {
  data() {
    return {
      topAiringAnime: topAiringAnime,
    };
  },
};
</script>
