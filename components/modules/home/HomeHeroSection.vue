<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
    <section class="container flex flex-col lg:flex-row items-center justify-between gap-y-8 p-8">
        <div class="w-full max-w-lg lg:max-w-full flex flex-col items-center lg:items-start gap-y-4 mx-auto text-center lg:text-start">
            <VText
                as="h1"
                variant="h1"
                weight="bold"
            >
                <span class="italic text-green-700 block">{{ t('home.hero.heading.line1') }}</span>
                <span class="block">{{ t('home.hero.heading.line2') }}</span>
            </VText>

            <VText
                as="p"
                variant="body"
            >
                {{ t('home.hero.description') }}
            </VText>

            <VLink
                variant="gradation"
                size="lg"
                :to="{ name: 'index' }"
            >
                {{ t('home.hero.cta') }}
            </VLink>
        </div>

        <div class="w-full flex flex-col items-center lg:items-end">
            <div class="max-w-lg">
                <NuxtImg
                    src="/images/home-hero-banner.webp"
                    :alt="t('home.imageAlt')"
                    loading="lazy"
                    format="webp"
                    quality="50"
                    fit="contain"
                />
            </div>
        </div>
    </section>
</template>
