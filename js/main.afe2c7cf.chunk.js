(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,a){e.exports={wrapper:"CallWating_wrapper__3E62E"}},112:function(e,t,a){e.exports={wrapper:"CallOther_wrapper__1YZVE"}},123:function(e,t,a){},163:function(e,t){},165:function(e,t){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),s=(a(123),a(113)),i=a(7),o=a(3);var u=function(){return Object(o.jsx)("div",{})},d=a(202),j=a(107),b=a.n(j),m=a(67),x=a.n(m),f=a(105),O=a.n(f),p=a(108),g=a.n(p),v=a(25),h=a(104),y=a(76),w=a.n(y),N=Object(n.createContext)(),C=window.location.origin;var k=Object(h.io)(C),T=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(v.a)(a,2),r=c[0],l=c[1],s=Object(n.useState)(!1),i=Object(v.a)(s,2),u=i[0],d=i[1],j=Object(n.useState)(),b=Object(v.a)(j,2),m=b[0],x=b[1],f=Object(n.useState)(""),O=Object(v.a)(f,2),p=O[0],g=O[1],h=Object(n.useState)({}),y=Object(v.a)(h,2),C=y[0],T=y[1],z=Object(n.useState)(""),S=Object(v.a)(z,2),_=S[0],V=S[1],B=Object(n.useState)(!1),E=Object(v.a)(B,2),I=E[0],A=E[1],D=Object(n.useState)(!1),P=Object(v.a)(D,2),U=P[0],R=P[1],q=Object(n.useRef)(),F=Object(n.useRef)(),W=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){x(e),q.current.srcObject=e})),k.on("me",(function(e){return V(e)})),k.on("callUser",(function(e){var t=e.from,a=e.name,n=e.signal;T({isReceivingCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(o.jsx)(N.Provider,{value:{call:C,camera:I,mute:U,callAccepted:r,myVideo:q,userVideo:F,stream:m,name:p,setName:g,callEnded:u,me:_,callUser:function(e){var t=new w.a({initiator:!0,trickle:!1,stream:m});t.on("signal",(function(t){k.emit("callUser",{userToCall:e,signalData:t,from:_,name:p})})),t.on("stream",(function(e){F.current.srcObject=e})),k.on("callAccepted",(function(e){l(!0),t.signal(e)})),W.current=t},leaveCall:function(){d(!0),W.current.destroy(),window.location.reload()},answerCall:function(){l(!0);var e=new w.a({initiator:!1,trickle:!1,stream:m});e.on("signal",(function(e){k.emit("answerCall",{signal:e,to:C.from})})),e.on("stream",(function(e){F.current.srcObject=e})),e.signal(C.signal),W.current=e},muteUnmute:function(){m.getAudioTracks()[0].enabled?(m.getAudioTracks()[0].enabled=!1,R(!0)):(R(!1),m.getAudioTracks()[0].enabled=!0)},playStop:function(){m.getVideoTracks()[0].enabled?(m.getVideoTracks()[0].enabled=!1,A(!0)):(A(!1),m.getVideoTracks()[0].enabled=!0)}},children:t})},z=a(106),S=a.n(z),_=a(109),V=a.n(_);var B=function(){var e=Object(n.useContext)(N),t=e.playStop,a=e.leaveCall,c=e.camera,r=e.mute,l=e.muteUnmute;return Object(o.jsxs)("div",{className:"z-50 fixed bottom-3 space-x-6 w-full left-0 p-8 flex items-center justify-center",children:[Object(o.jsx)(d.a,{className:x.a.btn,onClick:t,children:c?Object(o.jsx)(S.a,{color:"secondary"}):Object(o.jsx)(O.a,{})}),Object(o.jsx)(d.a,{color:"secondary",className:x.a.endBtn,onClick:a,children:Object(o.jsx)(b.a,{})}),Object(o.jsx)(d.a,{className:x.a.btn,onClick:l,children:r?Object(o.jsx)(V.a,{color:"secondary"}):Object(o.jsx)(g.a,{})})]})},E=a(110),I=a.n(E),A=a(66),D=Object(o.jsx)("div",{className:"flex",children:Object(o.jsx)("p",{className:"text-gray-300",children:"ID copied to clipboard"})});var P=function(e){var t=e.id,a=void 0===t?"mag-mzqb-zgz":t,n=Object(A.useToasts)().addToast;return Object(o.jsxs)("div",{className:"absolute z-50 top-0 flex p-6 items-center rounded-xl left-0",children:[Object(o.jsx)("p",{className:"text-gray-400 font-semibold",children:a}),Object(o.jsx)(I.a,{onClick:function(){navigator.clipboard.writeText(a),n(D,{appearance:"info",autoDismiss:!0})},className:"text-gray-600 ml-4 cursor-pointer"})]})},U=a(111),R=a.n(U),q=a(201);var F=function(){var e=Object(n.useContext)(N),t=e.call,a=e.answerCall;return Object(n.useEffect)((function(){}),[]),Object(o.jsx)(q.a.div,{initial:{y:"-100vh"},animate:{y:"20vh",x:0},transition:{duration:.5},className:"absolute z-40 top-1/2 md:top-48 w-full flex justify-center left-0"+R.a.wrapper,children:Object(o.jsxs)("div",{className:"flex p-6 items-center rounded-xl bg-gray-900",children:[Object(o.jsx)("audio",{src:"/ring.mp3",autoPlay:!0,loop:!0}),Object(o.jsxs)("p",{className:"text-gray-400 w-48",children:[Object(o.jsx)("span",{className:"font-semibold",children:null===t||void 0===t?void 0:t.name})," is calling you!"]}),Object(o.jsx)("button",{onClick:a,className:"text-gray-300 px-5 cursor-pointer rounded-lg ml-4 bg-gray-800 py-2",children:"Answer"})]})})},W=a(112),Y=a.n(W),G=a(203);var J=function(){var e=Object(n.useContext)(N),t=e.name,a=e.setName,c=e.callUser,r=Object(n.useState)(""),l=Object(v.a)(r,2),s=l[0],i=l[1];return Object(o.jsx)(G.a,{children:Object(o.jsx)(q.a.div,{initial:{y:"-100vh"},animate:{y:"20vh",x:0},transition:{duration:.5},onSubmit:function(e){e.preventDefault()},className:"absolute w-full flex items-center justify-center z-40 top-5 "+Y.a.wrapper,children:Object(o.jsxs)("form",{className:"flex items-center p-6 rounded-xl bg-gray-900",children:[Object(o.jsxs)("div",{className:"flex-grow",children:[Object(o.jsx)("input",{value:t,onChange:function(e){return a(e.target.value)},type:"text",className:"text-white md:w-80 my-2 mr-2 w-full outline-none bg-gray-800 rounded-xl px-3 py-2",placeholder:"Your name",required:!0}),Object(o.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},type:"text",className:"text-white my-2 mr-2 md:w-80 w-full outline-none bg-gray-800 rounded-xl px-3 py-2",placeholder:"Give the ID you want to call",required:!0})]}),Object(o.jsx)("button",{type:"submit",className:"text-gray-300 block mx-auto px-5 cursor-pointer rounded-lg ml-1 bg-gray-800 py-2",onClick:function(){return c(s)},children:"Call"})]})})})},L=a(77),M=a.n(L),K=function(e){e._;var t=e.children;return Object(o.jsx)("div",{className:"bg-gray-800 w-64 p-4 rounded-lg",children:t})};var Z=function(){var e,t,a,c,r=Object(n.useContext)(N),l=r.me,s=r.name,i=r.callAccepted,u=r.myVideo,d=r.userVideo,j=r.callEnded,b=r.stream,m=r.call;return Object(o.jsx)(A.ToastProvider,{components:{Toast:K},children:Object(o.jsxs)("div",{className:"bg-black w-full h-screen relative",controls:!1,children:[Object(o.jsx)(P,{id:l}),!i&&m.isReceivingCall&&Object(o.jsx)(F,{}),!i&&Object(o.jsx)(J,{}),Object(o.jsxs)("div",{className:"flex relative z-10 flex-col w-full mx-auto max-w-full md:flex-row h-screen",children:[i&&!j&&Object(o.jsxs)("div",{className:"videoWrapper self-center flex-grow m-3 bg-gray-900 rounded-lg relative",children:[Object(o.jsx)("video",{playsInline:!0,autoPlay:!0,className:"border-2 object-cover relative z-20 border-gray-600 w-full h-full rounded-lg",ref:d}),!(null===(e=d.current)||void 0===e||null===(t=e.srcObject)||void 0===t?void 0:t.getVideoTracks()[0].enabled)&&d.current&&Object(o.jsx)(M.a,{className:"text-white absolute z-40 top-1/2 left-1/2 avaterIcon"}),Object(o.jsx)("p",{className:"absolute z-30 bottom-2 left-4 font-semibold text-white capitalize",children:m.name||"Other"})]}),Object(o.jsxs)("div",{className:"videoWrapper flex-grow m-3 self-center bg-gray-900 rounded-lg relative",children:[b&&Object(o.jsx)("video",{playsInline:!0,muted:!0,autoPlay:!0,className:"border-2 object-cover relative z-20 border-gray-600 w-full h-full rounded-lg",ref:u}),!(null===(a=u.current)||void 0===a||null===(c=a.srcObject)||void 0===c?void 0:c.getVideoTracks()[0].enabled)&&u.current&&Object(o.jsx)(M.a,{className:"text-white absolute z-40 top-1/2 left-1/2 avaterIcon"}),Object(o.jsx)("p",{className:"absolute z-30 bottom-2 left-4 font-semibold text-white capitalize",children:s||"You"})]})]}),Object(o.jsx)(B,{})]})})};var H=function(){return Object(o.jsx)("div",{className:"bg-gray-100 h-screen w-full flex items-center justify-center",children:Object(o.jsxs)("div",{className:"bg-white p-10 rounded-xl text-center mx-5 max-w-lg w-full",children:[Object(o.jsx)("h1",{className:"text-3xl font-bold mb-2 ",children:"Welcome, KS Calling"}),Object(o.jsx)("p",{className:"",children:"Talk with friends"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{placeholder:"Your name",required:!0,type:"text",className:"w-full p-3 my-3 border-2 mt-5 focus:border-indigo-400 border-gray-400 outline-none rounded-lg"}),Object(o.jsx)("button",{type:"submit",className:"rounded-lg py-3 px-7 bg-indigo-600 text-white block mx-auto",children:"Start call"})]})]})})};var Q=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsx)(Z,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/callend",children:Object(o.jsx)(u,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/welcome",children:Object(o.jsx)(H,{})})]})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,204)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(T,{children:Object(o.jsx)(Q,{})})}),document.getElementById("root")),X()},67:function(e,t,a){e.exports={endBtn:"BottomBar_endBtn__1Gmnl",btn:"BottomBar_btn__30ssx"}}},[[186,1,2]]]);
//# sourceMappingURL=main.afe2c7cf.chunk.js.map