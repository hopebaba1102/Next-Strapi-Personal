if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/M7FNdpYiL86d849XdK6f0/_buildManifest.js",revision:"d71f598322588356e29a1153fab20eb2"},{url:"/_next/static/M7FNdpYiL86d849XdK6f0/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/1ad99113b62f156a94fbf28e27edb10b90c88a87.81af89fa2f50206e606b.js",revision:"485d413ad45e94d694d447e8fdd98a1a"},{url:"/_next/static/chunks/29107295.4f25d6c1eb301bb36493.js",revision:"2d3cc034753ed178dab28af1a42df4e4"},{url:"/_next/static/chunks/39374740d0e80d6f7e419ed025fe2df2ce866c46.302be3e48b8e33b00d91.js",revision:"0644f536edd97e4f1fc65e6926414f5f"},{url:"/_next/static/chunks/5570e264ffe48ce1659acdc636bd8ae22872104b.d6aa5b6bc6e4908e71cc.js",revision:"08535c26c3c3ac683376c9a1ba8d082b"},{url:"/_next/static/chunks/59b219cd0f71863461df34ba805b8ebc621fae63.2fcf3cd87c6cd8dd8bac.js",revision:"25dcbb17c9426fc3f48963f4f1821cc0"},{url:"/_next/static/chunks/commons.4426b87c070ce55217eb.js",revision:"3505d58735dfc209bc9faef37210843d"},{url:"/_next/static/chunks/da038609794fce2eccdce10d3a8f4377f3701a1f.3f8c42718db96ba093fa.js",revision:"9a3d7da1a0429fb25bd63c119e194ce9"},{url:"/_next/static/chunks/ea88be26.4cb5e279507da3d23bc9.js",revision:"d51aacf3f93c7f6526514a1299db4f5b"},{url:"/_next/static/chunks/framework.9707fddd9ae5927c17c3.js",revision:"493773db7ca4f531e862834fccf9d157"},{url:"/_next/static/chunks/main-7a8541c21ffe5b93c5b1.js",revision:"728a54424f6fc9874f0a60af3b6e231c"},{url:"/_next/static/chunks/pages/%5Bslug%5D-bddceba113a8e1b96f73.js",revision:"5b6be206c2f2eb95886fe906d417933b"},{url:"/_next/static/chunks/pages/_app-7410cd496c8623760ed9.js",revision:"bfd5fb50199fc585b04b2c5ab42b99a2"},{url:"/_next/static/chunks/pages/_error-8d9d747a2cc7491a20fd.js",revision:"270dc35185d219862e2502646d1a6629"},{url:"/_next/static/chunks/pages/articles-d1aed738683a221b8d9a.js",revision:"b04bdb40ed5689beb596a6905cbdb3ab"},{url:"/_next/static/chunks/pages/articles/%5Bslug%5D-996c24806d1a368f44ad.js",revision:"a0f48828f1d51f5d2b4e3a363e287d5a"},{url:"/_next/static/chunks/pages/articles/topics/%5Bslug%5D-353a53949e6c5f5eecf8.js",revision:"dd9bbebf51c9cd265b22b8613bd03685"},{url:"/_next/static/chunks/pages/index-a76637d993bcf3eb90ce.js",revision:"7afd83a545260685892a9d1d251eb400"},{url:"/_next/static/chunks/pages/site-stats-e4066b56d95282bac180.js",revision:"c9d6723ed7fcbb68f4c764837ba98ddb"},{url:"/_next/static/chunks/pages/sitemap.xml-4429e854d11e84e674ef.js",revision:"a74b83bf01104d4065ca55b3f9b8df00"},{url:"/_next/static/chunks/polyfills-a928219009fd672c1f9f.js",revision:"18c1e069ba2cfd5f75859b660810a118"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/621ca0f16e1c39615174.css",revision:"a25bd0efc13b40290f9ca927b6d62118"},{url:"/_next/static/css/696700431df24c203f74.css",revision:"6701ea83ca9e02b160dfd438241287bc"},{url:"/favicon.ico",revision:"091c09c38908f76168913c3ad99cab6e"},{url:"/logos/GIS-Netzwerk-Logo.png",revision:"46fd143caa23a688c9da35159e8b6a7f"},{url:"/logos/GIS-Netzwerk-Logo_1080.png",revision:"34d984c5fc8e638171431a32b53f5a38"},{url:"/logos/android-chrome-192x192.png",revision:"9e465bb59f36f0785b82222d8148fb88"},{url:"/logos/android-chrome-512x512.png",revision:"b50d82000faecce20906f51e83cca52a"},{url:"/logos/apple-touch-icon.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/logos/browserconfig.xml",revision:"b8e5b96dfa8ac9788a70fc02576657b1"},{url:"/logos/favicon-16x16.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/logos/favicon-32x32.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/logos/gis-netzwerk_favicon.png",revision:"c70f8e29cfbc381db9eb1bd75c2aeac0"},{url:"/logos/logo_square.png",revision:"303f8c8d9b24624d30af8b7328910645"},{url:"/logos/logo_square_1024.png",revision:"f75a8124b6655c7802151946ef10d5d5"},{url:"/logos/logo_square_48.png",revision:"c70f8e29cfbc381db9eb1bd75c2aeac0"},{url:"/logos/logo_square_512.png",revision:"b50d82000faecce20906f51e83cca52a"},{url:"/logos/mstile-150x150.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/logos/site.webmanifest",revision:"bea2a98a746270436326ab6263ccdb2d"},{url:"/manifest.json",revision:"b13b9c0c6af94773264ac80a32f5146a"},{url:"/robots.txt",revision:"b6b6cd30efb30525ab84e21781e1a3cc"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
