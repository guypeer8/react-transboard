import { deserializeTranslations } from './deserialize';
import { serializeTranslations } from './serialize';

export function buildTranslations(translations, translatable_locales) {
    const _translations = {
        ...deserializeTranslations(),
        ...translations,
    };

    translatable_locales.forEach(locale =>
        _translations[locale] = _translations[locale] || {}
    );

    return serializeTranslations(_translations);
}
