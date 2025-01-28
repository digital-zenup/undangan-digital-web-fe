import type { Feature, NavigationLink, PricingPlan } from '~/types';

export const NAVIGATION_LINKS: NavigationLink[] = [
    {
        name: 'Home',
        hrefName: 'index',
    },
    {
        name: 'Tema',
        hrefName: 'theme',
    },
    {
        name: 'Fitur',
        hrefName: 'feature',
    },
    {
        name: 'Harga',
        hrefName: 'pricing',
    },
    {
        name: 'Tutorial',
        hrefName: 'tutorial',
    },
] as const;

export const TUTORIAL_STEPS: Feature[] = [
    {
        title: '1. Login atau Register',
        description: 'Masukan akun atau mendaftar untuk menyimpan undangan kamu nantinya',
        iconName: 'uil:signin',
    },
    {
        title: '2. Pilih Tema Undangan',
        description: 'Pilih puluhan tema undangan yang disediakan sesuai dengan acara kamu',
        iconName: 'uil:pen',
    },
    {
        title: '3. Isi Informasi',
        description: 'Masukan Informasi undangan berupa kalimat, gambar, atau video',
        iconName: 'uil:file',
    },
    {
        title: '4. Aktifkan Undangan',
        description: 'Aktifkan Undangan yang telah kamu buat dan share kepada teman dan keluarga kamu',
        iconName: 'uil:share',
    },
] as const;

export const FEATURES: Feature[] = [
    {
        title: 'Desain Responsif',
        description: 'Sudah pastinya banyak tema undangan dengan desain yang keren serta responsif untuk semua platform',
        iconName: 'uil-browser',
    },
    {
        title: 'Kustom Kalimat',
        description: 'Bisa memberikan banyak ucapan atau kalimat sesuai dengan keinginan pada tema undangan yang kamu pilih',
        iconName: 'uil-edit',
    },
    {
        title: 'Galeri Foto',
        description: 'Kirimkan momen indah kamu dan pasang pada undangan yang telah kamu buat',
        iconName: 'uil-image',
    },
    {
        title: 'Hitungan Mundur',
        description: 'Masukkan tanggal acara spesial kamu untuk hitung mundur acara spesial kamu',
        iconName: 'uil-clock',
    },
    {
        title: 'Navigasi Lokasi',
        description: 'Berikan navigasi yang akurat, agar para tamu undangan tidak tersesat untuk ke acara spesial kamu',
        iconName: 'uil-map-marker',
    },
    {
        title: 'Background Music',
        description: 'Bebas pilih lagu yang sesuai dengan acara spesial kamu agar lebih eksklusif',
        iconName: 'uil-music',
    },
    {
        title: 'Kustom Domain',
        description: 'Kamu dapat membuat domain undangan kamu sendiri agar lebih eksklusif',
        iconName: 'uil-globe',
    },
    {
        title: 'Berbagi Momen dan Ucapan',
        description: 'Tamu undangan dapat memberikan momen indah berupa mengirimkan gambar dan ucapan',
        iconName: 'uil-gift',
    },
    {
        title: 'Share Undangan',
        description: 'Kamu bisa share undangan kamu kepada tamu undangan dengan mudah dan cepat',
        iconName: 'uil-share-alt',
    },
] as const;

export const PRICING_PLANS: PricingPlan[] = [
    {
        label: 'basic',
        plan: 'lite',
        description: 'Paket untuk kamu yang hanya ingin menyebarkan informasi undangan',
        price: 'Rp. 85.000',
        features: [
            'Desain undangan Standar',
            'Countdown hari',
            'Galeri foto (Max: 4)',
            'Background music (Daftar musik dari zen.up)',
            'Navigasi lokasi akurat',
            'Menambahkan acara ke google calendar',
            'Masa aktif 6 Bulan',
            'Edit kalimat undangan',
        ],
    },
    {
        label: 'popular choice',
        plan: 'premium',
        description: 'Paket untuk kamu yang hanya ingin menyebarkan informasi undangan',
        price: 'Rp. 115.000',
        features: [
            'Desain undangan Premium',
            'Countdown hari',
            'Galeri foto (Unlimited)',
            'Background music (bebas kustom)',
            'Navigasi lokasi akurat',
            'Menambahkan acara ke google calander',
            'Masa aktif selamanya',
            'Edit kalimat undangan',
            'Custom Domain',
            'Buku Tamu',
            'RSVP (Konfirmasi Kehadiran)',
        ],
    },
] as const;
