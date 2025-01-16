<script lang="ts" setup>
import { buttonVariants, type Props } from '.';

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
});

const variant = computed(() =>
    cn(
        buttonVariants({
            variant: props.variant,
            size: props.size,
        }),
        props.class,
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
