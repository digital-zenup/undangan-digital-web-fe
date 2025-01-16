<script lang="ts" setup>
import { buttonVariants, type Props } from '.';

const { type = 'button', ...props } = defineProps<Props>();

const variant = computed(() =>
    cn(
        buttonVariants({
            variant: props.variant,
            size: props.size,
        }),
        props.class,
        'font-semibold',
    ),
);
</script>

<template>
    <button
        :type="type"
        :class="variant"
    >
        <slot />
    </button>
</template>
