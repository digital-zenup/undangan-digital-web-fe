<script setup lang="ts">
import { FEATURES } from '~/constants';
</script>

<template>
    <section class="container space-y-8 py-12 lg:py-0">
        <div class="max-w-3xl space-y-3 mx-auto lg:mx-0 text-center lg:text-start">
            <VText
                as="h3"
                variant="h3"
                weight="bold"
            >
                Fitur Keren dan Lengkap
            </VText>

            <VText
                as="p"
                variant="body"
            >
                Fitur keren untuk membuat dan mengelola undangan online dengan mudah, dari desain menarik hingga pengaturan tamu, semua dalam satu platform!
            </VText>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <VFeature
                v-for="feature in FEATURES"
                :key="feature.title"
                :title="feature.title"
                :description="feature.description"
            >
                <template #icon>
                    <Icon
                        :name="feature.iconName"
                        class="text-success"
                        :size="18"
                    />
                </template>
            </VFeature>
        </div>
    </section>
</template>
