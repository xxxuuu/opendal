"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[1011],{4217:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var t=s(1527),r=s(2175);function i(e){const n={code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A distributed file system that provides high-throughput access to application data."}),"\n",(0,t.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," copy"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," rename"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.del,{children:"scan"})]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.del,{children:"presign"})]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," blocking"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," append"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"differences-with-webhdfs",children:"Differences with webhdfs"}),"\n",(0,t.jsx)(n.p,{children:"[Webhdfs][crate::services::Webhdfs] is powered by hdfs's RESTful HTTP API."}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.p,{children:["HDFS support needs to enable feature ",(0,t.jsx)(n.code,{children:"services-hdfs"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"root"}),": Set the work dir for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name_node"}),": Set the name node for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kerberos_ticket_cache_path"}),": Set the kerberos ticket cache path for backend, this should be gotten by ",(0,t.jsx)(n.code,{children:"klist"})," after ",(0,t.jsx)(n.code,{children:"kinit"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"user"}),": Set the user for backend"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enable_append"}),": enable the append capacity. Default is false."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Refer to [",(0,t.jsx)(n.code,{children:"HdfsBuilder"}),"]'s public API docs for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"environment",children:"Environment"}),"\n",(0,t.jsx)(n.p,{children:"HDFS needs some environment set correctly."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"JAVA_HOME"}),": the path to java home, could be found via ",(0,t.jsx)(n.code,{children:"java -XshowSettings:properties -version"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"HADOOP_HOME"}),": the path to hadoop home, opendal relays on this env to discover hadoop jars and set ",(0,t.jsx)(n.code,{children:"CLASSPATH"})," automatically."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Most of the time, setting ",(0,t.jsx)(n.code,{children:"JAVA_HOME"})," and ",(0,t.jsx)(n.code,{children:"HADOOP_HOME"})," is enough. But there are some edge cases:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If meeting errors like the following:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"error while loading shared libraries: libjvm.so: cannot open shared object file: No such file or directory\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Java's lib are not including in pkg-config find path, please set ",(0,t.jsx)(n.code,{children:"LD_LIBRARY_PATH"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export LD_LIBRARY_PATH=${JAVA_HOME}/lib/server:${LD_LIBRARY_PATH}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The path of ",(0,t.jsx)(n.code,{children:"libjvm.so"})," could be different, please keep an eye on it."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If meeting errors like the following:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(unable to get stack trace for java.lang.NoClassDefFoundError exception: ExceptionUtils::getStackTrace error.)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CLASSPATH"})," is not set correctly or your hadoop installation is incorrect."]}),"\n",(0,t.jsxs)(n.p,{children:["To set ",(0,t.jsx)(n.code,{children:"CLASSPATH"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export CLASSPATH=$(find $HADOOP_HOME -iname \"*.jar\" | xargs echo | tr ' ' ':'):${CLASSPATH}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If HDFS has High Availability (HA) enabled with multiple available NameNodes, some configuration is required:"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Obtain the entire HDFS config folder (usually located at HADOOP_HOME/etc/hadoop)."}),"\n",(0,t.jsx)(n.li,{children:"Set the environment variable HADOOP_CONF_DIR to the path of this folder."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export HADOOP_CONF_DIR=<path of the config folder>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Append the HADOOP_CONF_DIR to the ",(0,t.jsx)(n.code,{children:"CLASSPATH"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export CLASSPATH=$HADOOP_CONF_DIR:$HADOOP_CLASSPATH:$CLASSPATH\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.code,{children:"cluster_name"})," specified in the ",(0,t.jsx)(n.code,{children:"core-site.xml"})," file (located in the HADOOP_CONF_DIR folder) to replace namenode:port."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ignore",children:'builder.name_node("hdfs://cluster_name");\n'})}),"\n",(0,t.jsx)(n.h3,{id:"macos-specific-note",children:"macOS Specific Note"}),"\n",(0,t.jsx)(n.p,{children:"If you encounter an issue during the build process on macOS with an error message similar to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ld: unknown file type in $HADOOP_HOME/lib/native/libhdfs.so.0.0.0\nclang: error: linker command failed with exit code 1 (use -v to see invocation)\n"})}),"\n",(0,t.jsx)(n.p,{children:"This error is likely due to the fact that the official Hadoop build includes the libhdfs.so file for the x86-64 architecture, which is not compatible with aarch64 architecture required for MacOS."}),"\n",(0,t.jsx)(n.p,{children:"To resolve this issue, you can add hdrs as a dependency in your Rust application's Cargo.toml file, and enable the vendored feature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[dependencies]\nhdrs = { version = "<version_number>", features = ["vendored"] }\n'})}),"\n",(0,t.jsx)(n.p,{children:"Enabling the vendored feature ensures that hdrs includes the necessary libhdfs.so library built for the correct architecture."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust,no_run",children:'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::Hdfs;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create fs backend builder.\n    let mut builder = Hdfs::default();\n    // Set the name node for hdfs.\n    // If the string starts with a protocol type such as file://, hdfs://, or gs://, this protocol type will be used.\n    builder.name_node("hdfs://127.0.0.1:9000");\n    // Set the root for hdfs, all operations will happen under this root.\n    //\n    // NOTE: the root must be absolute path.\n    builder.root("/tmp");\n    \n    // Enable the append capacity for hdfs. \n    // \n    // Note: HDFS run in non-distributed mode doesn\'t support append.\n    builder.enable_append(true);\n\n    // `Accessor` provides the low level APIs, we will use `Operator` normally.\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var l=s(5431),o=s(2860);const c={title:"HDFS"},d=void 0,h={id:"services/hdfs",title:"HDFS",description:"Hadoop Distributed File System (HDFS\u2122) support.",source:"@site/docs/services/hdfs.mdx",sourceDirName:"services",slug:"/services/hdfs",permalink:"/docs/services/hdfs",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/hdfs.mdx",tags:[],version:"current",lastUpdatedBy:"G-XD",lastUpdatedAt:1712758274,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{title:"HDFS"},sidebar:"docs",previous:{title:"Gridfs",permalink:"/docs/services/gridfs"},next:{title:"HTTP",permalink:"/docs/services/http"}},u={},p=[{value:"Via Config",id:"via-config",level:3}];function f(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://hadoop.apache.org/",children:"Hadoop Distributed File System (HDFS\u2122)"})," support."]}),"\n","\n",(0,t.jsx)(a,{components:e.components}),"\n",(0,t.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(o.Z,{value:"rust",label:"Rust",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  let mut map = HashMap::new();\n  map.insert("name_node".to_string(), "hdfs://127.0.0.1:9000".to_string());\n  map.insert("root".to_string(), "/tmp".to_string());\n\n  let op: Operator = Operator::via_map(Scheme::Hdfs, map)?;\n  Ok(())\n}\n'})})}),(0,t.jsx)(o.Z,{value:"node.js",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("hdfs", {\n    name_node: "hdfs://127.0.0.1:9000",\n    root: "/tmp",\n  });\n}\n'})})}),(0,t.jsx)(o.Z,{value:"python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("hdfs",\n    name_node="hdfs://127.0.0.1:9000",\n    root="/tmp",\n)\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},2860:(e,n,s)=>{s.d(n,{Z:()=>a});s(959);var t=s(6259);const r={tabItem:"tabItem_CbVR"};var i=s(1527);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,a),hidden:s,children:n})}},5431:(e,n,s)=>{s.d(n,{Z:()=>y});var t=s(959),r=s(6259),i=s(2990),a=s(8903),l=s(3133),o=s(563),c=s(351),d=s(3026);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=u(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,h]=f({queryString:s,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=s(3499);const b={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var j=s(1527);function g(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),r=l[s].value;r!==t&&(c(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,j.jsx)(k,{...e,children:h(e.children)},String(n))}},2175:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var t=s(959);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);