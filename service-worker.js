/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.501e51159aab727edf29d37737164551.js"
);

workbox.core.setCacheNameDetails({prefix: "githubTools-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/cdn\.jsdelivr\.net/, new workbox.strategies.CacheFirst({ "fetchOptions":{"mode":"cors","credentials":"omit"}, plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/loli\.net/, new workbox.strategies.CacheFirst({ "fetchOptions":{"mode":"cors","credentials":"omit"}, plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
