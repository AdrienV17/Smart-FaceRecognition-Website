(this.webpackJsonpsmartfacerecognition=this.webpackJsonpsmartfacerecognition||[]).push([[0],{328:function(e,t,n){},329:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){},333:function(e,t,n){"use strict";n.r(t);var a=n(8),s=n(46),i=n.n(s),o=(n(85),n(20)),r=n(21),c=n(23),l=n(22),d=n(79),h=n.n(d),u=n(2),b=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(u.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(u.jsx)("p",{onClick:function(){return t("SignOut")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(u.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(u.jsx)("p",{onClick:function(){return t("SignIn")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(u.jsx)("p",{onClick:function(){return t("Register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},m="https://adrien-facerecognition.herokuapp.com",p=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("".concat(m,"/signin"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(u.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(u.jsx)("div",{className:"lh-copy mt3",children:Object(u.jsx)("p",{onClick:function(){return e("Register")},href:"#0",className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(a.Component),g=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onNameChange=function(e){a.setState({name:e.target.value})},a.onSubmitSignIn=function(){fetch("".concat(m,"/register"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Submit"})})]})})})}}]),n}(a.Component),j=n(80),f=n.n(j),w=(n(328),function(){return Object(u.jsx)("div",{className:"ml4 mt10",children:Object(u.jsx)(f.a,{className:"Tilt br2 shadow-2  ",options:{max:55},style:{height:150,width:150},children:Object(u.jsxs)("div",{className:"Tilt-inner pa3",children:[" ",Object(u.jsx)("img",{style:{paddingTop:"5px",width:"100px"},src:"data:image/png;base64,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",alt:"Brain"})," "]})})})}),x=function(e){var t=e.name,n=e.entries;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"white f3",children:"".concat(t,", your current entry count is...")}),Object(u.jsx)("div",{className:"white f1",children:n})]})},O=(n(329),function(e){var t=e.onInputChange,n=e.onSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Give it a try"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(u.jsx)("input",{type:"text",className:"url f4 pa2 w-70 center",onChange:t}),Object(u.jsx)("button",{className:"url br2 w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),v=(n(330),function(e){var t=e.imageUrl,n=e.box;return Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"absolute mt2",children:[Object(u.jsx)("img",{id:"inputimage",src:t,alt:"",width:"500px",height:"auto"}),Object(u.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),N=(n(331),{particles:{number:{value:75,density:{enable:!0,value_area:800}}}}),y={input:"",imageUrl:"",box:{},route:"SignIn",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},C=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onRouteChange=function(t){"SignOut"===t?e.setState(y):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.onSubmit=function(){e.setState({imageUrl:e.state.input}),""!==e.state.input?fetch("".concat(m,"/imageurl"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("".concat(m,"/image"),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch(console.log):alert("please give me a photo before Submiting")},e.state=y,e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.box;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(h.a,{className:"particles",params:N}),Object(u.jsx)(b,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(u.jsxs)("div",{children:[Object(u.jsx)(w,{}),Object(u.jsx)(x,{name:this.state.user.name,entries:this.state.user.entries}),Object(u.jsx)(O,{onInputChange:this.onInputChange,onSubmit:this.onSubmit}),Object(u.jsx)(v,{box:s,imageUrl:n})," "]}):"SignIn"===a?Object(u.jsx)(p,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):Object(u.jsx)(g,{onRouteChange:this.onRouteChange,loadUser:this.loadUser})]})}}]),n}(a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(332);i.a.render(Object(u.jsx)(C,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/smart-facerecognition-website",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/smart-facerecognition-website","/service-worker.js");A?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):S(e)}))}}()},85:function(e,t,n){}},[[333,1,2]]]);
//# sourceMappingURL=main.569b1e01.chunk.js.map