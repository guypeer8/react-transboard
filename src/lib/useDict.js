import { getStore as getTranslationStore } from '../Providers/Store';

function useDict(...section) {
    const { ___dict, translationState } = getTranslationStore();
    const { translating_locale } = translationState;

    if (!___dict)
        throw new Error('"useDict" can only work when a "dict" prop is passed to the "TranslationProvider"');

    if (!___dict[translating_locale]) {
        throw new Error(`You need to pass "${translating_locale}" as a key to the "dict" prop you passed into "TranslationProvider", the format needs to be: { ${translating_locale}: {...} }, null, 2)}`);
    }

    let dict = {...___dict[translating_locale]};
    section.forEach(s => dict = dict[s]);
    return dict;
}

export default useDict;
