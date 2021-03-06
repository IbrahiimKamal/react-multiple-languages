import { createI18n } from 'react-router-i18n';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['en', 'fr', 'ar'];

// Dictionary of translations
const translations = {
  en: {
    hello: 'Hello',
  },
  fr: {
    hello: 'Bonjour',
  },
  ar: {
    hello: 'مرحبا',
  },
};

const I18n = createI18n(locales, translations);

export default I18n;
