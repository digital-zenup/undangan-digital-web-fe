<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
    <section class="container flex flex-col lg:flex-row items-center justify-between gap-y-8 p-8">
        <div class="w-full max-w-lg lg:max-w-full flex flex-col items-center lg:items-start gap-y-4 mx-auto text-center lg:text-start">
            <span>
                <VText
                    as="h1"
                    variant="h1"
                    weight="bold"
                    class="italic text-green-700"
                >
                    {{ t('home.hero.heading.line1') }}
                </VText>

                <VText
                    as="h1"
                    variant="h1"
                    weight="bold"
                >
                    {{ t('home.hero.heading.line2') }}
                </VText>
            </span>

            <VText
                as="p"
                variant="body"
            >
                {{ t('home.hero.description') }}
            </VText>

            <NuxtLink
                class="block"
                :to="{ name: 'index' }"
            >
                <VButton
                    type="button"
                    variant="gradation"
                    size="lg"
                >
                    {{ t('home.hero.cta') }}
                </VButton>
            </NuxtLink>
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
