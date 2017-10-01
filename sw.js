'use strict';

var CACHE_NAME = 'emergency-v1';
var urlsToCache = [
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