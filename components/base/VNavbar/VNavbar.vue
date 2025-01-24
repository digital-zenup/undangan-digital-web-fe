<script setup lang="ts">
import { NAVIGATION_LINKS } from '~/constants';
</script>

<template>
    <nav class="bg-gold-50">
        <div class="container py-6 flex flex-row items-center justify-between">
            <div class="w-full">
                <Icon
                    name="zenup:zenup-logo"
                    :size="30"
                    mode="svg"
                />
            </div>

            <div class="block md:hidden">
                <VButton
                    type="button"
                    variant="unstyled"
                >
                    <Icon
                        name="uil:bars"
                        :size="30"
                    />
                </VButton>
            </div>

            <div class="hidden md:flex flex-row items-center justify-between gap-x-8">
                <ul class="flex flex-row items-center justify-between gap-x-8">
                    <li
                        v-for="link in NAVIGATION_LINKS"
                        :key="link.hrefName"
                    >
                        <VLink
                            :to="{ name: link.hrefName }"
                            class="font-semibold"
                            active-class="text-success"
                            variant="unstyled"
                        >
                            {{ link.name }}
                        </VLink>
                    </li>
                </ul>

                <VLink
                    variant="unstyled"
                    :to="{ name: 'login' }"
                >
                    Login
                </VLink>

                <VLink
                    variant="success"
                    :to="{ name: 'index' }"
                >
                    Buat Undangan
                </VLink>
            </div>
        </div>
    </nav>
</template>
