import { TRANSLATIONS_KEY } from '../const';

export const deserializeTranslations = (item_name) => {
    try {
        const translations = window.localStorage.getItem(
            item_name || TRANSLATIONS_KEY
        );

        return JSON.parse(translations || '{}');
    }
    catch (e) {
        return {};
    }
};
