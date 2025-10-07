(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__ecd86550._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/locales/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"HomePage\":{\"title\":\"Welcome to Our Company\",\"contact\":\"Contact Us\",\"services\":\"Our Services\"}}"));}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/locales/es.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"HomePage\":{\"title\":\"Bienvenido a Nuestra Empresa\",\"contact\":\"Contáctenos\",\"services\":\"Nuestros Servicios\"}}"));}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/locales/fr.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"HomePage\":{\"title\":\"Bienvenue dans Notre Entreprise\",\"contact\":\"Contactez-nous\",\"services\":\"Nos Services\"}}"));}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/app/lib/request.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$3$2e$10_next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/next-intl@4.3.10_next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0_typescript@5.9.3/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [middleware-edge] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$src$2f$app$2f$lib$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/app/lib/routing.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$3$2e$10_next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ requestLocale })=>{
    let locale = await requestLocale;
    if (!locale || !__TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$src$2f$app$2f$lib$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale)) {
        locale = __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$src$2f$app$2f$lib$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    }
    return {
        locale,
        messages: (await __turbopack_context__.f({
            "../../locales/en.json": {
                id: ()=>"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/locales/en.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/locales/en.json (json)"))
            },
            "../../locales/es.json": {
                id: ()=>"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/locales/es.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/locales/es.json (json)"))
            },
            "../../locales/fr.json": {
                id: ()=>"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/locales/fr.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/locales/fr.json (json)"))
            }
        }).import(`../../locales/${locale}.json`)).default
    };
});
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/app/lib/routing.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "redirect",
    ()=>redirect,
    "routing",
    ()=>routing,
    "usePathname",
    ()=>usePathname,
    "useRouter",
    ()=>useRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$3$2e$10_next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/next-intl@4.3.10_next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0_typescript@5.9.3/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [middleware-edge] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$3$2e$10_next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/next-intl@4.3.10_next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0_typescript@5.9.3/node_modules/next-intl/dist/esm/development/navigation/react-server/createNavigation.js [middleware-edge] (ecmascript) <export default as createNavigation>");
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$3$2e$10_next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: [
        'en',
        'es',
        'fr'
    ],
    defaultLocale: 'en',
    localeDetection: false
});
const { Link, redirect, usePathname, useRouter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$3$2e$10_next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(routing);
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$3$2e$10_next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/next-intl@4.3.10_next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0_typescript@5.9.3/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$src$2f$app$2f$lib$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/src/app/lib/routing.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$3$2e$10_next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$src$2f$app$2f$lib$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"]);
const config = {
    matcher: [
        '/',
        '/(en|es|fr)/:path*'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__ecd86550._.js.map