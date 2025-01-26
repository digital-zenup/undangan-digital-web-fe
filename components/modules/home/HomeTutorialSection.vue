<script setup lang="ts">
import { TUTORIAL_STEPS } from '~/constants';
</script>

<template>
    <section class="container py-12 flex flex-col md:flex-row items-center justify-between gap-x-20 gap-y-10">
        <div class="w-full">
            <div class="max-w-full md:max-w-3xl space-y-3">
                <VText
                    as="h3"
                    variant="h3"
                    weight="bold"
                >
                    Langkah Simpel untuk Undangan Online
                </VText>

                <VText
                    as="p"
                    variant="body"
                >
                    Buat undangan kamu dengan mudah dan cepat dengan hanya 5 menit undangan kamu siap untuk digunakan
                </VText>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    <VFeature
                        v-for="step in TUTORIAL_STEPS"
                        :key="step.title"
                        :title="step.title"
                        :description="step.description"
                    >
                        <template #icon>
                            <Icon
                                :name="step.iconName"
                                class="text-success"
                                :size="18"
                            />
                        </template>
                    </VFeature>
                </div>
            </div>
        </div>

        <div class="max-w-72 text-center space-y-6">
            <VText
                as="p"
                variant="body"
                weight="semibold"
            >
                Tonton Video Tutorialnya.
            </VText>

            <NuxtImg
                src="/images/tutorial-thumbnail.webp"
                alt="Tutorial pembuatan undangan online dengan desain elegan dan modern"
                loading="lazy"
                format="webp"
                quality="50"
                class="drop-shadow-2xl"
            />
        </div>
    </section>
</template>
