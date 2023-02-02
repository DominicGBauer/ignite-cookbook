"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"TypeScript baseUrl Configuration",description:"How to configure TypeScript's baseUrl module for rewriting relative imports",tags:["TypeScript","Babel"],last_update:{author:"Frank Calise"},publish_date:new Date("2022-10-24T00:00:00.000Z")},i="TypeScript baseUrl Configuration",p={unversionedId:"recipes/TypeScriptBaseURL",id:"recipes/TypeScriptBaseURL",title:"TypeScript baseUrl Configuration",description:"How to configure TypeScript's baseUrl module for rewriting relative imports",source:"@site/docs/recipes/TypeScriptBaseURL.md",sourceDirName:"recipes",slug:"/recipes/TypeScriptBaseURL",permalink:"/docs/recipes/TypeScriptBaseURL",draft:!1,tags:[{label:"TypeScript",permalink:"/docs/tags/type-script"},{label:"Babel",permalink:"/docs/tags/babel"}],version:"current",lastUpdatedBy:"Frank Calise",lastUpdatedAt:1675375269,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{title:"TypeScript baseUrl Configuration",description:"How to configure TypeScript's baseUrl module for rewriting relative imports",tags:["TypeScript","Babel"],last_update:{author:"Frank Calise"},publish_date:"2022-10-24T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Staying With Expo",permalink:"/docs/recipes/StayingWithExpo"},next:{title:"Scrolling to a location that hasn't been rendered using FlatList or SectionList",permalink:"/docs/recipes/UnrenderedItemInScrollView"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Project Dependencies",id:"project-dependencies",level:2},{value:"TypeScript Configuration Changes",id:"typescript-configuration-changes",level:2},{value:"Babel Configuration Changes",id:"babel-configuration-changes",level:2},{value:"Taste Test in a Component!",id:"taste-test-in-a-component",level:2},{value:"Resources",id:"resources",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript-baseurl-configuration"},"TypeScript baseUrl Configuration"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Depending on your project structure, sometimes you'll end up with longer relative imports like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Thing } from "../../../../../components/thing";\n')),(0,a.kt)("p",null,"We can utilize TypeScript's ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," module to help resolve non-absolute module names. Doing so will allow us to change the above to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Thing } from "~/components/thing";\n')),(0,a.kt)("h2",{id:"project-dependencies"},"Project Dependencies"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yarn add -D babel-plugin-root-import")),(0,a.kt)("h2",{id:"typescript-configuration-changes"},"TypeScript Configuration Changes"),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "baseUrl": "./",\n  // the following assumes Ignite\'s app/ structure, however yours may differ\n  "paths": { "~/*": ["app/*"] }\n}\n')),(0,a.kt)("h2",{id:"babel-configuration-changes"},"Babel Configuration Changes"),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js")," and add the following plugin array object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n  "babel-plugin-root-import",\n  {\n    root: __dirname,\n    rootPathPrefix: "~/",\n    // mapping ~/ to the ./app directory (again, your app structure may differ here)\n    rootPathSuffix: "app",\n  },\n],\n')),(0,a.kt)("h2",{id:"taste-test-in-a-component"},"Taste Test in a Component!"),(0,a.kt)("p",null,"Open up ",(0,a.kt)("inlineCode",{parentName:"p"},"./app/screens/DemoShowroomScreen.tsx")," and let's update the relative imports from:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListItem, Screen, Text } from "../../components";\nimport { isRTL } from "../../i18n";\nimport { DemoTabScreenProps } from "../../navigators/DemoNavigator";\nimport { colors, spacing } from "../../theme";\n')),(0,a.kt)("p",null,"to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListItem, Screen, Text } from "~/components";\nimport { isRTL } from "~/i18n";\nimport { DemoTabScreenProps } from "~/navigators/DemoNavigator";\nimport { colors, spacing } from "~/theme";\n')),(0,a.kt)("p",null,"Fire up the app and make sure everything still works!"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yarn expo:start")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: if you receive an error about not being able to resolve the components, you may have to clear your bundler cache, ",(0,a.kt)("inlineCode",{parentName:"em"},"yarn expo:start --clear"))),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/tsconfig#baseUrl"},"TypeScript baseUrl Documentation"))))}u.isMDXComponent=!0}}]);