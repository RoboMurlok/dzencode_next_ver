(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dzencode_next-main/client/types/routes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROUTES",
    ()=>ROUTES
]);
const ROUTES = {
    products: "/",
    orders: "/orders"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$types$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/types/routes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const navLinks = [
    {
        name: "Продукты",
        path: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$types$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUTES"].products
    },
    {
        name: "Ордера",
        path: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$types$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUTES"].orders
    }
];
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "dfc3927e832aeaaa361b499ab7f352007172c62864369024a9fb1cd139f7fe4e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dfc3927e832aeaaa361b499ab7f352007172c62864369024a9fb1cd139f7fe4e";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] !== pathname) {
        t0 = navLinks.map({
            "Navbar[navLinks.map()]": (link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: link.path,
                    className: `navLink ${pathname === link.path ? "active" : ""} fw-bolder text-black opacity-75`,
                    children: link.name
                }, link.path, false, {
                    fileName: "[project]/dzencode_next-main/client/components/Navbar.tsx",
                    lineNumber: 26,
                    columnNumber: 41
                }, this)
        }["Navbar[navLinks.map()]"]);
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "d-flex flex-column align-items-center gap-4",
            children: t0
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Navbar.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_s(Navbar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/app/assets/avatar.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/avatar.01log3i2ampiu.jpg");}),
"[project]/dzencode_next-main/client/app/assets/avatar.jpg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/avatar.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$avatar$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/app/assets/avatar.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$avatar$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 460,
    height: 460,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmZtSUTvJPBEWaEqpU8KP4Tj1zmuahh/aLujqq1eTfc//Z"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/app/assets/gear.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/gear.185k04ggxx~2q.svg");}),
"[project]/dzencode_next-main/client/app/assets/gear.svg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/gear.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$gear$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/app/assets/gear.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$gear$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/components/Aside.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Aside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$avatar$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$avatar$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/avatar.jpg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/avatar.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$gear$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$gear$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/gear.svg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/gear.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
;
function Aside() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "a8b91fbe64a3840928bf5ef2505057a0b9923287a6ef1b917abd5c04fbce54a0") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a8b91fbe64a3840928bf5ef2505057a0b9923287a6ef1b917abd5c04fbce54a0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$avatar$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$avatar$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "avatar",
            width: 100,
            height: 100,
            className: "rounded-circle",
            priority: true
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "d-flex flex-column gap-5 p-5 align-items-center h-100 w-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "position-relative",
                    children: [
                        t0,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-absolute z-1 d-flex align-items-center bg-white shadow p-3 rounded-circle",
                            style: {
                                bottom: "-5px",
                                right: "-10px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$gear$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$gear$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "gear",
                                width: 14,
                                height: 14
                            }, void 0, false, {
                                fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
                                lineNumber: 28,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
                            lineNumber: 25,
                            columnNumber: 128
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
                    lineNumber: 25,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
                    lineNumber: 28,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = Aside;
var _c;
__turbopack_context__.k.register(_c, "Aside");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/app/assets/shield.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/shield.0-5236jj4tp6s.svg");}),
"[project]/dzencode_next-main/client/app/assets/shield.svg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/shield.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$shield$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/app/assets/shield.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$shield$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 40,
    height: 40,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/app/assets/clock.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/clock.0uv562e_irzyf.svg");}),
"[project]/dzencode_next-main/client/app/assets/clock.svg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/clock.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$clock$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/app/assets/clock.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$clock$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$shield$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$shield$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/shield.svg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/shield.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$clock$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$clock$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/clock.svg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/clock.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "6c332240bd18499f4e1a2bad9174fa0020e3e3d296eea9764571ed99043197b2") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6c332240bd18499f4e1a2bad9174fa0020e3e3d296eea9764571ed99043197b2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Date();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Header[useEffect()]": ()=>{
                const interval = setInterval({
                    "Header[useEffect() > setInterval()]": ()=>{
                        setNow(new Date());
                    }
                }["Header[useEffect() > setInterval()]"], 1000);
                return ()=>clearInterval(interval);
            }
        })["Header[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== now) {
        t3 = now.toLocaleDateString("ru-RU", {
            weekday: "long"
        });
        $[4] = now;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const weekday = t3;
    let t4;
    if ($[6] !== now) {
        t4 = now.toLocaleDateString("ru-RU", {
            day: "numeric"
        });
        $[6] = now;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const day = t4;
    let t5;
    if ($[8] !== now) {
        t5 = now.toLocaleDateString("ru-RU", {
            month: "short"
        });
        $[8] = now;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const month = t5;
    let t6;
    if ($[10] !== now) {
        t6 = now.toLocaleDateString("ru-RU", {
            year: "numeric"
        });
        $[10] = now;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const year = t6;
    let t7;
    if ($[12] !== now) {
        t7 = now.toLocaleTimeString("ru-RU", {
            timeStyle: "short"
        });
        $[12] = now;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const time = t7;
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex align-items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$shield$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$shield$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "shield",
                    width: 40,
                    height: 40,
                    className: "rounded-circle"
                }, void 0, false, {
                    fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                    lineNumber: 102,
                    columnNumber: 59
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    className: "fw-bold m-0 text-success",
                    children: "INVENTORY"
                }, void 0, false, {
                    fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                    lineNumber: 102,
                    columnNumber: 144
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex flex-wrap gap-5 w-50",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex align-items-center flex-grow-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        placeholder: "\u041F\u043E\u0438\u0441\u043A",
                        className: "border border-success border-opacity-25 rounded-1 px-2 w-100 fw-bolder text-bg-light"
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                        lineNumber: 109,
                        columnNumber: 114
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                    lineNumber: 109,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== weekday) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "fw-semibold m-0",
                children: weekday
            }, void 0, false, {
                fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                lineNumber: 116,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[16] = weekday;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== day || $[19] !== month || $[20] !== year) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "fw-semibold m-0",
                children: [
                    day,
                    ".",
                    month,
                    ".",
                    year
                ]
            }, void 0, true, {
                fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                lineNumber: 124,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[18] = day;
        $[19] = month;
        $[20] = year;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$clock$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$clock$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "clock",
            width: 20,
            height: 20,
            className: "rounded-circle"
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== time) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex align-items-center gap-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "fw-semibold m-0",
                        children: time
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                        lineNumber: 141,
                        columnNumber: 70
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                    lineNumber: 141,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[23] = time;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t11 || $[26] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex flex-wrap align-items-center gap-3",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t13;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t10 || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "col-8 py-2 px-0 mx-auto d-flex gap-5 justify-content-between align-items-center",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex flex-column",
                        children: [
                            t10,
                            t14
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                        lineNumber: 158,
                        columnNumber: 136
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                lineNumber: 158,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    return t15;
}
_s(Header, "hHZNZY2ahBmk+KBtLObnKs5W05c=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/app/assets/trashRed.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/trashRed.00ya07uxfgn1h.svg");}),
"[project]/dzencode_next-main/client/app/assets/trashRed.svg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/trashRed.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$trashRed$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/app/assets/trashRed.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$trashRed$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/app/assets/close.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/close.0mos48x6p54c7.svg");}),
"[project]/dzencode_next-main/client/app/assets/close.svg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/close.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/app/assets/close.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/components/Circle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Circle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
function Circle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "5a56f1410deb78f0ac7a0bc6de5cba204cbbcfac6923253baadf2fd418df7b2c") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5a56f1410deb78f0ac7a0bc6de5cba204cbbcfac6923253baadf2fd418df7b2c";
    }
    const { image, alt, style, onClick } = t0;
    let t1;
    if ($[1] !== alt || $[2] !== image) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: image,
            alt: alt,
            width: 12,
            height: 12
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Circle.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[1] = alt;
        $[2] = image;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== onClick || $[5] !== style || $[6] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: style,
            className: "position-absolute z-2 d-flex align-items-center bg-white shadow p-3 rounded-circle myHoverOpen",
            onClick: onClick,
            children: t1
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Circle.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[4] = onClick;
        $[5] = style;
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return t2;
}
_c = Circle;
var _c;
__turbopack_context__.k.register(_c, "Circle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/stores/orderStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOrderStore",
    ()=>useOrderStore,
    "useUIStore",
    ()=>useUIStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useOrderStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        orders: [
            {
                id: 1,
                title: "Order 1",
                date: "2017-06-29 12:09:33",
                description: "desc",
                products: []
            },
            {
                id: 2,
                title: "Order 2",
                date: "2017-06-29 12:09:33",
                description: "desc",
                products: []
            },
            {
                id: 3,
                title: "Order 3",
                date: "2017-06-29 12:09:33",
                description: "desc",
                products: []
            }
        ],
        addOrder: (order)=>set((state)=>({
                    orders: [
                        ...state.orders,
                        order
                    ]
                })),
        removeOrder: (id)=>set((state)=>({
                    orders: state.orders.filter((p)=>p.id !== id)
                })),
        setOrders: (orders)=>set({
                orders
            }),
        getOrderById: (id)=>{
            return get().orders.find((o)=>o.id === id);
        }
    }));
const useUIStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        stealth: false,
        offStealth: ()=>set({
                stealth: true
            }),
        onStealth: ()=>set({
                stealth: false
            }),
        activeCardId: null,
        setActiveCard: (id)=>set({
                activeCardId: id
            }),
        isModalOpen: false,
        openModal: ()=>set({
                isModalOpen: true
            }),
        closeModal: ()=>set({
                isModalOpen: false
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/stores/productStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProductStore",
    ()=>useProductStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useProductStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        products: [
            {
                id: 1,
                serialNumber: 1234,
                isNew: true,
                photo: "/products/monitor.png",
                title: "EIZO FlexScan EV2781",
                type: "монитор",
                specification: "новый",
                guarantee: {
                    start: "2017-06-29 12:09:33",
                    end: "2017-06-29 12:09:33"
                },
                prices: [
                    {
                        value: 250,
                        symbol: "USD",
                        isDefault: false
                    },
                    {
                        value: 2400,
                        symbol: "UAH",
                        isDefault: true
                    }
                ],
                incoming: "приход 1",
                group: "группа 1",
                person: "персона 1",
                order: 1,
                date: "2017-06-29 12:09:33"
            },
            {
                id: 2,
                serialNumber: 1234,
                isNew: true,
                photo: "/products/monitor.png",
                title: "EIZO FlexScan EV2781",
                type: "монитор",
                specification: "новый",
                guarantee: {
                    start: "2017-06-29 12:09:33",
                    end: "2017-06-29 12:09:33"
                },
                prices: [
                    {
                        value: 250,
                        symbol: "USD",
                        isDefault: false
                    },
                    {
                        value: 2400,
                        symbol: "UAH",
                        isDefault: true
                    }
                ],
                incoming: "приход 1",
                group: "группа 1",
                person: "персона 1",
                order: 2,
                date: "2017-06-29 12:09:33"
            },
            {
                id: 3,
                serialNumber: 1234,
                isNew: true,
                photo: "/products/monitor.png",
                title: "EIZO FlexScan EV2781",
                type: "монитор",
                specification: "б/у",
                guarantee: {
                    start: "2017-06-29 12:09:33",
                    end: "2017-06-29 12:09:33"
                },
                prices: [
                    {
                        value: 250,
                        symbol: "USD",
                        isDefault: false
                    },
                    {
                        value: 2400,
                        symbol: "UAH",
                        isDefault: true
                    }
                ],
                incoming: "приход 1",
                group: "группа 1",
                person: "персона 1",
                order: 3,
                date: "2017-06-29 12:09:33"
            },
            {
                id: 4,
                serialNumber: 1234,
                isNew: true,
                photo: "/products/monitor.png",
                title: "EIZO FlexScan EV2781",
                type: "телевизор",
                specification: "б/у",
                guarantee: {
                    start: "2017-06-29 12:09:33",
                    end: "2017-06-29 12:09:33"
                },
                prices: [
                    {
                        value: 250,
                        symbol: "USD",
                        isDefault: false
                    },
                    {
                        value: 2400,
                        symbol: "UAH",
                        isDefault: true
                    }
                ],
                incoming: "приход 1",
                group: "группа 1",
                person: "персона 1",
                order: 1,
                date: "2017-06-29 12:09:33"
            },
            {
                id: 5,
                serialNumber: 1234,
                isNew: true,
                photo: "/products/monitor.png",
                title: "EIZO FlexScan EV2781",
                type: "телевизор",
                specification: "новый",
                guarantee: {
                    start: "2017-06-29 12:09:33",
                    end: "2017-06-29 12:09:33"
                },
                prices: [
                    {
                        value: 250,
                        symbol: "USD",
                        isDefault: false
                    },
                    {
                        value: 2400,
                        symbol: "UAH",
                        isDefault: true
                    }
                ],
                incoming: "приход 1",
                group: "группа 1",
                person: "персона 1",
                order: 2,
                date: "2017-06-29 12:09:33"
            }
        ],
        activeCardId: null,
        addProduct: (product)=>set((state)=>({
                    products: [
                        ...state.products,
                        product
                    ]
                })),
        removeProduct: (id)=>set((state)=>({
                    products: state.products.filter((p)=>p.id !== id)
                })),
        setProducts: (products)=>set({
                products
            }),
        setActiveCard: (id)=>set({
                activeCardId: id
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/components/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$trashRed$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$trashRed$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/trashRed.svg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/trashRed.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/close.svg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/close.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Circle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/components/Circle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$orderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/stores/orderStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/stores/productStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const cssCentre = "d-flex align-items-center justify-content-center";
function Modal() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "0bece8a1b726a839c814f8295c22d4b602086af1dde0f3f67e8b026a6a0e0bb0") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0bece8a1b726a839c814f8295c22d4b602086af1dde0f3f67e8b026a6a0e0bb0";
    }
    const { isModalOpen, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$orderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIStore"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"])(_ModalUseProductStore);
    let t0;
    if ($[1] !== id) {
        t0 = ({
            "Modal[useProductStore()]": (s_0)=>s_0.products.find({
                    "Modal[useProductStore() > s_0.products.find()]": (p)=>p.id === id
                }["Modal[useProductStore() > s_0.products.find()]"])
        })["Modal[useProductStore()]"];
        $[1] = id;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"])(t0);
    const removeProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"])(_ModalUseProductStore2);
    if (!isModalOpen) {
        return null;
    }
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        };
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            top: "-20px",
            right: "-20px",
            cursor: "pointer"
        };
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== closeModal) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Circle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            image: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "close",
            style: t2,
            onClick: closeModal
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[5] = closeModal;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-between align-items-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "m-0",
                children: "Вы уверены, что хотите удалить этот приход?"
            }, void 0, false, {
                fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                lineNumber: 71,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== product) {
        t5 = product && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex gap-2 px-4 py-2 bg-white border-bottom border-top",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: cssCentre,
                    style: {
                        width: 20
                    },
                    children: product.isNew ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "p-1 bg-warning rounded-circle"
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                        lineNumber: 80,
                        columnNumber: 27
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "p-1 bg-black rounded-circle"
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                        lineNumber: 80,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                    lineNumber: 78,
                    columnNumber: 95
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: cssCentre,
                    style: {
                        width: 50
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: product.photo,
                        alt: "product",
                        width: 40,
                        height: 40
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                        lineNumber: 82,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                    lineNumber: 80,
                    columnNumber: 129
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex flex-column",
                    style: {
                        width: 400
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fw-bolder text-black-50 m-0 text-decoration-underline",
                            children: product.title
                        }, void 0, false, {
                            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                            lineNumber: 84,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fw-medium text-secondary m-0 text-opacity-50",
                            children: [
                                "SN-",
                                product.serialNumber
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                            lineNumber: 84,
                            columnNumber: 98
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                    lineNumber: 82,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
            lineNumber: 78,
            columnNumber: 21
        }, this);
        $[8] = product;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== closeModal) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn bg-success text-white rounded-pill px-4 py-1 myHoverOpen",
            onClick: closeModal,
            children: "Отменить"
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[10] = closeModal;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== id || $[13] !== removeProduct) {
        t7 = ({
            "Modal[<button>.onClick]": ()=>{
                if (id !== null) {
                    removeProduct(id);
                }
            }
        })["Modal[<button>.onClick]"];
        $[12] = id;
        $[13] = removeProduct;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$trashRed$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$trashRed$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "trash",
            width: 12,
            height: 12
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "d-flex align-items-center gap-2 border-0 bg-white text-danger rounded-pill px-4 py-1 myHoverDelete",
            onClick: t7,
            children: [
                t8,
                "Удалить"
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t6 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-end gap-2 bg-success p-4",
            children: [
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[18] = t6;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t3 || $[23] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-1 w-50 position-relative",
            children: [
                t3,
                t4,
                t5,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t3;
        $[23] = t5;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== closeModal || $[26] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex align-items-center justify-content-center position-absolute z-3 top-0 start-0 w-100 h-100",
                style: t1,
                onClick: closeModal,
                children: t11
            }, void 0, false, {
                fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this)
        }, void 0, false);
        $[25] = closeModal;
        $[26] = t11;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    return t12;
}
_s(Modal, "+Hh1VTMb7SB3SHkpzcYVfMYk51w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$orderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"]
    ];
});
_c = Modal;
function _ModalUseProductStore2(s_1) {
    return s_1.removeProduct;
}
function _ModalUseProductStore(s) {
    return s.activeCardId;
}
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dzencode_next-main/client/components/ClientLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Aside$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/components/Aside.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/components/Modal.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ClientLayout(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "ad0e3c9bf6364d4e290adebfd1249fe8bbfa2f05be9f78d0b06ed76d9032c12c") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ad0e3c9bf6364d4e290adebfd1249fe8bbfa2f05be9f78d0b06ed76d9032c12c";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-2 p-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Aside$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                lineNumber: 27,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            padding: "3rem 4rem"
        };
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    let t5;
    if ($[5] !== children) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-fluid px-0 min-vh-100",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-md-10 p-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "d-flex flex-column bg-light min-vh-100 position-relative",
                                style: t3,
                                children: [
                                    t4,
                                    children
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                                lineNumber: 47,
                                columnNumber: 119
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                            lineNumber: 47,
                            columnNumber: 88
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                    lineNumber: 47,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[5] = children;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dzencode_next-main_client_065i451._.js.map