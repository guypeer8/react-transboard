"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_semanticUiReact=require("semantic-ui-react"),_styledComponents=_interopRequireDefault(require("styled-components")),_propTypes=_interopRequireDefault(require("prop-types")),_Store=require("../Providers/Store");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _templateObject3(){var a=_taggedTemplateLiteral(["\n    position: absolute;\n    left: -9999px;\n"]);return _templateObject3=function(){return a},a}function _templateObject2(){var a=_taggedTemplateLiteral(["\n    font-weight: 700 !important;\n"]);return _templateObject2=function(){return a},a}function _templateObject(){var a=_taggedTemplateLiteral(["\n    margin-bottom: 15px;\n"]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}var TranslationNavigator=_react.default.memo(function(a){var b=a.showTranslatedJson,c=a.toggleTranslatedJson,d=a.setIsAddingTranslatable,e=(0,_Store.getStore)(),f=e.translationState,g=f.translations,h=(0,_react.useState)(!1),i=_slicedToArray(h,2),j=i[0],k=i[1],l=(0,_react.useRef)(),m=function(){k(!0),window.setTimeout(function(){return k(!1)},1200)};return(0,_react.useEffect)(function(){l.current.value=JSON.stringify(g||{},null,2)}),_react.default.createElement(TranslationNavigatorContainer,null,_react.default.createElement(_semanticUiReact.Button,{inverted:!0,color:"grey",onClick:function(){return c(!b)}},b?_react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_semanticUiReact.Icon,{name:"arrow left"})," Translation Board"):_react.default.createElement(_react.default.Fragment,null,"Translated JSON ",_react.default.createElement(_semanticUiReact.Icon,{name:"arrow right"}))),_react.default.createElement(BoldButton,{basic:!0,color:"blue",onClick:function(){l.current.select(),document.execCommand("copy"),m()},disabled:j},_react.default.createElement(_semanticUiReact.Icon,{name:"copy"})," ",j?"Copied!":"Copy Translations"),_react.default.createElement(_semanticUiReact.Button,{basic:!0,color:"green",onClick:function(){return d(!0)}},_react.default.createElement(_semanticUiReact.Icon,{name:"plus"})," Add Locale"),_react.default.createElement(Textarea,{ref:l}))});TranslationNavigator.propTypes={showTranslatedJson:_propTypes.default.bool.isRequired,toggleTranslatedJson:_propTypes.default.func.isRequired,setIsAddingTranslatable:_propTypes.default.func.isRequired};var _default=TranslationNavigator;exports.default=_default;var TranslationNavigatorContainer=_styledComponents.default.div(_templateObject()),BoldButton=(0,_styledComponents.default)(_semanticUiReact.Button)(_templateObject2()),Textarea=_styledComponents.default.textarea(_templateObject3());