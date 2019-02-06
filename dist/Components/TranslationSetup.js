"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_semanticUiReact=require("semantic-ui-react"),_styledComponents=_interopRequireDefault(require("styled-components")),_propTypes=_interopRequireDefault(require("prop-types")),_Store=require("../Providers/Store");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _templateObject(){var a=_taggedTemplateLiteral(["\n  margin-bottom: 25px;\n"]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}var TranslationSetup=_react.default.memo(function(a){var b=a.locales,c=a.unused_locales,d=a.isAddingTranslatable,e=a.setIsAddingTranslatable,f=(0,_Store.getStore)(),g=f.translationState,h=f.dispatchTranslation,i=g.base,j=g.translatable_locales,k=(0,_react.useState)(i),l=_slicedToArray(k,2),m=l[0],n=l[1],o=(0,_react.useState)(j),p=_slicedToArray(o,2),q=p[0],r=p[1];return _react.default.createElement("div",null,_react.default.createElement(Select,{fluid:!0,search:!0,selection:!0,placeholder:"Choose a base locale",options:b,defaultValue:m,onChange:function(a,b){var c=b.value;return n(c)}}),_react.default.createElement(Select,{fluid:!0,search:!0,multiple:!0,selection:!0,placeholder:"Choose locales to translate",options:c,defaultValue:q,onChange:function(a,b){var c=b.value;return r(c)},disabled:!m}),_react.default.createElement(_semanticUiReact.Button,{color:"blue",onClick:function(){h({type:"SET_TRANSLATING_DATA",base:m,translating_locale:q[0],translatable_locales:q}),d&&e(!1)},disabled:0===q.length},_react.default.createElement(_semanticUiReact.Icon,{name:"file text"})," Translation Board"))}),localeType=_propTypes.default.arrayOf(_propTypes.default.shape({key:_propTypes.default.string.isRequired,text:_propTypes.default.string.isRequired,value:_propTypes.default.string.isRequired}));TranslationSetup.propTypes={locales:localeType,unused_locales:localeType,isAddingTranslatable:_propTypes.default.bool.isRequired,setIsAddingTranslatable:_propTypes.default.func.isRequired};var _default=TranslationSetup;exports.default=_default;var Select=(0,_styledComponents.default)(_semanticUiReact.Dropdown)(_templateObject());