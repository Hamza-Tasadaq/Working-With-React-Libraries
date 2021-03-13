let cacheData = "app One"

// dont add local host and sockjs-node file to cache 
// Writing files to cache 
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData)
            .then((cache) => {
                cache.addAll([
                    "/static/js/bundle.js",
                    "static/js/main.chunk.js",
                    "static/js/vendors~main.chunk.js",
                    "index.html",
                    "/",
                    "/About",
                    "/Users"
                ])
            })
    )
})
// Reading files from cache
this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((res) => {
                return res;
            })
            .catch((err) => {

            })
    )
})
