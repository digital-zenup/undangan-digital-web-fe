import type { NavigationLink, TutorialStep } from '~/types';

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

export const TUTORIAL_STEPS: TutorialStep[] = [
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
