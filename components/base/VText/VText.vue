<script lang="ts" setup>
import { type Props, textVariants } from '.';

const props = defineProps<Props>();

const variant = computed(() =>
    cn(
        textVariants({
            variant: props.variant,
            color: props.color,
            weight: props.weight,
        }),
        props.class,
    ),
);
</script>

<template>
    <component
        :is="as"
        :class="variant"
    >
        <slot />
    </component>
</template>
