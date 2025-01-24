<script lang="ts" setup>
import type { Props } from '.';
import { NuxtLink } from '#components';

const props = defineProps<Props>();
</script>

<template>
    <VButton
        :as="NuxtLink"
        v-bind="props"
    >
        <slot />
    </VButton>
</template>
