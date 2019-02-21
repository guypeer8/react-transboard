# react-transboard

- A translation board for making your react app multilingual.
[!See GIF](https://media.giphy.com/media/3gL2vTWy9o4B61dX8U/giphy.gif)

## Installation
```js
npm install --save react-transboard
```

## Usage
### **Top level usage**
- **`react-transboard`** supplies `TranslationProvider`, `Translator` and `TranslationViewer` components. 
    - `TranslationProvider` is the translation context provider of the app.
        - `props`:
            - `dev` is the environment indicator. If true, all relevant widgets will render, otherwise, the current translation will be used without supplying the translation board itself.
            - `dict` is a dictionary built ahead you can supply for components to use.
    - `Translator` is the translation board itself.
    - `TranslationViewer` a cool widget based on `react-state-trace` which lets you see the translation data as you edit it.
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { 
    TranslationProvider, 
    TranslationViewer, 
    Translator,
} from 'react-transboard';
import AppRouter from './router';
import StoreProvider from './store';

const dict = {
    Spanish: {
        hello: 'hola',
        goodbye: 'adios',
    },
    Russian: {
        hello: 'Привет',
        goodbye: 'до свидания',  
    },
};

const dev = window.DEVELOPMENT;

const App = () => (
    <TranslationProvider 
        dev={dev} 
        dict={dict}
    >
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
### **The text in the application**
- **`react-transboard`** supplies the function `t` which you should pass your text to using the base language you want to translate from, so the text in your app will be trackable by the `Translator`.

```js
import React from 'react';
import { t } from 'react-transboard';
import { NavLink } from 'react-router-dom';
import AuthLayout from './Base/AuthLayout';
import LoginForm from './Base/LoginForm';
import LoginMessage from './Base/LoginMessage';

const Login = () => (
    <AuthLayout header={t('Connect to your account')}>
        <LoginForm />
        <LoginMessage>
            <NavLink to='/signup'>
                {t('Join')}
            </NavLink>
        </LoginMessage>
    </AuthLayout>
);

export default Login;
```
### **Translation hooks**
- **`react-transboard`** supplies 2 very useful hooks that expose data and functionality.
    - `useTranslations` lets you extract:
        - `baseLocale` which is the base language you translate from.
        - `translatedLocales` which is an array of the languages you chose to translate to.
        - `translations` which is the object that holds your translations.
        - `translateTo(lang: String)` which is a function you can apply to move to a translation.
    - `useDict` lets you consume the dictionary (if you provided one) provided by `TranslationProvider` component.

```js
import React from 'react';
import { useTranslations, useDict } from 'react-transboard';

const Info = () => {
    const { baseLocale, translatedLocales, translations, translateTo } = useTranslations();
    const HELLO = useDict('hello');
    
    return (
        <div>
            <p>Base Locale: {baseLocale}</p>
            <ul>
                <li>Translatable Locales:</li>
                {translatedLocales.map(locale =>
                    <li key={locale}>{locale}</li>
                )}
            </ul>
            <div>Translations: {JSON.stringify(translations, null, 2)}</div>
            <div>
                <button onClick={() => translateTo('Spanish')}>Spanish</button>
                <button onClick={() => translateTo('Russian')}>Russian</button>
                <button onClick={() => alert(HELLO)}>
                    Say hello in the current language!
                </button>
            </div>
        </div>
    );
};

export default Info;
```
