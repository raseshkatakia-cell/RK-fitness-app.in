
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('rkfitness-cache').then(cache => {
      return cache.addAll([
        '/', 'index.html', 'styles.css', 'script.js',
        'bmi.html', 'bmi.js', 'diet.html', 'workouts.html',
        'level1.html', 'level2.html', 'level3.html',
        'logo-192.png', 'logo-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
 event.respondWith(
   caches.match(event.request)
     .then(response => response || fetch(event.request))
 );
});
