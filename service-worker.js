"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/weatherapp-react/index.html","add22783ca68d888132149e5444cee57"],["/weatherapp-react/static/css/main.7cae6ff5.css","f40f4b8406b79f447f253ac147ec7607"],["/weatherapp-react/static/js/main.8fa4ce95.js","ff5a655c9aa61c23e48c8ccdac31b793"],["/weatherapp-react/static/media/autumn.e2c2d77b.jpg","e2c2d77b8ef6fa731097710e5d9abc87"],["/weatherapp-react/static/media/spring.c916bdb6.jpg","c916bdb6a2b2a6c0af7673d32cb20180"],["/weatherapp-react/static/media/summer.f0189939.jpg","f018993904dfb1064d1fd6860cfe4aee"],["/weatherapp-react/static/media/weathericons-regular-webfont.1cd48d78.woff2","1cd48d78f06d33973d9d761d426e69bf"],["/weatherapp-react/static/media/weathericons-regular-webfont.4618f0de.ttf","4618f0de2a818e7ad3fe880e0b74d04a"],["/weatherapp-react/static/media/weathericons-regular-webfont.4b658767.eot","4b658767da6bd92ce2addb3ce512784d"],["/weatherapp-react/static/media/weathericons-regular-webfont.8cac70eb.woff","8cac70ebda3f23ce472110d9f21e8593"],["/weatherapp-react/static/media/weathericons-regular-webfont.ecaf8b48.svg","ecaf8b481729b18f6a8494d9f691cdae"],["/weatherapp-react/static/media/winter.289a5e22.jpg","289a5e222ee7a3bf7d58b3b6690ac121"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/weatherapp-react/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});