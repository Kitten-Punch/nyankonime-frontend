<template>
  <div class="mt-20 max-w-[1240px] w-full mx-auto">
    <ongoing />
    <top-airing />
  </div>
</template>

<script>
import Ongoing from "../components/section/Ongoing.vue";
import TopAiring from "../components/section/TopAiring.vue";
export default {
  components: { Ongoing, TopAiring },
  name: "IndexPage",
};
</script>
