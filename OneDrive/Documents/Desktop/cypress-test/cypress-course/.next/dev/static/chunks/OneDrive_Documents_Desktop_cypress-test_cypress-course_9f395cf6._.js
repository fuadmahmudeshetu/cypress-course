(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/NavItem.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function NavItem({ label, path }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: path,
        children: label
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/NavItem.jsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = NavItem;
var _c;
__turbopack_context__.k.register(_c, "NavItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/NavBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$app$2f$components$2f$NavItem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/NavItem.jsx [app-client] (ecmascript)");
'use client';
;
;
const navItems = [
    {
        label: 'Why Cypress?',
        path: '/'
    },
    {
        label: 'Overview',
        path: '/overview'
    },
    {
        label: 'Fundamentals',
        path: '/fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms'
    },
    {
        label: 'Examples',
        path: '/examples'
    },
    {
        label: 'Component',
        path: '/component'
    },
    {
        label: 'Best Practices',
        path: '/best-practices'
    }
];
function NavBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "nav-bar",
        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$app$2f$components$2f$NavItem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: item.label,
                path: item.path
            }, item.label, false, {
                fileName: "[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/NavBar.jsx",
                lineNumber: 40,
                columnNumber: 21
            }, this))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/NavBar.jsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_c = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/theme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    // You can customize your theme here
    palette: {
        primary: {
            main: '#556cd6'
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: '#red'
        }
    }
});
const __TURBOPACK__default__export__ = theme;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/ThemeRegistry.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c39617d8$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__CacheProvider$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js [app-client] (ecmascript) <export C as CacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/theme.js [app-client] (ecmascript)"); // Assuming you'll have a theme file at this path
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const createEmotionCache = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        key: 'css'
    });
};
function ThemeRegistry(props) {
    _s();
    const { options, children } = props;
    const [{ cache, flush }] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "ThemeRegistry.useState": ()=>{
            const cache = createEmotionCache(options);
            cache.compat = true;
            let inserted = [];
            return {
                cache,
                flush: ({
                    "ThemeRegistry.useState": ()=>{
                        const prev = inserted;
                        inserted = [];
                        return prev;
                    }
                })["ThemeRegistry.useState"]
            };
        }
    }["ThemeRegistry.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerInsertedHTML"])({
        "ThemeRegistry.useServerInsertedHTML": ()=>{
            const serialized = flush();
            if (serialized.length === 0) {
                return null;
            }
            let styles = '';
            for (const item of serialized){
                styles += item.css;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                "data-emotion": `${cache.key} ${serialized.map({
                    "ThemeRegistry.useServerInsertedHTML": (item)=>item.name
                }["ThemeRegistry.useServerInsertedHTML"]).join(' ')}`,
                dangerouslySetInnerHTML: {
                    __html: styles
                }
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/ThemeRegistry.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this);
        }
    }["ThemeRegistry.useServerInsertedHTML"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c39617d8$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__CacheProvider$3e$__["CacheProvider"], {
        value: cache,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/ThemeRegistry.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/ThemeRegistry.jsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/Desktop/cypress-test/cypress-course/app/components/ThemeRegistry.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ThemeRegistry, "f/8+HFm7VbRRVXH5XEqgQantS8U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Desktop$2f$cypress$2d$test$2f$cypress$2d$course$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerInsertedHTML"]
    ];
});
_c = ThemeRegistry;
var _c;
__turbopack_context__.k.register(_c, "ThemeRegistry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Documents_Desktop_cypress-test_cypress-course_9f395cf6._.js.map