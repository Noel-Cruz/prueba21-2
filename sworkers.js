// let cacheName='cachegestorv4'
// let appArchivos=[
//     '/gestor/',
//     '/gestor/index.html',
//     '/gestor/icons/icon-32.png',
//     '/gestor/icons/icon-168.png',
//     '/gestor/app.js'
// ];



// self.addEventListener("install", function (e) {
//   console.log('hola');
//   e.waitUntil(
//     caches.open(cacheName).then(function (cache) {
//       return cache.addAll(appArchivos);
//     }),
//   );
// });

// self.onfetch=(e)=>{
//   console.dir(e)
// };
// self.addEventListener("fetch", function (e) {
//   prompt('holaaaa');
//   e.respondWith(
//     caches.match(e.request).then(function (r) {
//       return (
//         r ||
//         fetch(e.request).then(function (response) {
//           return caches.open(cacheName).then(function (cache) {
//             cache.put(e.request, response.clone());
//             return response;
//           });
//         })
//       );
//     }),
//   );
// });

// function showNotification() {
//     Notification.requestPermission().then((result) => {
//       if (result === "granted") {
//         navigator.serviceWorker.ready.then((registration) => {
//           registration.showNotification("SOY uNA Noti", {
//             body: "Buzz! Buzz!"});
//         });
//       }
//     });
// }

// document.onclick=()=>{
//     showNotification()
// };

setTimeout(() => {
    console.dir(self.registration.periodicSync.register('EL BANA',{minInterval:4000}))
}, 2000);

self.onperiodicsync=(event) => {
    console.log('SOY YO XD')
};
  