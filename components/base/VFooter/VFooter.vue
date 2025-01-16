<template>
    <footer class="overflow-hidden flex-shrink-0">
        <div class="container mx-auto p-8 flex flex-col lg:flex-row justify-center gap-y-8">
            <div class="w-full">
                <Icon
                    name="zenup:zenup-logo"
                    :size="30"
                />

                <VText
                    as="p"
                    variant="subbody"
                    leading="relaxed"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur? Earum distinctio vitae, officiis voluptatem nulla fuga, totam dolorem tempore corrupti eum quidem nisi laudantium quis pariatur hic accusamus magni!
                </VText>
            </div>

            <div class="w-full flex flex-col items-start lg:items-center">
                <div class="space-y-4">
                    <VText
                        as="h4"
                        variant="h4"
                        weight="semibold"
                    >
                        Metode Pembayaran
                    </VText>

                    <div class="space-x-4">
                        <Icon
                            name="zenup:visa"
                            :size="20"
                        />
                        <Icon
                            name="zenup:mastercard"
                            :size="20"
                        />
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col items-start lg:items-center">
                <div class="space-y-4">
                    <VText
                        as="h4"
                        variant="h4"
                        weight="semibold"
                    >
                        Lebih dekat dengan kami
                    </VText>

                    <div class="space-x-4">
                        <Icon
                            name="uil:instagram"
                            :size="20"
                        />
                        <Icon
                            name="uil:linkedin"
                            :size="20"
                        />
                        <Icon
                            name="uil:twitter"
                            :size="20"
                        />
                        <Icon
                            name="uil:facebook"
                            :size="20"
                        />
                    </div>

                    <div class="flex flex-row gap-x-4">
                        <Icon
                            name="uil:whatsapp"
                            :size="20"
                        />

                        <VText
                            as="p"
                            variant="subbody"
                        >
                            (+62) 854 7474 9931
                        </VText>
                    </div>

                    <div class="flex flex-row gap-x-4">
                        <Icon
                            name="uil:mailbox"
                            :size="20"
                        />

                        <VText
                            as="p"
                            variant="subbody"
                        >
                            digital.zenup@gmail.com
                        </VText>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
