<template>
    <main class="min-h-screen container text-center flex flex-col items-center justify-center space-y-4">
        <div class="max-w-xs">
            <NuxtImg
                src="/images/under-construction.webp"
                alt="Under Construction"
                loading="eager"
                format="webp"
                quality="50"
                fit="cover"
            />
        </div>

        <slot />

        <NuxtLink to="/">
            <VButton
                type="button"
                variant="default"
            >
                Back to Home
            </VButton>
        </NuxtLink>
    </main>
</template>
