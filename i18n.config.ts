import en from './locales/en.json';
import id from './locales/id.json';

export default defineI18nConfig(() => ({
    locale: 'id',
    fallbackLocale: 'id',
    messages: {
        id,
        en,
    },
}));
