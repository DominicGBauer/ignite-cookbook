"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[9671],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(o),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return o?n.createElement(m,a(a({ref:t},l),{},{components:o})):n.createElement(m,a({ref:t},l))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9881:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(7462),i=(o(7294),o(3905));const r={sidebar_position:1,title:"Intro to Recipes",description:"Welcome to the Ignite Cookbook! This is a collection of recipes for common patterns in Ignite projects.",tags:["Intro"],last_update:{author:"Dan Edwards"}},a="Welcome to the Ignite Cookbook \ud83d\udc4b",s={unversionedId:"intro",id:"intro",title:"Intro to Recipes",description:"Welcome to the Ignite Cookbook! This is a collection of recipes for common patterns in Ignite projects.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[{label:"Intro",permalink:"/docs/tags/intro"}],version:"current",lastUpdatedBy:"Dan Edwards",lastUpdatedAt:1675273230,formattedLastUpdatedAt:"Feb 1, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Intro to Recipes",description:"Welcome to the Ignite Cookbook! This is a collection of recipes for common patterns in Ignite projects.",tags:["Intro"],last_update:{author:"Dan Edwards"}},sidebar:"mainSidebar",next:{title:"Accessiblity Font Sizes",permalink:"/docs/recipes/AccessibilityFontSizes"}},c={},p=[{value:"What is a Recipe?",id:"what-is-a-recipe",level:2},{value:"Who is this for?",id:"who-is-this-for",level:2},{value:"Are these recipes tested and up-to-date?",id:"are-these-recipes-tested-and-up-to-date",level:2},{value:"Backed by the Ignite Team &amp; Community",id:"backed-by-the-ignite-team--community",level:2},{value:"Have an idea for a recipe?",id:"have-an-idea-for-a-recipe",level:2}],l={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome-to-the-ignite-cookbook-"},"Welcome to the Ignite Cookbook \ud83d\udc4b"),(0,i.kt)("p",null,"This is a collection of recipes for common patterns that we use sometimes at Infinite Red or in the Ignite community but don't quite belong in the Ignite boilerplate directly. We'll be adding to this over time, so be sure to check back often!"),(0,i.kt)("h2",{id:"what-is-a-recipe"},"What is a Recipe?"),(0,i.kt)("p",null,"A recipe is a collection of steps that you can follow to accomplish a common task or pattern in your Ignite project. Recipes are written to be as simple as possible, and are meant to be a starting point for you to build upon. You can use them as-is, or you can use them as a reference to help you create your own solutions."),(0,i.kt)("h2",{id:"who-is-this-for"},"Who is this for?"),(0,i.kt)("p",null,"This is for anyone who wants to extend their Ignite-based React Native app with additional functionality, and how to use it to build their own apps. You don't need to be an expert in React Native or Ignite to follow along. If you're new to Ignite, we recommend you start with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinitered/ignite/tree/master/docs/"},"new docs page to explore the boilerplate"),". You can also use these patterns if you're not using Ignite, as in the end Ignite is just React Native!"),(0,i.kt)("h2",{id:"are-these-recipes-tested-and-up-to-date"},"Are these recipes tested and up-to-date?"),(0,i.kt)("p",null,"All recipes are written or reviewed by the Ignite team, and are also reviewed by the community. If you find a recipe that is out of date, or doesn't work, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinitered/ignite-cookbook/issues"},"open an issue"),". It's our goal to keep these recipes up to date and working, so we appreciate your help!"),(0,i.kt)("h2",{id:"backed-by-the-ignite-team--community"},"Backed by the Ignite Team & Community"),(0,i.kt)("p",null,"The Ignite Cookbook is maintained by the ",(0,i.kt)("a",{parentName:"p",href:"https://infinite.red"},"Infinite Red")," team, and the community. If you have any questions, or want to contribute, please ",(0,i.kt)("a",{parentName:"p",href:"https://join.slack.com/t/infiniteredcommunity/shared_invite/zt-1e1gob8vn-pcFjKM~n1c~aXFsTnvHpdg"},"join our Slack")," and say hi!"),(0,i.kt)("h2",{id:"have-an-idea-for-a-recipe"},"Have an idea for a recipe?"),(0,i.kt)("p",null,"We'd love to hear it! Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinitered/ignite-cookbook/issues"},"open an issue")," and we'll review it. We're always looking for new ideas to add to the cookbook!"))}d.isMDXComponent=!0}}]);