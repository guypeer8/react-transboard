# react-transboard

- A translation board for making your react app multilingual.

## Demo

## Installation
```js
npm install --save react-transboard
```

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import StoreProvider from './store';
import { 
    TranslationProvider, 
    TranslationViewer, 
    Translator,
 } from 'react-transboard';

const App = () => (
    <TranslationProvider dev={window.DEVELOPMENT}>
        <Translator/>
        <TranslationViewer/>
        <StoreProvider>
            <AppRouter/>
        </StoreProvider>
    </TranslationProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
```
