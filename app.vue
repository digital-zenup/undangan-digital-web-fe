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
