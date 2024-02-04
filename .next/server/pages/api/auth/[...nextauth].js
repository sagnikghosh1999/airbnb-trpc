"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\[...nextauth].ts */ \"(api)/./pages/api/auth/[...nextauth].ts\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1QyU1Qi4uLm5leHRhdXRoJTVELnRzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ2lFO0FBQ2pFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx3REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsd0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWlyYm5iLWNsb25lLz8xYTQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdLnRzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./app/libs/prismadb.ts":
/*!******************************!*\
  !*** ./app/libs/prismadb.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvbGlicy9wcmlzbWFkYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFLOUMsTUFBTUMsU0FBU0MsV0FBV0MsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUNwRCxJQUFHSSxJQUF5QixFQUFjRixXQUFXQyxNQUFNLEdBQUdGO0FBRTlELGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWlyYm5iLWNsb25lLy4vYXBwL2xpYnMvcHJpc21hZGIudHM/NzgyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFse1xyXG4gICAgdmFyIHByaXNtYTpQcmlzbWFDbGllbnR8IHVuZGVmaW5lZFxyXG59XHJcbmNvbnN0IGNsaWVudCA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxUaGlzLnByaXNtYSA9IGNsaWVudFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY2xpZW50IiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./app/libs/prismadb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(api)/./app/libs/prismadb.ts\");\n\n\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const user = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials?.email\n                    }\n                });\n                if (!user || !user?.hashedPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_5___default().compare(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/\"\n    },\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNUO0FBQ087QUFDQTtBQUNVO0FBQ3RDO0FBRWE7QUFFakMsTUFBTU8sY0FBd0I7SUFDakNDLFNBQVFSLHdFQUFhQSxDQUFDTSwwREFBTUE7SUFDNUJHLFdBQVU7UUFDTlAsaUVBQWNBLENBQUM7WUFDWFEsVUFBU0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQzlCQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDM0M7UUFDQVosaUVBQWNBLENBQUM7WUFDWE8sVUFBU0MsUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0I7WUFDckNGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBQ2xEO1FBQ0FiLHNFQUFtQkEsQ0FBQztZQUNoQmMsTUFBSztZQUNMQyxhQUFZO2dCQUNSQyxPQUFNO29CQUFDQyxPQUFNO29CQUFRQyxNQUFLO2dCQUFNO2dCQUNoQ0MsVUFBUztvQkFBQ0YsT0FBTTtvQkFBV0MsTUFBSztnQkFBVTtZQUM5QztZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3ZCLElBQUcsQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFTO29CQUM3QyxNQUFNLElBQUlFLE1BQU07Z0JBQ3BCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTXBCLDBEQUFNQSxDQUFDb0IsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3RDQyxPQUFNO3dCQUNGUixPQUFNRCxhQUFhQztvQkFDdkI7Z0JBQ0o7Z0JBRUEsSUFBRyxDQUFDTSxRQUFRLENBQUNBLE1BQU1HLGdCQUFlO29CQUM5QixNQUFNLElBQUlKLE1BQU07Z0JBQ3BCO2dCQUVBLE1BQU1LLG9CQUFvQixNQUFNekIscURBQWMsQ0FDMUNjLFlBQVlJLFFBQVEsRUFDcEJHLEtBQUtHLGNBQWM7Z0JBR3ZCLElBQUcsQ0FBQ0MsbUJBQWtCO29CQUNsQixNQUFNLElBQUlMLE1BQU07Z0JBQ3BCO2dCQUVBLE9BQU9DO1lBQ1g7UUFDSjtLQUNIO0lBQ0RNLE9BQU07UUFDRkMsUUFBTztJQUNYO0lBQ0FDLE9BQU12QixrQkFBd0I7SUFDOUJ3QixTQUFRO1FBQ0pDLFVBQVM7SUFDYjtJQUNBQyxRQUFRMUIsUUFBUUMsR0FBRyxDQUFDMEIsZUFBZTtBQUN2QyxFQUFDO0FBRUQsaUVBQWVyQyxnREFBUUEsQ0FBQ00sWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpcmJuYi1jbG9uZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxyXG5pbXBvcnQgTmV4dEF1dGggLCB7QXV0aE9wdGlvbnN9IGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCJcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCJcclxuXHJcbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvYXBwL2xpYnMvcHJpc21hZGJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOkF1dGhPcHRpb25zPXtcclxuICAgIGFkYXB0ZXI6UHJpc21hQWRhcHRlcihwcmlzbWEpLFxyXG4gICAgcHJvdmlkZXJzOltcclxuICAgICAgICBHaXRodWJQcm92aWRlcih7XHJcbiAgICAgICAgICAgIGNsaWVudElkOnByb2Nlc3MuZW52LkdJVEhVQl9JRCBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCBhcyBzdHJpbmdcclxuICAgICAgICB9KSxcclxuICAgICAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgICAgICAgIGNsaWVudElkOnByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIGFzIHN0cmluZ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBuYW1lOidjcmVkZW50aWFscycsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOntcclxuICAgICAgICAgICAgICAgIGVtYWlsOntsYWJlbDonZW1haWwnLHR5cGU6J3RleHQnfSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOntsYWJlbDoncGFzc3dvcmQnLHR5cGU6J3Bhc3N3b3JkJ30sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgICAgICAgICAgaWYoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOmNyZWRlbnRpYWxzPy5lbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCF1c2VyIHx8ICF1c2VyPy5oYXNoZWRQYXNzd29yZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuaGFzaGVkUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICBpZighaXNDb3JyZWN0UGFzc3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXSxcclxuICAgIHBhZ2VzOntcclxuICAgICAgICBzaWduSW46Jy8nLFxyXG4gICAgfSxcclxuICAgIGRlYnVnOnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSdkZXZlbG9wbWVudCcsXHJcbiAgICBzZXNzaW9uOntcclxuICAgICAgICBzdHJhdGVneTpcImp3dFwiXHJcbiAgICB9LFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTsiXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImhhc2hlZFBhc3N3b3JkIiwiaXNDb3JyZWN0UGFzc3dvcmQiLCJjb21wYXJlIiwicGFnZXMiLCJzaWduSW4iLCJkZWJ1ZyIsInNlc3Npb24iLCJzdHJhdGVneSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();