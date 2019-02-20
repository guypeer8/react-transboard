import React from 'react';
import { Header } from "semantic-ui-react";
import { getStore } from "../../Providers/Store";

const TranslationHeader = () => {
    const { base } = getStore().translationState;

    return (
        <Header
            as='h4'
            color='grey'
            textAlign='center'
            inverted
        >
            <span>Base Language:</span>
            <strong style={style}>"{base}"</strong>
        </Header>
    );
};

const style = {
    fontSize: 17,
    marginLeft: 5,
};

export default TranslationHeader;
