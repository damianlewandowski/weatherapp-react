"use strict";var precacheConfig=[["/weatherapp-react/index.html","15dd3d7915484376fdfb5bd08ff15ea2"],["/weatherapp-react/static/css/main.cc8a5440.css","8bf06d9cf3dc3efb6de5ac2dbeea1c59"],["/weatherapp-react/static/js/main.52e65a56.js","719131a091d57aa4ff81fe3cd3d3cc7d"],["/weatherapp-react/static/media/autumn.e2c2d77b.jpg","e2c2d77b8ef6fa731097710e5d9abc87"],["/weatherapp-react/static/media/spring.c916bdb6.jpg","c916bdb6a2b2a6c0af7673d32cb20180"],["/weatherapp-react/static/media/summer.f0189939.jpg","f018993904dfb1064d1fd6860cfe4aee"],["/weatherapp-react/static/media/weathericons-regular-webfont.1cd48d78.woff2","1cd48d78f06d33973d9d761d426e69bf"],["/weatherapp-react/static/media/weathericons-regular-webfont.4618f0de.ttf","4618f0de2a818e7ad3fe880e0b74d04a"],["/weatherapp-react/static/media/weathericons-regular-webfont.4b658767.eot","4b658767da6bd92ce2addb3ce512784d"],["/weatherapp-react/static/media/weathericons-regular-webfont.8cac70eb.woff","8cac70ebda3f23ce472110d9f21e8593"],["/weatherapp-react/static/media/weathericons-regular-webfont.ecaf8b48.svg","ecaf8b481729b18f6a8494d9f691cdae"],["/weatherapp-react/static/media/winter.289a5e22.jpg","289a5e222ee7a3bf7d58b3b6690ac121"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/weatherapp-react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});