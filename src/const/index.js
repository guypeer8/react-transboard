const NAMESPACE = '_REACT_TRANSLATOR_GP_';

export * from './locales';

export const BASE_LOCALE_KEY = `${NAMESPACE}.base_locale`;

export const TRANSLATABLE_LOCALES_KEY = `${NAMESPACE}.translatable_locales`;

export const TRANSLATED_LOCALE_KEY = `${NAMESPACE}.translating_locale`;

export const TRANSLATIONS_KEY = `${NAMESPACE}.translations`;

export const TRANSLATE_BUTTON = {
    PRE: 'Save Translation',
    POST: 'Translated!',
};
