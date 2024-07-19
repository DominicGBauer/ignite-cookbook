"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[5284],{4024:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=o(7624),i=o(2172);const s={title:"Detox Intro",description:"A quick look at Detox and what makes it useful",tags:["Testing","Intro"],last_update:{author:"Jamon Holmgren"},publish_date:new Date("2022-10-09T00:00:00.000Z")},a=void 0,r={id:"recipes/DetoxIntro",title:"Detox Intro",description:"A quick look at Detox and what makes it useful",source:"@site/docs/recipes/DetoxIntro.md",sourceDirName:"recipes",slug:"/recipes/DetoxIntro",permalink:"/docs/recipes/DetoxIntro",draft:!1,unlisted:!1,tags:[{label:"Testing",permalink:"/docs/tags/testing"},{label:"Intro",permalink:"/docs/tags/intro"}],version:"current",lastUpdatedBy:"Jamon Holmgren",lastUpdatedAt:1718267861,formattedLastUpdatedAt:"Jun 13, 2024",frontMatter:{title:"Detox Intro",description:"A quick look at Detox and what makes it useful",tags:["Testing","Intro"],last_update:{author:"Jamon Holmgren"},publish_date:"2022-10-09T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Creating a Good Experience for Screen Readers",permalink:"/docs/recipes/CreatingGreateExperienceForScreenReaders"},next:{title:"Distributing Auth Token to APIs",permalink:"/docs/recipes/DistributingAuthTokenToAPI"}},c={},d=[{value:"Installation",id:"installation",level:3},{value:"What&#39;s unique about Detox",id:"whats-unique-about-detox",level:3},{value:"Synchronization",id:"synchronization",level:4}];function l(t){const e={a:"a",h3:"h3",h4:"h4",p:"p",strong:"strong",...(0,i.M)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Detox is a library for end-to-end testing of React Native apps. This wiki provides information on how to use Detox effectively."}),"\n",(0,n.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(e.p,{children:["Detox's ",(0,n.jsx)(e.a,{href:"https://wix.github.io/Detox/docs/introduction/getting-started/",children:"documentation for installation"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"whats-unique-about-detox",children:"What's unique about Detox"}),"\n",(0,n.jsx)(e.h4,{id:"synchronization",children:"Synchronization"}),"\n",(0,n.jsxs)(e.p,{children:["One of the key features that makes Detox unique is that it synchronizes with app state, so it can know when to move to the next step of a test, instead of including manual sleep statements. ",(0,n.jsx)(e.a,{href:"https://wix.github.io/Detox/docs/articles/how-detox-works/#how-detox-automatically-synchronizes-with-your-app",children:"See the documentation for more info"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["But this does create new kinds of errors to be aware of. For example, if you see a Detox test hanging, that's an indication that Detox might not be detecting that the app went into the idle state so that the test can continue. To debug, check out ",(0,n.jsx)(e.a,{href:"https://wix.github.io/Detox/docs/troubleshooting/synchronization",children:"Detox's troubleshooting guide on sync issues"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"\ud83d\udeb8 Flaky Tests"})}),"\n",(0,n.jsxs)(e.p,{children:["The RNR team interviewed Rotem Meidan, former lead of Detox, about Detox stability, in ",(0,n.jsx)(e.a,{href:"https://reactnativeradio.com/episodes/rnr-189-reliable-detox-with-rotem-opBGVWSK",children:"React-Native Radio 189"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["He wrote an article about that here: ",(0,n.jsx)(e.a,{href:"https://medium.com/wix-engineering/detox-writing-stable-test-suites-372c9d537184",children:"Detox: Writing Stable Test Suites"}),"."]})]})}function h(t={}){const{wrapper:e}={...(0,i.M)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},2172:(t,e,o)=>{o.d(e,{I:()=>r,M:()=>a});var n=o(1504);const i={},s=n.createContext(i);function a(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);