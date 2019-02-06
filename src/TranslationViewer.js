import React from 'react';
import StateViewer from 'react-state-trace';
import { getStore as getTranslationStore } from './Providers/Store';

const StateTrace = () => {
    const translationStore = getTranslationStore();
    if (!translationStore.___development)
        return null;

    return <StateViewer state={translationStore.translationState} />;
};

export default StateTrace;
