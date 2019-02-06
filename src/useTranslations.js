import { getStore as getTranslationStore } from './Providers/Store';

function useTranslations() {
    const { translationState, dispatchTranslation } = getTranslationStore();
    const { base, translatable_locales, translations } = translationState;

    const translateTo = (locale) => {
        if (base && translatable_locales) {
            dispatchTranslation({
                type: 'SET_TRANSLATING_LOCALE',
                translating_locale: locale,
            });
        }
    };

    return {
        baseLocale: base,
        translatedLocales: translatable_locales,
        translations,
        translateTo,
    };
}

export default useTranslations;