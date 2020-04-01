export default function sw(){
  /* ../util.sw.js Service Worker 逻辑 */

  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/src/util.sw.js').then(function () {
          console.log('Service Worker 注册成功');
      });
      navigator.serviceWorker.addEventListener('message', function (e) {
          console.log(e)
      });
  }

  document.getElementById("serviceworker").addEventListener('click', function () {

      navigator.serviceWorker.controller.postMessage({
          a:1
      });
  });

  // self.addEventListener('message', function (e) {
  //   console.log('service worker receive message', e);
  //   e.waitUntil(
  //     console.log(self,'self')
  //       // self.clients.matchAll().then(function (clients) {
  //       //     if (!clients || clients.length === 0) {
  //       //         return;
  //       //     }
  //       //     clients.forEach(function (client) {
  //       //         client.postMessage(e.data);
  //       //     });
  //       // })
  //   );
  // });

  // /* 页面逻辑 */
  // navigator.serviceWorker.addEventListener('message', function (e) {
  //   console.log('[Service Worker] receive message:', e);
  // });

// console.log(navigator.serviceWorker)
  // navigator.serviceWorker.postMessage({a:1});

  // self.addEventListener('install', function(event) {
  //   event.waitUntil(
  //     caches.open('v1').then(function(cache) {
  //       return cache.addAll([
  //         '/sw-test/',
  //         '/sw-test/index.html',
  //         '/sw-test/style.css',
  //         '/sw-test/app.js',
  //         '/sw-test/image-list.js',
  //         '/sw-test/star-wars-logo.jpg',
  //         '/sw-test/gallery/bountyHunters.jpg',
  //         '/sw-test/gallery/myLittleVader.jpg',
  //         '/sw-test/gallery/snowTroopers.jpg'
  //       ]);
  //     })
  //   );
  // });
  
  // self.addEventListener('fetch', function(event) {
  //   event.respondWith(caches.match(event.request).then(function(response) {
  //     // caches.match() always resolves
  //     // but in case of success response will have value
  //     if (response !== undefined) {
  //       return response;
  //     } else {
  //       return fetch(event.request).then(function (response) {
  //         // response may be used only once
  //         // we need to save clone to put one copy in cache
  //         // and serve second one
  //         let responseClone = response.clone();
          
  //         caches.open('v1').then(function (cache) {
  //           cache.put(event.request, responseClone);
  //         });
  //         return response;
  //       }).catch(function () {
  //         return caches.match('/sw-test/gallery/myLittleVader.jpg');
  //       });
  //     }
  //   }));
  // });  
}

