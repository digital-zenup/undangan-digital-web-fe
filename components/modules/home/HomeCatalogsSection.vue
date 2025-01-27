<template>
    <section class="container text-center lg:py-12 space-y-8">
        <div class="max-w-full md:max-w-xl mx-auto space-y-2">
            <VText
                as="h3"
                variant="h3"
                weight="bold"
            >
                Tema Undangan
            </VText>

            <VText
                as="p"
                variant="body"
            >
                Banyak tersedia tema undangan yang unik dan menarik untuk bisa kamu pilih dan gunakan untuk membuat undangan online
            </VText>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8">
            <NuxtImg
                v-for="catalogue in 4"
                :key="catalogue"
                :src="`/images/catalogs/catalogue-${catalogue}.webp`"
                class="rounded-xl h-96 object-cover drop-shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer border border-gray-400"
                :alt="`Desain undangan pernikahan di halaman ${catalogue}, menampilkan pola bunga elegan dan tipografi modern`"
                loading="lazy"
                format="webp"
                quality="80"
            />
        </div>

        <VLink
            :to="{ name: 'theme' }"
            variant="outline"
            size="lg"
        >
            Coba Tema Lainnya!!
        </VLink>
    </section>
</template>
