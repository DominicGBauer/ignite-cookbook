"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={title:"CircleCI CD Setup - React Native",description:"Learn how to set up your CircleCI CD instance for React Native",tags:["Guide","CI/CD"],last_update:{author:"Robin Heinze"}},r=void 0,l={unversionedId:"CircleCIRNSetup",id:"CircleCIRNSetup",title:"CircleCI CD Setup - React Native",description:"Learn how to set up your CircleCI CD instance for React Native",source:"@site/docs/CircleCIRNSetup.md",sourceDirName:".",slug:"/CircleCIRNSetup",permalink:"/cookbook/docs/CircleCIRNSetup",draft:!1,tags:[{label:"Guide",permalink:"/cookbook/docs/tags/guide"},{label:"CI/CD",permalink:"/cookbook/docs/tags/ci-cd"}],version:"current",lastUpdatedBy:"Robin Heinze",lastUpdatedAt:1660681362,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"CircleCI CD Setup - React Native",description:"Learn how to set up your CircleCI CD instance for React Native",tags:["Guide","CI/CD"],last_update:{author:"Robin Heinze"}},sidebar:"tutorialSidebar",previous:{title:"CookBook Intro",permalink:"/cookbook/docs/intro"},next:{title:"Creating a Good Experience for Screen Readers",permalink:"/cookbook/docs/CreatingGreateExperienceForScreenReaders"}},s={},c=[{value:"First Things First",id:"first-things-first",level:3},{value:"CircleCI Setup",id:"circleci-setup",level:3},{value:"Continuous Integration",id:"continuous-integration",level:3},{value:"iOS Continuous Deployment",id:"ios-continuous-deployment",level:3},{value:"Github Actions Setup - Maybe take this out",id:"github-actions-setup---maybe-take-this-out",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document shows the steps necessary to set up CircleCI automatic continuous integration testing and automatic Fastlane beta builds upon successfully merging a pull request."),(0,o.kt)("p",null,"Note: there is some experimental information about using Github Actions at the end of this article."),(0,o.kt)("h3",{id:"first-things-first"},"First Things First"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write Tests")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the project already has tests, great. If not, write some."),(0,o.kt)("li",{parentName:"ul"},"They better pass! Tests are important because you don't want to be deploying broken code."),(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/infinitered/ChainReactApp2019"},"this")," for an example of how Infinite Red typically sets up tests for a React Native app.")),(0,o.kt)("h3",{id:"circleci-setup"},"CircleCI Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://circleci.com/vcs-authorize/"},"Log into CircleCI")," with your Github account"),(0,o.kt)("li",{parentName:"ol"},"Choose your organization from the dropdown in the top left"),(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Add Projects")," on the left"),(0,o.kt)("li",{parentName:"ol"},"Search for your repo"),(0,o.kt)("li",{parentName:"ol"},"Choose Set Up Project"),(0,o.kt)("li",{parentName:"ol"},"Set Up Project")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"macOS")," for the operating system and Other for the language")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Copy the basic ",(0,o.kt)("inlineCode",{parentName:"li"},"config.yml")," to ",(0,o.kt)("inlineCode",{parentName:"li"},".circleci/config.yml"),", commit your code changes and push to github ",(0,o.kt)("inlineCode",{parentName:"li"},"master")),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Start building")," to initiate the first CI build. This build will fail. That's ok. We will update the config in the next step."),(0,o.kt)("li",{parentName:"ol"},"Enable builds from forked pull requests. Go to project settings > Advanced Settings, then toggle on ",(0,o.kt)("inlineCode",{parentName:"li"},"Build forked pull requests")),(0,o.kt)("li",{parentName:"ol"},"If this project is open-source, you'll want to make sure the open-source setting is enabled to allow for macOS builds. Go to project settings > Advanced Settings, then toggle ",(0,o.kt)("inlineCode",{parentName:"li"},"Free and Open Source"),".")),(0,o.kt)("h3",{id:"continuous-integration"},"Continuous Integration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a folder in the project root named ",(0,o.kt)("inlineCode",{parentName:"li"},".circleci"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a file inside that folder named ",(0,o.kt)("inlineCode",{parentName:"li"},"config.yml")),(0,o.kt)("li",{parentName:"ol"},"Use the below template in that file."),(0,o.kt)("li",{parentName:"ol"},"If needed, see ",(0,o.kt)("a",{parentName:"li",href:"https://circleci.com/docs/2.0/config-intro/#section=configuration"},"configuration docs")," for additional configuration options. (",(0,o.kt)("em",{parentName:"li"},"Here is a complete ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/infinitered/open-source/blob/master/config.example.yml"},"config.yml")," with CI and CD steps completed"),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'defaults: &defaults\n  docker:\n    # Choose the version of Node you want here\n    - image: circleci/node:10.11\n  working_directory: ~/repo\n\nversion: 2\njobs:\n  setup:\n    <<: *defaults\n    steps:\n      - checkout\n      - restore_cache:\n          keys:\n            - v1-dependencies-node-{{ checksum "package.json" }}\n            # fallback to using the latest cache if no exact match is found\n            - v1-dependencies-node-\n      - run:\n          name: Install dependencies\n          command: yarn install\n      - save_cache:\n          name: Save node modules\n          paths:\n            - node_modules\n          key: v1-dependencies-node-{{ checksum "package.json" }}\n\n  tests:\n    <<: *defaults\n    steps:\n      - checkout\n      - restore_cache:\n          keys:\n            - v1-dependencies-node-{{ checksum "package.json" }}\n            # fallback to using the latest cache if no exact match is found\n            - v1-dependencies-node-\n      - run:\n          name: Run tests\n          command: yarn ci:test # this command will be added to/found in your package.json scripts\n\nworkflows:\n  version: 2\n  test_and_release:\n    jobs:\n      - setup\n      - tests:\n          requires:\n            - setup\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Make sure the test script is added to your ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    ...\n    "scripts": {\n      ...\n      "ci:test": "<command to run tests>" <<-- if you don\'t already have this one\n    },\n    ...\n  }\n')),(0,o.kt)("h3",{id:"ios-continuous-deployment"},"iOS Continuous Deployment"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Add Fastlane")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Before you can add continuous deployment, you'll need to setup Fastlane and Match to sign and deploy your app. You can follow these blog posts to get setup!")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shift.infinite.red/simple-react-native-ios-releases-4c28bb53a97b"},"Releasing on iOS with Fastlane")," Make sure you get to the point of being able to run:"),(0,o.kt)("li",{parentName:"ul"},"fastlane ios beta")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In your Fastfile, add:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"before_all do\n setup_circle_ci\nend\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In your ",(0,o.kt)("inlineCode",{parentName:"li"},"beta")," lane, make sure you have included a command that bumps the build number prior to building, and then commits the build number after building.\nExample:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'PROJECT = "YourProject"\nXCODE_PROJECT    = "#{PROJECT}.xcodeproj"\n  lane :beta do\n    increment_build_number(xcodeproj: "./#{XCODE_PROJECT}")\n    match(type: "appstore")\n    build_ios_app(\n      scheme: PROJECT,\n      workspace: "./YourProject.xcworkspace",\n      xcargs: "-UseNewBuildSystem=NO -allowProvisioningUpdates",\n      export_method: "app-store"\n    )\n    # Ship it!\n    upload_to_testflight(\n      skip_waiting_for_build_processing: true\n    )\n    commit_version_bump(\n      xcodeproj: "./#{XCODE_PROJECT}",\n      ignore: /tvOS/,\n      force: true,\n      message: "[skip ci] Version bump"\n    )\n  end\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"If you prefer, you can also do these steps as separate fastlane commands, just make sure to include a ",(0,o.kt)("inlineCode",{parentName:"li"},"- run:")," entry for each one in ",(0,o.kt)("inlineCode",{parentName:"li"},"config.yml"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Setting up CircleCI to Run Fastlane"),"\nCheck out ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@odedre/circle-ci-v2-react-native-project-build-release-setup-ce4ef31209d0"},"this blog")," for lots of helpful tips."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure CircleCI has all the credentials to run your fastlane scripts:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go into the Settings screen for your project on CircleCI"),(0,o.kt)("li",{parentName:"ul"},'Under "Build Settings", click on "Environment Variables" (',(0,o.kt)("a",{parentName:"li",href:"https://circleci.com/gh/infinitered/YOURPROJECT/edit#env-vars"},"https://circleci.com/gh/infinitered/YOURPROJECT/edit#env-vars"),")"),(0,o.kt)("li",{parentName:"ul"},'Click "Add Variable"'),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"FASTLANE_USER")," to the email address of your your Apple App Store Connect / Dev Portal user."),(0,o.kt)("li",{parentName:"ul"},"Do this for all of the variables listed ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastlane/docs/blob/950c6f42231d86b5187d2cfdcab2a6c81d0f61dc/docs/best-practices/continuous-integration.md#environment-variables-to-set"},"here")," ",(0,o.kt)("strong",{parentName:"li"},"Note"),": If your dev portal user does not have 2-Factor Auth turned on, you DO NOT need to set FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD. Including this variabe when your account does need it will result in errors during TestFlight upload. You can find more info from the Fastlane Docs, and from the CircleCI codesigning docs"))),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"GITHUB_TOKEN")," to env vars on CircleCI (",(0,o.kt)("a",{parentName:"li",href:"https://circleci.com/gh/infinitered/YOURPROJECT/edit#env-vars"},"https://circleci.com/gh/infinitered/YOURPROJECT/edit#env-vars"),"). You should be able to find these in our team 1password under ",(0,o.kt)("inlineCode",{parentName:"li"},"CircleCI CI/CD Semantic Release Tokens"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you need to make a new ",(0,o.kt)("inlineCode",{parentName:"li"},"GITHUB_TOKEN"),", go to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens/new"},"https://github.com/settings/tokens/new")," and create a new one with ",(0,o.kt)("inlineCode",{parentName:"li"},"repo")," access.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"Circle CI")," Github team to your repo (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YOURORGANIZATION/YOURPROJECT/settings/collaboration"},"https://github.com/YOURORGANIZATION/YOURPROJECT/settings/collaboration"),") with write access."),(0,o.kt)("li",{parentName:"ol"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"Circle CI")," Github team as a read-only collaborator to the private match certificates repo."),(0,o.kt)("li",{parentName:"ol"},"Log in to GitHub/CircleCI as the CI user. Then in CircleCI, go to Project Settings > Checkout SSH keys (",(0,o.kt)("a",{parentName:"li",href:"https://circleci.com/gh/YOURORGANIZATION/YOURPROJECT/edit#checkout"},"https://circleci.com/gh/YOURORGANIZATION/YOURPROJECT/edit#checkout"),") and add a new user key. This will allow CircleCI to clone the certs repo in order to sign your app."),(0,o.kt)("li",{parentName:"ol"},"Go to Project Settings > Checkout SSH Keys and add a new deploy key. You will copy the fingerprint and paste into the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.yml")," example below in the ",(0,o.kt)("inlineCode",{parentName:"li"},"add_ssh_keys")," section (there should be ",(0,o.kt)("inlineCode",{parentName:"li"},'"'),"s around it)"),(0,o.kt)("li",{parentName:"ol"},"Add a script to your ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," called ",(0,o.kt)("inlineCode",{parentName:"li"},"ci:setup"),". This will run any necessary shell commands to prepare your project for building. For example, creating private files like ",(0,o.kt)("inlineCode",{parentName:"li"},".env"),'. If you don\'t any additional setup, you can leave this command as "", or remove the ',(0,o.kt)("inlineCode",{parentName:"li"},"ci:setup")," step from the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.yml")," example below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    ...\n    "scripts": {\n      ...\n      "ci:setup": "touch .env && echo \\"ENV_VAR=\\"$ENV_VAR >> .env",\n    },\n    ...\n  }\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-dotenv")," throws errors if there is not a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," present with the variables it expects. However, if you don't want to put secret values in this script (you shouldn't), then you can add them directly to CircleCI under Project Settings > Environment Variables. Then you can reference them in this script as ",(0,o.kt)("inlineCode",{parentName:"p"},"$ENV_VAR"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"mac")," configuration and ",(0,o.kt)("inlineCode",{parentName:"li"},"deploy_ios")," job to your CircleCI ",(0,o.kt)("inlineCode",{parentName:"li"},"config.yml"),"\nNOTE: The macOS boxes currently come with Node 11.0, with no apparent way to change the version. This shouldn't be a huge problem. One known issue is with ",(0,o.kt)("inlineCode",{parentName:"li"},"upath"),", which is a deep dependency of react-native. If you encounter errors related to ",(0,o.kt)("inlineCode",{parentName:"li"},"upath")," requiring a lower version of Node, just make sure it is at ",(0,o.kt)("inlineCode",{parentName:"li"},"1.1.0"),", and not ",(0,o.kt)("inlineCode",{parentName:"li"},"1.0.4")," in your yarn.lock. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbnb/enzyme/issues/1637#issuecomment-397327562"},"https://github.com/airbnb/enzyme/issues/1637#issuecomment-397327562"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'defaults: ...\n\nmac: &mac\n  macos:\n    xcode: "10.1.0"\n  working_directory: ~/repo\n  environment:\n    FL_OUTPUT_DIR: output\n  shell: /bin/bash --login -o pipefail\n\nversion: 2\njobs:\n  setup: ...\n\n  tests: ...\n\n  deploy_ios:\n    <<: *mac\n    steps:\n      - checkout\n      - add_ssh_keys:\n          fingerprints: \u2014 \u201cSSH_FINGERPRINT_HERE\u201d\n      - run:\n          name: Git configuration\n          command: git config user.email "ci@infinite.red" && git config user.name "CircleCI"\n      - run:\n          name: Set upstream branch\n          command: git branch --set-upstream-to origin ${CIRCLE_BRANCH}\n      # Node modules\n      - restore_cache:\n          name: Restore node modules\n          keys:\n            - v1-dependencies-mac-{{ checksum "package.json" }}\n            # fallback to using the latest cache if no exact match is found\n            - v1-dependencies-mac-\n      - run:\n          name: Install dependencies\n          command: NOYARNPOSTINSTALL=1 yarn install\n      - save_cache:\n          name: Save node modules\n          paths:\n            - node_modules\n          key: v1-dependencies-mac-{{ checksum "package.json" }}\n\n      # Cocoapods\n      - run:\n          name: Fetch CocoaPods Specs\n          command: |\n            curl https://cocoapods-specs.circleci.com/fetch-cocoapods-repo-from-s3.sh | bash -s cf\n      - run:\n          working_directory: ios\n          name: Install CocoaPods\n          command: pod install --verbose\n\n      # Gems\n      - restore_cache:\n          name: Restore gems\n          key: bundle-v1-{{ checksum "ios/Gemfile.lock" }}-{{ arch }}\n      - run:\n          name: Bundle Install\n          command: bundle install\n          working_directory: ios\n      - save_cache:\n          key: bundle-v1-{{ checksum "ios/Gemfile.lock" }}-{{ arch }}\n          paths:\n            - vendor/bundle\n\n      # Misc setup\n      - run:\n          name: Misc setup\n          command: yarn ci:setup\n\n      # Git grooming\n      - run:\n          name: Pull latest git\n          command: git stash && git pull && git stash pop\n\n      # Run Fastlane\n      - run:\n          working_directory: ios\n          name: Fastlane\n          command: bundle exec fastlane ios beta\n\n      # Git cleanup\n      - run:\n          name: Pull latest git\n          command: git stash && git pull && git stash pop\n      - run:\n          name: Push version bump commit\n          command: git push\n      - store_artifacts:\n          path: output\n\nworkflows:\n  version: 2\n  test_and_release:\n    jobs:\n      - setup\n      - tests:\n          requires:\n            - setup\n      - deploy_ios:\n          filters:\n            branches:\n              only: master\n              ```\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Troubleshooting tips")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'If you need to debug failed builds, you can use the "Rebuild with SSH" option in CircleCI. See ',(0,o.kt)("a",{parentName:"li",href:"https://circleci.com/docs/2.0/ssh-access-jobs/"},"https://circleci.com/docs/2.0/ssh-access-jobs/")," for more info."),(0,o.kt)("li",{parentName:"ul"},"Tip: make sure you are logged in to Github/CircleCI as yourself (not the CI user) when you hit the button to rebuild with SSH."),(0,o.kt)("li",{parentName:"ul"},"If you get a vague error saying ",(0,o.kt)("inlineCode",{parentName:"li"},"File main.jsbundle does not exist"),", that means there was an error while building the app and you can view the more detailed message by inspecting the log files with the following command (while in SSH mode). Increase the number of lines from 50 as needed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tail -50 ios/output/buildlogs/gym/YourProject-YourProject.log"))),(0,o.kt)("h3",{id:"github-actions-setup---maybe-take-this-out"},"Github Actions Setup - Maybe take this out"),(0,o.kt)("p",null,"Here is some experimental information for Github Actions CI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Github Actions YML File")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'name: RN App CI\non: [push]\njobs:\n  build:\n    runs-on: macos-latest\n    env:\n      CI: true\n      NODE_ENV: development\n    steps:\n      - uses: actions/checkout@v1\n      - name: Cache my-app node modules\n        uses: actions/cache@v1\n        with:\n          path: my-app/node_modules\n          key: ${{ runner.OS }}-build-${{ hashFiles(\'**/my-app/yarn.lock\') }}\n          restore-keys: |\n            ${{ runner.OS }}-build-${{ env.cache-name }}-\n            ${{ runner.OS }}-build-\n            ${{ runner.OS }}-\n      - name: Install dependencies\n        run: |\n          yarn install\n      - name: Run unit tests\n        run: |\n          yarn test:unit\n      - name: Install cocoapods\n        run: |\n          cd my-app/ios\n          pod install --repo-update\n      - name: Run e2e tests\n        run: |\n          cd my-app\n          yarn test:e2e:build --configuration="ios.sim.debug"\n          yarn test:e2e --configuration="ios.sim.debug"\n')))}p.isMDXComponent=!0}}]);