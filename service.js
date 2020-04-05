self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting()); // skip waiting, Activate worker immediately
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim()); // update client
});

self.addEventListener('message', function (event) {
    event.waitUntil(
        self.clients.matchAll().then(function (clients) {
            if (!clients || clients.length === 0) {
                return;
            }
            clients.filter(c=> event.source.id !== c.id)        //exclude self
            .forEach(function (client) {
                console.log(client,'client')

                client.postMessage(event.data);
            });
        })
    );
})
