'use strict';

var CACHE_NAME = 'emergency-v1';
var urlsToCache = [
  'index.html',
  '/assets/help.gif',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request));
});