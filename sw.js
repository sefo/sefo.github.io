'use strict';

var CACHE_NAME = 'emergency-v1';
var urlsToCache = [
  '/',
  '/assets/help.gif',
  '/js/main.js',
  '/style/main.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request));
});