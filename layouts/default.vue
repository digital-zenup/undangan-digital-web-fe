<template>
    <div class="min-h-screen flex flex-col justify-between">
        <header class="sticky top-0 z-20 flex-shrink-0">
            <VNavbar />
        </header>

        <main class="flex-grow">
            <slot />
        </main>

        <VFooter />
    </div>
</template>
