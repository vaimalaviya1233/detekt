"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[924],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Using Type Resolution",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"type-resolution.html",folder:"gettingstarted",summary:null,sidebar_position:5},s=void 0,u={unversionedId:"gettingstarted/type-resolution",id:"version-1.22.0/gettingstarted/type-resolution",title:"Using Type Resolution",description:"This page describes how to use detekt's type resolution feature.",source:"@site/versioned_docs/version-1.22.0/gettingstarted/type-resolution.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/type-resolution",permalink:"/docs/gettingstarted/type-resolution",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.22.0/gettingstarted/type-resolution.md",tags:[],version:"1.22.0",sidebarPosition:5,frontMatter:{title:"Using Type Resolution",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"type-resolution.html",folder:"gettingstarted",summary:null,sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Run detekt using Maven Ant Task",permalink:"/docs/gettingstarted/mavenanttask"},next:{title:"Run detekt using a Git pre-commit hook",permalink:"/docs/gettingstarted/git-pre-commit-hook"}},p={},d=[{value:"What is type resolution",id:"what-is-type-resolution",level:2},{value:"An example",id:"an-example",level:3},{value:"Is my rule using type resolution?",id:"is-my-rule-using-type-resolution",level:2},{value:"Enabling on a JVM project",id:"enabling-on-a-jvm-project",level:2},{value:"Enabling on an Android project",id:"enabling-on-an-android-project",level:2},{value:"Enabling on Detekt CLI",id:"enabling-on-detekt-cli",level:2},{value:"Writing a rule that uses type resolution",id:"writing-a-rule-that-uses-type-resolution",level:2},{value:"Testing a rule that uses type resolution",id:"testing-a-rule-that-uses-type-resolution",level:2}],c={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page describes how to use detekt's ",(0,o.kt)("strong",{parentName:"p"},"type resolution")," feature."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please note that type resolution is still an ",(0,o.kt)("strong",{parentName:"p"},"experimental feature")," of Detekt. We expect it to be stable with the upcoming release of Detekt (2.x)")),(0,o.kt)("h2",{id:"what-is-type-resolution"},"What is type resolution"),(0,o.kt)("p",null,"Type resolution is a feature that allows Detekt to perform more ",(0,o.kt)("strong",{parentName:"p"},"advanced")," static analysis on your Kotlin source code. "),(0,o.kt)("p",null,"Normally, Detekt doesn't have access to the types and symbols that are available to the compiler during the compilation. This restricts the inspection capability.\nBy enabling type resolution, you provide to Detekt all the information to understand types and symbols in your code needed to perform more accurate analysis. This extends Detekt's inspection capability to ones of the Kotlin ",(0,o.kt)("strong",{parentName:"p"},"compiler"),"."),(0,o.kt)("h3",{id:"an-example"},"An example"),(0,o.kt)("p",null,"Detekt has a rule called ",(0,o.kt)("a",{parentName:"p",href:"/docs/rules/style#magicnumber"},"MagicNumber")," to detect usages of magic numbers in your code. "),(0,o.kt)("p",null,"In the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val user = getUserById(42)?.toString()\n")),(0,o.kt)("p",null,"Detekt is able to report the usage of the number ",(0,o.kt)("inlineCode",{parentName:"p"},"42")," as a magic number, ",(0,o.kt)("strong",{parentName:"p"},"without")," type resolution. All the information needed to run this inspection is already available in the source code."),(0,o.kt)("p",null,"Similarly, Detekt has another rule called ",(0,o.kt)("a",{parentName:"p",href:"/docs/rules/potential-bugs#unnecessarysafecall"},"UnnecessarySafeCall")," to detect unnecessary usages of safe call operators (",(0,o.kt)("inlineCode",{parentName:"p"},"?."),")."),(0,o.kt)("p",null,"In the previous example, Detekt is able to determine if the safe call in ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserById(42)?.toString()")," is required ",(0,o.kt)("strong",{parentName:"p"},"only with")," type resolution. "),(0,o.kt)("p",null,"This is because Detekt needs to know what is the ",(0,o.kt)("strong",{parentName:"p"},"return type")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserById()")," in order to correctly perform the inspection. If the return type is a nullable type, then the code is valid. If the return type is a non-nullable type, Detekt will report an ",(0,o.kt)("inlineCode",{parentName:"p"},"UnnecessarySafeCall")," as the ",(0,o.kt)("inlineCode",{parentName:"p"},"?.")," is actually not needed."),(0,o.kt)("p",null,"With type resolution, Detekt has access to all the symbols and types of your codebase. Type resolution can be enabled by providing the ",(0,o.kt)("strong",{parentName:"p"},"classpath")," that is used during compilation. This will give Detekt access to all the code used to compile your project (both first and third party code) and will allow more advanced analysis."),(0,o.kt)("h2",{id:"is-my-rule-using-type-resolution"},"Is my rule using type resolution?"),(0,o.kt)("p",null,"If you're running Detekt ",(0,o.kt)("strong",{parentName:"p"},"without")," type resolution, all the rules that require type resolution ",(0,o.kt)("strong",{parentName:"p"},"will not run"),"."),(0,o.kt)("p",null,"All the rules that require type resolution are annotated with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/search?q=%40RequiresTypeResolution"},(0,o.kt)("inlineCode",{parentName:"a"},"@RequiresTypeResolution")),". "),(0,o.kt)("p",null,"Moreover, their official documentation in the Detekt website will mention ",(0,o.kt)("em",{parentName:"p"},"Requires Type Resolution")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/rules/potential-bugs#unnecessarysafecall"},"like here"),")."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please note that we do have some rules that have mixed behavior whether type resolution is enabled or not. Those rules are listed here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/issues/2994"},"#2994"))),(0,o.kt)("p",null,"Before opening an issue that you're rule is not working, please verify, whether your rule requires type resolution and check if you have type resolution enabled."),(0,o.kt)("p",null,"Issues and proposals for rules that require type resolution are labelled with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/labels/needs%20type%20and%20symbol%20solving"},"needs type and symbol solving")," on the Issue tracker."),(0,o.kt)("h2",{id:"enabling-on-a-jvm-project"},"Enabling on a JVM project"),(0,o.kt)("p",null,"The easiest way to use type resolution is to use the Detekt Gradle plugin. On a JVM project, the following tasks will be created:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"detekt")," - Runs detekt WITHOUT type resolution"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"detektMain")," - Runs detekt with type resolution on the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," source set"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"detektTest")," - Runs detekt with type resolution on the ",(0,o.kt)("inlineCode",{parentName:"li"},"test")," source set")),(0,o.kt)("p",null,"Moreover, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"detektBaselineMain")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"detektBaselineTest")," to create baselines starting from runs of Detekt with type resolution enabled."),(0,o.kt)("p",null,"Alternatively, you can create a ",(0,o.kt)("strong",{parentName:"p"},"custom detekt task"),", making sure to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"classpath")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jvmTarget")," properties correctly. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/gettingstarted/gradle"},"Run detekt using the Detekt Gradle Plugin")," and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/gettingstarted/gradletask"},"Run detekt using Gradle Task")," for further readings on this."),(0,o.kt)("h2",{id:"enabling-on-an-android-project"},"Enabling on an Android project"),(0,o.kt)("p",null,"Other than the aforementioned tasks for JVM projects, you can use the following Android-specific gradle tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"detekt<Variant>")," - Runs detekt with type resolution on the specific build variant"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"detektBaseline<Variant>")," - Creates a detekt baselines starting from a run of Detekt with type resolution enabled on the specific build variant.")),(0,o.kt)("p",null,"Alternatively, you can create a ",(0,o.kt)("strong",{parentName:"p"},"custom detekt task"),", making sure to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"classpath")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jvmTarget")," properties correctly.\nDoing this on Android is more complicated due to build types/flavors (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/issues/2259"},"#2259")," for further context).\nTherefore, we recommend using the ",(0,o.kt)("inlineCode",{parentName:"p"},"detekt<Variant>")," tasks offered by the Gradle plugins."),(0,o.kt)("p",null,"In case of build related issues, you may try ",(0,o.kt)("inlineCode",{parentName:"p"},"detekt.android.disabled=true")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties")," to prevent detekt\nGradle plugins from configuring Android-specific gradle tasks."),(0,o.kt)("h2",{id:"enabling-on-detekt-cli"},"Enabling on Detekt CLI"),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("a",{parentName:"p",href:"/docs/gettingstarted/cli"},"Detekt via CLI"),", type resolution will be enabled only if you provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"--classpath")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"--jvm-target")," flags. See the list of ",(0,o.kt)("a",{parentName:"p",href:"/docs/gettingstarted/cli#use-the-cli"},"CLI options")," for details."),(0,o.kt)("h2",{id:"writing-a-rule-that-uses-type-resolution"},"Writing a rule that uses type resolution"),(0,o.kt)("p",null,"If you're ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/extensions"},"writing a custom rule")," or if you're willing to write a rule to contribute to Detekt, you might want to leverage type resolution."),(0,o.kt)("p",null,"Rules that are using type resolution, access the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JetBrains/kotlin/blob/master/compiler/frontend/src/org/jetbrains/kotlin/resolve/BindingContext.java"},"bindingContext")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseRule")," class (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/blob/cd659ce8737fb177caf140f46f73a1a86b22be56/detekt-api/src/main/kotlin/io/gitlab/arturbosch/detekt/api/internal/BaseRule.kt#L30"},"source"),")."),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindingContext")," is initialized as ",(0,o.kt)("inlineCode",{parentName:"p"},"BindingContext.EMPTY"),". This is the ",(0,o.kt)("strong",{parentName:"p"},"default value")," that the rule receives if type resolution is ",(0,o.kt)("strong",{parentName:"p"},"not enabled"),"."),(0,o.kt)("p",null,"Therefore, is generally advised to annotate your ",(0,o.kt)("inlineCode",{parentName:"p"},"Rule")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"@RequiresTypeResolution")," to ensure that your rule doesn't run if you don't have a proper ",(0,o.kt)("inlineCode",{parentName:"p"},"BindingContext"),"."),(0,o.kt)("p",null,"If your rule is annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@RequiresTypeResolution")," you are free to use it to resolve types and get access to all the information needed for your rules. As a rule of thumb, we recommend to get inspiration from other rules on how they're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindingContext"),"."),(0,o.kt)("h2",{id:"testing-a-rule-that-uses-type-resolution"},"Testing a rule that uses type resolution"),(0,o.kt)("p",null,"To test a rule that uses type resolution, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/blob/d3546ff0d539d57e7a502dacbf66e91587fff098/detekt-test/src/main/kotlin/io/gitlab/arturbosch/detekt/test/RuleExtensions.kt#L40-L44"},(0,o.kt)("inlineCode",{parentName:"a"},"lintWithContext"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/blob/cd659ce8737fb177caf140f46f73a1a86b22be56/detekt-test/src/main/kotlin/io/gitlab/arturbosch/detekt/test/RuleExtensions.kt#L63-L72"},(0,o.kt)("inlineCode",{parentName:"a"},"compileAndLintWithContext"))," extension functions."),(0,o.kt)("p",null,"If you're using JUnit 5 for testing, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@KotlinCoreEnvironmentTest")," annotation on your test class, and\naccept a parameter of type ",(0,o.kt)("inlineCode",{parentName:"p"},"KotlinCoreEnvironment")," in the class constructor. You can then access the environment by\nreferencing the parameter specified in the constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KotlinCoreEnvironmentTest\nclass MyRuleTest(private val env: KotlinCoreEnvironment) {\n    @Test\n    fun `reports cast that cannot succeed`() {\n        val code = """/* The code you want to test */"""\n        assertThat(MyRuleTest().compileAndLintWithContext(env, code)).hasSize(1)\n    }\n}\n')),(0,o.kt)("p",null,"If you're using another testing framework (e.g. JUnit 4), you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/blob/cd659ce8737fb177caf140f46f73a1a86b22be56/detekt-test-utils/src/main/kotlin/io/github/detekt/test/utils/KotlinCoreEnvironmentWrapper.kt#L26-L31"},(0,o.kt)("inlineCode",{parentName:"a"},"createEnvironment()"))," method from ",(0,o.kt)("inlineCode",{parentName:"p"},"detekt-test-utils"),"."))}k.isMDXComponent=!0}}]);