(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{62:function(e,a,t){e.exports=t(90)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(25),r=t.n(l),o=(t(67),t(12)),s=(t(68),t(104)),i=t(102),m=(t(69),t(36)),u=t.n(m),d=t(35),p=t.n(d),E=t(50),v=t.n(E),h=t(51),f=t.n(h),b=t(53),_=t.n(b),g=t(52),w=t.n(g),N=t(5),S=t(22),O=t.n(S),j=O.a.initializeApp({apiKey:"AIzaSyDm-dC_JopkmxGEEHpTT0bghC9YHWRR7Sw",authDomain:"whatsapp-clone-d770f.firebaseapp.com",databaseURL:"https://whatsapp-clone-d770f.firebaseio.com",projectId:"whatsapp-clone-d770f",storageBucket:"whatsapp-clone-d770f.appspot.com",messagingSenderId:"945467437377",appId:"1:945467437377:web:20cd479be46fd704e5f1c0",measurementId:"G-T7ZMX29SC4"}).firestore(),y=O.a.auth(),C=new O.a.auth.GoogleAuthProvider,k=j,R=Object(n.createContext)(),x=function(e){var a=e.reducer,t=e.initalState,l=e.children;return c.a.createElement(R.Provider,{value:Object(n.useReducer)(a,t)},l)},T=function(){return Object(n.useContext)(R)};var I=function(){var e,a,t=Object(n.useState)(""),l=Object(o.a)(t,2),r=l[0],m=l[1],d=Object(N.f)().roomid,E=Object(n.useState)(""),h=Object(o.a)(E,2),b=h[0],g=h[1],S=Object(n.useState)([]),j=Object(o.a)(S,2),y=j[0],C=j[1],R=T(),x=Object(o.a)(R,1)[0].user;return Object(n.useEffect)((function(){d&&(k.collection("rooms").doc(d).onSnapshot((function(e){return g(e.data().name)})),k.collection("rooms").doc(d).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return C(e.docs.map((function(e){return e.data()})))})))}),[d]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(d,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,b),(null===y||void 0===y?void 0:y.length)>0?c.a.createElement("p",null,"last seen at...",new Date(null===(e=y[y.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()):""),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(i.a,null,c.a.createElement(p.a,null)),c.a.createElement(i.a,null,c.a.createElement(v.a,null)),c.a.createElement(i.a,null,c.a.createElement(u.a,null)))),c.a.createElement("div",{className:"chat__body"},null===y||void 0===y?void 0:y.map((function(e){var a;return c.a.createElement("p",{className:"chat__message ".concat(e.name===x.displayName&&"chat__reciever")},c.a.createElement("span",{className:"chat__name"},e.name),c.a.createElement("div",{className:"chat__messageInfo"},c.a.createElement("p",null,e.message),c.a.createElement("span",{className:"chat__timestamp"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(f.a,null),c.a.createElement("form",{action:"post",onSubmit:function(e){e.preventDefault(),r.replaceAll(" ","")&&(k.collection("rooms").doc(d).collection("messages").add({message:r,name:x.displayName,timestamp:O.a.firestore.FieldValue.serverTimestamp()}),m(""))}},c.a.createElement("input",{type:"text",value:r,onChange:function(e){return m(e.target.value)}}),c.a.createElement("button",{type:"submit"},r.replaceAll(" ","")?c.a.createElement(w.a,null):c.a.createElement(_.a,null)))))},A=(t(85),t(54)),D=t.n(A),U=t(55),B=t.n(U),W=t(28);t(86);var G=function(e){var a,t=e.addNewChat,l=e.id,r=e.name,i=Object(n.useState)([]),m=Object(o.a)(i,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){l&&k.collection("rooms").doc(l).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return e.data()})))}))}),[l]),t?c.a.createElement("div",{className:"sidebarChat",onClick:function(){var e=window.prompt("Please enter name for yor room");(null===e||void 0===e?void 0:e.replaceAll(" ",""))&&k.collection("rooms").add({name:e})}},c.a.createElement("h2",null,"Add new Chat")):c.a.createElement(W.b,{to:"/rooms/".concat(l)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h3",null,r),c.a.createElement("p",null,null===(a=u[0])||void 0===a?void 0:a.message))))},P=t(56),J=t.n(P);var L=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1],r=T(),m=Object(o.a)(r,1)[0].user;return Object(n.useEffect)((function(){var e=k.collection("rooms").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,{src:null===m||void 0===m?void 0:m.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(i.a,null,c.a.createElement(D.a,null)),c.a.createElement(i.a,null,c.a.createElement(B.a,null)),c.a.createElement(i.a,null,c.a.createElement(u.a,null)),c.a.createElement("button",{onClick:function(e){return y.signOut()},title:"LogOut",className:"sidebar__logout"},c.a.createElement(J.a,null)," "))),c.a.createElement("div",{className:"sidebarSearch__container"},c.a.createElement("div",{className:"sidebar__search"},c.a.createElement(p.a,null),c.a.createElement("input",{type:"text",placeholder:"Search or start new Chat"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(G,{addNewChat:!0}),null===t||void 0===t?void 0:t.map((function(e){return c.a.createElement(G,{key:e.id,id:e.id,name:e.data.name})}))))},M=t(40),z=t.n(M),H=t(57),V=(t(88),t(103));var F=function(){var e=T(),a=Object(o.a)(e,2)[1],t=function(){var e=Object(H.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.signInWithPopup(C);case 3:t=e.sent,a({type:"SET_USER",user:t.user}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/124/124034.png",alt:"whatsapp"}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h2",null,"Sign in to whatsapp")),c.a.createElement(V.a,{onClick:t},"Sign in With Google")))};t(89);var K=function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){e.current.play()}),[]),c.a.createElement("div",{className:"welcome"},c.a.createElement("div",{className:"welcome__container"},c.a.createElement("h2",{className:"welcome__info"},"Welcome To Decentralised Messaging dapp...."),c.a.createElement("video",{className:"welcome__video",loop:!0,ref:e,src:"https://cdn.videvo.net/videvo_files/video/free/2013-09/small_watermarked/RedBloodCellsVidevo_preview.webm"})))};var X=function(){var e=T(),a=Object(o.a)(e,2),t=a[0].user,l=a[1];return Object(n.useEffect)((function(){O.a.auth().onAuthStateChanged((function(e){e?(console.log(e),l({type:"SET_USER",user:e})):l({type:"SET_USER",user:null})}))}),[]),c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__body"},c.a.createElement(W.a,null,c.a.createElement(L,null),c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/",exact:!0},c.a.createElement(K,null)),c.a.createElement(N.a,{path:"/rooms/:roomid"},c.a.createElement(I,null))))):c.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=t(41),Z=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(Y.a)(Object(Y.a)({},e),{},{user:a.user});default:return e}};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,{initalState:{user:null},reducer:Z},c.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.9c4a4bc2.chunk.js.map