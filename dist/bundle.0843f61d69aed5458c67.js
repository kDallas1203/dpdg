(()=>{"use strict";var n={442:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(476),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user\'s configured `sans` font-family (with Tailwind\'s default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind\'s default "normal" line-height so the user isn\'t forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it\'s border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e2e8f0; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #a0aec0;\n}\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don\'t inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured \'mono\' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * \'mono\' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that\'s\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n',""]);const r=o},945:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(476),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,".container {\n  width: 100%\n}\n\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px\n  }\n}\n\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px\n  }\n}\n\n@media (min-width: 640px) {\n  .sm\\:container {\n    width: 100%\n  }\n\n  @media (min-width: 640px) {\n    .sm\\:container {\n      max-width: 640px\n    }\n  }\n\n  @media (min-width: 768px) {\n    .sm\\:container {\n      max-width: 768px\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .sm\\:container {\n      max-width: 1024px\n    }\n  }\n\n  @media (min-width: 1280px) {\n    .sm\\:container {\n      max-width: 1280px\n    }\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:container {\n    width: 100%\n  }\n\n  @media (min-width: 640px) {\n    .md\\:container {\n      max-width: 640px\n    }\n  }\n\n  @media (min-width: 768px) {\n    .md\\:container {\n      max-width: 768px\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .md\\:container {\n      max-width: 1024px\n    }\n  }\n\n  @media (min-width: 1280px) {\n    .md\\:container {\n      max-width: 1280px\n    }\n  }\n}\n\n@media (min-width: 1024px) {\n  .lg\\:container {\n    width: 100%\n  }\n\n  @media (min-width: 640px) {\n    .lg\\:container {\n      max-width: 640px\n    }\n  }\n\n  @media (min-width: 768px) {\n    .lg\\:container {\n      max-width: 768px\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .lg\\:container {\n      max-width: 1024px\n    }\n  }\n\n  @media (min-width: 1280px) {\n    .lg\\:container {\n      max-width: 1280px\n    }\n  }\n}\n\n@media (min-width: 1280px) {\n  .xl\\:container {\n    width: 100%\n  }\n\n  @media (min-width: 640px) {\n    .xl\\:container {\n      max-width: 640px\n    }\n  }\n\n  @media (min-width: 768px) {\n    .xl\\:container {\n      max-width: 768px\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .xl\\:container {\n      max-width: 1024px\n    }\n  }\n\n  @media (min-width: 1280px) {\n    .xl\\:container {\n      max-width: 1280px\n    }\n  }\n}\n",""]);const r=o},657:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(476),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,".flex {\n  display: flex\n}\n\n.table {\n  display: table\n}\n\n.flex-col {\n  flex-direction: column\n}\n\n.flex-1 {\n  flex: 1 1 0%\n}\n\n.h-screen {\n  height: 100vh\n}\n\n.mr-10 {\n  margin-right: 2.5rem\n}\n\n.opacity-25 {\n  opacity: 0.25\n}\n\n.hover\\:opacity-100:hover {\n  opacity: 1\n}\n\n.overflow-hidden {\n  overflow: hidden\n}\n\n.p-2 {\n  padding: 0.5rem\n}\n\n.relative {\n  position: relative\n}\n\n.bottom-0 {\n  bottom: 0\n}\n\n.left-0 {\n  left: 0\n}\n\n.text-gray-600 {\n  --text-opacity: 1;\n  color: #718096;\n  color: rgba(113, 128, 150, var(--text-opacity))\n}\n\n.w-full {\n  width: 100%\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg)\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8,0,1,1)\n  }\n\n  50% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0,0,0.2,1)\n  }\n}\n\n@media (min-width: 640px) {\n}\n\n@media (min-width: 768px) {\n}\n\n@media (min-width: 1024px) {\n}\n\n@media (min-width: 1280px) {\n}\n",""]);const r=o},522:(n,e,t)=>{t.d(e,{Z:()=>l});var i=t(476),o=t.n(i),r=t(442),a=t(945),s=t(657),d=o()((function(n){return n[1]}));d.i(r.Z),d.i(a.Z),d.i(s.Z),d.push([n.id,"body {\n  max-height: 100vh;\n  background-color: black;\n}\n\n.circle {\n  width: 25px;\n  height: 25px;\n  background-color: #fff;\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.circle__animation_leftRight {\n  -webkit-animation:linear infinite alternate;\n          animation:linear infinite alternate;\n  -webkit-animation-name: leftRight;\n          animation-name: leftRight;\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n}\n\n.circle__animation_topBottom {\n  -webkit-animation:linear infinite alternate;\n          animation:linear infinite alternate;\n  -webkit-animation-name: topToBottom;\n          animation-name: topToBottom;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  left: 50%\n}\n\n@-webkit-keyframes leftRight {\n  0% { left: 0;\n  }\n\n  50%{ left : 99%;\n  }\n\n  100%{ left: 0;\n  }\n}\n\n@keyframes leftRight {\n  0% { left: 0;\n  }\n\n  50%{ left : 99%;\n  }\n\n  100%{ left: 0;\n  }\n}\n\n@-webkit-keyframes topToBottom {\n  0% { top: 0;\n  }\n\n  50% { top: 100%;\n  }\n\n  100% { top: 0;\n  }\n}\n\n@keyframes topToBottom {\n  0% { top: 0;\n  }\n\n  50% { top: 100%;\n  }\n\n  100% { top: 0;\n  }\n}\n",""]);const l=d},476:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);i&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},892:(n,e,t)=>{var i,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function a(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},i=[],o=0;o<n.length;o++){var s=n[o],d=e.base?s[0]+e.base:s[0],l=t[d]||0,c="".concat(d," ").concat(l);t[d]=l+1;var m=a(c),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(r[m].references++,r[m].updater(h)):r.push({identifier:c,updater:f(h,e),references:1}),i.push(c)}return i}function d(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,c=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function m(n,e,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=c(e,o);else{var r=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function h(n,e,t){var i=t.css,o=t.media,r=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var p=null,u=0;function f(n,e){var t,i,o;if(e.singleton){var r=u++;t=p||(p=d(e)),i=m.bind(null,t,r,!1),o=m.bind(null,t,r,!0)}else t=d(e),i=h.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var o=a(t[i]);r[o].references--}for(var d=s(n,e),l=0;l<t.length;l++){var c=a(t[l]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}t=d}}}}},e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(892),e=t.n(n),i=t(522);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,window.onload=function(){var n=document.querySelector(".circle"),e=document.querySelectorAll("input[name='animation']"),t=document.getElementById("circle-size"),i=document.getElementById("circle-speed");console.log(t),t.addEventListener("input",(function(e){var t=e.target.value;n.style.cssText="width: ".concat(t,"px; height: ").concat(t,"px")})),i.addEventListener("input",(function(e){var t=e.target.value;n.style.animationDuration="".concat(t,"s")})),e.forEach((function(e){e.addEventListener("click",(function(e){switch(e.target.value){case"fromLeftToRight":a(n,"initFromRightToLeft");break;case"fromTopToBottom":a(n,"initFromBottomToTop")}}))}))};var o="circle__animation_leftRight",r="circle__animation_topBottom";function a(n,e){if(e&&n)switch(e){case"initFromRightToLeft":return console.log("initFromRightToLeft"),n.classList.remove(r),n.classList.add(o),void console.log(n.classList);case"initFromBottomToTop":return console.log("initFromBottomToTop"),n.classList.remove(o),n.classList.add(r),void console.log(n.classList);default:return}}})()})();