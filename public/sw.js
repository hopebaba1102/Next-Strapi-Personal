if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WgdOpx0FnLps2UL27v07S/_buildManifest.js",revision:"e24877e297208b5f9f291c2d49e2332d"},{url:"/_next/static/WgdOpx0FnLps2UL27v07S/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/29107295.f6faf8a67dc0cab94826.js",revision:"29f646f99322d24264476b545d265d99"},{url:"/_next/static/chunks/a55e4995d96cf7e3e69e1d6146888e5c7be54047.7c1e83bb7b7d83a70ae3.js",revision:"a5ebf16396a0cf59ba6f0d99e4e81e27"},{url:"/_next/static/chunks/commons.dee2ffe8ab5f8852fbb0.js",revision:"53258c57a17346e785ae6658dd97bf48"},{url:"/_next/static/chunks/ea88be26.31e31a2af3b8d05e2268.js",revision:"1b9de79edbe3cc13ffeb59dc09c1286c"},{url:"/_next/static/chunks/framework.5e03480598ad1120f007.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/_next/static/chunks/images/gis-netzwerk_favicon-7d0ec52441fe4d879b1667b4aaf83ab6.png",revision:"6a99119ce694224b4d06cf64d70c62e8"},{url:"/_next/static/chunks/main-f898c88ec1cfecfe7fe6.js",revision:"943003d0e66f2cd6c11dc962b6e725eb"},{url:"/_next/static/chunks/pages/%5Bslug%5D-04286326c01e3fccfabc.js",revision:"2d0d9021fc562a8815918eddf1e9bae9"},{url:"/_next/static/chunks/pages/_app-23ad071f85455ccfdb08.js",revision:"bf2f71ab46aff48a40503c1cddf84aa6"},{url:"/_next/static/chunks/pages/_error-3474a690a661aff9dacb.js",revision:"e328b62268e6850205baeea420e216fb"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-e1381edd00e9f995ce9a.js",revision:"75cfe2332c76057f05d444997f62058c"},{url:"/_next/static/chunks/pages/blog/themen/%5Bslug%5D-3af418f885f6e0762806.js",revision:"0fc1c6b8ea66ebb91dac3bcf7cf8c4de"},{url:"/_next/static/chunks/pages/index-da96bd162368611d8d41.js",revision:"a3d7a087e886c60446f85c3983a59a14"},{url:"/_next/static/chunks/pages/jobs-f5ab8a5a5f3d0b732707.js",revision:"8c299c5eaf17d6bc14ab4d856ca6e07e"},{url:"/_next/static/chunks/pages/jobs/%5Bslug%5D-fafb760df43b4011bced.js",revision:"92a52815636c3dd2ff676f1ef930d877"},{url:"/_next/static/chunks/polyfills-a4510369d9bbb73c2546.js",revision:"1619829d558e35dd5f2f5ae3f3813ff1"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/817bd3f1a2698e9f145b.css",revision:"90a536ec175cac4f919466618dfd11b3"},{url:"/_next/static/css/c0627fd8ef54f24bba34.css",revision:"b87a68f60c5a1a15fcd1a12ef988f779"},{url:"/favicon/android-chrome-192x192.png",revision:"9e465bb59f36f0785b82222d8148fb88"},{url:"/favicon/android-chrome-512x512.png",revision:"b50d82000faecce20906f51e83cca52a"},{url:"/favicon/apple-touch-icon.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/browserconfig.xml",revision:"765146e15223505546b54d3db36babf3"},{url:"/favicon/favicon-16x16.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/favicon-32x32.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/favicon.ico",revision:"091c09c38908f76168913c3ad99cab6e"},{url:"/favicon/gis-netzwerk_favicon.png",revision:"c70f8e29cfbc381db9eb1bd75c2aeac0"},{url:"/favicon/mstile-150x150.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/safari-pinned-tab.svg",revision:"40c9bc99e963fb841cd147f0374682fe"},{url:"/favicon/site.webmanifest",revision:"6314e7b3f29a9426889c667f0a7c9f3a"},{url:"/service-worker.js",revision:"8933728d27d6292fd486c11a231c7c86"},{url:"/service-worker.js.map",revision:"5736dd486c744aff3c45a7c80d1ede61"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
