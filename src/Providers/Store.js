import React, { createContext, useContext } from 'react';
import useTranslationStore from '../hooks/useStore';

const TranslationContext = createContext(null);

const TranslationProvider = ({ children, dev }) => {
    const translationStore = useTranslationStore();
    translationStore.___development = dev;

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
};

export default TranslationProvider;
