import { TRANSLATIONS_KEY } from '../const';
import { deserializeTranslations } from './deserialize';

export const serializeTranslations = (translations = {}, item_name) => {
    try {
        const full_translations = {
            ...deserializeTranslations(),
            ...translations,
        };

        window.localStorage.setItem(
            item_name || TRANSLATIONS_KEY,
            JSON.stringify(full_translations)
        );

        return full_translations;
    }
    catch (e) {
        return {};
    }
};
