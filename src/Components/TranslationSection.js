import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import TranslationHeader from './TranslationHeader';
import LocaleTranslator from './LocaleTranslator';
import { getStore } from "../Providers/Store";
import { TRANSLATE_BUTTON } from '../const';

const TranslationSection = React.memo(({
    localeTranslations,
    localeChangeIndicator,
    translateButtonText,
    onSaveTranslation,
}) => {
    const { translations, translating_locale } = getStore().translationState;
    const [changed, setChanged] = localeChangeIndicator;

    const localeHasTranslations = Object.keys(translations[translating_locale] || {}).length > 0;
    console.log(localeChangeIndicator);
    return (
        <TranslationSectionContainer>
            <TranslationHeader/>
            <LocaleTranslatorContainer>
                <LocaleTranslator
                    setChanged={setChanged}
                    localeTranslations={localeTranslations}
                />
                {localeHasTranslations && (
                    <SaveButton
                        color='blue'
                        onClick={onSaveTranslation}
                        disabled={!changed || translateButtonText !== TRANSLATE_BUTTON.PRE}
                    >{translateButtonText}
                    </SaveButton>
                )}
            </LocaleTranslatorContainer>
        </TranslationSectionContainer>
    );
});

TranslationSection.propTypes = {
    localeTranslations: PropTypes.object.isRequired,
    translateButtonText: PropTypes.oneOf(Object.values(TRANSLATE_BUTTON)),
    onSaveTranslation: PropTypes.func.isRequired,
    localeChangeIndicator: PropTypes.arrayOf(localeChangeIndicatorValidator),
};

function localeChangeIndicatorValidator(props, propName, componentName) {
    const baseMessage = `"${componentName}" prop "localeChangeIndicator" must be`;
    if (!Array.isArray(props) || props.length !== 2)
        return new Error(`${baseMessage} an array of length 2`);
    if (typeof props[0] !== 'boolean')
        return new Error(`${baseMessage} a boolean`);
    if (typeof props[1] !== 'function')
        return new Error(`"${baseMessage} a function`);
    return true;
}

const TranslationSectionContainer = styled.div`
    margin: 25px 0;
`;

const LocaleTranslatorContainer = styled.div`
    text-align: center;
`;

const SaveButton = styled(Button)`
    margin-top: 15px !important;
`;

export default TranslationSection;
