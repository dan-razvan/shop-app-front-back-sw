// analytics module | service worker

//LIFE CYCLE

//  the browser will wrap this code into an Object from ServiceWorker class + Promise {

self.addEventListener('install', (e) => {
  console.info('analytics: SW installed')
})
self.addEventListener('activate', (e) => {
  console.info('analytics: SW activated')
  // 1. open a DB named analytics and give me access through dbConn
  let dbConn = indexedDB.open('analytics')
  dbConn.onupgradeneeded = (dbEvent) => {
    console.info('DB opened succesfully')
    let db = dbEvent.target.result
    // prin db putem lucra direct cu indexedDB storage
    console.log(db)

    // 2. creating a storage
    let analyticsStorage = db.createObjectStore('actions')
  }
})
self.addEventListener('fetch', (e) => {
  // filtering out anything that is out of /api/analytics scope
  if (e.request.url.endsWith('/api/analytics')) {
    console.info('analytics:  fetch intercepted', e)

    // extract the request body

    // TO DO: 1.we need to check if network is accessible -- a. to check if we are online (if network is not down) (navigator.online)
    //                                                    \
    //                                                     \ b. if there is no error server response (if server response is 200). Daca raspunde cu 200 service workerul lasa sa treaca totul mai                                                     departe

    //      2. accumulate   data inside IndexedDB
    //      3. redirect data to backend or db based on circumstance, if there is network or not

    if (!navigator.onLine) {
      e.request.json().then((data) => {
        console.info('SAVING offline data', data)
        let dbConn = indexedDB.open('analytics')
        dbConn.onsuccess = (dbEvent) => {
          let db = dbEvent.target.result
          db.transaction('actions', 'readwrite')
            .objectStore('actions')

            .add(data, 1)
          console.log(data)
          console.log(data)

          console.log(data)
        }
      })
    } else {
      console.info('SENDING online data')
    }
  }
})
