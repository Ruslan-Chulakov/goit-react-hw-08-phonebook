"use strict";(self.webpackChunkreact_redux_homework=self.webpackChunkreact_redux_homework||[]).push([[87],{9087:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n=a(8182),s=a(1686),r=a(9434),i=a(6351),l=a(208),c="ContactForm_form__dhl+T",o="ContactForm_label__-cVXI",u="ContactForm_input__Bl93P",d="ContactForm_addButton__zGNsx",m=a(3329),_=function(){var e=(0,r.v9)(i.K2),t=(0,r.I0)();return(0,m.jsxs)("form",{onSubmit:function(a){a.preventDefault();var n=a.target.name.value,r=a.target.number.value;e.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?s.Notify.failure("This name is already exist in contacts book"):e.find((function(e){return e.number===r}))?s.Notify.failure("This number is already exist in contacts book"):(t((0,l.uK)({name:n,number:r})),a.target.reset())},className:(0,n.Z)(c),children:[(0,m.jsxs)("label",{className:(0,n.Z)(o),children:["Name",(0,m.jsx)("input",{className:(0,n.Z)(u),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{className:(0,n.Z)(o),children:["Number",(0,m.jsx)("input",{className:(0,n.Z)(u),type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{className:(0,n.Z)(d),children:"Add contact"})]})},h=a(6895),f="Filter_filter__vxThR",p="Filter_label__vEd1E",x="Filter_input__N7T3z",b=function(){var e=(0,r.I0)();return(0,m.jsxs)("label",{className:(0,n.Z)(f),children:[(0,m.jsx)("span",{className:(0,n.Z)(p),children:"Filter by name"}),(0,m.jsx)("input",{type:"text",name:"filter",onChange:function(t){var a=t.target.value;e((0,h.M)(a))},className:(0,n.Z)(x)})]})},N=a(643),j="ContactList_list__csErn",C="ContactList_item__EZYHO",v="ContactList_parName__rZFAC",Z="ContactList_name__UCkFW",y="ContactList_number__2af8f",g="ContactList_dellButton__-JWS3",L="ContactList_title__gpugJ",w="ContactList_loader__3ATTL",F="ContactList_error__uCB2f",k=function(){var e=(0,r.I0)(),t=(0,r.v9)(i.B8),a=(0,r.v9)(i.K2),c=(0,r.v9)(i.Vc),o=(0,r.v9)(i.by);function u(){return""===t?a:a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}return o&&s.Notify.failure("".concat(o)),0===u().length?(s.Notify.warning("Sorry but there is no results for your request!"),(0,m.jsx)("p",{className:(0,n.Z)(L),children:"Sorry but there is no results for your request!"})):(0,m.jsxs)(m.Fragment,{children:[c&&(0,m.jsx)("div",{className:(0,n.Z)(w),children:(0,m.jsx)(N.p2,{height:"50",width:"50",color:"#3dc7fd",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}),(0,m.jsxs)("ul",{className:(0,n.Z)(j),children:[a&&u().map((function(t){var a=t.id,s=t.name,r=t.number;return(0,m.jsxs)("li",{className:(0,n.Z)(C),children:[(0,m.jsxs)("span",{children:[(0,m.jsxs)("p",{className:(0,n.Z)(v),children:[(0,m.jsx)("span",{children:"Name: "}),(0,m.jsx)("span",{className:(0,n.Z)(Z),children:s})]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{children:"Number:"}),(0,m.jsx)("span",{className:(0,n.Z)(y),children:r})]})]}),(0,m.jsx)("button",{onClick:function(){return e((0,l.GK)(a))},className:(0,n.Z)(g),children:"Delete"})]},a)})),o&&(0,m.jsxs)("li",{className:(0,n.Z)(F),children:["Whoops: ",o]})]})]})},A=a(2791),T=function(){var e=(0,r.v9)(i.K2),t=(0,r.I0)();return(0,A.useEffect)((function(){t((0,l.yF)())}),[t]),(0,m.jsxs)("div",{children:[(0,m.jsx)(_,{}),e.length>2&&(0,m.jsx)(b,{}),0!==e.length&&(0,m.jsx)(k,{})]})}}}]);
//# sourceMappingURL=87.aea02766.chunk.js.map