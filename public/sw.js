if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,n)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=n(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2RNcLReRJfAIQxjziCrkw/_buildManifest.js",revision:"eaac68de96dc8da2f5c6dbf4e5e736aa"},{url:"/_next/static/2RNcLReRJfAIQxjziCrkw/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/29107295.f6faf8a67dc0cab94826.js",revision:"29f646f99322d24264476b545d265d99"},{url:"/_next/static/chunks/9434ae4425e846c3309ea6ae6ad128a24d6452dc.d0f33a93a8f795e91cb8.js",revision:"531f2fece67110f5253dfd3dd56cba24"},{url:"/_next/static/chunks/commons.dee2ffe8ab5f8852fbb0.js",revision:"53258c57a17346e785ae6658dd97bf48"},{url:"/_next/static/chunks/ea88be26.67a6e41d74620ef669f1.js",revision:"8a0a8a096557eabb2630b35d659e1406"},{url:"/_next/static/chunks/f6c38ebddc4589a83ffe9ed32c61ee82b4b9eef8.ea5e4e04e82a6465a8cc.js",revision:"623844ff177f14b641de63f585db1bc1"},{url:"/_next/static/chunks/framework.5e03480598ad1120f007.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/_next/static/chunks/images/gis-netzwerk_favicon-acd2fbba22bae8051ae927a36b7ee112.png",revision:"b19b53239088c80524d348f28413f428"},{url:"/_next/static/chunks/main-060a332956b22e003d32.js",revision:"7fce7425c0bf970ecffe135a2184642b"},{url:"/_next/static/chunks/pages/%5Bslug%5D-cc1140068ece8a6882e9.js",revision:"c74cd8ea737a9299971ee3a54404c6f3"},{url:"/_next/static/chunks/pages/_app-f929be6ba88b5dcb0c8f.js",revision:"09f5fe8760d299d9d27560e61c6d75af"},{url:"/_next/static/chunks/pages/_error-28481d2eb8ae2a75d3fe.js",revision:"969fa43e96e048e1c0309fb43dc40ee1"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-773d1fea1dbe6b8b5f1b.js",revision:"28bfafb4581461676d49ada9becd57ad"},{url:"/_next/static/chunks/pages/blog/themen/%5Bslug%5D-560c87c0fd0ad74908cd.js",revision:"a9bcd23876e2103a38eb26a8209248c8"},{url:"/_next/static/chunks/pages/index-4a8f281d822c2fb14ea3.js",revision:"978137111831417eece4d269a8cdcd1a"},{url:"/_next/static/chunks/polyfills-5bf59b93ae7857d78ad5.js",revision:"e211a022993cf065e881303e6c6844d6"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/817bd3f1a2698e9f145b.css",revision:"90a536ec175cac4f919466618dfd11b3"},{url:"/_next/static/css/c0627fd8ef54f24bba34.css",revision:"b87a68f60c5a1a15fcd1a12ef988f779"},{url:"/favicon/android-chrome-192x192.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/android-chrome-512x512.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/apple-touch-icon.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/browserconfig.xml",revision:"765146e15223505546b54d3db36babf3"},{url:"/favicon/favicon-16x16.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/favicon-32x32.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/favicon.ico",revision:"091c09c38908f76168913c3ad99cab6e"},{url:"/favicon/gis-netzwerk_favicon.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/mstile-150x150.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/safari-pinned-tab.svg",revision:"40c9bc99e963fb841cd147f0374682fe"},{url:"/favicon/site.webmanifest",revision:"6314e7b3f29a9426889c667f0a7c9f3a"},{url:"/service-worker.js",revision:"8933728d27d6292fd486c11a231c7c86"},{url:"/service-worker.js.map",revision:"5736dd486c744aff3c45a7c80d1ede61"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
