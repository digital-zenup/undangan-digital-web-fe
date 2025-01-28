<template>
    <section class="container flex flex-col lg:flex-row items-center justify-between gap-y-8 p-8">
        <div class="w-full max-w-lg lg:max-w-full flex flex-col items-center lg:items-start gap-y-4 mx-auto text-center lg:text-start">
            <VText
                as="h1"
                variant="h1"
                weight="bold"
            >
                <span class="italic text-green-700 block">Not just invites</span>
                <span class="block">It's your story</span>
            </VText>

            <VText
                as="p"
                variant="body"
            >
                Undang teman dan keluarga terdekat dengan cara spesial dengan membuat undangan online secara unik dan menarik. Coba sekarang juga
            </VText>

            <VLink
                variant="gradation"
                size="lg"
                :to="{ name: 'index' }"
            >
                Yuk!! Buat Undangan
            </VLink>
        </div>

        <div class="w-full flex flex-col items-center lg:items-end">
            <div class="max-w-lg">
                <NuxtImg
                    src="/images/home-hero-banner.webp"
                    alt="Undangan Online yang Mudah dan Cepat Dibuat dalam 5 Menit"
                    loading="lazy"
                    format="webp"
                    quality="50"
                    fit="contain"
                />
            </div>
        </div>
    </section>
</template>
