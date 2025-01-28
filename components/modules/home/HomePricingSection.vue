<script setup lang="ts">
import { PRICING_PLANS } from '~/constants';
</script>

<template>
    <section class="container lg:py-12 space-y-8">
        <div class="text-center max-w-3xl mx-auto space-y-2">
            <VText
                as="h3"
                variant="h3"
                weight="bold"
            >
                Pilihan Harga Terbaik Untuk Kamu
            </VText>

            <VText
                as="p"
                variant="body"
            >
                Kami memberikan harga yang terbaik untuk acara spesial kamu dengan beberapa pilihan sesuai dengan acara spesial kamu
            </VText>
        </div>

        <div class="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8">
            <VPricing
                v-for="pricing in PRICING_PLANS"
                :key="pricing.plan"
                :label="pricing.label"
                :plan="pricing.plan"
                :description="pricing.description"
                :price="pricing.price"
                :features="pricing.features"
                :variant="pricing.plan"
            />
        </div>
    </section>
</template>
