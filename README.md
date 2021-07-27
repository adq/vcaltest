
Run the app in three consoles as follows:

cd test-orc
npm run start

cd test-app
npm run start

cd test-lib
npm run start


Then, visit http://localhost:10000, and see the error:

```
single-spa-layout.min.js:2 Uncaught TypeError: application '@test/sample-app' died in status LOADING_SOURCE_CODE: Cannot read property 'mixin' of undefined
    at Object.1315 (screens.js:53)
    at __webpack_require__ (bootstrap:19)
    at Module.2af9 (v-calendar.umd.js:7224)
    at __webpack_require__ (bootstrap:19)
    at Object.<anonymous> (_baseIsNative.js:47)
    at Object.34e9 (lib.js:41)
    at __webpack_require__ (bootstrap:19)
    at Module.fb15 (setPublicPath.js:22)
    at __webpack_require__ (bootstrap:19)
    at bootstrap:83
```
