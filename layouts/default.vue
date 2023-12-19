<script setup lang="ts">
type Props = {
  headerBackgroundColor: "white" | "default";
};

const { headerBackgroundColor = "default" } = defineProps<Props>();
</script>

<template>
  <div class="bg-dark-950 text-white">
    <div class="flex flex-col min-h-screen">
      <div
        :class="{ 'bg-white text-black': headerBackgroundColor === 'white' }"
      >
        <LayoutHeader />
      </div>
      <main class="grow p-4">
        <slot />
      </main>
      <div class="px-4">
        <LayoutFooter />
      </div>
    </div>
  </div>
</template>
