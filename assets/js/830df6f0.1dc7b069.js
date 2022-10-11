"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=o,b=g["".concat(c,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={title:"Enable USB Debugging for Pixel 2",description:"Instructions for enabling USB Debugging on Pixel 2",tags:["Debug","Android"],last_update:{author:"Derek Greenberg"}},a=void 0,l={unversionedId:"DebuggingPixel2",id:"DebuggingPixel2",title:"Enable USB Debugging for Pixel 2",description:"Instructions for enabling USB Debugging on Pixel 2",source:"@site/docs/DebuggingPixel2.md",sourceDirName:".",slug:"/DebuggingPixel2",permalink:"/cookbook/docs/DebuggingPixel2",draft:!1,tags:[{label:"Debug",permalink:"/cookbook/docs/tags/debug"},{label:"Android",permalink:"/cookbook/docs/tags/android"}],version:"current",lastUpdatedBy:"Derek Greenberg",lastUpdatedAt:1660681362,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"Enable USB Debugging for Pixel 2",description:"Instructions for enabling USB Debugging on Pixel 2",tags:["Debug","Android"],last_update:{author:"Derek Greenberg"}},sidebar:"tutorialSidebar",previous:{title:"Enable USB Debugging for Nexus 6P",permalink:"/cookbook/docs/DebuggingNexus6P"},next:{title:"Detox Intro",permalink:"/cookbook/docs/DetoxIntro"}},c={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.verizon.com/support/knowledge-base-215055/"},"Helpful Article")),(0,o.kt)("p",null,"Connect the device directly to the machine running the RN app on Android Studio."),(0,o.kt)("p",null,"I found that running ",(0,o.kt)("inlineCode",{parentName:"p"},"adb devices")," returns an empty list if the device is plugged into a USB hub such as the Atolla USB hub. So plug the device directly into a USB port on the host machine."),(0,o.kt)("p",null,"This involves the usual 7-taps-on-an-obscure-icon technique used for other Android devices to enable the Developer Options menu, this time accessible from the Settings \u2192Advanced\u2192 Developer options menu"),(0,o.kt)("p",null,"Be WARNED: like other Android phones, the device will require you to approve USB debugging AFTER you access the Developers menu after setting it! If you do not do this, you cannot access the device via adb devices"))}p.isMDXComponent=!0}}]);