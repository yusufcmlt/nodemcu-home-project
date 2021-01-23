(this["webpackJsonpnodemcu-home-project"]=this["webpackJsonpnodemcu-home-project"]||[]).push([[0],{179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),s=a(63),i=a.n(s),o=a(30),r=a(6),l=a(4),d=(a(71),a(7)),j=a(20),u=(a(72),function(e){var t=e.children,a=e.selected,c=Object(j.a)(e,["children","selected"]);return Object(n.jsx)("button",Object(d.a)(Object(d.a)({className:"\n      ".concat(a?"selected-button":"","\n      sidebar-button\n      ")},c),{},{children:t}))}),b=a.p+"static/media/esp8266_nodemcu.35237f25.png",m=(a(73),Object(l.g)((function(e){var t=e.history,a=e.selectedButton;return Object(n.jsxs)("div",{className:"sidebar-container",children:[Object(n.jsxs)("div",{className:"sidebar-header",children:[Object(n.jsx)("img",{src:b,alt:"nodemcu",className:"nodemcu-image-sidebar"}),Object(n.jsx)("h1",{className:"nodemcu-title",children:"NodeMCU Aray\xfcz"})]}),Object(n.jsxs)("div",{className:"route-buttons-container",children:[Object(n.jsx)(u,{onClick:function(){t.push("/nodemcu-home-project/")},selected:!a,children:"Anasayfa"}),Object(n.jsx)(u,{onClick:function(){t.push("/nodemcu-home-project/kontroller")},selected:"kontroller"===a,children:"Kontroller"}),Object(n.jsx)(u,{onClick:function(){t.push("/nodemcu-home-project/grafikler")},selected:"grafikler"===a,children:"Grafikler"})]}),Object(n.jsx)("div",{className:"sidebar-links-container",children:Object(n.jsx)("a",{className:"github-link",href:"https://github.com/yusufcmlt/nodemcu-home-project",target:"_blank",rel:"noopener noreferrer",children:""})})]})}))),f=(a(81),function(){return Object(n.jsxs)("div",{className:"homepage-container",children:[Object(n.jsx)("h1",{className:"page-title",children:"NodeMCU Smart Home Prototype Web UI"}),Object(n.jsxs)("div",{className:"homepage-text",children:[Object(n.jsx)("h2",{children:"What is NodeMCU?"}),Object(n.jsx)("p",{children:"The NodeMCU (Node MicroController Unit) is an open-source software and hardware development environment built around an inexpensive System-on-a-Chip (SoC) called the ESP8266. The ESP8266, designed and manufactured by Espressif Systems, contains the crucial elements of a computer: CPU, RAM, networking (WiFi), and even a modern operating system and SDK. That makes it an excellent choice for the Internet of Things (IoT) projects of all kinds."}),Object(n.jsx)("h2",{children:"About This Project"}),Object(n.jsx)("p",{children:"In this project, we tried to control various devices, gather and visualize sensor informations using NodeMCU, React and Firebase. You can use menu to access relevant pages and Github logo for project's source."})]})]})}),h=a(15),O=a(32),p=(a(82),function(){var e=(new Date).toString();x.ref("/lastUsed").set({time:e})});O.a.initializeApp({apiKey:"AIzaSyB_-z0OZRP9yvI6di7hjMpIg31sggBdh_g",authDomain:"ev-otomasyon-f0c18.firebaseapp.com",databaseURL:"https://ev-otomasyon-f0c18.firebaseio.com",projectId:"ev-otomasyon-f0c18",storageBucket:"ev-otomasyon-f0c18.appspot.com",messagingSenderId:"583999887802",appId:"1:583999887802:web:5a8daba2635c5cf31f6583",measurementId:"G-V0W0TDG3GS"});var x=O.a.database(),v=(O.a,a(65)),g=function(e){var t=e.datasetProp,a=Object(c.useState)({data:{labels:["2s","4s","6s","8s","10s"],datasets:[]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}),s=Object(r.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){o(Object(d.a)(Object(d.a)({},i),{},{data:Object(d.a)(Object(d.a)({},i.data),{},{datasets:Object(h.a)(t)})}))}),[t]),Object(n.jsx)(v.Line,{data:i.data,options:i.options})},N=(a(179),function(e){var t=e.data,a=e.unit,s=e.dataColor,i=Object(c.useState)({dataAvg:0,dataLast:0,dataLastFive:[],dataMax:0,dataMin:0}),o=Object(r.a)(i,2),l=o[0],d=o[1];Object(c.useEffect)((function(){!function(e){var t=(e.reduce((function(e,t){return e+t}),0)/e.length).toFixed(2),a=e.slice(Math.max(e.length-5,0));d({dataLastFive:a,dataAvg:t,dataLast:e[e.length-1],dataMin:Math.min.apply(Math,Object(h.a)(e)),dataMax:Math.max.apply(Math,Object(h.a)(e))})}(t)}),[t]);var j=l.dataAvg,u=l.dataLast,b=l.dataLastFive,m=l.dataMax,f=l.dataMin;return Object(n.jsxs)("div",{className:"chart-infos",children:[Object(n.jsxs)("div",{className:"info-header",children:[Object(n.jsxs)("span",{className:"latest-value",children:["De\u011fer: ",u+a]}),Object(n.jsxs)("span",{className:"max-value",children:["En Y\xfcksek: ",m+a]}),Object(n.jsxs)("span",{className:"min-value",children:["En D\xfc\u015f\xfck: ",f+a]}),Object(n.jsxs)("span",{className:"average-value",children:["Ortalama: ",j+a]})]}),Object(n.jsx)("div",{className:"info-chart",children:Object(n.jsx)(g,{datasetProp:[{label:"Son 10 Saniye \u0130\xe7erisindeki De\u011ferler",data:Object(h.a)(b),fill:!0,backgroundColor:s,borderColor:"rgba(255, 99, 132, 0.2)"}]})})]})}),k=(a(180),function(e){var t=e.title,a=e.icon,c=e.selected,s=Object(j.a)(e,["title","icon","selected"]);return Object(n.jsxs)("button",Object(d.a)(Object(d.a)({className:"chart-button-container ".concat(c?"selected-button":"")},s),{},{children:[Object(n.jsx)("h2",{className:"button-title",children:t}),Object(n.jsx)("div",{className:"button-icon",style:{backgroundImage:"url(".concat(a,")")}})]}))}),y=(a(181),a.p+"static/media/lamp.909d2ca0.svg"),C=a.p+"static/media/lamp-colored.d67991f2.svg",S=a.p+"static/media/fan.7484ad07.svg",V=a.p+"static/media/fan-colored.56cd5ecd.svg",M=a.p+"static/media/cigarrete.d99980ca.svg",I=a.p+"static/media/water-drop.0ad2cf65.svg",E=a.p+"static/media/thermometer.724e6e34.svg",U=function(){var e=Object(c.useState)({buttonVal:"temperature",firebaseVal:"sicaklik",unit:"\xb0",dataColor:"rgb(255, 99, 71)"}),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)([]),o=Object(r.a)(i,2),l=o[0],d=o[1],j=a.buttonVal,u=a.firebaseVal,b=a.unit,m=a.dataColor;return Object(c.useEffect)((function(){var e=x.ref("".concat(u,"/deger"));return e.on("value",(function(e){var t=Object.keys(e.val());d(Object(h.a)(t.map((function(t){return e.val()[t]})))),p()})),function(){e.off()}}),[u]),Object(n.jsxs)("div",{className:"charts-content-container",children:[Object(n.jsx)("h1",{className:"page-title",children:"GRAFIKLER"}),Object(n.jsxs)("div",{className:"charts-container",children:[Object(n.jsxs)("div",{className:"chart-buttons-container",children:[Object(n.jsx)(k,{title:"S\u0131cakl\u0131k",icon:E,selected:"temperature"===j,onClick:function(){return s({buttonVal:"temperature",firebaseVal:"sicaklik",unit:"\xb0",dataColor:"rgb(255, 99, 71,1)"})}}),Object(n.jsx)(k,{title:"Nem",icon:I,selected:"humidity"===j,onClick:function(){return s({buttonVal:"humidity",firebaseVal:"nem",unit:"%",dataColor:"rgb(106, 90, 205,1)"})}}),Object(n.jsx)(k,{title:"Duman",icon:M,selected:"smoke"===j,onClick:function(){return s({buttonVal:"smoke",firebaseVal:"gaz",unit:"ppm",dataColor:"rgb(75, 240, 227,1)"})}})]}),Object(n.jsx)("div",{className:"chart-info-container",children:Object(n.jsx)(N,{data:l,unit:b,dataColor:m})})]})]})},A=(a(182),function(e){var t=e.title,a=e.icon,c=e.status,s=Object(j.a)(e,["title","icon","status"]);return Object(n.jsxs)("button",Object(d.a)(Object(d.a)({className:"control-button-container"},s),{},{children:[Object(n.jsx)("h2",{className:"button-title",children:t}),Object(n.jsx)("div",{className:"button-icon",style:{backgroundImage:"url(".concat(a,")")}}),Object(n.jsx)("div",{className:"status-container ".concat(c?"status-open":"status-closed"),children:Object(n.jsx)("h2",{className:"button-title",children:c?"A\xe7\u0131k":"Kapal\u0131"})})]}))}),L=(a(183),function(e){var t=e.infoValue,a=e.infoName,s=e.infoUnit,i=e.minVal,o=e.maxVal,l=e.icon,d=Object(c.useState)("low"),j=Object(r.a)(d,2),u=j[0],b=j[1],m=Object(c.useState)(0),f=Object(r.a)(m,2),h=f[0],O=f[1];return Object(c.useEffect)((function(){var e=x.ref("".concat(t,"/deger"));return e.on("value",(function(e){var t=Object.keys(e.val());O(e.val()[t[t.length-1]]),p()})),b(h<=i?"low":h>=o?"max":"mid"),function(){e.off()}})),Object(n.jsxs)("div",{className:"info-box-container",children:[Object(n.jsxs)("span",{className:"info-value ".concat(u),children:[h,Object(n.jsx)("span",{className:"info-unit ".concat(a),children:s})]}),Object(n.jsx)("i",{className:"info-icon",style:{backgroundImage:"url(".concat(l,")")}}),Object(n.jsx)("span",{className:"info-name",children:a})]})}),w=(a(184),function(){var e=Object(c.useState)({lamp:0,fan:0}),t=Object(r.a)(e,2),a=t[0],s=t[1],i=function(e){x.ref("/".concat("lamp"===e?"lamba":"klima")).set(!a[e]),p()};return Object(c.useEffect)((function(){var e=x.ref("/");return e.on("value",(function(e){var t=e.val(),a=t.lamba,n=t.klima;s({lamp:a,fan:n})})),function(){e.off()}}),[]),Object(n.jsxs)("div",{className:"controls-content-container",children:[Object(n.jsx)("h1",{className:"page-title",children:"KONTROLLER"}),Object(n.jsxs)("div",{className:"controls-container",children:[Object(n.jsx)(A,{onClick:function(){return i("lamp")},title:"Ledler",icon:a.lamp?C:y,status:a.lamp}),Object(n.jsx)(A,{onClick:function(){return i("fan")},title:"Fanlar",icon:a.fan?V:S,status:a.fan})]}),Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)(L,{infoName:"S\u0131cakl\u0131k",infoValue:"sicaklik",infoUnit:"\xb0",minVal:10,maxVal:35,icon:E}),Object(n.jsx)(L,{infoName:"Nem",infoValue:"nem",infoUnit:"%",minVal:50,maxVal:80,icon:I}),Object(n.jsx)(L,{infoName:"Duman",infoValue:"gaz",infoUnit:"ppm",minVal:200,maxVal:250,icon:M})]})]})}),D=Object(l.g)((function(e){var t=e.history,a=Object(c.useState)(""),s=Object(r.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){o(t.location.pathname.replace("/nodemcu-home-project","").slice(1))}),[t.location.pathname]),Object(n.jsxs)("div",{className:"app-container",children:[Object(n.jsx)(m,{selectedButton:i}),Object(n.jsx)("div",{className:"app-content-container",children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/nodemcu-home-project/",render:function(){return Object(n.jsx)(f,{})}}),Object(n.jsx)(l.b,{exact:!0,path:"/nodemcu-home-project/kontroller",render:function(){return Object(n.jsx)(w,{})}}),Object(n.jsx)(l.b,{exact:!0,path:"/nodemcu-home-project/grafikler",render:function(){return Object(n.jsx)(U,{})}}),Object(n.jsx)(l.b,{render:function(){return Object(n.jsx)(l.a,{to:"/nodemcu-home-project/"})}})]})})]})}));a(185);i.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(D,{})}),document.getElementById("root"))},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},81:function(e,t,a){}},[[186,1,2]]]);
//# sourceMappingURL=main.f3b5dc8d.chunk.js.map