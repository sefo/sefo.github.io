'use strict';

self.addEventListener('install', event => {
    
      function onInstall () {
        return caches.open('static')
          .then(cache => cache.addAll([
            '/images/help.gif'
          ])
        );
      }
    
      event.waitUntil(onInstall(event));
    });