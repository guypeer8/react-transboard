import React, { useState, useEffect } from 'react';
import { Button, Message, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import TranslationNavigator from './Components/TranslationNavigator';
import TranslationSection from './Components/TranslationSection';
import TranslationSetup from './Components/TranslationSetup';
import WidthAdjuster from './Components/WidthAdjuster';
import CloseIcon from './Components/CloseIcon';

import { LOCALES, BASE_LOCALE_KEY, TRANSLATABLE_LOCALES_KEY, TRANSLATED_LOCALE_KEY, TRANSLATE_BUTTON } from '../const';
import { serializeTranslations, buildTranslations, extractTranslation } from '../utils';
import { getStore as getTranslationStore } from '../Providers/Store';
import { useTranslationsTracker } from '../hooks';

const timeoutByLocale = {}; // { locale: timeout }

const Translator = React.memo(() => {
    const { translationState, dispatchTranslation, ___development } = getTranslationStore();
    const { base, translating_locale, translatable_locales, translations } = translationState;

    const locales = LOCALES.map(l => ({ key: l, value: l, text: l }));
    const unused_locales = locales.filter(({ text }) => text !== base);
    unused_locales.forEach(locale => timeoutByLocale[locale] = null);

    const [visible, setVisible] = useState(true);
    const [width, setWidth] = useState(50);
    const [isAddingTranslatable, setIsAddingTranslatable] = useState(false);
    const [translateButtonText, setTranslateButtonText] = useState(TRANSLATE_BUTTON.PRE);
    const { localeTranslations, changedByLocale } = useTranslationsTracker();
    const [showTranslatedJson, toggleTranslatedJson] = useState(false);

    const showTranslatableLocales = !showTranslatedJson && (unused_locales.length > 1);
    const showSetup = isAddingTranslatable || !translating_locale || (translatable_locales.length === 0);

    const updateLocaleChangedStatus = () => {
        setTranslateButtonText(TRANSLATE_BUTTON.POST);
        timeoutByLocale[translating_locale] = window.setTimeout(() => {
            if (timeoutByLocale[translating_locale]) {
                window.clearTimeout(timeoutByLocale[translating_locale]);
                timeoutByLocale[translating_locale] = null;
            }

            const [, setChanged] = changedByLocale[translating_locale];
            setChanged(false);
            setTranslateButtonText(TRANSLATE_BUTTON.PRE)
        }, 1000);
    };

    const saveTranslation = () => {
        const currentLocaleTranslations = localeTranslations[translating_locale];

        const fullLocaleTranslation = {
            [translating_locale]: {
                ...translations[translating_locale],
                ...extractTranslation(currentLocaleTranslations),
            },
        };

        dispatchTranslation({
            type: 'SET_TRANSLATIONS',
            translations: serializeTranslations(fullLocaleTranslation),
        });

        updateLocaleChangedStatus();
    };

    useEffect(
        () => {
            window.localStorage.setItem(TRANSLATED_LOCALE_KEY, translating_locale);

            dispatchTranslation({
                type: 'SET_TRANSLATIONS',
                translations: buildTranslations(
                    translations,
                    translatable_locales
                ),
            });
        },
        [translating_locale]
    );

    useEffect(
        () => {
            if (base)
                window.localStorage.setItem(BASE_LOCALE_KEY, base);
        },
        [base]
    );

    useEffect(
        () => {
            if (translatable_locales)
                window.localStorage.setItem(TRANSLATABLE_LOCALES_KEY, JSON.stringify(translatable_locales));
        },
        [translatable_locales]
    );

    if (!___development)
        return null;

    return (
        <MainContainer
            width={width}
            visible={visible}
        >
            <CloseIcon
                onClose={() => setVisible(false)}
            />
            {showSetup && (
                <TranslationSetup
                    locales={locales}
                    unused_locales={unused_locales}
                    isAddingTranslatable={isAddingTranslatable}
                    setIsAddingTranslatable={setIsAddingTranslatable}
                />
            )}
            {!showSetup && (
                <div>
                    <TranslationNavigator
                        showTranslatedJson={showTranslatedJson}
                        toggleTranslatedJson={toggleTranslatedJson}
                        setIsAddingTranslatable={setIsAddingTranslatable}
                    />
                    {showTranslatableLocales && (
                        <div>
                            <Button.Group>
                                {translatable_locales.map(loc =>
                                    <Button
                                        key={loc}
                                        active={translating_locale === loc}
                                        onClick={() => dispatchTranslation({
                                            type: 'SET_TRANSLATING_LOCALE',
                                            translating_locale: loc,
                                        })}
                                    >{loc}
                                    </Button>
                                )}
                            </Button.Group>
                        </div>
                    )}
                    <WidthAdjuster
                        width={width}
                        setWidth={setWidth}
                    />
                    {showTranslatedJson && <pre>{JSON.stringify(translations, null, 4)}</pre>}
                    {(base === translating_locale) && (
                        <Message size='small'>
                            <Icon name='exclamation circle' />
                            In order to translate, navigate to a none base locale.
                        </Message>
                    )}
                    {!showTranslatedJson && (base !== translating_locale) && (
                        <TranslationSection
                            showTranslatedJson={showTranslatedJson}
                            localeTranslations={localeTranslations[translating_locale] || {}}
                            localeChangeIndicator={changedByLocale[translating_locale]}
                            translateButtonText={translateButtonText}
                            onSaveTranslation={saveTranslation}
                        />
                    )}
                </div>
            )}
        </MainContainer>
    );
});

export default Translator;

const MainContainer = styled.div`
    max-height: 880px;
    min-height: 440px;
    position: fixed;
    bottom: 0;
    right: 0;
    overflow: auto;
    background: black;
    color: white;
    padding: 25px 30px;
    z-index: 1;
    width: ${props => props.width}%;
    display: ${props => props.visible ? '' : 'none'};
`;
