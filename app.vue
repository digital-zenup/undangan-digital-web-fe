<script lang="ts" setup>
useSeoMeta({
    titleTemplate: 'Zenup | Undangan Digital - %s',
    twitterImage: '/images/zenup-brand.webp',
    twitterCard: 'summary',
    ogUrl: 'https://localhost:8000',
    ogImage: '/images/zenup-brand.webp',
});

useHead({
    htmlAttrs: {
        lang: 'id',
    },
    link: [
        {
            rel: 'icon',
            type: 'image/svg',
            href: '/favicon.svg',
        },
    ],
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>

    <Teleport to="#teleports">
        <VToaster
            expand
            close-button
        />
    </Teleport>
</template>
