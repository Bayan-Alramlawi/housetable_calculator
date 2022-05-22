'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3a0c5ab5e9b7476f467adc8d303e756a",
"index.html": "09a3fdae2e1ac27725c42758e85f7025",
"/": "09a3fdae2e1ac27725c42758e85f7025",
"main.dart.js": "a0893032de47adda75b733be80f0a54b",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "08a6b474d076550b0560a503c9095449",
"icons/favicon.ico": "59115426bbeda0779acd161b68f0d8fb",
"icons/apple-icon.png": "83f688583913bc577179b6afa6de5bb4",
"icons/apple-icon-144x144.png": "b8258441f7217a285f1d62f367523818",
"icons/android-icon-192x192.png": "42a95cb350e443cef67a2d9c8991ba58",
"icons/apple-icon-precomposed.png": "83f688583913bc577179b6afa6de5bb4",
"icons/apple-icon-114x114.png": "664af8aa0050f39d576850949eba2187",
"icons/ms-icon-310x310.png": "84d64c899bdaca7d800335051aa6bc56",
"icons/ms-icon-144x144.png": "b8258441f7217a285f1d62f367523818",
"icons/apple-icon-57x57.png": "396cf0c4109e4d40a55bd10656c4e632",
"icons/apple-icon-152x152.png": "969fac61ebe66626fccd43c0edb8690d",
"icons/ms-icon-150x150.png": "3931c4c2366fcdac967c6f3db6de3441",
"icons/android-icon-72x72.png": "99d7d3e809c3f6e661b6e6b1d753194e",
"icons/android-icon-96x96.png": "87f98ba59115423e6b2b01444ff7a400",
"icons/android-icon-36x36.png": "ea16649faf9e09b906c482fb96fa9e73",
"icons/apple-icon-180x180.png": "69ae173913532e1b3105fb441b086f8d",
"icons/favicon-96x96.png": "87f98ba59115423e6b2b01444ff7a400",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "face8382060522082586831ffa6168fc",
"icons/apple-icon-76x76.png": "a0695e7d4e624b4bedd080eddb241165",
"icons/apple-icon-60x60.png": "23b325afb7fd43ba62d66b75a3925429",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "b8258441f7217a285f1d62f367523818",
"icons/apple-icon-72x72.png": "99d7d3e809c3f6e661b6e6b1d753194e",
"icons/apple-icon-120x120.png": "63c0e6752d6bbfd2c3c41d7ff9824c90",
"icons/favicon-32x32.png": "d4abf77046b213f179028413a4cde47e",
"icons/ms-icon-70x70.png": "c80b00ee4d47b895b3509bc030d8cf5e",
"manifest.json": "37c18857d29389e656f82137fd6787a8",
"assets/AssetManifest.json": "55ec87fc8fdd1fd4652e639aa579bb41",
"assets/NOTICES": "d7273a294fb5a36eba33951cd21ec808",
"assets/FontManifest.json": "c846633d35f5fd9c33eb61d49d3446ce",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/fb.png": "bbc5d14dae7be3ba8a3dcc0e6afa5cf8",
"assets/assets/images/logo/Full%2520Version/Primary.png": "2034be911fc5a78417c4de6b5d6a0363",
"assets/assets/images/logo/Full%2520Version/White.png": "f2f30c41fbab7105b37fefe73827b023",
"assets/assets/images/google.png": "3e26049d9396f49912688a986b4027b8",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "af0b2118d34dcaf6e671ee67cf4d5be2",
"assets/assets/fonts/OpenSans-Light.ttf": "3dd221ea976bc4c617c40d366580bfe8",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "907d99fe588e4649680159671dfe74f4",
"assets/assets/fonts/OpenSans-Bold.ttf": "5bc6b8360236a197d59e55f72b02d4bf",
"assets/assets/fonts/OpenSans-Medium.ttf": "0cbcac22e73cab1d6dbf2cfcc269b942",
"assets/assets/fonts/OpenSans-Regular.ttf": "3eb5459d91a5743e0deaf2c7d7896b08",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
