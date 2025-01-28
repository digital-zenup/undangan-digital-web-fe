<script lang="ts" setup>
type Props = {
    title: string;
    description: string;
};

defineProps<Props>();
</script>

<template>
    <div class="border border-success border-r-8 border-b-8 p-5 rounded-xl space-y-2">
        <div class="flex flex-row items-center gap-x-2">
            <slot name="icon" />
            <VText
                as="h5"
                variant="h5"
                weight="medium"
            >
                {{ title }}
            </VText>
        </div>

        <VText
            as="p"
            variant="subbody"
        >
            {{ description }}
        </VText>
    </div>
</template>
