"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[4628],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(o),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(f,i(i({ref:e},u),{},{components:o})):n.createElement(f,i({ref:e},u))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2790:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={title:"Detox Intro",description:"A quick look at Detox and what makes it useful",tags:["Testing","Intro"],last_update:{author:"Jamon Holmgren"}},i=void 0,s={unversionedId:"DetoxIntro",id:"DetoxIntro",title:"Detox Intro",description:"A quick look at Detox and what makes it useful",source:"@site/docs/DetoxIntro.md",sourceDirName:".",slug:"/DetoxIntro",permalink:"/ignite-cookbook/docs/DetoxIntro",draft:!1,tags:[{label:"Testing",permalink:"/ignite-cookbook/docs/tags/testing"},{label:"Intro",permalink:"/ignite-cookbook/docs/tags/intro"}],version:"current",lastUpdatedBy:"Jamon Holmgren",lastUpdatedAt:1660681362,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"Detox Intro",description:"A quick look at Detox and what makes it useful",tags:["Testing","Intro"],last_update:{author:"Jamon Holmgren"}},sidebar:"tutorialSidebar",previous:{title:"Creating a Good Experience for Screen Readers",permalink:"/ignite-cookbook/docs/CreatingGreateExperienceForScreenReaders"},next:{title:"Environment Variables",permalink:"/ignite-cookbook/docs/EnvironmentVariables"}},l={},c=[{value:"Installation",id:"installation",level:3},{value:"What&#39;s unique about Detox",id:"whats-unique-about-detox",level:3}],u={toc:c};function p(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Detox is a library for end-to-end testing of React Native apps. This wiki provides information on how to use Detox effectively."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Detox's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md"},"documentation for installation"),"."),(0,r.kt)("p",null,"It's included ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinitered/ignite/tree/master/boilerplate/e2e"},"by default in Ignite"),"."),(0,r.kt)("h3",{id:"whats-unique-about-detox"},"What's unique about Detox"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Synchronization")),(0,r.kt)("p",null,"One of the key features that makes Detox unique is that it synchronizes with app state, so it can know when to move to the next step of a test, instead of including manual sleep statements. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/485ba69e757faf71b6556c3ec6083690b949d744/docs/Introduction.HowDetoxWorks.md#how-detox-automatically-synchronizes-with-your-app"},"See the documentation for more info"),"."),(0,r.kt)("p",null,"But this does create new kinds of errors to be aware of. For example, if you see a Detox test hanging, that's an indication that Detox might not be detecting that the app went into the idle state so that the test can continue. To debug, check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/docs/Troubleshooting.Synchronization.md#dealing-with-synchronization-issues-in-tests"},"Detox's troubleshooting guide on sync issues"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Flaky Tests ")),(0,r.kt)("p",null,"The RNR team interviewed Rotem Meidan, former lead of Detox, about Detox stability, in ",(0,r.kt)("a",{parentName:"p",href:"https://reactnativeradio.com/episodes/rnr-189-reliable-detox-with-rotem-opBGVWSK"},"React-Native Radio 189"),"."),(0,r.kt)("p",null,"He wrote an article about that here: ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/wix-engineering/detox-writing-stable-test-suites-372c9d537184"},"Detox: Writing Stable Test Suites")))}p.isMDXComponent=!0}}]);