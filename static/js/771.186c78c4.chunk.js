"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{771:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(434),r=n(942),o=n(413),s=n(439),c=n(791),i={name:"",number:""},u="myContactsForm_form__7K569",l="myContactsForm_button__CST9o",m=n(184),d=function(e){var t=e.onSubmit,n=(0,c.useState)((0,o.Z)({},i)),a=(0,s.Z)(n,2),d=a[0],f=a[1],p=function(e){var t=e.target,n=t.name,a=t.value;f((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,r.Z)({},n,a))}))},h=d.name,v=d.number;return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t((0,o.Z)({},d)),f((0,o.Z)({},i))},className:u,children:[(0,m.jsx)("input",{value:h,onChange:p,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,m.jsx)("input",{value:v,onChange:p,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,m.jsx)("button",{type:"submit",className:l,children:"Add contact"})]})},f="contactItem_item__VUf3q",p="contactItem_name__KstQc",h="contactItem_number__5f4gx",v="contactItem_deleteBtn__JT2zm",_=function(e){var t=e.id,n=e.name,a=e.number,r=e.removeBook;return(0,m.jsxs)("li",{className:f,children:[(0,m.jsxs)("p",{className:p,children:[n,":"]}),(0,m.jsx)("p",{className:h,children:a}),(0,m.jsx)("button",{type:"button",className:v,onClick:function(){return r(t)},children:"Delete"})]})},x="myContactList_list__n9HoE",b=function(e){var t=e.contacts,n=e.removeBook;return(0,m.jsx)("ul",{className:x,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,m.jsx)(_,{id:t,name:a,number:r,removeBook:n},t)}))})},y="myContactsFilter_wrapper__ApCxS",C="myContactsFilter_label__IiMGa",j=function(e){var t=e.value,n=e.onChange;return(0,m.jsxs)("div",{className:y,children:[(0,m.jsx)("label",{className:C,htmlFor:"filter",children:"Find contacts by name"}),(0,m.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})},g=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},k=n(605),w=function(e){return e.contacts},N=function(e){var t=e.contacts,n=e.filter;if(!n)return t;var a=n.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(a)}))},Z=function(e){return e.filter},A=function(){var e=(0,a.v9)(N),t=(0,a.v9)(w),n=(0,a.v9)(Z),r=(0,a.I0)(),s=Boolean(e.length);return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Phonebook"}),(0,m.jsx)(d,{onSubmit:function(e){var n,a=e.name,s=e.number,c=a.toLowerCase();if(t.find((function(e){return e.name.toLowerCase()===c})))return alert("".concat(a," is already in contacts")),!1;r((n={name:a,number:s},{type:k.rq,payload:(0,o.Z)({id:g()},n)}))}}),(0,m.jsx)("h2",{children:"Contacts"}),(0,m.jsx)(j,{value:n,onChange:function(e){var t,n=e.target;r((t=n.value,{type:k.YA,payload:t}))}}),s&&(0,m.jsx)(b,{contacts:e,removeBook:function(e){var t;r((t=e,{type:k.P,payload:t}))}}),!s&&(0,m.jsx)("p",{children:"No contacts in list, yet"})]})},S=function(){return(0,m.jsx)("div",{children:(0,m.jsx)(A,{})})}}}]);
//# sourceMappingURL=771.186c78c4.chunk.js.map