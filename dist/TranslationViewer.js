"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactStateTrace=_interopRequireDefault(require("react-state-trace")),_Store=require("./Providers/Store");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var StateTrace=function(){var a=(0,_Store.getStore)();return a.___development?_react.default.createElement(_reactStateTrace.default,{state:a.translationState}):null},_default=StateTrace;exports.default=_default;