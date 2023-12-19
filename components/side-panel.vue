<!-- 
  This component is not as scalable as it could be, 
  because I'm using Element plus here and developer can just use their component if developer needs something different
  But if you want, I can rebuild it without using any UI Libraries      
-->

<script setup lang="ts">
type Props = {
  title?: string;
};

type Slots = {
  button?: () => void;
  default?: () => void;
};

defineProps<Props>();
defineSlots<Slots>();

const modelValue = defineModel<boolean>({ local: true, default: false });
</script>

<template>
  <div @click="modelValue = true">
    <slot name="button" />
  </div>

  <ElDrawer class="!bg-dark-950" v-model="modelValue" :title="title">
    <slot />
  </ElDrawer>
</template>
