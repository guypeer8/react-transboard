import { useReducer } from 'react';
import translationReducer, { translationInitialState } from '../Reducers';

function useStore() {
    const [translationState, dispatchTranslation] = useReducer(
        translationReducer,
        translationInitialState
    );

    return {
        translationState,
        dispatchTranslation,
    };
}

export default useStore;
