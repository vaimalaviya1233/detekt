"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[6640],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3065:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return b}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: detekt [options]\n  Options:\n    --all-rules\n      Activates all available (even unstable) rules.\n      Default: false\n    --auto-correct, -ac\n      Allow rules to auto correct code if they support it. The default rule \n      sets do NOT support auto correcting and won't change any line in the \n      users code base. However custom rules can be written to support auto \n      correcting. The additional 'formatting' rule set, added with \n      '--plugins', does support it and needs this flag.\n      Default: false\n    --base-path, -bp\n      Specifies a directory as the base path.Currently it impacts all file \n      paths in the formatted reports. File paths in console output and txt \n      report are not affected and remain as absolute paths.\n    --baseline, -b\n      If a baseline xml file is passed in, only new code smells not in the \n      baseline are printed in the console.\n    --build-upon-default-config\n      Preconfigures detekt with a bunch of rules and some opinionated defaults \n      for you. Allows additional provided configurations to override the \n      defaults. \n      Default: false\n    --classpath, -cp\n      EXPERIMENTAL: Paths where to find user class files and depending jar \n      files. Used for type resolution.\n    --config, -c\n      Path to the config file (path/to/config.yml). Multiple configuration \n      files can be specified with ',' or ';' as separator.\n    --config-resource, -cr\n      Path to the config resource on detekt's classpath (path/to/config.yml).\n    --create-baseline, -cb\n      Treats current analysis findings as a smell baseline for future detekt \n      runs. \n      Default: false\n    --debug\n      Prints extra information about configurations and extensions.\n      Default: false\n    --disable-default-rulesets, -dd\n      Disables default rule sets.\n      Default: false\n    --excludes, -ex\n      Globbing patterns describing paths to exclude from the analysis.\n    --generate-config, -gc\n      Export default config. Path can be specified with --config option \n      (default path: default-detekt-config.yml)\n      Default: false\n    --help, -h\n      Shows the usage.\n    --includes, -in\n      Globbing patterns describing paths to include in the analysis. Useful in \n      combination with 'excludes' patterns.\n    --input, -i\n      Input paths to analyze. Multiple paths are separated by comma. If not \n      specified the current working directory is used.\n    --jdk-home\n      EXPERIMENTAL: Use a custom JDK home directory to include into the \n      classpath \n    --jvm-target\n      EXPERIMENTAL: Target version of the generated JVM bytecode that was \n      generated during compilation and is now being used for type resolution \n      (1.8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 or 19)\n      Default: 1.8\n    --language-version\n      EXPERIMENTAL: Compatibility mode for Kotlin language version X.Y, \n      reports errors for all language features that came out later\n      Possible Values: [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0]\n    --max-issues\n      Return exit code 0 only when found issues count does not exceed \n      specified issues count.\n    --parallel\n      Enables parallel compilation and analysis of source files. Do some \n      benchmarks first before enabling this flag. Heuristics show performance \n      benefits starting from 2000 lines of Kotlin code.\n      Default: false\n    --plugins, -p\n      Extra paths to plugin jars separated by ',' or ';'.\n    --report, -r\n      Generates a report for given 'report-id' and stores it on given 'path'. \n      Entry should consist of: [report-id:path]. Available 'report-id' values: \n      'txt', 'xml', 'html', 'md', 'sarif'. These can also be used in \n      combination with each other e.g. '-r txt:reports/detekt.txt -r \n      xml:reports/detekt.xml' \n    --version\n      Prints the detekt CLI version.\n      Default: false\n")))}s.isMDXComponent=!0;var c=["components"],u={toc:[]};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: java -jar detekt-generator-1.22.0-all.jar [options]\n  Options:\n    --generate-custom-rule-config, -gcrc\n      Generate custom rules configuration files. The files will be\n      placed under 'resources' folder of each rule respectively\n      (e.g. 'custom-rule/src/main/resources/config/config.yml').\n    --input, -i\n      Input paths to rules to analyze. Multiple paths are separated by comma.\n")))}d.isMDXComponent=!0;var p=["components"],f={title:"Run detekt using Command Line Interface",keywords:["cli"],sidebar:null,permalink:"cli.html",folder:"gettingstarted",summary:null,sidebar_position:1},m=void 0,h={unversionedId:"gettingstarted/cli",id:"gettingstarted/cli",title:"Run detekt using Command Line Interface",description:"Install the cli",source:"@site/docs/gettingstarted/cli.mdx",sourceDirName:"gettingstarted",slug:"/gettingstarted/cli",permalink:"/docs/next/gettingstarted/cli",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/gettingstarted/cli.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Run detekt using Command Line Interface",keywords:["cli"],sidebar:null,permalink:"cli.html",folder:"gettingstarted",summary:null,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Compatibility Table",permalink:"/docs/next/introduction/compatibility"},next:{title:"Run detekt using the Detekt Gradle Plugin",permalink:"/docs/next/gettingstarted/gradle"}},g={},b=[{value:"Install the cli",id:"install-the-cli",level:2},{value:"MacOS, with Homebrew:",id:"macos-with-homebrew",level:3},{value:"Windows, with Scoop",id:"windows-with-scoop",level:3},{value:"Any OS:",id:"any-os",level:3},{value:"NixOS",id:"nixos",level:3},{value:"Use the cli",id:"use-the-cli",level:2},{value:"Use the cli to generate configuration for custom rules",id:"use-the-cli-to-generate-configuration-for-custom-rules",level:2}],k={toc:b};function y(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install-the-cli"},"Install the cli"),(0,i.kt)("p",null,"There are different ways to install the Command Line Interface (CLI):"),(0,i.kt)("h3",{id:"macos-with-homebrew"},"MacOS, with ",(0,i.kt)("a",{parentName:"h3",href:"https://brew.sh/"},"Homebrew"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew install detekt\ndetekt [options]\n")),(0,i.kt)("h3",{id:"windows-with-scoop"},"Windows, with ",(0,i.kt)("a",{parentName:"h3",href:"https://scoop.sh/"},"Scoop")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop install detekt\ndetekt [options]\n")),(0,i.kt)("h3",{id:"any-os"},"Any OS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sSLO https://github.com/detekt/detekt/releases/download/v1.22.0/detekt-cli-1.22.0.zip\nunzip detekt-cli-1.22.0.zip\n./detekt-cli-1.22.0/bin/detekt-cli --help\n")),(0,i.kt)("h3",{id:"nixos"},"NixOS"),(0,i.kt)("p",null,"As a prerequisite, you have to add the unstable channel via ",(0,i.kt)("inlineCode",{parentName:"p"},"nix-channel")," and then execute the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nix-shell -I nixpkgs=channel:nixpkgs-unstable -p detekt\n")),(0,i.kt)("h2",{id:"use-the-cli"},"Use the cli"),(0,i.kt)("p",null,"detekt will exit with one of the following exit codes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Exit code"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"detekt ran normally and maxIssues count was not reached in BuildFailureReport.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"An unexpected error occurred")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"MaxIssues count was reached in BuildFailureReport.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid detekt configuration file detected.")))),(0,i.kt)("p",null,"The following parameters are shown when ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," is entered."),(0,i.kt)(s,{mdxType:"CliOptions"}),(0,i.kt)("h2",{id:"use-the-cli-to-generate-configuration-for-custom-rules"},"Use the cli to generate configuration for custom rules"),(0,i.kt)(d,{mdxType:"CliGeneratorOptions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar detekt-generator-1.22.0-all.jar -gcrc -i /path/to/rule1, /path/to/rule2\n")))}y.isMDXComponent=!0}}]);