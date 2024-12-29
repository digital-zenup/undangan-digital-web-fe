<script lang="ts" setup>
import { textVariants, type Props } from ".";

const props = withDefaults(defineProps<Props>(), {
  bold: false,
  italic: false,
});

const variant = computed(() =>
  cn(
    textVariants({
      variant: props.variant,
      bold: props.bold,
      italic: props.italic,
    }),
    props.class
  )
);
</script>

<template>
  <component :is="as" :class="variant">
    <slot />
  </component>
</template>
