module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/dzencode_next-main/client/types/routes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROUTES",
    ()=>ROUTES
]);
const ROUTES = {
    products: "/",
    orders: "/orders"
};
}),
"[project]/dzencode_next-main/client/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$types$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/types/routes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const navLinks = [
    {
        name: "Продукты",
        path: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$types$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].products
    },
    {
        name: "Ордера",
        path: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$types$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].orders
    }
];
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "d-flex flex-column align-items-center gap-4",
        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: link.path,
                className: `navLink ${pathname === link.path ? "active" : ""} fw-bolder text-black opacity-75`,
                children: link.name
            }, link.path, false, {
                fileName: "[project]/dzencode_next-main/client/components/Navbar.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/dzencode_next-main/client/components/Navbar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/dzencode_next-main/client/app/assets/avatar.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/avatar.01log3i2ampiu.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/dzencode_next-main/client/app/assets/avatar.jpg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/avatar.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/dzencode_next-main/client/app/assets/gear.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/gear.185k04ggxx~2q.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/dzencode_next-main/client/app/assets/gear.svg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/gear.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/dzencode_next-main/client/components/Aside.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Aside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$avatar$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$avatar$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/avatar.jpg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/avatar.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$gear$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$gear$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/gear.svg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/gear.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
function Aside() {
    return(// <aside className="d-flex flex-column gap-5 p-5 align-items-center min-vh-100">
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "d-flex flex-column gap-5 p-5 align-items-center h-100 w-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "position-relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$avatar$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$avatar$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "avatar",
                        width: 100,
                        height: 100,
                        className: "rounded-circle",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "position-absolute z-1 d-flex align-items-center bg-white shadow p-3 rounded-circle",
                        style: {
                            bottom: "-5px",
                            right: "-10px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$gear$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$gear$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "gear",
                            width: 14,
                            height: 14
                        }, void 0, false, {
                            fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dzencode_next-main/client/components/Aside.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this));
}
}),
"[project]/dzencode_next-main/client/app/assets/shield.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/shield.0-5236jj4tp6s.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/dzencode_next-main/client/app/assets/shield.svg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/shield.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/dzencode_next-main/client/app/assets/clock.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/clock.0uv562e_irzyf.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/dzencode_next-main/client/app/assets/clock.svg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/clock.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/dzencode_next-main/client/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$shield$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$shield$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/shield.svg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/shield.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$clock$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$clock$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/clock.svg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/clock.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
function Header() {
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setNow(new Date());
        }, 1000);
        return ()=>clearInterval(interval);
    }, []);
    const weekday = now.toLocaleDateString("ru-RU", {
        weekday: "long"
    });
    const day = now.toLocaleDateString("ru-RU", {
        day: "numeric"
    });
    const month = now.toLocaleDateString("ru-RU", {
        month: "short"
    });
    const year = now.toLocaleDateString("ru-RU", {
        year: "numeric"
    });
    const time = now.toLocaleTimeString("ru-RU", {
        timeStyle: "short"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "col-8 py-2 px-0 mx-auto d-flex gap-5 justify-content-between align-items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex flex-wrap gap-5 w-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex align-items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$shield$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$shield$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "shield",
                                    width: 40,
                                    height: 40,
                                    className: "rounded-circle"
                                }, void 0, false, {
                                    fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    className: "fw-bold m-0 text-success",
                                    children: "INVENTORY"
                                }, void 0, false, {
                                    fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex align-items-center flex-grow-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "search",
                                placeholder: "Поиск",
                                className: "border border-success border-opacity-25 rounded-1 px-2 w-100 fw-bolder text-bg-light"
                            }, void 0, false, {
                                fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex flex-column",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fw-semibold m-0",
                                children: weekday
                            }, void 0, false, {
                                fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex flex-wrap align-items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex align-items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$clock$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$clock$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "clock",
                                            width: 20,
                                            height: 20,
                                            className: "rounded-circle"
                                        }, void 0, false, {
                                            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "fw-semibold m-0",
                                                children: time
                                            }, void 0, false, {
                                                fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dzencode_next-main/client/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/dzencode_next-main/client/app/assets/trashRed.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/trashRed.00ya07uxfgn1h.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/dzencode_next-main/client/app/assets/trashRed.svg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/trashRed.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/dzencode_next-main/client/app/assets/close.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/close.0mos48x6p54c7.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/dzencode_next-main/client/app/assets/close.svg.mjs { IMAGE => \"[project]/dzencode_next-main/client/app/assets/close.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/dzencode_next-main/client/components/Circle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Circle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function Circle({ image, alt, style, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: style,
        className: "position-absolute z-2 d-flex align-items-center bg-white shadow p-3 rounded-circle myHoverOpen",
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: image,
            alt: alt,
            width: 12,
            height: 12
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Circle.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dzencode_next-main/client/components/Circle.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/dzencode_next-main/client/stores/orderStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOrderStore",
    ()=>useOrderStore,
    "useUIStore",
    ()=>useUIStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useOrderStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
const useUIStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
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
}),
"[project]/dzencode_next-main/client/stores/productStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProductStore",
    ()=>useProductStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useProductStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
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
}),
"[project]/dzencode_next-main/client/components/Modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$trashRed$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$trashRed$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/trashRed.svg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/trashRed.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dzencode_next-main/client/app/assets/close.svg.mjs { IMAGE => "[project]/dzencode_next-main/client/app/assets/close.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Circle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/components/Circle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$orderStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/stores/orderStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/stores/productStore.ts [app-ssr] (ecmascript)");
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
    const { isModalOpen, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$orderStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUIStore"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductStore"])((s)=>s.activeCardId);
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductStore"])((s)=>s.products.find((p)=>p.id === id));
    const removeProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$stores$2f$productStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductStore"])((s)=>s.removeProduct);
    if (!isModalOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex align-items-center justify-content-center position-absolute z-3 top-0 start-0 w-100 h-100",
            style: {
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            },
            onClick: closeModal,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-1 w-50 position-relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Circle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        image: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "close",
                        style: {
                            top: "-20px",
                            right: "-20px",
                            cursor: "pointer"
                        },
                        onClick: closeModal
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex justify-content-between align-items-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "m-0",
                            children: "Вы уверены, что хотите удалить этот приход?"
                        }, void 0, false, {
                            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    product && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex gap-2 px-4 py-2 bg-white border-bottom border-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cssCentre,
                                style: {
                                    width: 20
                                },
                                children: product.isNew ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "p-1 bg-warning rounded-circle"
                                }, void 0, false, {
                                    fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                    lineNumber: 44,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "p-1 bg-black rounded-circle"
                                }, void 0, false, {
                                    fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                    lineNumber: 46,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cssCentre,
                                style: {
                                    width: 50
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: product.photo,
                                    alt: "product",
                                    width: 40,
                                    height: 40
                                }, void 0, false, {
                                    fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex flex-column",
                                style: {
                                    width: 400
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "fw-bolder text-black-50 m-0 text-decoration-underline",
                                        children: product.title
                                    }, void 0, false, {
                                        fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "fw-medium text-secondary m-0 text-opacity-50",
                                        children: [
                                            "SN-",
                                            product.serialNumber
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex justify-content-end gap-2 bg-success p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn bg-success text-white rounded-pill px-4 py-1 myHoverOpen",
                                onClick: closeModal,
                                children: "Отменить"
                            }, void 0, false, {
                                fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "d-flex align-items-center gap-2 border-0 bg-white text-danger rounded-pill px-4 py-1 myHoverDelete",
                                onClick: ()=>{
                                    if (id !== null) removeProduct(id);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$trashRed$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dzencode_next$2d$main$2f$client$2f$app$2f$assets$2f$trashRed$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "trash",
                                        width: 12,
                                        height: 12
                                    }, void 0, false, {
                                        fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    "Удалить"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/dzencode_next-main/client/components/Modal.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/dzencode_next-main/client/components/ClientLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Aside$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/components/Aside.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dzencode_next-main/client/components/Modal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ClientLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-fluid px-0 min-vh-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-2 p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Aside$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-10 p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "d-flex flex-column bg-light min-vh-100 position-relative",
                            style: {
                                padding: `3rem 4rem`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dzencode_next$2d$main$2f$client$2f$components$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                children
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dzencode_next-main/client/components/ClientLayout.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0mjz.e.._.js.map