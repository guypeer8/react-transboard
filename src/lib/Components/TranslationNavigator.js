import React, { useRef, useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getStore as getTranslationStore } from '../../Providers/Store';

const TranslationNavigator = React.memo(({ showTranslatedJson, toggleTranslatedJson, setIsAddingTranslatable }) => {
    const { translationState } = getTranslationStore();
    const { translations } = translationState;

    const [copied, setCopied] = useState(false);
    const copyInputRef = useRef();

    const copyToClipboard = () => {
        copyInputRef.current.select();
        document.execCommand('copy');
        onPostCopy();
    };

    const onPostCopy = () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1200);
    };

    useEffect(() => {
        copyInputRef.current.value = JSON.stringify(translations || {}, null, 2);
    });

    return (
        <TranslationNavigatorContainer>
            <Button
                inverted
                color='grey'
                onClick={() =>
                    toggleTranslatedJson(!showTranslatedJson)
                }
            >{!showTranslatedJson
                ? <>Translated JSON <Icon name='arrow right' /></>
                : <><Icon name='arrow left' /> Translation Board</>
            }</Button>
            <BoldButton
                basic
                color='blue'
                onClick={copyToClipboard}
                disabled={copied}
            ><Icon name='copy' /> {copied ? 'Copied!' : 'Copy Translations'}
            </BoldButton>
            <Button
                basic
                color='green'
                onClick={() =>
                    setIsAddingTranslatable(true)
                }
            ><Icon name='plus' /> Add Locale
            </Button>
            <Textarea ref={copyInputRef} />
        </TranslationNavigatorContainer>
    );
});

TranslationNavigator.propTypes = {
    showTranslatedJson: PropTypes.bool.isRequired,
    toggleTranslatedJson: PropTypes.func.isRequired,
    setIsAddingTranslatable: PropTypes.func.isRequired,
};

export default TranslationNavigator;

const TranslationNavigatorContainer = styled.div`
    margin-bottom: 15px;
`;

const BoldButton = styled(Button)`
    font-weight: 700 !important;
`;

const Textarea = styled.textarea`
    position: absolute;
    left: -9999px;
`;
