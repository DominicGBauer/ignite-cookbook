"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[2182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(p,".").concat(g)]||u[g]||l[g]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Updating Dependencies with Yarn Audit, Outdated and Upgrade",tags:["Yarn","Guide","Dependencies"],last_update:{author:"Derek Greenberg"},publish_date:new Date("2022-10-09T00:00:00.000Z")},o=void 0,s={unversionedId:"recipes/UpdatingDependencies",id:"recipes/UpdatingDependencies",title:"Updating Dependencies with Yarn Audit, Outdated and Upgrade",description:"If you get a bunch of warnings in the git command output about vulnerabilities, similar to this Github found 80 vulnerabilities on ..., you can examine these vulnerabilities with yarn audit, get a list of outdated packages with yarn outdated, and update each dependency using yarn update",source:"@site/docs/recipes/UpdatingDependencies.md",sourceDirName:"recipes",slug:"/recipes/UpdatingDependencies",permalink:"/docs/recipes/UpdatingDependencies",draft:!1,tags:[{label:"Yarn",permalink:"/docs/tags/yarn"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Dependencies",permalink:"/docs/tags/dependencies"}],version:"current",lastUpdatedBy:"Derek Greenberg",lastUpdatedAt:1679412301,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{title:"Updating Dependencies with Yarn Audit, Outdated and Upgrade",tags:["Yarn","Guide","Dependencies"],last_update:{author:"Derek Greenberg"},publish_date:"2022-10-09T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Scrolling to a location that hasn't been rendered using FlatList or SectionList",permalink:"/docs/recipes/UnrenderedItemInScrollView"},next:{title:"Using Screen Readers",permalink:"/docs/recipes/UsingScreenReaders"}},p={},c=[],d={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you get a bunch of warnings in the git command output about vulnerabilities, similar to this: ",(0,r.kt)("inlineCode",{parentName:"p"},"remote: Github found 80 vulnerabilities on <branch>..."),", you can examine these vulnerabilities with yarn audit, get a list of outdated packages with yarn outdated, and update each dependency using yarn update"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/cli/audit"},(0,r.kt)("strong",{parentName:"a"},"Yarn Audit"))," Checks for known security issues with the installed packages. Issue the command from the root of your project. The output is a list of known issues. Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn audit")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/67oa0iba/posts/images/cwzWfJi-twHOoJcKHPVx1lm_.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/cli/outdated"},(0,r.kt)("strong",{parentName:"a"},"Yarn Outdated"))," generates a list of outdated packages and all the info you need to make decisions about updating their versions, such as whether a major update that is NOT backwards compatible is available. A handy link to the repository is provided so you can read about the consequences of updating that dependency in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/67oa0iba/posts/images/g93PKCGCzgP-Ho0-QZWV8PIF.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/cli/upgrade/"},(0,r.kt)("strong",{parentName:"a"},"Yarn Upgrade"))," updates the version of a given package to the latest, or to a specific version if you specify it. Be sure to provide an argument to this command; otherwise, it will update all dependencies to their latest versions, which is usually not what you want."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/67oa0iba/posts/images/lsVpJJ9m7AGF6Nh0hbpy9927.png",alt:null})))}l.isMDXComponent=!0}}]);