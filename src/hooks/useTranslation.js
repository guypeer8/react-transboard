import { useState } from 'react';
import { getStore } from "../Providers/Store";

export function useTranslation(locale) { // create state for each locale phrase
    const { translations } = getStore().translationState;
    const localeTranslation = {};
    if (translations[locale]) {
        Object.keys(translations[locale]).forEach(phrase =>
            localeTranslation[phrase] = useState(translations[locale][phrase] || '')
        );
    }

    return localeTranslation;
}
