import { getStore } from './Providers/Store';

const t = (text) => {
    const { translationState, ___development } = getStore();
    const { translations, translating_locale, base } = translationState;

    if (
        ___development
        && translating_locale
        && translating_locale !== base
        && translations[translating_locale]
        && typeof translations[translating_locale][text] !== 'string'
    ) translations[translating_locale][text] = '';

    if (!base || !translations[translating_locale] || translating_locale === base)
        return text;

    return translations[translating_locale][text];
};

export default t;
