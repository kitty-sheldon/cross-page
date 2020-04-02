self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

// self.addEventListener('activate', function(event) {
//     event.waitUntil(self.clients.claim()); // Become available to all pages
// });

self.addEventListener('message', function (event) {
    event.waitUntil(
        self.clients.matchAll().then(function (clients) {
            if (!clients || clients.length === 0) {
                return;
            }
            clients.forEach(function (client) {
                client.postMessage(event.data);
            });
        })
    );
})