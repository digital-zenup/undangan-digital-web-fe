<script lang="ts" setup>
import {
    borderVariant,
    pricingVariants,
    type Props,
    textColorVariant,
} from '.';

const props = defineProps<Props>();

const container = computed(() =>
    cn(
        pricingVariants({
            variant: props.variant,
        }),
        props.class,
    ),
);

const containerLabelClass = computed(() =>
    cn(
        borderVariant({
            variant: props.variant,
        }),
    ),
);

const labelClass = computed(() =>
    cn(
        'uppercase font-semibold',
        textColorVariant({
            variant: props.variant,
        }),
    ),
);

const planClass = computed(() =>
    cn(
        'capitalize',
        textColorVariant({
            variant: props.variant,
        }),
    ),
);

const descriptionClass = computed(() =>
    cn(
        textColorVariant({
            variant: props.variant,
        }),
    ),
);

const priceClass = computed(() =>
    cn(
        'space-x-2',
        textColorVariant({
            variant: props.variant,
        }),
    ),
);

const buttonIconClass = computed(() =>
    cn(
        '-rotate-45',
        textColorVariant({
            variant: props.variant,
        }),
    ),
);
</script>

<template>
    <div :class="container">
        <div class="p-5 space-y-4">
            <div :class="containerLabelClass">
                <VText
                    as="p"
                    variant="body"
                    weight="semibold"
                    :class="labelClass"
                >
                    {{ label }}
                </VText>
            </div>

            <div class="flex flex-row items-center gap-x-4">
                <NuxtImg
                    src="/images/pricing-thumbnail.webp"
                    loading="lazy"
                    class="w-20"
                />
                <VText
                    as="h3"
                    variant="h3"
                    weight="bold"
                    :class="planClass"
                >
                    {{ plan }}
                </VText>
            </div>

            <VText
                as="p"
                variant="body"
                :class="descriptionClass"
            >
                {{ description }}
            </VText>

            <VText
                as="h4"
                variant="h4"
                :class="priceClass"
            >
                <span class="font-bold">{{ price }}</span>
                <span>/</span>
                <span>Undangan</span>
            </VText>
        </div>

        <NuxtImg
            v-if="plan === 'lite'"
            src="/images/pricing-vector.webp"
            loading="lazy"
        />
        <NuxtImg
            v-else
            src="/images/pricing-vector-white.webp"
            loading="lazy"
        />

        <div class="p-5 space-y-4">
            <ul class="space-y-2 list-image-[url(/images/success-check-circle.svg)] ms-4">
                <li
                    v-for="feature in features"
                    :key="feature"
                    class="pl-2"
                >
                    {{ feature }}
                </li>
            </ul>
        </div>

        <div class="p-5 mt-auto">
            <VButton
                variant="outline"
                class="w-full rounded-xl bg-transparent"
            >
                <span>Pesan Paket
                    <span class="capitalize">{{ plan }}</span>
                </span>
                <Icon
                    name="uil-message"
                    :class="buttonIconClass"
                />
            </VButton>
        </div>
    </div>
</template>
