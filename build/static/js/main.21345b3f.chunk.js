(this["webpackJsonpphonebook-frontend"]=this["webpackJsonpphonebook-frontend"]||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var o=t(2),c=t(15),i=t.n(c),a=(t(20),t(5)),r=t(4),u=(t(21),t(3)),s=t.n(u),d="/api/phonebook",l=function(){return console.log(d),s.a.get(d)},f=t(0),j=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Add Person Form"}),Object(f.jsxs)("form",{onSubmit:e.addPerson,children:[Object(f.jsxs)("div",{children:["Name: ",Object(f.jsx)("input",{onChange:e.personChange})]}),Object(f.jsxs)("div",{children:["Phone: ",Object(f.jsx)("input",{onChange:e.phoneChange})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:" Add Person "})})]})]})},b=function(e){var n,t=e.message;return"confirmed"===e.notificationStyle&&(n="confirmed"),null===t?null:Object(f.jsx)("div",{className:n,children:t})},h=function(e){var n=e.person,t=e.deletePerson;return Object(f.jsx)("div",{children:Object(f.jsxs)("p",{children:[n.name," - ",n.phone," ",Object(f.jsxs)("button",{onClick:function(){return t(n.id,n.name)},children:[" ","Delete"," "]})]})})};var m=function(){var e=Object(o.useState)([{name:"hmmm...?",id:"Taylor",phone:"123-456-7890"}]),n=Object(r.a)(e,2),t=n[0],c=n[1],i=Object(o.useState)([]),u=Object(r.a)(i,2),d=u[0],m=u[1],p=Object(o.useState)("some error"),O=Object(r.a)(p,2),v=O[0],x=O[1],g=Object(o.useState)("null"),k=Object(r.a)(g,2),w=k[0],y=k[1];Object(o.useEffect)((function(){l().then((function(e){console.log(e.data),c(e.data)}))}),[]);var P=function(e,n){window.confirm("Do you really want to delete?")&&(s.a.delete("/api/phonebook/".concat(e)).then((function(n){console.log(n),c(t.filter((function(n){return n.id!==e})))})),x("".concat(n," was deleted")),y("confirmed"),setTimeout((function(){x(null)}),2e3))};return Object(f.jsxs)("div",{children:[Object(f.jsx)(j,{addPerson:function(e){e.preventDefault();var n=t.map((function(e){return e.name})),o={name:d.name,id:d.id,phone:d.phone};if(n.includes(d.name)){if(window.confirm("".concat(d.name," already in phonebook. Update number?"))){var i=t.filter((function(e){return e.name===d.name}));console.log(i[0].id),s.a.put("/api/phonebook/".concat(i[0].id),o).then((function(e){e.data,s.a.get("/api/phonebook").then((function(e){return c(e.data)}))})).catch((function(){x("The person was already deleted from server"),y("confirmed"),setTimeout((function(){x(null)}),2e3)})),x("Number was updated"),y("confirmed"),setTimeout((function(){x(null)}),2e3)}}else s.a.post("/api/phonebook",o).then((function(e){c(t.concat(o)),m(""),x("Person Added"),y("confirmed"),setTimeout((function(){x(null)}),2e3)}))},personChange:function(e){m(Object(a.a)(Object(a.a)({},d),{},{name:e.target.value}))},phoneChange:function(e){m(Object(a.a)(Object(a.a)({},d),{},{phone:e.target.value}))}}),Object(f.jsx)(b,{notificationStyle:w,message:v}),t.map((function(e){return Object(f.jsx)(h,{person:e,deletePerson:P})}))]})};i.a.render(Object(f.jsx)(m,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.21345b3f.chunk.js.map