// analytics module | service worker

//LIFE CYCLE

//  the browser will wrap this code into an Object from ServiceWorker class + Promise {

self.addEventListener('install', (e) => {
  console.info('analytics: SW installed', self)
})
self.addEventListener('activate', (e) => {
  console.info('analytics: SW activated')
})

// }
