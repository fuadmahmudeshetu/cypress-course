(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        // -----------------------------------------------------------------------------
        var enableScopeAPI = false; // Experimental Create Event Handle API.
        var enableCacheElement = false;
        var enableTransitionTracing = false; // No known bugs, but needs performance testing
        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        // stuff. Intended to enable React core members to more easily debug scheduling
        // issues in DEV builds.
        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
        var REACT_MODULE_REFERENCE;
        {
            REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
        }
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
                    return true;
                }
            }
            return false;
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                            case REACT_SUSPENSE_LIST_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_SERVER_CONTEXT_TYPE:
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
                }
            }
            return false;
        }
        function isConcurrentMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
                    hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
                }
            }
            return false;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
            return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) for(t = 0; t < e.length; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else for(t in e)e[t] && (n && (n += " "), n += t);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = ""; f < arguments.length;)(e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>chainPropTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function chainPropTypes(propType1, propType2) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return function validate(...args) {
        return propType1(...args) || propType2(...args);
    };
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript) <export default as chainPropTypes>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chainPropTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>composeClasses
]);
function composeClasses(slots, getUtilityClass, classes = undefined) {
    const output = {};
    Object.keys(slots).forEach(// `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot)=>{
        output[slot] = slots[slot].reduce((acc, key)=>{
            if (key) {
                const utilityClass = getUtilityClass(key);
                if (utilityClass !== '') {
                    acc.push(utilityClass);
                }
                if (classes && classes[key]) {
                    acc.push(classes[key]);
                }
            }
            return acc;
        }, []).join(' ');
    });
    return output;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript) <export default as unstable_composeClasses>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_composeClasses",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPropValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-client] (ecmascript)");
;
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var isPropValid = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js [app-client] (ecmascript) <export w as withEmotionCache>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withEmotionCache",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c39617d8$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c39617d8$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createStyled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c39617d8$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__withEmotionCache$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js [app-client] (ecmascript) <export w as withEmotionCache>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c39617d8$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__ThemeContext$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js [app-client] (ecmascript) <export T as ThemeContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var testOmitPropsOnStringTag = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
    return key !== 'theme';
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
    var shouldForwardProp;
    if (options) {
        var optionsShouldForwardProp = options.shouldForwardProp;
        shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
            return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
        } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp !== 'function' && isReal) {
        shouldForwardProp = tag.__emotion_forwardProp;
    }
    return shouldForwardProp;
};
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerStyles"])(cache, serialized, isStringTag);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffectAlwaysWithSyncFallback"])({
        "Insertion.useInsertionEffectAlwaysWithSyncFallback": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serialized, isStringTag);
        }
    }["Insertion.useInsertionEffectAlwaysWithSyncFallback"]);
    return null;
};
var createStyled = function createStyled(tag, options) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (tag === undefined) {
            throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
        }
    }
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== undefined) {
        identifierName = options.label;
        targetClassName = options.target;
    }
    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    return function() {
        var args = arguments;
        var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
        if (identifierName !== undefined) {
            styles.push("label:" + identifierName + ";");
        }
        if (args[0] == null || args[0].raw === undefined) {
            styles.push.apply(styles, args);
        } else {
            if (("TURBOPACK compile-time value", "development") !== 'production' && args[0][0] === undefined) {
                console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            }
            styles.push(args[0][0]);
            var len = args.length;
            var i = 1;
            for(; i < len; i++){
                if (("TURBOPACK compile-time value", "development") !== 'production' && args[0][i] === undefined) {
                    console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
                }
                styles.push(args[i], args[0][i]);
            }
        } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class
        var Styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c39617d8$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__withEmotionCache$3e$__["withEmotionCache"])(function(props, cache, ref) {
            var FinalTag = shouldUseAs && props.as || baseTag;
            var className = '';
            var classInterpolations = [];
            var mergedProps = props;
            if (props.theme == null) {
                mergedProps = {};
                for(var key in props){
                    mergedProps[key] = props[key];
                }
                mergedProps.theme = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c39617d8$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__ThemeContext$3e$__["ThemeContext"]);
            }
            if (typeof props.className === 'string') {
                className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegisteredStyles"])(cache.registered, classInterpolations, props.className);
            } else if (props.className != null) {
                className = props.className + " ";
            }
            var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeStyles"])(styles.concat(classInterpolations), cache.registered, mergedProps);
            className += cache.key + "-" + serialized.name;
            if (targetClassName !== undefined) {
                className += " " + targetClassName;
            }
            var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
            var newProps = {};
            for(var _key in props){
                if (shouldUseAs && _key === 'as') continue;
                if (finalShouldForwardProp(_key)) {
                    newProps[_key] = props[_key];
                }
            }
            newProps.className = className;
            newProps.ref = ref;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Insertion, {
                cache: cache,
                serialized: serialized,
                isStringTag: typeof FinalTag === 'string'
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](FinalTag, newProps));
        });
        Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
        Styled.defaultProps = tag.defaultProps;
        Styled.__emotion_real = Styled;
        Styled.__emotion_base = baseTag;
        Styled.__emotion_styles = styles;
        Styled.__emotion_forwardProp = shouldForwardProp;
        Object.defineProperty(Styled, 'toString', {
            value: function value() {
                if (targetClassName === undefined && ("TURBOPACK compile-time value", "development") !== 'production') {
                    return 'NO_COMPONENT_SELECTOR';
                } // $FlowFixMe: coerce undefined to string
                return "." + targetClassName;
            }
        });
        Styled.withComponent = function(nextTag, nextOptions) {
            return createStyled(nextTag, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, options, nextOptions, {
                shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
            })).apply(void 0, styles);
        };
        return Styled;
    };
};
;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>newStyled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$styled$2f$base$2f$dist$2f$emotion$2d$styled$2d$base$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var tags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
];
var newStyled = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$styled$2f$base$2f$dist$2f$emotion$2d$styled$2d$base$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind();
tags.forEach(function(tagName) {
    // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
    newStyled[tagName] = newStyled(tagName);
});
;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/styled-engine/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styled,
    "internal_processStyles",
    ()=>internal_processStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-disable no-underscore-dangle */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js [app-client] (ecmascript)");
;
function styled(tag, options) {
    const stylesFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tag, options);
    if ("TURBOPACK compile-time truthy", 1) {
        return (...styles)=>{
            const component = typeof tag === 'string' ? `"${tag}"` : 'component';
            if (styles.length === 0) {
                console.error([
                    `MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`,
                    'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'
                ].join('\n'));
            } else if (styles.some((style)=>style === undefined)) {
                console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
            }
            return stylesFactory(...styles);
        };
    }
    //TURBOPACK unreachable
    ;
}
const internal_processStyles = (tag, processor)=>{
    // Emotion attaches all the styles as `__emotion_styles`.
    // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
    if (Array.isArray(tag.__emotion_styles)) {
        tag.__emotion_styles = processor(tag.__emotion_styles);
    }
};
;
;
;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/getDisplayName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getDisplayName,
    "getFunctionName",
    ()=>getFunctionName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-is/index.js [app-client] (ecmascript)");
;
// Simplified polyfill for IE11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
    const match = `${fn}`.match(fnNameMatchRegex);
    const name = match && match[1];
    return name || '';
}
function getFunctionComponentName(Component, fallback = '') {
    return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
    if (Component == null) {
        return undefined;
    }
    if (typeof Component === 'string') {
        return Component;
    }
    if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
    }
    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
        switch(Component.$$typeof){
            case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForwardRef"]:
                return getWrappedName(Component, Component.render, 'ForwardRef');
            case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Memo"]:
                return getWrappedName(Component, Component.type, 'memo');
            default:
                return undefined;
        }
    }
    return undefined;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/getDisplayName.js [app-client] (ecmascript) <export default as getDisplayName>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDisplayName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/getDisplayName.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/propsToClassKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>propsToClassKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_capitalize$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-client] (ecmascript) <export default as unstable_capitalize>");
;
const _excluded = [
    "variant"
];
;
function isEmpty(string) {
    return string.length === 0;
}
function propsToClassKey(props) {
    const { variant } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    let classKey = variant || '';
    Object.keys(other).sort().forEach((key)=>{
        if (key === 'color') {
            classKey += isEmpty(classKey) ? props[key] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_capitalize$3e$__["unstable_capitalize"])(props[key]);
        } else {
            classKey += `${isEmpty(classKey) ? key : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_capitalize$3e$__["unstable_capitalize"])(key)}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_capitalize$3e$__["unstable_capitalize"])(props[key].toString())}`;
        }
    });
    return classKey;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/createStyled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createStyled,
    "shouldForwardProp",
    ()=>shouldForwardProp,
    "systemDefaultTheme",
    ()=>systemDefaultTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
/* eslint-disable no-underscore-dangle */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/styled-engine/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__getDisplayName$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/getDisplayName.js [app-client] (ecmascript) <export default as getDisplayName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/createTheme/createTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$propsToClassKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/propsToClassKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-client] (ecmascript)");
;
;
const _excluded = [
    "name",
    "slot",
    "skipVariantsResolver",
    "skipSx",
    "overridesResolver"
];
;
;
;
;
;
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
}
const getStyleOverrides = (name, theme)=>{
    if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
        return theme.components[name].styleOverrides;
    }
    return null;
};
const getVariantStyles = (name, theme)=>{
    let variants = [];
    if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
        variants = theme.components[name].variants;
    }
    const variantsStyles = {};
    variants.forEach((definition)=>{
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$propsToClassKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(definition.props);
        variantsStyles[key] = definition.style;
    });
    return variantsStyles;
};
const variantsResolver = (props, styles, theme, name)=>{
    var _theme$components;
    const { ownerState = {} } = props;
    const variantsStyles = [];
    const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[name]) == null ? void 0 : _theme$components.variants;
    if (themeVariants) {
        themeVariants.forEach((themeVariant)=>{
            let isMatch = true;
            Object.keys(themeVariant.props).forEach((key)=>{
                if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
                    isMatch = false;
                }
            });
            if (isMatch) {
                variantsStyles.push(styles[(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$propsToClassKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(themeVariant.props)]);
            }
        });
    }
    return variantsStyles;
};
function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
const lowercaseFirstLetter = (string)=>{
    return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({ defaultTheme, theme, themeId }) {
    return isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
}
function createStyled(input = {}) {
    const { themeId, defaultTheme = systemDefaultTheme, rootShouldForwardProp = shouldForwardProp, slotShouldForwardProp = shouldForwardProp } = input;
    const systemSx = (props)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
            theme: resolveTheme((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                defaultTheme,
                themeId
            }))
        }));
    };
    systemSx.__mui_systemSx = true;
    return (tag, inputOptions = {})=>{
        // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_processStyles"])(tag, (styles)=>styles.filter((style)=>!(style != null && style.__mui_systemSx)));
        const { name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, overridesResolver } = inputOptions, options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputOptions, _excluded);
        // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
        const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
        const skipSx = inputSkipSx || false;
        let label;
        if ("TURBOPACK compile-time truthy", 1) {
            if (componentName) {
                label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
            }
        }
        let shouldForwardPropOption = shouldForwardProp;
        if (componentSlot === 'Root') {
            shouldForwardPropOption = rootShouldForwardProp;
        } else if (componentSlot) {
            // any other slot specified
            shouldForwardPropOption = slotShouldForwardProp;
        } else if (isStringTag(tag)) {
            // for string (html) tag, preserve the behavior in emotion & styled-components.
            shouldForwardPropOption = undefined;
        }
        const defaultStyledResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(tag, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            shouldForwardProp: shouldForwardPropOption,
            label
        }, options));
        const muiStyledResolver = (styleArg, ...expressions)=>{
            const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg)=>{
                // On the server Emotion doesn't use React.forwardRef for creating components, so the created
                // component stays as a function. This condition makes sure that we do not interpolate functions
                // which are basically components used as a selectors.
                return typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg ? (props)=>{
                    return stylesArg((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                        theme: resolveTheme((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                            defaultTheme,
                            themeId
                        }))
                    }));
                } : stylesArg;
            }) : [];
            let transformedStyleArg = styleArg;
            if (componentName && overridesResolver) {
                expressionsWithDefaultTheme.push((props)=>{
                    const theme = resolveTheme((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                        defaultTheme,
                        themeId
                    }));
                    const styleOverrides = getStyleOverrides(componentName, theme);
                    if (styleOverrides) {
                        const resolvedStyleOverrides = {};
                        Object.entries(styleOverrides).forEach(([slotKey, slotStyle])=>{
                            resolvedStyleOverrides[slotKey] = typeof slotStyle === 'function' ? slotStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                                theme
                            })) : slotStyle;
                        });
                        return overridesResolver(props, resolvedStyleOverrides);
                    }
                    return null;
                });
            }
            if (componentName && !skipVariantsResolver) {
                expressionsWithDefaultTheme.push((props)=>{
                    const theme = resolveTheme((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                        defaultTheme,
                        themeId
                    }));
                    return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
                });
            }
            if (!skipSx) {
                expressionsWithDefaultTheme.push(systemSx);
            }
            const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
            if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
                const placeholders = new Array(numOfCustomFnsApplied).fill('');
                // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
                transformedStyleArg = [
                    ...styleArg,
                    ...placeholders
                ];
                transformedStyleArg.raw = [
                    ...styleArg.raw,
                    ...placeholders
                ];
            } else if (typeof styleArg === 'function' && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
            // component stays as a function. This condition makes sure that we do not interpolate functions
            // which are basically components used as a selectors.
            styleArg.__emotion_real !== styleArg) {
                // If the type is function, we need to define the default theme.
                transformedStyleArg = (props)=>styleArg((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                        theme: resolveTheme((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                            defaultTheme,
                            themeId
                        }))
                    }));
            }
            const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
            if ("TURBOPACK compile-time truthy", 1) {
                let displayName;
                if (componentName) {
                    displayName = `${componentName}${componentSlot || ''}`;
                }
                if (displayName === undefined) {
                    displayName = `Styled(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__getDisplayName$3e$__["getDisplayName"])(tag)})`;
                }
                Component.displayName = displayName;
            }
            if (tag.muiName) {
                Component.muiName = tag.muiName;
            }
            return Component;
        };
        if (defaultStyledResolver.withConfig) {
            muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
        }
        return muiStyledResolver;
    };
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/createStyled.js [app-client] (ecmascript) <export default as createStyled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStyled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/createStyled.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "rootShouldForwardProp",
    ()=>rootShouldForwardProp,
    "slotShouldForwardProp",
    ()=>slotShouldForwardProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createStyled$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/createStyled.js [app-client] (ecmascript) <export default as createStyled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/createStyled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/defaultTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/identifier.js [app-client] (ecmascript)");
'use client';
;
;
;
const rootShouldForwardProp = (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldForwardProp"])(prop) && prop !== 'classes';
const slotShouldForwardProp = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldForwardProp"];
const styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createStyled$3e$__["createStyled"])({
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    defaultTheme: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    rootShouldForwardProp
});
const __TURBOPACK__default__export__ = styled;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    disabled: false
};
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/utils/PropTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classNamesShape",
    ()=>classNamesShape,
    "timeoutsShape",
    ()=>timeoutsShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
var timeoutsShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        appear: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
    }).isRequired
]) : "TURBOPACK unreachable";
var classNamesShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        active: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        enterDone: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        enterActive: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exitDone: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exitActive: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    })
]) : "TURBOPACK unreachable";
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/utils/reflow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceReflow",
    ()=>forceReflow
]);
var forceReflow = function forceReflow(node) {
    return node.scrollTop;
};
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/Transition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTERED",
    ()=>ENTERED,
    "ENTERING",
    ()=>ENTERING,
    "EXITED",
    ()=>EXITED,
    "EXITING",
    ()=>EXITING,
    "UNMOUNTED",
    ()=>UNMOUNTED,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/utils/PropTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/utils/reflow.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var Transition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = EXITED;
                _this.appearStatus = ENTERING;
            } else {
                initialStatus = ENTERED;
            }
        } else {
            if (props.unmountOnExit || props.mountOnEnter) {
                initialStatus = UNMOUNTED;
            } else {
                initialStatus = EXITED;
            }
        }
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
            return {
                status: EXITED
            };
        }
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== ENTERING && status !== ENTERED) {
                    nextStatus = ENTERING;
                }
            } else {
                if (status === ENTERING || status === ENTERED) {
                    nextStatus = EXITING;
                }
            }
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== 'number') {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
            mounting = false;
        }
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === ENTERING) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forceReflow"])(node);
                }
                this.performEnter(mounting);
            } else {
                this.performExit();
            }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
            this.setState({
                status: UNMOUNTED
            });
        }
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: ENTERED
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: ENTERING
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: ENTERED
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: EXITED
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: EXITING
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: EXITED
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
        }
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
            return null;
        }
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: null
        }, typeof children === 'function' ? children(status, childProps) : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.only(children), childProps)));
    };
    return Transition;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
Transition.contextType = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Transition.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */ nodeRef: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        current: typeof Element === 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any : function(propValue, key, componentName, location, propFullName, secret) {
            var value = propValue[key];
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
        }
    }),
    /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].element.isRequired
    ]).isRequired,
    /**
   * Show the component; triggers the enter or exit states
   */ in: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */ mountOnEnter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */ unmountOnExit: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable enter transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable exit transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */ timeout: function timeout(props) {
        var pt = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutsShape"];
        if (!props.addEndListener) pt = pt.isRequired;
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return pt.apply(void 0, [
            props
        ].concat(args));
    },
    /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */ addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable"; // Name the function so it is clearer in the documentation
function noop() {}
Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const __TURBOPACK__default__export__ = Transition;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/Transition.js [app-client] (ecmascript) <export default as Transition>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/Transition.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/elementTypeAcceptingRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript)");
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null || // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for emotion compat.
    // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
    typeof window === 'undefined') {
        return null;
    }
    let warningHint;
    /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */ if (typeof propValue === 'function' && !isClassComponent(propValue)) {
        warningHint = 'Did you accidentally provide a plain function component instead?';
    }
    if (warningHint !== undefined) {
        return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element type that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType, elementTypeAcceptingRef);
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/elementTypeAcceptingRef.js [app-client] (ecmascript) <export default as elementTypeAcceptingRef>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "elementTypeAcceptingRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$elementTypeAcceptingRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$elementTypeAcceptingRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/elementTypeAcceptingRef.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/transitions/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransitionProps",
    ()=>getTransitionProps,
    "reflow",
    ()=>reflow
]);
const reflow = (node)=>node.scrollTop;
function getTransitionProps(props, options) {
    var _style$transitionDura, _style$transitionTimi;
    const { timeout, easing, style = {} } = props;
    return {
        duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
        easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
        delay: style.transitionDelay
    };
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/useTheme.js [app-client] (ecmascript) <export default as useTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/useTheme.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useTheme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/defaultTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/identifier.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useTheme() {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"](theme);
    }
    return theme[__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]] || theme;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/setRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */ __turbopack_context__.s([
    "default",
    ()=>setRef
]);
function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useForkRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$setRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/setRef.js [app-client] (ecmascript)");
'use client';
;
;
function useForkRef(...refs) {
    /**
   * This will create a new function if the refs passed to this hook change and are all defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */ return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useForkRef.useMemo": ()=>{
            if (refs.every({
                "useForkRef.useMemo": (ref)=>ref == null
            }["useForkRef.useMemo"])) {
                return null;
            }
            return ({
                "useForkRef.useMemo": (instance)=>{
                    refs.forEach({
                        "useForkRef.useMemo": (ref)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$setRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref, instance);
                        }
                    }["useForkRef.useMemo"]);
                }
            })["useForkRef.useMemo"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useForkRef.useMemo"], refs);
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [app-client] (ecmascript) <export default as unstable_useForkRef>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_useForkRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useForkRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useForkRef$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [app-client] (ecmascript) <export default as unstable_useForkRef>");
'use client';
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useForkRef$3e$__["unstable_useForkRef"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useForkRef.js [app-client] (ecmascript) <export default as useForkRef>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForkRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useForkRef.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>generateUtilityClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
    const result = {};
    slots.forEach((slot)=>{
        result[slot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(componentName, slot, globalStatePrefix);
    });
    return result;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript) <export default as unstable_generateUtilityClasses>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_generateUtilityClasses",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Collapse/collapseClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getCollapseUtilityClass",
    ()=>getCollapseUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript) <export default as unstable_generateUtilityClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getCollapseUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCollapse', slot);
}
const collapseClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__["unstable_generateUtilityClasses"])('MuiCollapse', [
    'root',
    'horizontal',
    'vertical',
    'entered',
    'hidden',
    'wrapper',
    'wrapperInner'
]);
const __TURBOPACK__default__export__ = collapseClasses;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Collapse/Collapse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Transition$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/Transition.js [app-client] (ecmascript) <export default as Transition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$elementTypeAcceptingRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__elementTypeAcceptingRef$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/elementTypeAcceptingRef.js [app-client] (ecmascript) <export default as elementTypeAcceptingRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript) <export default as unstable_composeClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTransitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/createTransitions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/transitions/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForkRef$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useForkRef.js [app-client] (ecmascript) <export default as useForkRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Collapse$2f$collapseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Collapse/collapseClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const _excluded = [
    "addEndListener",
    "children",
    "className",
    "collapsedSize",
    "component",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "orientation",
    "style",
    "timeout",
    "TransitionComponent"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { orientation, classes } = ownerState;
    const slots = {
        root: [
            'root',
            `${orientation}`
        ],
        entered: [
            'entered'
        ],
        hidden: [
            'hidden'
        ],
        wrapper: [
            'wrapper',
            `${orientation}`
        ],
        wrapperInner: [
            'wrapperInner',
            `${orientation}`
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__["unstable_composeClasses"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Collapse$2f$collapseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCollapseUtilityClass"], classes);
};
const CollapseRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('div', {
    name: 'MuiCollapse',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.orientation],
            ownerState.state === 'entered' && styles.entered,
            ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && styles.hidden
        ];
    }
})(({ theme, ownerState })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        height: 0,
        overflow: 'hidden',
        transition: theme.transitions.create('height')
    }, ownerState.orientation === 'horizontal' && {
        height: 'auto',
        width: 0,
        transition: theme.transitions.create('width')
    }, ownerState.state === 'entered' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        height: 'auto',
        overflow: 'visible'
    }, ownerState.orientation === 'horizontal' && {
        width: 'auto'
    }), ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && {
        visibility: 'hidden'
    }));
const CollapseWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('div', {
    name: 'MuiCollapse',
    slot: 'Wrapper',
    overridesResolver: (props, styles)=>styles.wrapper
})(({ ownerState })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        // Hack to get children with a negative margin to not falsify the height computation.
        display: 'flex',
        width: '100%'
    }, ownerState.orientation === 'horizontal' && {
        width: 'auto',
        height: '100%'
    }));
const CollapseWrapperInner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('div', {
    name: 'MuiCollapse',
    slot: 'WrapperInner',
    overridesResolver: (props, styles)=>styles.wrapperInner
})(({ ownerState })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        width: '100%'
    }, ownerState.orientation === 'horizontal' && {
        width: 'auto',
        height: '100%'
    }));
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/material-ui/react-stepper/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */ const Collapse = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Collapse(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiCollapse'
    });
    const { addEndListener, children, className, collapsedSize: collapsedSizeProp = '0px', component, easing, in: inProp, onEnter, onEntered, onEntering, onExit, onExited, onExiting, orientation = 'vertical', style, timeout = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTransitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["duration"].standard, // eslint-disable-next-line react/prop-types
    TransitionComponent = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Transition$3e$__["Transition"] } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        orientation,
        collapsedSize: collapsedSizeProp
    });
    const classes = useUtilityClasses(ownerState);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const timer = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const wrapperRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const autoTransitionDuration = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const collapsedSize = typeof collapsedSizeProp === 'number' ? `${collapsedSizeProp}px` : collapsedSizeProp;
    const isHorizontal = orientation === 'horizontal';
    const size = isHorizontal ? 'width' : 'height';
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Collapse.Collapse.useEffect": ()=>{
            return ({
                "Collapse.Collapse.useEffect": ()=>{
                    clearTimeout(timer.current);
                }
            })["Collapse.Collapse.useEffect"];
        }
    }["Collapse.Collapse.useEffect"], []);
    const nodeRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const handleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForkRef$3e$__["useForkRef"])(ref, nodeRef);
    const normalizedTransitionCallback = (callback)=>(maybeIsAppearing)=>{
            if (callback) {
                const node = nodeRef.current;
                // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
                if (maybeIsAppearing === undefined) {
                    callback(node);
                } else {
                    callback(node, maybeIsAppearing);
                }
            }
        };
    const getWrapperSize = ()=>wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0;
    const handleEnter = normalizedTransitionCallback((node, isAppearing)=>{
        if (wrapperRef.current && isHorizontal) {
            // Set absolute position to get the size of collapsed content
            wrapperRef.current.style.position = 'absolute';
        }
        node.style[size] = collapsedSize;
        if (onEnter) {
            onEnter(node, isAppearing);
        }
    });
    const handleEntering = normalizedTransitionCallback((node, isAppearing)=>{
        const wrapperSize = getWrapperSize();
        if (wrapperRef.current && isHorizontal) {
            // After the size is read reset the position back to default
            wrapperRef.current.style.position = '';
        }
        const { duration: transitionDuration, easing: transitionTimingFunction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionProps"])({
            style,
            timeout,
            easing
        }, {
            mode: 'enter'
        });
        if (timeout === 'auto') {
            const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
            node.style.transitionDuration = `${duration2}ms`;
            autoTransitionDuration.current = duration2;
        } else {
            node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
        }
        node.style[size] = `${wrapperSize}px`;
        node.style.transitionTimingFunction = transitionTimingFunction;
        if (onEntering) {
            onEntering(node, isAppearing);
        }
    });
    const handleEntered = normalizedTransitionCallback((node, isAppearing)=>{
        node.style[size] = 'auto';
        if (onEntered) {
            onEntered(node, isAppearing);
        }
    });
    const handleExit = normalizedTransitionCallback((node)=>{
        node.style[size] = `${getWrapperSize()}px`;
        if (onExit) {
            onExit(node);
        }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleExiting = normalizedTransitionCallback((node)=>{
        const wrapperSize = getWrapperSize();
        const { duration: transitionDuration, easing: transitionTimingFunction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionProps"])({
            style,
            timeout,
            easing
        }, {
            mode: 'exit'
        });
        if (timeout === 'auto') {
            // TODO: rename getAutoHeightDuration to something more generic (width support)
            // Actually it just calculates animation duration based on size
            const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
            node.style.transitionDuration = `${duration2}ms`;
            autoTransitionDuration.current = duration2;
        } else {
            node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
        }
        node.style[size] = collapsedSize;
        node.style.transitionTimingFunction = transitionTimingFunction;
        if (onExiting) {
            onExiting(node);
        }
    });
    const handleAddEndListener = (next)=>{
        if (timeout === 'auto') {
            timer.current = setTimeout(next, autoTransitionDuration.current || 0);
        }
        if (addEndListener) {
            // Old call signature before `react-transition-group` implemented `nodeRef`
            addEndListener(nodeRef.current, next);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TransitionComponent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        in: inProp,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        nodeRef: nodeRef,
        timeout: timeout === 'auto' ? null : timeout
    }, other, {
        children: (state, childProps)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollapseRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                as: component,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className, {
                    'entered': classes.entered,
                    'exited': !inProp && collapsedSize === '0px' && classes.hidden
                }[state]),
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize
                }, style),
                ownerState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, ownerState, {
                    state
                }),
                ref: handleRef
            }, childProps, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollapseWrapper, {
                    ownerState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, ownerState, {
                        state
                    }),
                    className: classes.wrapper,
                    ref: wrapperRef,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollapseWrapperInner, {
                        ownerState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, ownerState, {
                            state
                        }),
                        className: classes.wrapperInner,
                        children: children
                    })
                })
            }))
    }));
});
("TURBOPACK compile-time truthy", 1) ? Collapse.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------
    /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */ addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The content node to be collapsed.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */ collapsedSize: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$elementTypeAcceptingRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__elementTypeAcceptingRef$3e$__["elementTypeAcceptingRef"],
    /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */ easing: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
            enter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
            exit: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * If `true`, the component will transition in.
   */ in: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * @ignore
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The transition orientation.
   * @default 'vertical'
   */ orientation: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'horizontal',
        'vertical'
    ]),
    /**
   * @ignore
   */ style: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */ timeout: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'auto'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
            appear: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
            enter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
            exit: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
        })
    ])
} : "TURBOPACK unreachable";
Collapse.muiSupportAuto = true;
const __TURBOPACK__default__export__ = Collapse;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/integerPropType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTypeByValue",
    ()=>getTypeByValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getTypeByValue(value) {
    const valueType = typeof value;
    switch(valueType){
        case 'number':
            if (Number.isNaN(value)) {
                return 'NaN';
            }
            if (!Number.isFinite(value)) {
                return 'Infinity';
            }
            if (value !== Math.floor(value)) {
                return 'float';
            }
            return 'number';
        case 'object':
            if (value === null) {
                return 'null';
            }
            return value.constructor.name;
        default:
            return valueType;
    }
}
// IE 11 support
function ponyfillIsInteger(x) {
    // eslint-disable-next-line no-restricted-globals
    return typeof x === 'number' && isFinite(x) && Math.floor(x) === x;
}
const isInteger = Number.isInteger || ponyfillIsInteger;
function requiredInteger(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue == null || !isInteger(propValue)) {
        const propType = getTypeByValue(propValue);
        return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
    }
    return null;
}
function validator(props, propName, ...other) {
    const propValue = props[propName];
    if (propValue === undefined) {
        return null;
    }
    return requiredInteger(props, propName, ...other);
}
function validatorNoop() {
    return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
const __TURBOPACK__default__export__ = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : validator;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/integerPropType.js [app-client] (ecmascript) <export default as integerPropType>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "integerPropType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$integerPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$integerPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/integerPropType.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/getOverlayAlpha.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
const getOverlayAlpha = (elevation)=>{
    let alphaValue;
    if (elevation < 1) {
        alphaValue = 5.11916 * elevation ** 2;
    } else {
        alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return (alphaValue / 100).toFixed(2);
};
const __TURBOPACK__default__export__ = getOverlayAlpha;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Paper/paperClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getPaperUtilityClass",
    ()=>getPaperUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript) <export default as unstable_generateUtilityClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getPaperUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiPaper', slot);
}
const paperClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__["unstable_generateUtilityClasses"])('MuiPaper', [
    'root',
    'rounded',
    'outlined',
    'elevation',
    'elevation0',
    'elevation1',
    'elevation2',
    'elevation3',
    'elevation4',
    'elevation5',
    'elevation6',
    'elevation7',
    'elevation8',
    'elevation9',
    'elevation10',
    'elevation11',
    'elevation12',
    'elevation13',
    'elevation14',
    'elevation15',
    'elevation16',
    'elevation17',
    'elevation18',
    'elevation19',
    'elevation20',
    'elevation21',
    'elevation22',
    'elevation23',
    'elevation24'
]);
const __TURBOPACK__default__export__ = paperClasses;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Paper/Paper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chainPropTypes$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript) <export default as chainPropTypes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$integerPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__integerPropType$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/integerPropType.js [app-client] (ecmascript) <export default as integerPropType>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript) <export default as unstable_composeClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/getOverlayAlpha.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$paperClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Paper/paperClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const _excluded = [
    "className",
    "component",
    "elevation",
    "square",
    "variant"
];
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { square, elevation, variant, classes } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            !square && 'rounded',
            variant === 'elevation' && `elevation${elevation}`
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__["unstable_composeClasses"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$paperClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaperUtilityClass"], classes);
};
const PaperRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            !ownerState.square && styles.rounded,
            ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]
        ];
    }
})(({ theme, ownerState })=>{
    var _theme$vars$overlays;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        backgroundColor: (theme.vars || theme).palette.background.paper,
        color: (theme.vars || theme).palette.text.primary,
        transition: theme.transitions.create('box-shadow')
    }, !ownerState.square && {
        borderRadius: theme.shape.borderRadius
    }, ownerState.variant === 'outlined' && {
        border: `1px solid ${(theme.vars || theme).palette.divider}`
    }, ownerState.variant === 'elevation' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
    }, !theme.vars && theme.palette.mode === 'dark' && {
        backgroundImage: `linear-gradient(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])('#fff', (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.elevation))}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])('#fff', (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.elevation))})`
    }, theme.vars && {
        backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
    }));
});
const Paper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Paper(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiPaper'
    });
    const { className, component = 'div', elevation = 1, square = false, variant = 'elevation' } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        component,
        elevation,
        square,
        variant
    });
    const classes = useUtilityClasses(ownerState);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        if (theme.shadows[elevation] === undefined) {
            console.error([
                `MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`,
                `Please make sure that \`theme.shadows[${elevation}]\` is defined.`
            ].join('\n'));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PaperRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        as: component,
        ownerState: ownerState,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ref: ref
    }, other));
});
("TURBOPACK compile-time truthy", 1) ? Paper.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */ elevation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chainPropTypes$3e$__["chainPropTypes"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$integerPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__integerPropType$3e$__["integerPropType"], (props)=>{
        const { elevation, variant } = props;
        if (elevation > 0 && variant === 'outlined') {
            return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
        }
        return null;
    }),
    /**
   * If `true`, rounded corners are disabled.
   * @default false
   */ square: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The variant to use.
   * @default 'elevation'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'elevation',
            'outlined'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Paper;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Accordion/AccordionContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */ const AccordionContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
if ("TURBOPACK compile-time truthy", 1) {
    AccordionContext.displayName = 'AccordionContext';
}
const __TURBOPACK__default__export__ = AccordionContext;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useControlled/useControlled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useControlled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useControlled({ controlled, default: defaultProp, name, state = 'value' }) {
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](controlled !== undefined);
    const [valueState, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const value = isControlled ? controlled : valueState;
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useControlled.useEffect": ()=>{
                if (isControlled !== (controlled !== undefined)) {
                    console.error([
                        `MUI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`,
                        'Elements should not switch from uncontrolled to controlled (or vice versa).',
                        `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.',
                        "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                        'More info: https://fb.me/react-controlled-components'
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            state,
            name,
            controlled
        ]);
        const { current: defaultValue } = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](defaultProp);
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useControlled.useEffect": ()=>{
                if (!isControlled && defaultValue !== defaultProp) {
                    console.error([
                        `MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            JSON.stringify(defaultProp)
        ]);
    }
    const setValueIfUncontrolled = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useControlled.useCallback[setValueIfUncontrolled]": (newValue)=>{
            if (!isControlled) {
                setValue(newValue);
            }
        }
    }["useControlled.useCallback[setValueIfUncontrolled]"], []);
    return [
        value,
        setValueIfUncontrolled
    ];
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useControlled/useControlled.js [app-client] (ecmascript) <export default as unstable_useControlled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_useControlled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useControlled/useControlled.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useControlled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useControlled$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useControlled/useControlled.js [app-client] (ecmascript) <export default as unstable_useControlled>");
'use client';
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useControlled$3e$__["unstable_useControlled"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Accordion/accordionClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAccordionUtilityClass",
    ()=>getAccordionUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript) <export default as unstable_generateUtilityClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getAccordionUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiAccordion', slot);
}
const accordionClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__["unstable_generateUtilityClasses"])('MuiAccordion', [
    'root',
    'rounded',
    'expanded',
    'disabled',
    'gutters',
    'region'
]);
const __TURBOPACK__default__export__ = accordionClasses;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Accordion/Accordion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-is/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chainPropTypes$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript) <export default as chainPropTypes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript) <export default as unstable_composeClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Collapse/Collapse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Paper/Paper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Accordion$2f$AccordionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Accordion/AccordionContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useControlled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Accordion$2f$accordionClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Accordion/accordionClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const _excluded = [
    "children",
    "className",
    "defaultExpanded",
    "disabled",
    "disableGutters",
    "expanded",
    "onChange",
    "square",
    "TransitionComponent",
    "TransitionProps"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes, square, expanded, disabled, disableGutters } = ownerState;
    const slots = {
        root: [
            'root',
            !square && 'rounded',
            expanded && 'expanded',
            disabled && 'disabled',
            !disableGutters && 'gutters'
        ],
        region: [
            'region'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__["unstable_composeClasses"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Accordion$2f$accordionClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccordionUtilityClass"], classes);
};
const AccordionRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiAccordion',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Accordion$2f$accordionClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].region}`]: styles.region
            },
            styles.root,
            !ownerState.square && styles.rounded,
            !ownerState.disableGutters && styles.gutters
        ];
    }
})(({ theme })=>{
    const transition = {
        duration: theme.transitions.duration.shortest
    };
    return {
        position: 'relative',
        transition: theme.transitions.create([
            'margin'
        ], transition),
        overflowAnchor: 'none',
        // Keep the same scrolling position
        '&:before': {
            position: 'absolute',
            left: 0,
            top: -1,
            right: 0,
            height: 1,
            content: '""',
            opacity: 1,
            backgroundColor: (theme.vars || theme).palette.divider,
            transition: theme.transitions.create([
                'opacity',
                'background-color'
            ], transition)
        },
        '&:first-of-type': {
            '&:before': {
                display: 'none'
            }
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Accordion$2f$accordionClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].expanded}`]: {
            '&:before': {
                opacity: 0
            },
            '&:first-of-type': {
                marginTop: 0
            },
            '&:last-of-type': {
                marginBottom: 0
            },
            '& + &': {
                '&:before': {
                    display: 'none'
                }
            }
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Accordion$2f$accordionClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled}`]: {
            backgroundColor: (theme.vars || theme).palette.action.disabledBackground
        }
    };
}, ({ theme, ownerState })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, !ownerState.square && {
        borderRadius: 0,
        '&:first-of-type': {
            borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
            borderTopRightRadius: (theme.vars || theme).shape.borderRadius
        },
        '&:last-of-type': {
            borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
            borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
            // Fix a rendering issue on Edge
            '@supports (-ms-ime-align: auto)': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
            }
        }
    }, !ownerState.disableGutters && {
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Accordion$2f$accordionClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].expanded}`]: {
            margin: '16px 0'
        }
    }));
const Accordion = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Accordion(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiAccordion'
    });
    const { children: childrenProp, className, defaultExpanded = false, disabled = false, disableGutters = false, expanded: expandedProp, onChange, square = false, TransitionComponent = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], TransitionProps } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const [expanded, setExpandedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        controlled: expandedProp,
        default: defaultExpanded,
        name: 'Accordion',
        state: 'expanded'
    });
    const handleChange = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Accordion.Accordion.useCallback[handleChange]": (event)=>{
            setExpandedState(!expanded);
            if (onChange) {
                onChange(event, !expanded);
            }
        }
    }["Accordion.Accordion.useCallback[handleChange]"], [
        expanded,
        onChange,
        setExpandedState
    ]);
    const [summary, ...children] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(childrenProp);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Accordion.Accordion.useMemo[contextValue]": ()=>({
                expanded,
                disabled,
                disableGutters,
                toggle: handleChange
            })
    }["Accordion.Accordion.useMemo[contextValue]"], [
        expanded,
        disabled,
        disableGutters,
        handleChange
    ]);
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        square,
        disabled,
        disableGutters,
        expanded
    });
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(AccordionRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ref: ref,
        ownerState: ownerState,
        square: square
    }, other, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Accordion$2f$AccordionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
                value: contextValue,
                children: summary
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TransitionComponent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                in: expanded,
                timeout: "auto"
            }, TransitionProps, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    "aria-labelledby": summary.props.id,
                    id: summary.props['aria-controls'],
                    role: "region",
                    className: classes.region,
                    children: children
                })
            }))
        ]
    }));
});
("TURBOPACK compile-time truthy", 1) ? Accordion.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------
    /**
   * The content of the component.
   */ children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chainPropTypes$3e$__["chainPropTypes"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node.isRequired, (props)=>{
        const summary = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(props.children)[0];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFragment"])(summary)) {
            return new Error("MUI: The Accordion doesn't accept a Fragment as a child. " + 'Consider providing an array instead.');
        }
        if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](summary)) {
            return new Error('MUI: Expected the first child of Accordion to be a valid element.');
        }
        return null;
    }),
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, expands the accordion by default.
   * @default false
   */ defaultExpanded: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the component is disabled.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, it removes the margin between two expanded accordion items and the increase of height.
   * @default false
   */ disableGutters: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */ expanded: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */ onChange: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, rounded corners are disabled.
   * @default false
   */ square: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Collapse
   */ TransitionComponent: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */ TransitionProps: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Accordion;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/refType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
const refType = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
]);
const __TURBOPACK__default__export__ = refType;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/refType.js [app-client] (ecmascript) <export default as refType>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "refType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$refType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$refType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/refType.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const useEnhancedEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
const __TURBOPACK__default__export__ = useEnhancedEffect;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript)");
'use client';
;
;
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */ function useEventCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](fn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useEventCallback.useEnhancedEffect": ()=>{
            ref.current = fn;
        }
    }["useEventCallback.useEnhancedEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useEventCallback.useCallback": (...args)=>// @ts-expect-error hide `this`
            // tslint:disable-next-line:ban-comma-operator
            (0, ref.current)(...args)
    }["useEventCallback.useCallback"], []);
}
const __TURBOPACK__default__export__ = useEventCallback;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-client] (ecmascript) <export default as unstable_useEventCallback>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_useEventCallback",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useEventCallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEventCallback$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-client] (ecmascript) <export default as unstable_useEventCallback>");
'use client';
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEventCallback$3e$__["unstable_useEventCallback"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useIsFocusVisible.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useIsFocusVisible,
    "teardown",
    ()=>teardown
]);
// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout;
const inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */ function focusTriggersKeyboardModality(node) {
    const { type, tagName } = node;
    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
        return true;
    }
    if (tagName === 'TEXTAREA' && !node.readOnly) {
        return true;
    }
    if (node.isContentEditable) {
        return true;
    }
    return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */ function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
    }
    hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */ function handlePointerDown() {
    hadKeyboardEvent = false;
}
function handleVisibilityChange() {
    if (this.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
            hadKeyboardEvent = true;
        }
    }
}
function prepare(doc) {
    doc.addEventListener('keydown', handleKeyDown, true);
    doc.addEventListener('mousedown', handlePointerDown, true);
    doc.addEventListener('pointerdown', handlePointerDown, true);
    doc.addEventListener('touchstart', handlePointerDown, true);
    doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}
function teardown(doc) {
    doc.removeEventListener('keydown', handleKeyDown, true);
    doc.removeEventListener('mousedown', handlePointerDown, true);
    doc.removeEventListener('pointerdown', handlePointerDown, true);
    doc.removeEventListener('touchstart', handlePointerDown, true);
    doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}
function isFocusVisible(event) {
    const { target } = event;
    try {
        return target.matches(':focus-visible');
    } catch (error) {
    // Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
    }
    // No need for validFocusTarget check. The user does that by attaching it to
    // focusable events only.
    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useIsFocusVisible.useCallback[ref]": (node)=>{
            if (node != null) {
                prepare(node.ownerDocument);
            }
        }
    }["useIsFocusVisible.useCallback[ref]"], []);
    const isFocusVisibleRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    /**
   * Should be called if a blur event is fired
   */ function handleBlurVisible() {
        // checking against potential state variable does not suffice if we focus and blur synchronously.
        // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
        // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
        // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
        // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
        if (isFocusVisibleRef.current) {
            // To detect a tab/window switch, we look for a blur event followed
            // rapidly by a visibility change.
            // If we don't see a visibility change within 100ms, it's probably a
            // regular focus change.
            hadFocusVisibleRecently = true;
            window.clearTimeout(hadFocusVisibleRecentlyTimeout);
            hadFocusVisibleRecentlyTimeout = window.setTimeout(()=>{
                hadFocusVisibleRecently = false;
            }, 100);
            isFocusVisibleRef.current = false;
            return true;
        }
        return false;
    }
    /**
   * Should be called if a blur event is fired
   */ function handleFocusVisible(event) {
        if (isFocusVisible(event)) {
            isFocusVisibleRef.current = true;
            return true;
        }
        return false;
    }
    return {
        isFocusVisibleRef,
        onFocus: handleFocusVisible,
        onBlur: handleBlurVisible,
        ref
    };
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useIsFocusVisible.js [app-client] (ecmascript) <export default as unstable_useIsFocusVisible>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_useIsFocusVisible",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useIsFocusVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useIsFocusVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useIsFocusVisible.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useIsFocusVisible.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useIsFocusVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useIsFocusVisible$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useIsFocusVisible.js [app-client] (ecmascript) <export default as unstable_useIsFocusVisible>");
'use client';
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useIsFocusVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useIsFocusVisible$3e$__["unstable_useIsFocusVisible"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/utils/ChildMapping.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChildMapping",
    ()=>getChildMapping,
    "getInitialChildMapping",
    ()=>getInitialChildMapping,
    "getNextChildMapping",
    ()=>getNextChildMapping,
    "mergeChildMappings",
    ()=>mergeChildMappings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
        return mapFn && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child) ? mapFn(child) : child;
    };
    var result = Object.create(null);
    if (children) __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, function(c) {
        return c;
    }).forEach(function(child) {
        // run the map function here instead so that the key is the computed one
        result[child.key] = mapper(child);
    });
    return result;
}
function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = Object.create(null);
    var pendingKeys = [];
    for(var prevKey in prev){
        if (prevKey in next) {
            if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
            }
        } else {
            pendingKeys.push(prevKey);
        }
    }
    var i;
    var childMapping = {};
    for(var nextKey in next){
        if (nextKeysPending[nextKey]) {
            for(i = 0; i < nextKeysPending[nextKey].length; i++){
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
            }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`
    for(i = 0; i < pendingKeys.length; i++){
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
}
function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            onExited: onExited.bind(null, child),
            in: true,
            appear: getProp(child, 'appear', props),
            enter: getProp(child, 'enter', props),
            exit: getProp(child, 'exit', props)
        });
    });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key) {
        var child = children[key];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child)) return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)
        if (hasNext && (!hasPrev || isLeaving)) {
            // console.log('entering', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                onExited: onExited.bind(null, child),
                in: true,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        } else if (!hasNext && hasPrev && !isLeaving) {
            // item is old (exiting)
            // console.log('leaving', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                in: false
            });
        } else if (hasNext && hasPrev && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(prevChild)) {
            // item hasn't changed transition states
            // copy over the last transition props;
            // console.log('unchanged', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                onExited: onExited.bind(null, child),
                in: prevChild.props.in,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        }
    });
    return children;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/TransitionGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/utils/ChildMapping.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var values = Object.values || function(obj) {
    return Object.keys(obj).map(function(k) {
        return obj[k];
    });
};
var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
        return child;
    }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */ var TransitionGroup = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(TransitionGroup, _React$Component);
    function TransitionGroup(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var handleExited = _this.handleExited.bind((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)); // Initial children should all be entering, dependent on appear
        _this.state = {
            contextValue: {
                isMounting: true
            },
            handleExited: handleExited,
            firstRender: true
        };
        return _this;
    }
    var _proto = TransitionGroup.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.setState({
            contextValue: {
                isMounting: false
            }
        });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
    };
    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
        return {
            children: firstRender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialChildMapping"])(nextProps, handleExited) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
            firstRender: false
        };
    } // node is `undefined` when user provided `nodeRef` prop
    ;
    _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildMapping"])(this.props.children);
        if (child.key in currentChildMapping) return;
        if (child.props.onExited) {
            child.props.onExited(node);
        }
        if (this.mounted) {
            this.setState(function(state) {
                var children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.children);
                delete children[child.key];
                return {
                    children: children
                };
            });
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, Component = _this$props.component, childFactory = _this$props.childFactory, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "component",
            "childFactory"
        ]);
        var contextValue = this.state.contextValue;
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component === null) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
                value: contextValue
            }, children);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: contextValue
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, props, children));
    };
    return TransitionGroup;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
TransitionGroup.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */ childFactory: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable";
TransitionGroup.defaultProps = defaultProps;
const __TURBOPACK__default__export__ = TransitionGroup;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/TransitionGroup.js [app-client] (ecmascript) <export default as TransitionGroup>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitionGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/TransitionGroup.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/ButtonBase/Ripple.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
/**
 * @ignore - internal component.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function Ripple(props) {
    const { className, classes, pulsate = false, rippleX, rippleY, rippleSize, in: inProp, onExited, timeout } = props;
    const [leaving, setLeaving] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const rippleClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
    };
    const childClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    if (!inProp && !leaving) {
        setLeaving(true);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Ripple.useEffect": ()=>{
            if (!inProp && onExited != null) {
                // react-transition-group#onExited
                const timeoutId = setTimeout(onExited, timeout);
                return ({
                    "Ripple.useEffect": ()=>{
                        clearTimeout(timeoutId);
                    }
                })["Ripple.useEffect"];
            }
            return undefined;
        }
    }["Ripple.useEffect"], [
        onExited,
        inProp,
        timeout
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: rippleClassName,
        style: rippleStyles,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            className: childClassName
        })
    });
}
("TURBOPACK compile-time truthy", 1) ? Ripple.propTypes = {
    /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * @ignore - injected from TransitionGroup
   */ in: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * @ignore - injected from TransitionGroup
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */ pulsate: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Diameter of the ripple.
   */ rippleSize: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Horizontal position of the ripple center.
   */ rippleX: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Vertical position of the ripple center.
   */ rippleY: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * exit delay
   */ timeout: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number.isRequired
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Ripple;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/ButtonBase/touchRippleClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTouchRippleUtilityClass",
    ()=>getTouchRippleUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript) <export default as unstable_generateUtilityClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getTouchRippleUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiTouchRipple', slot);
}
const touchRippleClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__["unstable_generateUtilityClasses"])('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate'
]);
const __TURBOPACK__default__export__ = touchRippleClasses;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/ButtonBase/TouchRipple.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELAY_RIPPLE",
    ()=>DELAY_RIPPLE,
    "TouchRippleRipple",
    ()=>TouchRippleRipple,
    "TouchRippleRoot",
    ()=>TouchRippleRoot,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TransitionGroup$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/react-transition-group/esm/TransitionGroup.js [app-client] (ecmascript) <export default as TransitionGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/react/dist/emotion-react.browser.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$Ripple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/ButtonBase/Ripple.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/ButtonBase/touchRippleClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const _excluded = [
    "center",
    "classes",
    "className"
];
let _ = (t)=>t, _t, _t2, _t3, _t4;
;
;
;
;
;
;
;
;
;
;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"])(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"])(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"])(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('span', {
    name: 'MuiTouchRipple',
    slot: 'Root'
})({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
});
const TouchRippleRipple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$Ripple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiTouchRipple',
    slot: 'Ripple'
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rippleVisible, enterKeyframe, DURATION, ({ theme })=>theme.transitions.easing.easeInOut, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ripplePulsate, ({ theme })=>theme.transitions.duration.shorter, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].child, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].childLeaving, exitKeyframe, DURATION, ({ theme })=>theme.transitions.easing.easeInOut, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].childPulsate, pulsateKeyframe, ({ theme })=>theme.transitions.easing.easeInOut);
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */ const TouchRipple = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function TouchRipple(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiTouchRipple'
    });
    const { center: centerProp = false, classes = {}, className } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const [ripples, setRipples] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const nextKey = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const rippleCallback = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TouchRipple.TouchRipple.useEffect": ()=>{
            if (rippleCallback.current) {
                rippleCallback.current();
                rippleCallback.current = null;
            }
        }
    }["TouchRipple.TouchRipple.useEffect"], [
        ripples
    ]);
    // Used to filter out mouse emulated events on mobile.
    const ignoringMouseDown = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.
    const startTimer = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    // This is the hook called once the previous timeout is ready.
    const startTimerCommit = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const container = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TouchRipple.TouchRipple.useEffect": ()=>{
            return ({
                "TouchRipple.TouchRipple.useEffect": ()=>{
                    if (startTimer.current) {
                        clearTimeout(startTimer.current);
                    }
                }
            })["TouchRipple.TouchRipple.useEffect"];
        }
    }["TouchRipple.TouchRipple.useEffect"], []);
    const startCommit = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TouchRipple.TouchRipple.useCallback[startCommit]": (params)=>{
            const { pulsate, rippleX, rippleY, rippleSize, cb } = params;
            setRipples({
                "TouchRipple.TouchRipple.useCallback[startCommit]": (oldRipples)=>[
                        ...oldRipples,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TouchRippleRipple, {
                            classes: {
                                ripple: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.ripple, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ripple),
                                rippleVisible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.rippleVisible, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rippleVisible),
                                ripplePulsate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.ripplePulsate, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ripplePulsate),
                                child: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.child, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].child),
                                childLeaving: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.childLeaving, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].childLeaving),
                                childPulsate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.childPulsate, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].childPulsate)
                            },
                            timeout: DURATION,
                            pulsate: pulsate,
                            rippleX: rippleX,
                            rippleY: rippleY,
                            rippleSize: rippleSize
                        }, nextKey.current)
                    ]
            }["TouchRipple.TouchRipple.useCallback[startCommit]"]);
            nextKey.current += 1;
            rippleCallback.current = cb;
        }
    }["TouchRipple.TouchRipple.useCallback[startCommit]"], [
        classes
    ]);
    const start = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TouchRipple.TouchRipple.useCallback[start]": (event = {}, options = {}, cb = ({
            "TouchRipple.TouchRipple.useCallback[start]": ()=>{}
        })["TouchRipple.TouchRipple.useCallback[start]"])=>{
            const { pulsate = false, center = centerProp || options.pulsate, fakeElement = false // For test purposes
             } = options;
            if ((event == null ? void 0 : event.type) === 'mousedown' && ignoringMouseDown.current) {
                ignoringMouseDown.current = false;
                return;
            }
            if ((event == null ? void 0 : event.type) === 'touchstart') {
                ignoringMouseDown.current = true;
            }
            const element = fakeElement ? null : container.current;
            const rect = element ? element.getBoundingClientRect() : {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            };
            // Get the size of the ripple
            let rippleX;
            let rippleY;
            let rippleSize;
            if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
                rippleX = Math.round(rect.width / 2);
                rippleY = Math.round(rect.height / 2);
            } else {
                const { clientX, clientY } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
                rippleX = Math.round(clientX - rect.left);
                rippleY = Math.round(clientY - rect.top);
            }
            if (center) {
                rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
                // For some reason the animation is broken on Mobile Chrome if the size is even.
                if (rippleSize % 2 === 0) {
                    rippleSize += 1;
                }
            } else {
                const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
                const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
                rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
            }
            // Touche devices
            if (event != null && event.touches) {
                // check that this isn't another touchstart due to multitouch
                // otherwise we will only clear a single timer when unmounting while two
                // are running
                if (startTimerCommit.current === null) {
                    // Prepare the ripple effect.
                    startTimerCommit.current = ({
                        "TouchRipple.TouchRipple.useCallback[start]": ()=>{
                            startCommit({
                                pulsate,
                                rippleX,
                                rippleY,
                                rippleSize,
                                cb
                            });
                        }
                    })["TouchRipple.TouchRipple.useCallback[start]"];
                    // Delay the execution of the ripple effect.
                    startTimer.current = setTimeout({
                        "TouchRipple.TouchRipple.useCallback[start]": ()=>{
                            if (startTimerCommit.current) {
                                startTimerCommit.current();
                                startTimerCommit.current = null;
                            }
                        }
                    }["TouchRipple.TouchRipple.useCallback[start]"], DELAY_RIPPLE); // We have to make a tradeoff with this value.
                }
            } else {
                startCommit({
                    pulsate,
                    rippleX,
                    rippleY,
                    rippleSize,
                    cb
                });
            }
        }
    }["TouchRipple.TouchRipple.useCallback[start]"], [
        centerProp,
        startCommit
    ]);
    const pulsate = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TouchRipple.TouchRipple.useCallback[pulsate]": ()=>{
            start({}, {
                pulsate: true
            });
        }
    }["TouchRipple.TouchRipple.useCallback[pulsate]"], [
        start
    ]);
    const stop = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TouchRipple.TouchRipple.useCallback[stop]": (event, cb)=>{
            clearTimeout(startTimer.current);
            // The touch interaction occurs too quickly.
            // We still want to show ripple effect.
            if ((event == null ? void 0 : event.type) === 'touchend' && startTimerCommit.current) {
                startTimerCommit.current();
                startTimerCommit.current = null;
                startTimer.current = setTimeout({
                    "TouchRipple.TouchRipple.useCallback[stop]": ()=>{
                        stop(event, cb);
                    }
                }["TouchRipple.TouchRipple.useCallback[stop]"]);
                return;
            }
            startTimerCommit.current = null;
            setRipples({
                "TouchRipple.TouchRipple.useCallback[stop]": (oldRipples)=>{
                    if (oldRipples.length > 0) {
                        return oldRipples.slice(1);
                    }
                    return oldRipples;
                }
            }["TouchRipple.TouchRipple.useCallback[stop]"]);
            rippleCallback.current = cb;
        }
    }["TouchRipple.TouchRipple.useCallback[stop]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "TouchRipple.TouchRipple.useImperativeHandle": ()=>({
                pulsate,
                start,
                stop
            })
    }["TouchRipple.TouchRipple.useImperativeHandle"], [
        pulsate,
        start,
        stop
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TouchRippleRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root, classes.root, className),
        ref: container
    }, other, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TransitionGroup$3e$__["TransitionGroup"], {
            component: null,
            exit: true,
            children: ripples
        })
    }));
});
("TURBOPACK compile-time truthy", 1) ? TouchRipple.propTypes = {
    /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */ center: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = TouchRipple;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/ButtonBase/buttonBaseClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getButtonBaseUtilityClass",
    ()=>getButtonBaseUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript) <export default as unstable_generateUtilityClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getButtonBaseUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiButtonBase', slot);
}
const buttonBaseClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__["unstable_generateUtilityClasses"])('MuiButtonBase', [
    'root',
    'disabled',
    'focusVisible'
]);
const __TURBOPACK__default__export__ = buttonBaseClasses;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/ButtonBase/ButtonBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonBaseRoot",
    ()=>ButtonBaseRoot,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$elementTypeAcceptingRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__elementTypeAcceptingRef$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/elementTypeAcceptingRef.js [app-client] (ecmascript) <export default as elementTypeAcceptingRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$refType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__refType$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/refType.js [app-client] (ecmascript) <export default as refType>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useForkRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useEventCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useIsFocusVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useIsFocusVisible.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$TouchRipple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/ButtonBase/TouchRipple.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$buttonBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/ButtonBase/buttonBaseClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const _excluded = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { disabled, focusVisible, focusVisibleClassName, classes } = ownerState;
    const slots = {
        root: [
            'root',
            disabled && 'disabled',
            focusVisible && 'focusVisible'
        ]
    };
    const composedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$buttonBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonBaseUtilityClass"], classes);
    if (focusVisible && focusVisibleClassName) {
        composedClasses.root += ` ${focusVisibleClassName}`;
    }
    return composedClasses;
};
const ButtonBaseRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.
    },
    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$buttonBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled}`]: {
        pointerEvents: 'none',
        // Disable link interactions
        cursor: 'default'
    },
    '@media print': {
        colorAdjust: 'exact'
    }
});
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */ const ButtonBase = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function ButtonBase(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiButtonBase'
    });
    const { action, centerRipple = false, children, className, component = 'button', disabled = false, disableRipple = false, disableTouchRipple = false, focusRipple = false, LinkComponent = 'a', onBlur, onClick, onContextMenu, onDragLeave, onFocus, onFocusVisible, onKeyDown, onKeyUp, onMouseDown, onMouseLeave, onMouseUp, onTouchEnd, onTouchMove, onTouchStart, tabIndex = 0, TouchRippleProps, touchRippleRef, type } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const buttonRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const rippleRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const handleRippleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rippleRef, touchRippleRef);
    const { isFocusVisibleRef, onFocus: handleFocusVisible, onBlur: handleBlurVisible, ref: focusVisibleRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useIsFocusVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [focusVisible, setFocusVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    if (disabled && focusVisible) {
        setFocusVisible(false);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](action, {
        "ButtonBase.ButtonBase.useImperativeHandle": ()=>({
                focusVisible: ({
                    "ButtonBase.ButtonBase.useImperativeHandle": ()=>{
                        setFocusVisible(true);
                        buttonRef.current.focus();
                    }
                })["ButtonBase.ButtonBase.useImperativeHandle"]
            })
    }["ButtonBase.ButtonBase.useImperativeHandle"], []);
    const [mountedState, setMountedState] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ButtonBase.ButtonBase.useEffect": ()=>{
            setMountedState(true);
        }
    }["ButtonBase.ButtonBase.useEffect"], []);
    const enableTouchRipple = mountedState && !disableRipple && !disabled;
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ButtonBase.ButtonBase.useEffect": ()=>{
            if (focusVisible && focusRipple && !disableRipple && mountedState) {
                rippleRef.current.pulsate();
            }
        }
    }["ButtonBase.ButtonBase.useEffect"], [
        disableRipple,
        focusRipple,
        focusVisible,
        mountedState
    ]);
    function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "ButtonBase.ButtonBase.useRippleHandler.useEventCallback": (event)=>{
                if (eventCallback) {
                    eventCallback(event);
                }
                const ignore = skipRippleAction;
                if (!ignore && rippleRef.current) {
                    rippleRef.current[rippleAction](event);
                }
                return true;
            }
        }["ButtonBase.ButtonBase.useRippleHandler.useEventCallback"]);
    }
    const handleMouseDown = useRippleHandler('start', onMouseDown);
    const handleContextMenu = useRippleHandler('stop', onContextMenu);
    const handleDragLeave = useRippleHandler('stop', onDragLeave);
    const handleMouseUp = useRippleHandler('stop', onMouseUp);
    const handleMouseLeave = useRippleHandler('stop', {
        "ButtonBase.ButtonBase.useRippleHandler[handleMouseLeave]": (event)=>{
            if (focusVisible) {
                event.preventDefault();
            }
            if (onMouseLeave) {
                onMouseLeave(event);
            }
        }
    }["ButtonBase.ButtonBase.useRippleHandler[handleMouseLeave]"]);
    const handleTouchStart = useRippleHandler('start', onTouchStart);
    const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
    const handleTouchMove = useRippleHandler('stop', onTouchMove);
    const handleBlur = useRippleHandler('stop', {
        "ButtonBase.ButtonBase.useRippleHandler[handleBlur]": (event)=>{
            handleBlurVisible(event);
            if (isFocusVisibleRef.current === false) {
                setFocusVisible(false);
            }
            if (onBlur) {
                onBlur(event);
            }
        }
    }["ButtonBase.ButtonBase.useRippleHandler[handleBlur]"], false);
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ButtonBase.ButtonBase.useEventCallback[handleFocus]": (event)=>{
            // Fix for https://github.com/facebook/react/issues/7769
            if (!buttonRef.current) {
                buttonRef.current = event.currentTarget;
            }
            handleFocusVisible(event);
            if (isFocusVisibleRef.current === true) {
                setFocusVisible(true);
                if (onFocusVisible) {
                    onFocusVisible(event);
                }
            }
            if (onFocus) {
                onFocus(event);
            }
        }
    }["ButtonBase.ButtonBase.useEventCallback[handleFocus]"]);
    const isNonNativeButton = ()=>{
        const button = buttonRef.current;
        return component && component !== 'button' && !(button.tagName === 'A' && button.href);
    };
    /**
   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */ const keydownRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ButtonBase.ButtonBase.useEventCallback[handleKeyDown]": (event)=>{
            // Check if key is already down to avoid repeats being counted as multiple activations
            if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
                keydownRef.current = true;
                rippleRef.current.stop(event, {
                    "ButtonBase.ButtonBase.useEventCallback[handleKeyDown]": ()=>{
                        rippleRef.current.start(event);
                    }
                }["ButtonBase.ButtonBase.useEventCallback[handleKeyDown]"]);
            }
            if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
                event.preventDefault();
            }
            if (onKeyDown) {
                onKeyDown(event);
            }
            // Keyboard accessibility for non interactive elements
            if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
                event.preventDefault();
                if (onClick) {
                    onClick(event);
                }
            }
        }
    }["ButtonBase.ButtonBase.useEventCallback[handleKeyDown]"]);
    const handleKeyUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ButtonBase.ButtonBase.useEventCallback[handleKeyUp]": (event)=>{
            // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
            // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
            if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
                keydownRef.current = false;
                rippleRef.current.stop(event, {
                    "ButtonBase.ButtonBase.useEventCallback[handleKeyUp]": ()=>{
                        rippleRef.current.pulsate(event);
                    }
                }["ButtonBase.ButtonBase.useEventCallback[handleKeyUp]"]);
            }
            if (onKeyUp) {
                onKeyUp(event);
            }
            // Keyboard accessibility for non interactive elements
            if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
                onClick(event);
            }
        }
    }["ButtonBase.ButtonBase.useEventCallback[handleKeyUp]"]);
    let ComponentProp = component;
    if (ComponentProp === 'button' && (other.href || other.to)) {
        ComponentProp = LinkComponent;
    }
    const buttonProps = {};
    if (ComponentProp === 'button') {
        buttonProps.type = type === undefined ? 'button' : type;
        buttonProps.disabled = disabled;
    } else {
        if (!other.href && !other.to) {
            buttonProps.role = 'button';
        }
        if (disabled) {
            buttonProps['aria-disabled'] = disabled;
        }
    }
    const handleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref, focusVisibleRef, buttonRef);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "ButtonBase.ButtonBase.useEffect": ()=>{
                if (enableTouchRipple && !rippleRef.current) {
                    console.error([
                        'MUI: The `component` prop provided to ButtonBase is invalid.',
                        'Please make sure the children prop is rendered in this custom component.'
                    ].join('\n'));
                }
            }
        }["ButtonBase.ButtonBase.useEffect"], [
            enableTouchRipple
        ]);
    }
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        centerRipple,
        component,
        disabled,
        disableRipple,
        disableTouchRipple,
        focusRipple,
        tabIndex,
        focusVisible
    });
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(ButtonBaseRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        as: ComponentProp,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState,
        onBlur: handleBlur,
        onClick: onClick,
        onContextMenu: handleContextMenu,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onMouseDown: handleMouseDown,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
        onDragLeave: handleDragLeave,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove,
        onTouchStart: handleTouchStart,
        ref: handleRef,
        tabIndex: disabled ? -1 : tabIndex,
        type: type
    }, buttonProps, other, {
        children: [
            children,
            enableTouchRipple ? /*#__PURE__*/ /* TouchRipple is only needed client-side, x2 boost on the server. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$TouchRipple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                ref: handleRippleRef,
                center: centerRipple
            }, TouchRippleProps)) : null
        ]
    }));
});
("TURBOPACK compile-time truthy", 1) ? ButtonBase.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------
    /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */ action: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$refType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__refType$3e$__["refType"],
    /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */ centerRipple: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$elementTypeAcceptingRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__elementTypeAcceptingRef$3e$__["elementTypeAcceptingRef"],
    /**
   * If `true`, the component is disabled.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */ disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */ disableTouchRipple: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */ focusRipple: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */ focusVisibleClassName: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * @ignore
   */ href: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .any,
    /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */ LinkComponent: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * @ignore
   */ onBlur: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onClick: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onContextMenu: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onDragLeave: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onFocus: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */ onFocusVisible: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onKeyDown: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onKeyUp: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onMouseDown: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onMouseLeave: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onMouseUp: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onTouchEnd: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onTouchMove: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onTouchStart: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * @default 0
   */ tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Props applied to the `TouchRipple` element.
   */ TouchRippleProps: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * A ref that points to the `TouchRipple` element.
   */ touchRippleRef: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
            current: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
                pulsate: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                start: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                stop: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired
            })
        })
    ]),
    /**
   * @ignore
   */ type: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'button',
            'reset',
            'submit'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = ButtonBase;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAccordionSummaryUtilityClass",
    ()=>getAccordionSummaryUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript) <export default as unstable_generateUtilityClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getAccordionSummaryUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiAccordionSummary', slot);
}
const accordionSummaryClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__["unstable_generateUtilityClasses"])('MuiAccordionSummary', [
    'root',
    'expanded',
    'focusVisible',
    'disabled',
    'gutters',
    'contentGutters',
    'content',
    'expandIconWrapper'
]);
const __TURBOPACK__default__export__ = accordionSummaryClasses;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/AccordionSummary/AccordionSummary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript) <export default as unstable_composeClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/ButtonBase/ButtonBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Accordion$2f$AccordionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Accordion/AccordionContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$AccordionSummary$2f$accordionSummaryClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const _excluded = [
    "children",
    "className",
    "expandIcon",
    "focusVisibleClassName",
    "onClick"
];
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes, expanded, disabled, disableGutters } = ownerState;
    const slots = {
        root: [
            'root',
            expanded && 'expanded',
            disabled && 'disabled',
            !disableGutters && 'gutters'
        ],
        focusVisible: [
            'focusVisible'
        ],
        content: [
            'content',
            expanded && 'expanded',
            !disableGutters && 'contentGutters'
        ],
        expandIconWrapper: [
            'expandIconWrapper',
            expanded && 'expanded'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__["unstable_composeClasses"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$AccordionSummary$2f$accordionSummaryClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccordionSummaryUtilityClass"], classes);
};
const AccordionSummaryRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiAccordionSummary',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})(({ theme, ownerState })=>{
    const transition = {
        duration: theme.transitions.duration.shortest
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        display: 'flex',
        minHeight: 48,
        padding: theme.spacing(0, 2),
        transition: theme.transitions.create([
            'min-height',
            'background-color'
        ], transition),
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$AccordionSummary$2f$accordionSummaryClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
            backgroundColor: (theme.vars || theme).palette.action.focus
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$AccordionSummary$2f$accordionSummaryClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled}`]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity
        },
        [`&:hover:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$AccordionSummary$2f$accordionSummaryClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled})`]: {
            cursor: 'pointer'
        }
    }, !ownerState.disableGutters && {
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$AccordionSummary$2f$accordionSummaryClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].expanded}`]: {
            minHeight: 64
        }
    });
});
const AccordionSummaryContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('div', {
    name: 'MuiAccordionSummary',
    slot: 'Content',
    overridesResolver: (props, styles)=>styles.content
})(({ theme, ownerState })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        display: 'flex',
        flexGrow: 1,
        margin: '12px 0'
    }, !ownerState.disableGutters && {
        transition: theme.transitions.create([
            'margin'
        ], {
            duration: theme.transitions.duration.shortest
        }),
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$AccordionSummary$2f$accordionSummaryClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].expanded}`]: {
            margin: '20px 0'
        }
    }));
const AccordionSummaryExpandIconWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('div', {
    name: 'MuiAccordionSummary',
    slot: 'ExpandIconWrapper',
    overridesResolver: (props, styles)=>styles.expandIconWrapper
})(({ theme })=>({
        display: 'flex',
        color: (theme.vars || theme).palette.action.active,
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        }),
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$AccordionSummary$2f$accordionSummaryClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].expanded}`]: {
            transform: 'rotate(180deg)'
        }
    }));
const AccordionSummary = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function AccordionSummary(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiAccordionSummary'
    });
    const { children, className, expandIcon, focusVisibleClassName, onClick } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const { disabled = false, disableGutters, expanded, toggle } = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Accordion$2f$AccordionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const handleChange = (event)=>{
        if (toggle) {
            toggle(event);
        }
        if (onClick) {
            onClick(event);
        }
    };
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        expanded,
        disabled,
        disableGutters
    });
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(AccordionSummaryRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        focusRipple: false,
        disableRipple: true,
        disabled: disabled,
        component: "div",
        "aria-expanded": expanded,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        focusVisibleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.focusVisible, focusVisibleClassName),
        onClick: handleChange,
        ref: ref,
        ownerState: ownerState
    }, other, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionSummaryContent, {
                className: classes.content,
                ownerState: ownerState,
                children: children
            }),
            expandIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionSummaryExpandIconWrapper, {
                className: classes.expandIconWrapper,
                ownerState: ownerState,
                children: expandIcon
            })
        ]
    }));
});
("TURBOPACK compile-time truthy", 1) ? AccordionSummary.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The icon to display as the expand indicator.
   */ expandIcon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */ focusVisibleClassName: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * @ignore
   */ onClick: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = AccordionSummary;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAccordionDetailsUtilityClass",
    ()=>getAccordionDetailsUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript) <export default as unstable_generateUtilityClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getAccordionDetailsUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiAccordionDetails', slot);
}
const accordionDetailsClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__["unstable_generateUtilityClasses"])('MuiAccordionDetails', [
    'root'
]);
const __TURBOPACK__default__export__ = accordionDetailsClasses;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/AccordionDetails/AccordionDetails.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript) <export default as unstable_composeClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$AccordionDetails$2f$accordionDetailsClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const _excluded = [
    "className"
];
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__["unstable_composeClasses"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$AccordionDetails$2f$accordionDetailsClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccordionDetailsUtilityClass"], classes);
};
const AccordionDetailsRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('div', {
    name: 'MuiAccordionDetails',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        padding: theme.spacing(1, 2, 2)
    }));
const AccordionDetails = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function AccordionDetails(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiAccordionDetails'
    });
    const { className } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const ownerState = props;
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionDetailsRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ref: ref,
        ownerState: ownerState
    }, other));
});
("TURBOPACK compile-time truthy", 1) ? AccordionDetails.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = AccordionDetails;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>extendSxProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/deepmerge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-client] (ecmascript)");
;
;
const _excluded = [
    "sx"
];
;
;
const splitProps = (props)=>{
    var _props$theme$unstable, _props$theme;
    const result = {
        systemProps: {},
        otherProps: {}
    };
    const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    Object.keys(props).forEach((prop)=>{
        if (config[prop]) {
            result.systemProps[prop] = props[prop];
        } else {
            result.otherProps[prop] = props[prop];
        }
    });
    return result;
};
function extendSxProp(props) {
    const { sx: inSx } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const { systemProps, otherProps } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
        finalSx = [
            systemProps,
            ...inSx
        ];
    } else if (typeof inSx === 'function') {
        finalSx = (...args)=>{
            const result = inSx(...args);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(result)) {
                return systemProps;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, systemProps, result);
        };
    } else {
        finalSx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, systemProps, inSx);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, otherProps, {
        sx: finalSx
    });
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript) <export default as unstable_extendSxProp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_extendSxProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/capitalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_capitalize$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-client] (ecmascript) <export default as unstable_capitalize>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_capitalize$3e$__["unstable_capitalize"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Typography/typographyClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTypographyUtilityClass",
    ()=>getTypographyUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript) <export default as unstable_generateUtilityClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getTypographyUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiTypography', slot);
}
const typographyClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__["unstable_generateUtilityClasses"])('MuiTypography', [
    'root',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'inherit',
    'button',
    'caption',
    'overline',
    'alignLeft',
    'alignRight',
    'alignCenter',
    'alignJustify',
    'noWrap',
    'gutterBottom',
    'paragraph'
]);
const __TURBOPACK__default__export__ = typographyClasses;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypographyRoot",
    ()=>TypographyRoot,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_extendSxProp$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript) <export default as unstable_extendSxProp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript) <export default as unstable_composeClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$typographyClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/Typography/typographyClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const _excluded = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping"
];
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { align, gutterBottom, noWrap, paragraph, variant, classes } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            ownerState.align !== 'inherit' && `align${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(align)}`,
            gutterBottom && 'gutterBottom',
            noWrap && 'noWrap',
            paragraph && 'paragraph'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__["unstable_composeClasses"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$typographyClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypographyUtilityClass"], classes);
};
const TypographyRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.variant && styles[ownerState.variant],
            ownerState.align !== 'inherit' && styles[`align${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.align)}`],
            ownerState.noWrap && styles.noWrap,
            ownerState.gutterBottom && styles.gutterBottom,
            ownerState.paragraph && styles.paragraph
        ];
    }
})(({ theme, ownerState })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        margin: 0
    }, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
        textAlign: ownerState.align
    }, ownerState.noWrap && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }, ownerState.gutterBottom && {
        marginBottom: '0.35em'
    }, ownerState.paragraph && {
        marginBottom: 16
    }));
const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
};
// TODO v6: deprecate these color values in v5.x and remove the transformation in v6
const colorTransformations = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main'
};
const transformDeprecatedColors = (color)=>{
    return colorTransformations[color] || color;
};
const Typography = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Typography(inProps, ref) {
    const themeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiTypography'
    });
    const color = transformDeprecatedColors(themeProps.color);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_extendSxProp$3e$__["unstable_extendSxProp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, themeProps, {
        color
    }));
    const { align = 'inherit', className, component, gutterBottom = false, noWrap = false, paragraph = false, variant = 'body1', variantMapping = defaultVariantMapping } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        align,
        color,
        className,
        component,
        gutterBottom,
        noWrap,
        paragraph,
        variant,
        variantMapping
    });
    const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TypographyRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        as: Component,
        ref: ref,
        ownerState: ownerState,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className)
    }, other));
});
("TURBOPACK compile-time truthy", 1) ? Typography.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------
    /**
   * Set the text-align on the component.
   * @default 'inherit'
   */ align: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'center',
        'inherit',
        'justify',
        'left',
        'right'
    ]),
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */ gutterBottom: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */ noWrap: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */ paragraph: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * Applies the theme typography styles.
   * @default 'body1'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'body1',
            'body2',
            'button',
            'caption',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'inherit',
            'overline',
            'subtitle1',
            'subtitle2'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */ variantMapping: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .object
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Typography;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [app-client] (ecmascript) <export default as unstable_ClassNameGenerator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_ClassNameGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_ClassNameGenerator",
    ()=>unstable_ClassNameGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_ClassNameGenerator$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [app-client] (ecmascript) <export default as unstable_ClassNameGenerator>");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const unstable_ClassNameGenerator = {
    configure: (generator)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn([
                'MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.',
                '',
                "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead",
                '',
                'The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401',
                '',
                'The updated documentation: https://mui.com/guides/classname-generator/'
            ].join('\n'));
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_ClassNameGenerator$3e$__["unstable_ClassNameGenerator"].configure(generator);
    }
};
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/createChainedFunction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */ __turbopack_context__.s([
    "default",
    ()=>createChainedFunction
]);
function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func)=>{
        if (func == null) {
            return acc;
        }
        return function chainedFunction(...args) {
            acc.apply(this, args);
            func.apply(this, args);
        };
    }, ()=>{});
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/createChainedFunction.js [app-client] (ecmascript) <export default as unstable_createChainedFunction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_createChainedFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$createChainedFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$createChainedFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/createChainedFunction.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/createChainedFunction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$createChainedFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_createChainedFunction$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/createChainedFunction.js [app-client] (ecmascript) <export default as unstable_createChainedFunction>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$createChainedFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_createChainedFunction$3e$__["unstable_createChainedFunction"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/SvgIcon/svgIconClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getSvgIconUtilityClass",
    ()=>getSvgIconUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript) <export default as unstable_generateUtilityClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getSvgIconUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiSvgIcon', slot);
}
const svgIconClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_generateUtilityClasses$3e$__["unstable_generateUtilityClasses"])('MuiSvgIcon', [
    'root',
    'colorPrimary',
    'colorSecondary',
    'colorAction',
    'colorError',
    'colorDisabled',
    'fontSizeInherit',
    'fontSizeSmall',
    'fontSizeMedium',
    'fontSizeLarge'
]);
const __TURBOPACK__default__export__ = svgIconClasses;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/SvgIcon/SvgIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript) <export default as unstable_composeClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/useThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$svgIconClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/SvgIcon/svgIconClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const _excluded = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox"
];
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { color, fontSize, classes } = ownerState;
    const slots = {
        root: [
            'root',
            color !== 'inherit' && `color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)}`,
            `fontSize${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fontSize)}`
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__["unstable_composeClasses"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$svgIconClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSvgIconUtilityClass"], classes);
};
const SvgIconRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.color !== 'inherit' && styles[`color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.color)}`],
            styles[`fontSize${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.fontSize)}`]
        ];
    }
})(({ theme, ownerState })=>{
    var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
    return {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        // the <svg> will define the property that has `currentColor`
        // e.g. heroicons uses fill="none" and stroke="currentColor"
        fill: ownerState.hasSvgAsChild ? undefined : 'currentColor',
        flexShrink: 0,
        transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, 'fill', {
            duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
        }),
        fontSize: ({
            inherit: 'inherit',
            small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || '1.25rem',
            medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || '1.5rem',
            large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || '2.1875rem'
        })[ownerState.fontSize],
        // TODO v5 deprecate, v6 remove for sx
        color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : ({
            action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
            disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
            inherit: undefined
        })[ownerState.color]
    };
});
const SvgIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SvgIcon(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiSvgIcon'
    });
    const { children, className, color = 'inherit', component = 'svg', fontSize = 'medium', htmlColor, inheritViewBox = false, titleAccess, viewBox = '0 0 24 24' } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const hasSvgAsChild = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children) && children.type === 'svg';
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        color,
        component,
        fontSize,
        instanceFontSize: inProps.fontSize,
        inheritViewBox,
        viewBox,
        hasSvgAsChild
    });
    const more = {};
    if (!inheritViewBox) {
        more.viewBox = viewBox;
    }
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(SvgIconRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        as: component,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        focusable: "false",
        color: htmlColor,
        "aria-hidden": titleAccess ? undefined : true,
        role: titleAccess ? 'img' : undefined,
        ref: ref
    }, more, other, hasSvgAsChild && children.props, {
        ownerState: ownerState,
        children: [
            hasSvgAsChild ? children.props.children : children,
            titleAccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: titleAccess
            }) : null
        ]
    }));
});
("TURBOPACK compile-time truthy", 1) ? SvgIcon.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------
    /**
   * Node passed into the SVG element.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'inherit',
            'action',
            'disabled',
            'primary',
            'secondary',
            'error',
            'info',
            'success',
            'warning'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */ fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'inherit',
            'large',
            'medium',
            'small'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * Applies a color attribute to the SVG element.
   */ htmlColor: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */ inheritViewBox: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */ shapeRendering: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */ titleAccess: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */ viewBox: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
} : "TURBOPACK unreachable";
SvgIcon.muiName = 'SvgIcon';
const __TURBOPACK__default__export__ = SvgIcon;
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/createSvgIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createSvgIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/SvgIcon/SvgIcon.js [app-client] (ecmascript)");
/**
 * Private module reserved for @mui packages.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function createSvgIcon(path, displayName) {
    function Component(props, ref) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "data-testid": `${displayName}Icon`,
            ref: ref
        }, props, {
            children: path
        }));
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // Need to set `displayName` on the inner component for React.memo.
        // React prior to 16.14 ignores `displayName` on the wrapper.
        Component.displayName = `${displayName}Icon`;
    }
    Component.muiName = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].muiName;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](Component));
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/debounce/debounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
__turbopack_context__.s([
    "default",
    ()=>debounce
]);
function debounce(func, wait = 166) {
    let timeout;
    function debounced(...args) {
        const later = ()=>{
            // @ts-ignore
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
    debounced.clear = ()=>{
        clearTimeout(timeout);
    };
    return debounced;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/debounce/debounce.js [app-client] (ecmascript) <export default as unstable_debounce>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_debounce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$debounce$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$debounce$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/debounce/debounce.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/debounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$debounce$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_debounce$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/debounce/debounce.js [app-client] (ecmascript) <export default as unstable_debounce>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$debounce$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_debounce$3e$__["unstable_debounce"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/deprecatedPropType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>deprecatedPropType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function deprecatedPropType(validator, reason) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (props, propName, componentName, location, propFullName)=>{
        const componentNameSafe = componentName || '<<anonymous>>';
        const propFullNameSafe = propFullName || propName;
        if (typeof props[propName] !== 'undefined') {
            return new Error(`The ${location} \`${propFullNameSafe}\` of ` + `\`${componentNameSafe}\` is deprecated. ${reason}`);
        }
        return null;
    };
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/deprecatedPropType.js [app-client] (ecmascript) <export default as unstable_deprecatedPropType>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_deprecatedPropType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deprecatedPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deprecatedPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/deprecatedPropType.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/deprecatedPropType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deprecatedPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_deprecatedPropType$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/deprecatedPropType.js [app-client] (ecmascript) <export default as unstable_deprecatedPropType>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deprecatedPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_deprecatedPropType$3e$__["unstable_deprecatedPropType"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/isMuiElement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isMuiElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function isMuiElement(element, muiNames) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](element) && muiNames.indexOf(element.type.muiName) !== -1;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/isMuiElement.js [app-client] (ecmascript) <export default as unstable_isMuiElement>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_isMuiElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isMuiElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isMuiElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/isMuiElement.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/isMuiElement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isMuiElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_isMuiElement$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/isMuiElement.js [app-client] (ecmascript) <export default as unstable_isMuiElement>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isMuiElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_isMuiElement$3e$__["unstable_isMuiElement"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerDocument
]);
function ownerDocument(node) {
    return node && node.ownerDocument || document;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [app-client] (ecmascript) <export default as unstable_ownerDocument>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_ownerDocument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/ownerDocument.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_ownerDocument$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [app-client] (ecmascript) <export default as unstable_ownerDocument>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_ownerDocument$3e$__["unstable_ownerDocument"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [app-client] (ecmascript)");
;
function ownerWindow(node) {
    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    return doc.defaultView || window;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js [app-client] (ecmascript) <export default as unstable_ownerWindow>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_ownerWindow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerWindow$2f$ownerWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerWindow$2f$ownerWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/ownerWindow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerWindow$2f$ownerWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_ownerWindow$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js [app-client] (ecmascript) <export default as unstable_ownerWindow>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerWindow$2f$ownerWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_ownerWindow$3e$__["unstable_ownerWindow"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/requirePropFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>requirePropFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
;
function requirePropFactory(componentNameInError, Component) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const prevPropTypes = Component ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, Component.propTypes) : null;
    const requireProp = (requiredProp)=>(props, propName, componentName, location, propFullName, ...args)=>{
            const propFullNameSafe = propFullName || propName;
            const defaultTypeChecker = prevPropTypes == null ? void 0 : prevPropTypes[propFullNameSafe];
            if (defaultTypeChecker) {
                const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
                if (typeCheckerResult) {
                    return typeCheckerResult;
                }
            }
            if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
                return new Error(`The prop \`${propFullNameSafe}\` of ` + `\`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
            }
            return null;
        };
    return requireProp;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/requirePropFactory.js [app-client] (ecmascript) <export default as unstable_requirePropFactory>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_requirePropFactory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$requirePropFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$requirePropFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/requirePropFactory.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/requirePropFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$requirePropFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_requirePropFactory$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/requirePropFactory.js [app-client] (ecmascript) <export default as unstable_requirePropFactory>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$requirePropFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_requirePropFactory$3e$__["unstable_requirePropFactory"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/setRef.js [app-client] (ecmascript) <export default as unstable_setRef>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_setRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$setRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$setRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/setRef.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/setRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$setRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_setRef$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/setRef.js [app-client] (ecmascript) <export default as unstable_setRef>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$setRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_setRef$3e$__["unstable_setRef"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript) <export default as unstable_useEnhancedEffect>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_useEnhancedEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useEnhancedEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEnhancedEffect$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript) <export default as unstable_useEnhancedEffect>");
'use client';
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEnhancedEffect$3e$__["unstable_useEnhancedEffect"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useId/useId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
let globalId = 0;
function useGlobalId(idOverride) {
    const [defaultId, setDefaultId] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(idOverride);
    const id = idOverride || defaultId;
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useGlobalId.useEffect": ()=>{
            if (defaultId == null) {
                // Fallback to this default id when possible.
                // Use the incrementing value for client-side rendering only.
                // We can't use it server-side.
                // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
                globalId += 1;
                setDefaultId(`mui-${globalId}`);
            }
        }
    }["useGlobalId.useEffect"], [
        defaultId
    ]);
    return id;
}
// downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__['useId'.toString()];
function useId(idOverride) {
    if (maybeReactUseId !== undefined) {
        const reactId = maybeReactUseId();
        return idOverride != null ? idOverride : reactId;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride);
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useId/useId.js [app-client] (ecmascript) <export default as unstable_useId>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_useId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useId$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useId$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useId/useId.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useId$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useId$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/useId/useId.js [app-client] (ecmascript) <export default as unstable_useId>");
'use client';
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useId$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useId$3e$__["unstable_useId"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/unsupportedProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unsupportedProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function unsupportedProp(props, propName, componentName, location, propFullName) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== 'undefined') {
        return new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
    }
    return null;
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/unsupportedProp.js [app-client] (ecmascript) <export default as unstable_unsupportedProp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_unsupportedProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$unsupportedProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$unsupportedProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/unsupportedProp.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/unsupportedProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$unsupportedProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_unsupportedProp$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/utils/esm/unsupportedProp.js [app-client] (ecmascript) <export default as unstable_unsupportedProp>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$unsupportedProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_unsupportedProp$3e$__["unstable_unsupportedProp"];
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capitalize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "createChainedFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createChainedFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "createSvgIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "debounce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "deprecatedPropType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$deprecatedPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "isMuiElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$isMuiElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ownerDocument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ownerWindow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$ownerWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "requirePropFactory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$requirePropFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "setRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$setRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "unstable_ClassNameGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unstable_ClassNameGenerator"],
    "unstable_useEnhancedEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "unstable_useId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "unsupportedProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$unsupportedProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "useControlled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "useEventCallback",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "useForkRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "useIsFocusVisible",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useIsFocusVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createChainedFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/createChainedFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/createSvgIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/debounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$deprecatedPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/deprecatedPropType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$isMuiElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/isMuiElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/ownerDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$ownerWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/ownerWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$requirePropFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/requirePropFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$setRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/setRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useEnhancedEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$unsupportedProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/unsupportedProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useControlled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useEventCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useForkRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useIsFocusVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/useIsFocusVisible.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/icons-material/utils/createSvgIcon.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _utils.createSvgIcon;
    }
});
var _utils = __turbopack_context__.r("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/utils/index.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/icons-material/ExpandMore.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _createSvgIcon = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/icons-material/utils/createSvgIcon.js [app-client] (ecmascript)"));
var _jsxRuntime = __turbopack_context__.r("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _default = (0, _createSvgIcon.default)(/*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');
exports.default = _default;
}),
]);

//# sourceMappingURL=fd5a1_0a26409e._.js.map