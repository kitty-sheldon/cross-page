# cross-page
纯前端方案：
1. broadcast （兼容性差）
2. localstorage （数据存储时间长）
3. Service Worker （api复杂）
4. Shared Worker （同service worker）
5. window.open (只能与自己打开的页面通信)

IndexedDB

serviceworker reference:
[Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers)
[Service Worker 与页面通信](https://lavas.baidu.com/guide/v1/advanced/service-worker-postMessage)