<!-- This component will look different with form validator like VeeValidate -->

<script setup lang="ts">
type Props = {
  name: string;
};

defineProps<Props>();

const modelValue = defineModel<boolean>();
</script>

<template>
  <label>
    <input
      type="checkbox"
      v-model="modelValue"
    />
    <slot />
  </label>
</template>
