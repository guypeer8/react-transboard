import produce from 'immer';

import {
    BASE_LOCALE_KEY,
    TRANSLATABLE_LOCALES_KEY,
    TRANSLATED_LOCALE_KEY,
    TRANSLATIONS_KEY,
} from '../const';

const TRANSLATING = window.localStorage.getItem(TRANSLATED_LOCALE_KEY);
const base = window.localStorage.getItem(BASE_LOCALE_KEY) || null;
const translating_locale = TRANSLATING === 'null' ? null : TRANSLATING;
const translatable_locales = JSON.parse(window.localStorage.getItem(TRANSLATABLE_LOCALES_KEY) || '[]');
const translations = JSON.parse(window.localStorage.getItem(TRANSLATIONS_KEY) || '{}');

export const translationInitialState = {
    base,
    translating_locale,
    translatable_locales,
    translations,
};

const translationReducer = (state = translationInitialState, action) => produce(state, _state => {
    switch (action.type) {
        case 'SET_BASE_LOCALE':
            _state.base = action.base;
            break;

        case 'SET_TRANSLATING_LOCALE':
            _state.translating_locale = action.translating_locale;
            break;

        case 'SET_TRANSLATABLE_LOCALES':
            _state.translatable_locales = action.locales;
            return;

        case 'ADD_TRANSLATABLE_LOCALE':
            if (Array.isArray(_state.translatable_locales))
                _state.translatable_locales.push(action.locale);
            break;

        case 'SET_TRANSLATIONS':
            _state.translations = { ..._state.translations, ...action.translations };
            break;

        case 'SET_TRANSLATING_DATA':
            if (action.base)
                _state.base = action.base;
            if (action.translating_locale)
                _state.translating_locale = action.translating_locale;
            if (action.translations && Object.keys(action.translations).length > 0)
                _state.translations = { ..._state.translations, ...action.translations };
            if (Array.isArray(action.translatable_locales))
                _state.translatable_locales = action.translatable_locales;
            break;

        default:
            return state;
    }
});

export default translationReducer;
