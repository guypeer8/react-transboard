"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useTranslation=useTranslation;var _react=require("react"),_Store=require("../Providers/Store");function useTranslation(a){var b=(0,_Store.getStore)().translationState.translations,c={};return b[a]&&Object.keys(b[a]).forEach(function(d){return c[d]=(0,_react.useState)(b[a][d]||"")}),c}