<script setup lang="ts">
definePageMeta({
  layout: false,
});

const lorem = [
  "Lorem ipsum dolor sit amet, consectetur",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. In tellus integer feugiat scelerisque varius morbi enim nunc.",
  "Pellentesque id nibh tortor id aliquet lectus proin nibh. At urna condimentum mattis pellentesque id nibh tortor id aliquet.",
];
</script>

<template>
  <NuxtLayout name="default" header-background-color="white">
    <div class="max-w-md" v-for="(item, idx) in lorem" :key="idx">
      {{ item }}
    </div>
  </NuxtLayout>
</template>
