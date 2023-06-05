"use strict";(self.webpackChunkreact_redux_homework=self.webpackChunkreact_redux_homework||[]).push([[792],{792:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var a=n(182),r=n(686),s=n(434),i=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},o=function(e){return e.filter},u=n(97),d="ContactForm_form__dhl+T",m="ContactForm_label__-cVXI",_="ContactForm_input__Bl93P",h="ContactForm_addButton__zGNsx",f=n(184),p=function(){var e=(0,s.v9)(i),t=(0,s.I0)();return(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.target.name.value,s=n.target.number.value;e.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?r.Notify.failure("This name is already exist in contacts book"):e.find((function(e){return e.number===s}))?r.Notify.failure("This number is already exist in contacts book"):(t((0,u.uK)({name:a,number:s})),n.target.reset())},className:(0,a.Z)(d),children:[(0,f.jsxs)("label",{className:(0,a.Z)(m),children:["Name",(0,f.jsx)("input",{className:(0,a.Z)(_),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{className:(0,a.Z)(m),children:["Number",(0,f.jsx)("input",{className:(0,a.Z)(_),type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{className:(0,a.Z)(h),children:"Add contact"})]})},x=n(895),N="Filter_filter__vxThR",b="Filter_label__vEd1E",j="Filter_input__N7T3z",C=function(){var e=(0,s.I0)();return(0,f.jsxs)("label",{className:(0,a.Z)(N),children:[(0,f.jsx)("span",{className:(0,a.Z)(b),children:"Filter by name"}),(0,f.jsx)("input",{type:"text",name:"filter",onChange:function(t){var n=t.target.value;e((0,x.M)(n))},className:(0,a.Z)(j)})]})},Z=n(643),v="ContactList_list__csErn",y="ContactList_item__EZYHO",L="ContactList_parName__rZFAC",g="ContactList_name__UCkFW",w="ContactList_number__2af8f",F="ContactList_dellButton__-JWS3",k="ContactList_title__gpugJ",A="ContactList_loader__3ATTL",T="ContactList_error__uCB2f",z=function(){var e=(0,s.v9)(o),t=(0,s.v9)(i),n=(0,s.v9)(c),d=(0,s.v9)(l);function m(){return""===e?t:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}d&&r.Notify.failure("".concat(d));var _=(0,s.I0)();return 0===m().length?(r.Notify.warning("Sorry but there is no results for your request!"),(0,f.jsx)("p",{className:(0,a.Z)(k),children:"Sorry but there is no results for your request!"})):(0,f.jsxs)(f.Fragment,{children:[n&&(0,f.jsx)("div",{className:(0,a.Z)(A),children:(0,f.jsx)(Z.p2,{height:"50",width:"50",color:"#3dc7fd",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}),(0,f.jsxs)("ul",{className:(0,a.Z)(v),children:[t&&m().map((function(e){var t=e.id,n=e.name,r=e.number;return(0,f.jsxs)("li",{className:(0,a.Z)(y),children:[(0,f.jsxs)("span",{children:[(0,f.jsxs)("p",{className:(0,a.Z)(L),children:[(0,f.jsx)("span",{children:"Name: "}),(0,f.jsx)("span",{className:(0,a.Z)(g),children:n})]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"Number:"}),(0,f.jsx)("span",{className:(0,a.Z)(w),children:r})]})]}),(0,f.jsx)("button",{onClick:function(){return _((0,u.GK)(t))},className:(0,a.Z)(F),children:"Delete"})]},t)})),d&&(0,f.jsxs)("li",{className:(0,a.Z)(T),children:["Whoops: ",d]})]})]})},B=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(p,{}),(0,f.jsx)(C,{}),(0,f.jsx)(z,{})]})}}}]);
//# sourceMappingURL=792.2dbf8734.chunk.js.map