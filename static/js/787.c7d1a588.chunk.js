"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[787],{787:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(439),r=n(791),o=n(434),s=n(942),c=n(413),i={name:"",number:""},u="myContactsForm_form__7K569",l="myContactsForm_button__CST9o",m=n(184),d=function(e){var t=e.onSubmit,n=(0,r.useState)((0,c.Z)({},i)),o=(0,a.Z)(n,2),d=o[0],f=o[1],h=function(e){var t=e.target,n=t.name,a=t.value;f((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,s.Z)({},n,a))}))},p=d.name,v=d.number;return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t((0,c.Z)({},d)),f((0,c.Z)({},i))},className:u,children:[(0,m.jsx)("input",{value:p,onChange:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,m.jsx)("input",{value:v,onChange:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,m.jsx)("button",{type:"submit",className:l,children:"Add contact"})]})},f="contactItem_item__VUf3q",h="contactItem_name__KstQc",p="contactItem_number__5f4gx",v="contactItem_deleteBtn__JT2zm",_=function(e){var t=e.id,n=e.name,a=e.number,r=e.removeBook;return(0,m.jsxs)("li",{className:f,children:[(0,m.jsxs)("p",{className:h,children:[n,":"]}),(0,m.jsx)("p",{className:p,children:a}),(0,m.jsx)("button",{type:"button",className:v,onClick:function(){return r(t)},children:"Delete"})]})},x="myContactList_list__n9HoE",b=function(e){var t=e.contacts,n=e.removeBook;return(0,m.jsx)("ul",{className:x,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,m.jsx)(_,{id:t,name:a,number:r,removeBook:n},t)}))})},y="myContactsFilter_wrapper__ApCxS",C="myContactsFilter_label__IiMGa",j=function(e){var t=e.value,n=e.onChange;return(0,m.jsxs)("div",{className:y,children:[(0,m.jsx)("label",{className:C,htmlFor:"filter",children:"Find contacts by name"}),(0,m.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})},g=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},k=n(605),N=function(){var e=(0,o.v9)((function(e){return e.contacts})),t=(0,r.useState)(""),n=(0,a.Z)(t,2),s=n[0],i=n[1],u=(0,o.I0)();(0,r.useEffect)((function(){localStorage.setItem("my-contacts",JSON.stringify(e))}),[e]);var l=function(){if(!s)return e;var t=s.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),f=Boolean(l.length);return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Phonebook"}),(0,m.jsx)(d,{onSubmit:function(t){var n=t.name,a=t.number,r=n.toLowerCase();if(e.find((function(e){return e.name.toLowerCase()===r})))return alert("".concat(n," is already in contacts")),!1;var o,s=(o={name:n,number:a},{type:k.r,payload:(0,c.Z)({id:g()},o)});u(s)}}),(0,m.jsx)("h2",{children:"Contacts"}),(0,m.jsx)(j,{value:s,onChange:function(e){i(e.target.value)}}),f&&(0,m.jsx)(b,{contacts:l,removeBook:function(e){var t,n=(t=e,{type:k.P,payload:t});u(n)}}),!f&&(0,m.jsx)("p",{children:"No contacts in list, yet"})]})},Z=function(){return(0,m.jsx)("div",{children:(0,m.jsx)(N,{})})}}}]);
//# sourceMappingURL=787.c7d1a588.chunk.js.map