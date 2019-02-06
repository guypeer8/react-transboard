export function extractTranslation(localeTranslation) {
    const _translation = {};
    Object.keys(localeTranslation).forEach(phrase => {
        if (
            Array.isArray(localeTranslation[phrase])
            && localeTranslation[phrase].length === 2
        ) _translation[phrase] = localeTranslation[phrase][0];
    });

    return _translation;
}