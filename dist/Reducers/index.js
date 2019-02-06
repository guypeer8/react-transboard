"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.translationInitialState=void 0;var _immer=_interopRequireDefault(require("immer")),_const=require("../const");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var TRANSLATING=window.localStorage.getItem(_const.TRANSLATED_LOCALE_KEY),base=window.localStorage.getItem(_const.BASE_LOCALE_KEY)||null,translating_locale="null"===TRANSLATING?null:TRANSLATING,translatable_locales=JSON.parse(window.localStorage.getItem(_const.TRANSLATABLE_LOCALES_KEY)||"[]"),translations=JSON.parse(window.localStorage.getItem(_const.TRANSLATIONS_KEY)||"{}"),translationInitialState={base:base,translating_locale:translating_locale,translatable_locales:translatable_locales,translations:translations};exports.translationInitialState=translationInitialState;var translationReducer=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:translationInitialState,b=1<arguments.length?arguments[1]:void 0;return(0,_immer.default)(a,function(c){switch(b.type){case"SET_BASE_LOCALE":c.base=b.base;break;case"SET_TRANSLATING_LOCALE":c.translating_locale=b.translating_locale;break;case"SET_TRANSLATABLE_LOCALES":return void(c.translatable_locales=b.locales);case"ADD_TRANSLATABLE_LOCALE":Array.isArray(c.translatable_locales)&&c.translatable_locales.push(b.locale);break;case"SET_TRANSLATIONS":c.translations=_objectSpread({},c.translations,b.translations);break;case"SET_TRANSLATING_DATA":b.base&&(c.base=b.base),b.translating_locale&&(c.translating_locale=b.translating_locale),b.translations&&0<Object.keys(b.translations).length&&(c.translations=_objectSpread({},c.translations,b.translations)),Array.isArray(b.translatable_locales)&&(c.translatable_locales=b.translatable_locales);break;default:return a;}})},_default=translationReducer;exports.default=_default;