import React, { useState } from 'react';
import {Button, Dropdown, Icon} from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getStore } from '../../Providers/Store';

const TranslationSetup = React.memo(({ locales, unused_locales, isAddingTranslatable, setIsAddingTranslatable }) => {
    const { translationState, dispatchTranslation } = getStore();
    const { base, translatable_locales } = translationState;

    const [baseLocale, setBaseLocale] = useState(base);
    const [translatableLocales, setTranslatableLocales] = useState(translatable_locales);

    const translate = () => {
        dispatchTranslation({
            type: 'SET_TRANSLATING_DATA',
            base: baseLocale,
            translating_locale: translatableLocales[0],
            translatable_locales: translatableLocales,
        });
        isAddingTranslatable && setIsAddingTranslatable(false);
    };

    return (
        <div>
            <Select
                fluid search selection
                placeholder='Choose a base locale'
                options={locales}
                defaultValue={baseLocale}
                onChange={(e, { value }) =>
                    setBaseLocale(value)
                }
            />
            <Select
                fluid search multiple selection
                placeholder='Choose locales to translate'
                options={unused_locales}
                defaultValue={translatableLocales}
                onChange={(e, { value }) =>
                    setTranslatableLocales(value)
                }
                disabled={!baseLocale}
            />
            <Button
                color='blue'
                onClick={translate}
                disabled={translatableLocales.length === 0}
            ><Icon name='file text' /> Translation Board
            </Button>
        </div>
    );
});

const localeType = PropTypes.arrayOf(
    PropTypes.shape({
        key: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })
);

TranslationSetup.propTypes = {
    locales: localeType,
    unused_locales: localeType,
    isAddingTranslatable: PropTypes.bool.isRequired,
    setIsAddingTranslatable: PropTypes.func.isRequired,
};

export default TranslationSetup;

const Select = styled(Dropdown)`
  margin-bottom: 25px;
`;
