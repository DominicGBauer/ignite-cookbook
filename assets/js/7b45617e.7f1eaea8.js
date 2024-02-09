"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[1833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Generator for Component Tests",description:"Customize `npx ignite-cli generate component` to add test files for each component generated",tags:["Generator"],last_update:{author:"Joshua Yoes"},publish_date:new Date("2022-10-10T00:00:00.000Z")},i="Add component tests to `npx ignite-cli generate component`",p={unversionedId:"recipes/GeneratorComponentTests",id:"recipes/GeneratorComponentTests",title:"Generator for Component Tests",description:"Customize `npx ignite-cli generate component` to add test files for each component generated",source:"@site/docs/recipes/GeneratorComponentTests.md",sourceDirName:"recipes",slug:"/recipes/GeneratorComponentTests",permalink:"/docs/recipes/GeneratorComponentTests",draft:!1,tags:[{label:"Generator",permalink:"/docs/tags/generator"}],version:"current",lastUpdatedBy:"Joshua Yoes",lastUpdatedAt:1681985935,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{title:"Generator for Component Tests",description:"Customize `npx ignite-cli generate component` to add test files for each component generated",tags:["Generator"],last_update:{author:"Joshua Yoes"},publish_date:"2022-10-10T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Expo Router",permalink:"/docs/recipes/ExpoRouter"},next:{title:"Maestro Setup",permalink:"/docs/recipes/MaestroSetup"}},s={},l=[{value:"Setup <code>@testing-library/react-native</code>",id:"setup-testing-libraryreact-native",level:2},{value:"Component Generators",id:"component-generators",level:2},{value:"Customizing Component Generators",id:"customizing-component-generators",level:2},{value:"Testing",id:"testing",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-component-tests-to-npx-ignite-cli-generate-component"},"Add component tests to ",(0,o.kt)("inlineCode",{parentName:"h1"},"npx ignite-cli generate component")),(0,o.kt)("p",null,"Did you know that Ignite automatically generates files for you? And that you can customize those generators?"),(0,o.kt)("p",null,"Here is how to automatically generate components and tests for them using ",(0,o.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native")),(0,o.kt)("h2",{id:"setup-testing-libraryreact-native"},"Setup ",(0,o.kt)("inlineCode",{parentName:"h2"},"@testing-library/react-native")),(0,o.kt)("p",null,"First, we will want to add ",(0,o.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native")," to our Ignite project. ",(0,o.kt)("a",{parentName:"p",href:"https://reactnativetesting.io/component/setup"},"Josh Justice has an excellent setup guide to follow along at reactnativetesting.io")),(0,o.kt)("h2",{id:"component-generators"},"Component Generators"),(0,o.kt)("p",null,"There are a variety of generators, but today we are going to focus on ",(0,o.kt)("inlineCode",{parentName:"p"},"npx ignite-cli generate component")),(0,o.kt)("p",null,"Ignite will look in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ignite/templates/*")," directory for what templates to run on each command."),(0,o.kt)("p",null,"By default, Ignite provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"ignite/templates/component/NAME.tsx.ejs")," template for creating a component file."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We use ejs and frontmatter to write our templates, you can read more about syntax ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/infinitered/ignite/blob/master/docs/Generator-Templates.md"},"in the Ignite docs"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NAME")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"ignite/templates/component/NAME.tsx.ejs")," is replaced with the first argument passed to our generator. So ",(0,o.kt)("inlineCode",{parentName:"li"},"npx ignite-cli generate component Profile")," would create ",(0,o.kt)("inlineCode",{parentName:"li"},"app/components/Profile.tsx"))),(0,o.kt)("h2",{id:"customizing-component-generators"},"Customizing Component Generators"),(0,o.kt)("p",null,"Add the following file to ",(0,o.kt)("inlineCode",{parentName:"p"},"ignite/templates/component/NAME.spec.tsx.ejs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ejs"},'---\ndestinationDir: app/components/specs\n---\n// https://reactnativetesting.io/component/testing/\n\nimport React from "react"\nimport { fireEvent, render, screen } from "@testing-library/react-native"\nimport { <%= props.pascalCaseName %> } from "../<%= props.pascalCaseName %>"\n\ndescribe("<%= props.pascalCaseName %>", () => {\n  it("renders", () => {\n    render(<<%= props.pascalCaseName %> />)\n    expect(screen.getByText("Hello")).toBeTruthy()\n  })\n})\n')),(0,o.kt)("p",null,"Now, when we run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx ignite-cli generate component Profile"),", it will create both ",(0,o.kt)("inlineCode",{parentName:"p"},"app/components/Profile.tsx")," ",(0,o.kt)("em",{parentName:"p"},"and")," ",(0,o.kt)("inlineCode",{parentName:"p"},"app/components/specs/Profile.spec.tsx")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ignite/templates/component/NAME.spec.tsx.ejs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ignite/templates/component/NAME.tsx.ejs"))),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Now, all we need to do is run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test"),"! If everything was set up properly, you should have a new suite of passing tests!"))}m.isMDXComponent=!0}}]);