<template>
  <div class="mx-auto">
    <div class="w-60">
      <div class="h-32 w-60 relative rounded-lg overflow-hidden">
        <div
          class="absolute top-[10px] right-0 bg-[rgba(113,95,221,0.8)] text-white font-semibold font-noto text-sm px-4 py-1 rounded-l-full"
        >
          {{ day }}
        </div>
        <img :src="link" :alt="title" class="w-full h-full object-cover" />
      </div>
      <div class="text-white w-full">
        <p class="text-base font-bold font-laila">{{ title }}</p>
        <p class="text-sm font-normal font-noto">Episode {{ episode }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewCard",
  props: {
    link: {
      type: String,
      default: "[placeholder]",
    },
    title: {
      type: String,
      default: "[placeholder]",
    },
    episode: {
      type: String,
      default: "[placeholder]",
    },
    day: {
      type: String,
      default: "[placeholder]",
    },
  },
};
</script>
