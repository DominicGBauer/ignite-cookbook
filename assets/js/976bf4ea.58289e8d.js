"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={title:"Add component tests to component generator",description:"Customize `npx ignite-cli generate component` to add test files for each component generated",tags:["Generator"],last_update:{author:"Joshua Yoes"}},i="Add component tests to `npx ignite-cli generate component`",p={unversionedId:"GeneratorComponentTests",id:"GeneratorComponentTests",title:"Add component tests to component generator",description:"Customize `npx ignite-cli generate component` to add test files for each component generated",source:"@site/docs/GeneratorComponentTests.md",sourceDirName:".",slug:"/GeneratorComponentTests",permalink:"/cookbook/docs/GeneratorComponentTests",draft:!1,tags:[{label:"Generator",permalink:"/cookbook/docs/tags/generator"}],version:"current",lastUpdatedBy:"Joshua Yoes",lastUpdatedAt:1665431502,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{title:"Add component tests to component generator",description:"Customize `npx ignite-cli generate component` to add test files for each component generated",tags:["Generator"],last_update:{author:"Joshua Yoes"}},sidebar:"tutorialSidebar",previous:{title:"Accessiblity Font Sizes",permalink:"/cookbook/docs/FontSizes"},next:{title:"Patching/Building Android .aar From Source",permalink:"/cookbook/docs/PatchingBuildingAndroid"}},s={},l=[{value:"Setup <code>@testing-library/react-native</code>",id:"setup-testing-libraryreact-native",level:2},{value:"Component Generators",id:"component-generators",level:2},{value:"Customizing Component Generators",id:"customizing-component-generators",level:2},{value:"Testing",id:"testing",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-component-tests-to-npx-ignite-cli-generate-component"},"Add component tests to ",(0,r.kt)("inlineCode",{parentName:"h1"},"npx ignite-cli generate component")),(0,r.kt)("p",null,"Did you know that Ignite automatically generates files for you? And that you can customize those generators?"),(0,r.kt)("p",null,"Here is how to automatically generate components and tests for them using ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native")),(0,r.kt)("h2",{id:"setup-testing-libraryreact-native"},"Setup ",(0,r.kt)("inlineCode",{parentName:"h2"},"@testing-library/react-native")),(0,r.kt)("p",null,"First, we will want to add ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native")," to our Ignite project. ",(0,r.kt)("a",{parentName:"p",href:"https://reactnativetesting.io/component/setup"},"Josh Justice has an excellent setup guide to follow along at reactnativetesting.io")),(0,r.kt)("h2",{id:"component-generators"},"Component Generators"),(0,r.kt)("p",null,"There are a variety of generators, but today we are going to focus on ",(0,r.kt)("inlineCode",{parentName:"p"},"npx ignite-cli generate component")),(0,r.kt)("p",null,"Ignite will look in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ignite/templates/*")," directory for what templates to run on each command."),(0,r.kt)("p",null,"By default, Ignite provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"ignite/templates/component/NAME.tsx.ejs")," template for creating a component file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We use ejs and frontmatter to write our templates, you can read more about syntax ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/infinitered/ignite/blob/master/docs/Generator-Templates.md"},"in the Ignite docs"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NAME")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"ignite/templates/component/NAME.tsx.ejs")," is replaced with the first argument passed to our generator. So ",(0,r.kt)("inlineCode",{parentName:"li"},"npx ignite-cli generate component Profile")," would create ",(0,r.kt)("inlineCode",{parentName:"li"},"app/components/Profile.tsx"))),(0,r.kt)("h2",{id:"customizing-component-generators"},"Customizing Component Generators"),(0,r.kt)("p",null,"Add the following file to ",(0,r.kt)("inlineCode",{parentName:"p"},"ignite/templates/component/NAME.spec.tsx.ejs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---\ndestinationDir: app/components/specs\n---\n// https://reactnativetesting.io/component/testing/\n\nimport React from "react"\nimport { fireEvent, render, screen } from "@testing-library/react-native"\nimport { <%= props.pascalCaseName %> } from "../<%= props.pascalCaseName %>"\n\ndescribe("<%= props.pascalCaseName %>", () => {\n  it("renders", () => {\n    render(<<%= props.pascalCaseName %> />)\n    expect(screen.getByText("Hello")).toBeTruthy()\n  })\n})\n')),(0,r.kt)("p",null,"Now, when we run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx ignite-cli generate component Profile"),", it will create both ",(0,r.kt)("inlineCode",{parentName:"p"},"app/components/Profile.tsx")," ",(0,r.kt)("em",{parentName:"p"},"and")," ",(0,r.kt)("inlineCode",{parentName:"p"},"app/components/specs/Profile.spec.tsx")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignite/templates/component/NAME.spec.tsx.ejs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignite/templates/component/NAME.tsx.ejs"))),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Now, all we need to do is run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test"),"! If everything was set up properly, you should have a new suite of passing tests!"))}m.isMDXComponent=!0}}]);