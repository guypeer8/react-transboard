import { useTranslation } from "./useTranslation";
import { getStore } from "../Providers/Store";
import { useState } from "react";

export function useTranslationsTracker() {
    const { translatable_locales } = getStore().translationState;

    const localeTranslations = {}; // { locale: { phrase: useState(phrase) } }
    const changedByLocale = {}; // { locale: useState(false) }

    translatable_locales.forEach(locale => {
        localeTranslations[locale] = useTranslation(locale);
        changedByLocale[locale] = useState(false);
    });

    return {
        localeTranslations,
        changedByLocale,
    };
}
