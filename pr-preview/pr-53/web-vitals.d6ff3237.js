function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}(0,("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiree5b6.register)("eOLch",function(n,t){e(n.exports,"FCPThresholds",function(){return x}),e(n.exports,"getFCP",function(){return S}),e(n.exports,"CLSThresholds",function(){return P}),e(n.exports,"getCLS",function(){return I}),e(n.exports,"FIDThresholds",function(){return R}),e(n.exports,"getFID",function(){return N}),e(n.exports,"INPThresholds",function(){return G}),e(n.exports,"getINP",function(){return W}),e(n.exports,"LCPThresholds",function(){return X}),e(n.exports,"getLCP",function(){return Z}),e(n.exports,"TTFBThresholds",function(){return $}),e(n.exports,"getTTFB",function(){return en}),e(n.exports,"onCLS",function(){return I}),e(n.exports,"onFCP",function(){return S}),e(n.exports,"onFID",function(){return N}),e(n.exports,"onINP",function(){return W}),e(n.exports,"onLCP",function(){return Z}),e(n.exports,"onTTFB",function(){return en});var r,i,o,a,u,c=-1,f=function(e){addEventListener("pageshow",function(n){n.persisted&&(c=n.timeStamp,e(n))},!0)},s=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var e=s();return e&&e.activationStart||0},p=function(e,n){var t=s(),r="navigate";return c>=0?r="back-forward-cache":t&&(document.prerendering||d()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},l=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver(function(e){Promise.resolve().then(function(){n(e.getEntries())})});return r.observe(Object.assign({type:e,buffered:!0},t||{})),r}}catch(e){}},v=function(e,n,t,r){var i,o;return function(a){var u;n.value>=0&&(a||r)&&((o=n.value-(i||0))||void 0===i)&&(i=n.value,n.delta=o,n.rating=(u=n.value)>t[1]?"poor":u>t[0]?"needs-improvement":"good",e(n))}},m=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},h=function(e){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},g=function(e){var n=!1;return function(t){n||(e(t),n=!0)}},T=-1,y=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},E=function(e){"hidden"===document.visibilityState&&T>-1&&(T="visibilitychange"===e.type?e.timeStamp:0,b())},C=function(){addEventListener("visibilitychange",E,!0),addEventListener("prerenderingchange",E,!0)},b=function(){removeEventListener("visibilitychange",E,!0),removeEventListener("prerenderingchange",E,!0)},L=function(){return T<0&&(T=y(),C(),f(function(){setTimeout(function(){T=y(),C()},0)})),{get firstHiddenTime(){return T}}},w=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},x=[1800,3e3],S=function(e,n){n=n||{},w(function(){var t,r=L(),i=p("FCP"),o=l("paint",function(e){e.forEach(function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-d(),0),i.entries.push(e),t(!0)))})});o&&(t=v(e,i,x,n.reportAllChanges),f(function(r){t=v(e,i=p("FCP"),x,n.reportAllChanges),m(function(){i.value=performance.now()-r.timeStamp,t(!0)})}))})},P=[.1,.25],I=function(e,n){n=n||{},S(g(function(){var t,r=p("CLS",0),i=0,o=[],a=function(e){e.forEach(function(e){if(!e.hadRecentInput){var n=o[0],t=o[o.length-1];i&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(i+=e.value,o.push(e)):(i=e.value,o=[e])}}),i>r.value&&(r.value=i,r.entries=o,t())},u=l("layout-shift",a);u&&(t=v(e,r,P,n.reportAllChanges),h(function(){a(u.takeRecords()),t(!0)}),f(function(){i=0,t=v(e,r=p("CLS",0),P,n.reportAllChanges),m(function(){return t()})}),setTimeout(t,0))}))},F={passive:!0,capture:!0},A=new Date,D=function(e,n){r||(r=n,i=e,o=new Date,B(removeEventListener),M())},M=function(){if(i>=0&&i<o-A){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};a.forEach(function(n){n(e)}),a=[]}},k=function(e){if(e.cancelable){var n,t,r,i=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(n=function(){D(i,e),r()},t=function(){r()},r=function(){removeEventListener("pointerup",n,F),removeEventListener("pointercancel",t,F)},addEventListener("pointerup",n,F),addEventListener("pointercancel",t,F)):D(i,e)}},B=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(n){return e(n,k,F)})},R=[100,300],N=function(e,n){n=n||{},w(function(){var t,o=L(),u=p("FID"),c=function(e){e.startTime<o.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),t(!0))},s=function(e){e.forEach(c)},d=l("first-input",s);t=v(e,u,R,n.reportAllChanges),d&&h(g(function(){s(d.takeRecords()),d.disconnect()})),d&&f(function(){t=v(e,u=p("FID"),R,n.reportAllChanges),a=[],i=-1,r=null,B(addEventListener),a.push(c),M()})})},O=0,H=1/0,q=0,j=function(e){e.forEach(function(e){e.interactionId&&(H=Math.min(H,e.interactionId),O=(q=Math.max(q,e.interactionId))?(q-H)/7+1:0)})},_=function(){return u?O:performance.interactionCount||0},z=function(){"interactionCount"in performance||u||(u=l("event",j,{type:"event",buffered:!0,durationThreshold:0}))},G=[200,500],J=0,K=function(){return _()-J},Q=[],U={},V=function(e){var n=Q[Q.length-1],t=U[e.interactionId];if(t||Q.length<10||e.duration>n.latency){if(t)t.entries.push(e),t.latency=Math.max(t.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};U[r.id]=r,Q.push(r)}Q.sort(function(e,n){return n.latency-e.latency}),Q.splice(10).forEach(function(e){delete U[e.id]})}},W=function(e,n){n=n||{},w(function(){z();var t,r,i=p("INP"),o=function(e){e.forEach(function(e){e.interactionId&&V(e),"first-input"!==e.entryType||Q.some(function(n){return n.entries.some(function(n){return e.duration===n.duration&&e.startTime===n.startTime})})||V(e)});var n,t=(n=Math.min(Q.length-1,Math.floor(K()/50)),Q[n]);t&&t.latency!==i.value&&(i.value=t.latency,i.entries=t.entries,r())},a=l("event",o,{durationThreshold:null!==(t=n.durationThreshold)&&void 0!==t?t:40});r=v(e,i,G,n.reportAllChanges),a&&("interactionId"in PerformanceEventTiming.prototype&&a.observe({type:"first-input",buffered:!0}),h(function(){o(a.takeRecords()),i.value<0&&K()>0&&(i.value=0,i.entries=[]),r(!0)}),f(function(){Q=[],J=_(),r=v(e,i=p("INP"),G,n.reportAllChanges)}))})},X=[2500,4e3],Y={},Z=function(e,n){n=n||{},w(function(){var t,r=L(),i=p("LCP"),o=function(e){var n=e[e.length-1];n&&n.startTime<r.firstHiddenTime&&(i.value=Math.max(n.startTime-d(),0),i.entries=[n],t())},a=l("largest-contentful-paint",o);if(a){t=v(e,i,X,n.reportAllChanges);var u=g(function(){Y[i.id]||(o(a.takeRecords()),a.disconnect(),Y[i.id]=!0,t(!0))});["keydown","click"].forEach(function(e){addEventListener(e,function(){return setTimeout(u,0)},!0)}),h(u),f(function(r){t=v(e,i=p("LCP"),X,n.reportAllChanges),m(function(){i.value=performance.now()-r.timeStamp,Y[i.id]=!0,t(!0)})})}})},$=[800,1800],ee=function e(n){document.prerendering?w(function(){return e(n)}):"complete"!==document.readyState?addEventListener("load",function(){return e(n)},!0):setTimeout(n,0)},en=function(e,n){n=n||{};var t=p("TTFB"),r=v(e,t,$,n.reportAllChanges);ee(function(){var i=s();if(i){var o=i.responseStart;if(o<=0||o>performance.now())return;t.value=Math.max(o-d(),0),t.entries=[i],r(!0),f(function(){(r=v(e,t=p("TTFB",0),$,n.reportAllChanges))(!0)})}})}});//# sourceMappingURL=web-vitals.d6ff3237.js.map

//# sourceMappingURL=web-vitals.d6ff3237.js.map
