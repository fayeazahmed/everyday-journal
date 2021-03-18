(this["webpackJsonpeveryday-journal"]=this["webpackJsonpeveryday-journal"]||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a.n(n),r=a(12),s=a.n(r),i=(a(71),a(6)),c=a(2),l=(a(73),a(63)),u=a.n(l).a.create({baseURL:"https://everydayjournal.herokuapp.com"}),d=function(e){e?u.defaults.headers.common.Authorization="Bearer "+e:delete u.defaults.headers.common.Authorization},j=u,h=function(e){var t=e.dateString,a=e.user,o=Object(n.useState)(null),r=o[0],s=o[1],l=Object(n.useState)(""),u=l[0],d=l[1],h=Object(n.useState)(!1),b=h[0],f=h[1],v=Object(n.useRef)(!0);return Object(n.useEffect)((function(){v.current=!1}),[]),Object(n.useEffect)((function(){if(f(!0),setTimeout((function(){return f(!1)}),3e3),""!==t)if(a)localStorage.removeItem("sessionId"),j.get("/journal/"+(null===a||void 0===a?void 0:a.id)+"/"+t).then((function(e){s(e.data),d(e.data.text)})).catch((function(e){return console.log(e.response)}));else{var e=localStorage.getItem("sessionId");j.post("/journal/temp/"+e+"/"+t,{journalText:u,changingPage:!0}).then((function(e){console.log(e.data),s(e.data),d(e.data.text)})).catch((function(e){return console.log(e.response)}))}}),[t]),Object(n.useEffect)((function(){v.current||(a?j.post("/journal/"+(null===a||void 0===a?void 0:a.id)+"/"+(null===r||void 0===r?void 0:r.date),{journalText:u}).then((function(){})).catch((function(e){return console.log(e.response)})):j.post("/journal/temp/"+localStorage.getItem("sessionId")+"/"+(null===r||void 0===r?void 0:r.date),{journalText:u,changingPage:!1}).then((function(e){return s(e.data)})).catch((function(e){return console.log(e.response)})))}),[u]),Object(n.useEffect)((function(){a&&(localStorage.removeItem("sessionId"),j.get("/journal/"+(null===a||void 0===a?void 0:a.id)+"/"+t).then((function(e){s(e.data),console.log(e.data),d(e.data.text)})).catch((function(e){return console.log(e.response)})))}),[a]),Object(c.jsx)("div",Object(i.a)({className:"container journal "+(b?"changePageAnimation":"")},{children:Object(c.jsx)("textarea",{value:u,onChange:function(e){return d(e.target.value)}},void 0)}),void 0)},b=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return Object(c.jsxs)("footer",Object(i.a)({className:t?"footer-open":""},{children:[Object(c.jsx)("button",Object(i.a)({onClick:function(){return a(!t)},className:"btn btn-info"},{children:Object(c.jsx)("i",{className:"fa fa-info-circle fa-2x","aria-hidden":"true"},void 0)}),void 0),Object(c.jsx)("div",{children:"Hey, this is Ahmed. It's a classic diary like journal made as a full stack project. You pick any date from the calendar and start writing whatever you want. So basically an account keeps the jounral text stored for its respective date. After selecting a date, it creates entry in the database for that user and date, and if there's already a row in db for that speicific user at the same date, it retrieves it, so you can read or update. It's no ground breaking app, but after doing some full stack web with express/django, I wanted to get something up and running using asp.net asap to get myself comfortable with .NET. So I thought this would be cool, because I myself write jounral everyday (on a diary in real life), so having a UI like that which can serve the same purpose felt the right project to build. So journals get stored in journal table with the date and userId. And if you are not logged in, then a random session id is generated and kept in local storage for reference, to keep the texts you write stored temporarily in another table . Then after authenticating, if there is data in the temporary table for that sessionId, then the respective rows are generated in the journal table for that user, and delete from temporary table. Used jwt for authentication. ASP .NET core 5 on back-end, React on front-end. Tried to host in heroku using docker for a WHOLE day. One after another crash was resulting. So I just used the connection string of that postgres database provided by heroku, hosted it somewhere else (somee.com) for free, and kept the client in github-pages."},void 0)]}),void 0)},f=a(64),v=a.n(f),m=(a(92),function(e){var t=e.setDateString,a=e.modalOn,o=Object(n.useState)(new Date),r=o[0],s=o[1],l=Object(n.useState)(!1),u=l[0],d=l[1];return Object(c.jsxs)("nav",Object(i.a)({className:"container "+(u?"changePageAnimation":"")},{children:[Object(c.jsx)("p",Object(i.a)({className:"dayContainer"},{children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][r.getDay()]}),void 0),Object(c.jsx)("p",Object(i.a)({className:"year"},{children:r.getFullYear()}),void 0),!a&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",Object(i.a)({className:"calendar"},{children:[Object(c.jsx)("p",Object(i.a)({className:"calendar__date"},{children:r.getDate()}),void 0),Object(c.jsx)("p",Object(i.a)({className:"calendar__month"},{children:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][r.getMonth()]}),void 0)]}),void 0),Object(c.jsx)(v.a,{wrapperClassName:"datePickerInput",dateFormat:"dd/MM/yyyy",minDate:new Date(2021,0,1),maxDate:new Date(2021,11,31),onChange:function(e){s(e);var a=null===e||void 0===e?void 0:e.valueOf(),n=new Date(a);d(!0),setTimeout((function(){return d(!1)}),3e3),t(p(n))},selected:r,value:""},void 0)]},void 0)]}),void 0)}),g=a(181);var O=function(){var e=Object(n.useState)(""),t=e[0],a=e[1],o=Object(n.useState)(null),r=o[0],s=o[1],l=Object(n.useState)(""),u=l[0],f=l[1],v=Object(n.useState)(""),O=v[0],x=v[1],y=Object(n.useState)(!1),I=y[0],S=y[1],k=Object(n.useState)(!0),w=k[0],N=k[1],T=Object(n.useState)(""),E=T[0],A=T[1];return Object(n.useEffect)((function(){var e=new Date;a(p(e));var t=localStorage.getItem("journalToken");if(t&&(d(t),j.get("user/authenticate").then((function(e){return s(e.data)})).catch((function(){d(null),localStorage.removeItem("journalToken")}))),!r){var n=Object(g.a)();!localStorage.getItem("sessionId")&&localStorage.setItem("sessionId",n)}}),[]),Object(c.jsxs)("div",Object(i.a)({className:"App"},{children:[Object(c.jsxs)("div",Object(i.a)({className:"App__header container"},{children:[Object(c.jsx)("header",{children:"Everyday Journal"},void 0),Object(c.jsx)("button",Object(i.a)({onClick:function(){return S(!I)},className:"btn btn-info userbtn"},{children:Object(c.jsx)("i",{className:"fa fa-"+(r?"user":"info"),"aria-hidden":"true"},void 0)}),void 0),I&&Object(c.jsxs)("div",Object(i.a)({className:"App__user"},{children:[Object(c.jsx)("i",{onClick:function(){return S(!1)},className:"fa fa-times-circle-o fa-2x float-end","aria-hidden":"true"},void 0),r?Object(c.jsxs)("div",Object(i.a)({className:"userprofile"},{children:[Object(c.jsxs)("p",Object(i.a)({className:"userprofile__name"},{children:["Hey @",r.username]}),void 0),Object(c.jsx)("p",{children:"Welcome to Everyday Journal"},void 0),Object(c.jsxs)("button",Object(i.a)({onClick:function(){j.get("user/logout").then((function(e){A(e.data),setTimeout((function(){return A("")}),2500)})).catch((function(e){return console.log(e.response)})),s(null),d(null),localStorage.removeItem("journalToken"),localStorage.setItem("sessionId",Object(g.a)())},className:"btn btn-dark"},{children:["Sign out ",Object(c.jsx)("i",{className:"fa fa-sign-out","aria-hidden":"true"},void 0)]}),void 0)]}),void 0):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:"As you are not signed in, please log in or create an account just within 10 seconds to store your journals. Otherwise it'll only be temporarily available for this session only."},void 0),w?Object(c.jsxs)("h6",{children:["LOGIN or"," ",Object(c.jsx)("span",Object(i.a)({onClick:function(){return N(!1)},className:"text-primary"},{children:"REGISTER"}),void 0)]},void 0):Object(c.jsxs)("h6",{children:["REGISTER or"," ",Object(c.jsx)("span",Object(i.a)({onClick:function(){return N(!0)},className:"text-primary"},{children:"LOGIN"}),void 0)]},void 0),Object(c.jsxs)("form",Object(i.a)({onSubmit:function(e){e.preventDefault(),x(""),f(""),w?j.post("/user/login",{username:u,password:O,sessionId:localStorage.getItem("sessionId")}).then((function(e){d(e.data.token),localStorage.setItem("journalToken",e.data.token),s(e.data.user),localStorage.removeItem("sessionId"),S(!1)})).catch((function(e){var t,a;404===(null===(t=e.response)||void 0===t?void 0:t.status)||401===(null===(a=e.response)||void 0===a?void 0:a.status)?A("Wrong username or password"):A("Internal server error"),setTimeout((function(){return A("")}),2500)})):j.post("/user/register",{username:u,password:O,sessionId:localStorage.getItem("sessionId")}).then((function(e){d(e.data.token),localStorage.setItem("journalToken",e.data.token),s(e.data.user),localStorage.removeItem("sessionId"),S(!1)})).catch((function(e){var t,a;406===(null===(t=e.response)||void 0===t?void 0:t.status)?A("Password too small"):409===(null===(a=e.response)||void 0===a?void 0:a.status)?A("Username already exists"):A("Internal server error"),setTimeout((function(){return A("")}),2500)}))}},{children:[Object(c.jsx)("input",{placeholder:"@username",className:"form-control",value:u,onChange:function(e){return f(e.target.value)},type:"text"},void 0),Object(c.jsx)("input",{placeholder:"password",className:"form-control",value:O,onChange:function(e){return x(e.target.value)},type:"password"},void 0),Object(c.jsx)("button",Object(i.a)({className:"btn btn-primary btn-block"},{children:w?"Login":"Register"}),void 0),""!==E?Object(c.jsx)("p",Object(i.a)({className:"alert alert-info formResponse"},{children:E}),void 0):null]}),void 0)]},void 0)]}),void 0)]}),void 0),Object(c.jsxs)("div",Object(i.a)({onClick:function(){return S(!1)}},{children:[Object(c.jsx)(m,{modalOn:I,setDateString:a},void 0),Object(c.jsx)(h,{user:r,dateString:t},void 0)]}),void 0),Object(c.jsx)(b,{},void 0)]}),void 0)};function p(e){var t=e.getDate();t=t<10?"0"+t:t;var a=e.getMonth()+1;return t+"-"+(a=a<10?"0"+a:a)+"-"+e.getFullYear()}s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))},71:function(e,t,a){},73:function(e,t,a){}},[[178,1,2]]]);
//# sourceMappingURL=main.a5c65b88.chunk.js.map