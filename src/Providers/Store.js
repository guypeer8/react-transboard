import React, { createContext, useContext } from 'react';
import useTranslationStore from '../hooks/useStore';

const TranslationContext = createContext(null);

const TranslationProvider = ({ children, dev, dict }) => {
    const translationStore = useTranslationStore();
    translationStore.___development = dev;
    translationStore.___dict = dict;

    return (
        <TranslationContext.Provider value={translationStore}>
            {children}
        </TranslationContext.Provider>
    );
};

export const getStore = () =>
    useContext(TranslationContext);

TranslationProvider.defaultProps = {
    dev: true,
    dict: null,
};

export default TranslationProvider;
