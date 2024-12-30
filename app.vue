<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Teleport to="#teleports">
    <ui-v-toaster expand close-button />
  </Teleport>
</template>
