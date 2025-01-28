<script setup lang="ts">
import {
    CAROUSEL_BREAKPOINTS,
    CATALOGUE_CAROUSEL_CONFIG,
    CATALOGUE_CAROUSEL_MAX_ITEMS,
} from '~/constants';
</script>

<template>
    <section class="py-12 bg-green-50">
        <div class="container">
            <VLibCarousel
                v-bind="CATALOGUE_CAROUSEL_CONFIG"
                :breakpoints="CAROUSEL_BREAKPOINTS"
                class="select-none w-full"
            >
                <VLibSlide
                    v-for="slide in CATALOGUE_CAROUSEL_MAX_ITEMS"
                    :key="slide"
                >
                    <NuxtImg
                        :src="`/images/catalogs/catalogue-${slide}.webp`"
                        class="rounded-xl"
                        :alt="`Desain undangan pernikahan di halaman ${slide}, menampilkan pola bunga elegan dan tipografi modern`"
                        loading="lazy"
                        format="webp"
                        quality="50"
                    />
                </VLibSlide>
            </VLibCarousel>
        </div>
    </section>
</template>
