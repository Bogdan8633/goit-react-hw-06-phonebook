"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[383],{383:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var a=t(434),r=t(942),o=t(413),s=t(439),c=t(791),i={name:"",number:""},u="myContactsForm_form__7K569",m="myContactsForm_button__CST9o",l=t(184),d=function(e){var n=e.onSubmit,t=(0,c.useState)((0,o.Z)({},i)),a=(0,s.Z)(t,2),d=a[0],f=a[1],h=function(e){var n=e.target,t=n.name,a=n.value;f((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,r.Z)({},t,a))}))},_=d.name,v=d.number;return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n((0,o.Z)({},d)),f((0,o.Z)({},i))},className:u,children:[(0,l.jsx)("input",{value:_,onChange:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)("input",{value:v,onChange:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,l.jsx)("button",{type:"submit",className:m,children:"Add contact"})]})},f="contactItem_item__VUf3q",h="contactItem_name__KstQc",_="contactItem_number__5f4gx",v="contactItem_deleteBtn__JT2zm",p=function(e){var n=e.id,t=e.name,a=e.number,r=e.removeBook;return(0,l.jsxs)("li",{className:f,children:[(0,l.jsxs)("p",{className:h,children:[t,":"]}),(0,l.jsx)("p",{className:_,children:a}),(0,l.jsx)("button",{type:"button",className:v,onClick:function(){return r(n)},children:"Delete"})]})},x="myContactList_list__n9HoE",b=function(e){var n=e.contacts,t=e.removeBook;return(0,l.jsx)("ul",{className:x,children:n.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,l.jsx)(p,{id:n,name:a,number:r,removeBook:t},n)}))})},j="myContactsFilter_wrapper__ApCxS",C="myContactsFilter_label__IiMGa",y=function(e){var n=e.value,t=e.onChange;return(0,l.jsxs)("div",{className:j,children:[(0,l.jsx)("label",{className:C,htmlFor:"filter",children:"Find contacts by name"}),(0,l.jsx)("input",{type:"text",name:"filter",value:n,onChange:t})]})},k=t(652),g=t(653),N=function(e){return e.contacts},w=function(e){var n=e.contacts,t=e.filter;if(!t)return n;var a=t.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},Z=function(e){return e.filter},A=function(){var e=(0,a.v9)(w),n=(0,a.v9)(N),t=(0,a.v9)(Z),r=(0,a.I0)(),o=Boolean(e.length);return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(d,{onSubmit:function(e){var t=e.name,a=e.number,o=t.toLowerCase();if(n.find((function(e){return e.name.toLowerCase()===o})))return alert("".concat(t," is already in contacts")),!1;r((0,k.uK)({name:t,number:a}))}}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(y,{value:t,onChange:function(e){var n=e.target;r((0,g.T)(n.value))}}),o&&(0,l.jsx)(b,{contacts:e,removeBook:function(e){r((0,k.GK)(e))}}),!o&&(0,l.jsx)("p",{children:"No contacts in list, yet"})]})},B=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(A,{})})}}}]);
//# sourceMappingURL=383.a68f16a1.chunk.js.map