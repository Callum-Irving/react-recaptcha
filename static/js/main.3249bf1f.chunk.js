(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(36),i=a.n(c),o=a(13),r=a(14),l=a(16),u=a(15),h=(a(44),a(39)),j=a(0);var d,m=function(e){return Object(j.jsx)("div",{className:"fill-screen",style:e.enabled?{opacity:100}:{opacity:0},children:Object(j.jsxs)("div",{className:"container-box",children:[Object(j.jsx)("h1",{className:"welcome-message",children:"Welcome to Chat App!"}),Object(j.jsx)("p",{children:"Please check this captcha to gain access to the site"}),Object(j.jsx)(h.a,{sitekey:"6LcAHXkaAAAAAGZ9FezjX8KLWSBiD5-fZHPqqQJe",onChange:e.captchaUpdate}),Object(j.jsx)("button",{onClick:e.captchaUpdate,children:"Press"})]})})},b=a(38),v=a.n(b),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState({messageValue:e.target.value})},s.sendMessage=function(e){e.preventDefault(),d.emit("send-chat-message",{message:s.state.messageValue}),s.setState((function(e){return{messages:e.messages.concat(s.state.messageValue),messageValue:""}}))},s.state={messages:[],messageValue:""},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;(d=v()("https://react-recaptcha-123.herokuapp.com/")).on("chat-message",(function(t){e.setState((function(e){return{messages:e.messages.concat(t.message)}}))}))}},{key:"componentWillUnmount",value:function(){d.disconnect()}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"This is the chat window!"}),Object(j.jsx)("div",{id:"messages",children:this.state.messages.map((function(e,t){return Object(j.jsx)("p",{children:e},t)}))}),Object(j.jsx)("form",{onSubmit:this.sendMessage,children:Object(j.jsxs)("label",{children:["Message:",Object(j.jsx)("input",{type:"text",name:"messageBox",onChange:this.handleChange,value:this.state.messageValue}),Object(j.jsx)("input",{type:"submit",value:"Send"})]})})]})}}]),a}(n.a.Component);var O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).captchaUpdate=function(e){s.overlayOff()},s.state={overlay:{overlay:!0,content:!1,overlayEnabled:!0}},s}return Object(r.a)(a,[{key:"overlayOff",value:function(){var e,t=this;this.setState({overlay:{overlay:!0,content:!0,overlayEnabled:!1}}),(e=1e3,new Promise((function(t){return setTimeout(t,e)}))).then((function(){t.setState({overlay:{overlay:!1,content:!0}})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[this.state.overlay.overlay&&Object(j.jsx)(m,{enabled:this.state.overlay.overlayEnabled,captchaUpdate:this.captchaUpdate}),this.state.overlay.content&&Object(j.jsx)("div",{className:"content",children:Object(j.jsx)(p,{})})]})}}]),a}(n.a.Component);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.3249bf1f.chunk.js.map