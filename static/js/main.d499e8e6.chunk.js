(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(3),s=c.n(n),a=c(4),o=(c(9),c(10),c(1)),r=c(0),i=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var t=Object(o.useState)("Jam"),e=Object(a.a)(t,2),c=e[0],n=e[1];return Object(r.jsxs)("main",{className:"section container",children:[Object(r.jsx)("h1",{className:"title is-flex is-align-items-center",children:" "===c?"No goods selected":Object(r.jsxs)(r.Fragment,{children:["".concat(c," is selected"),Object(r.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return n(" ")}})]})}),Object(r.jsx)("table",{className:"table",children:Object(r.jsx)("tbody",{children:i.map((function(t){return Object(r.jsxs)("tr",{"data-cy":"Good",className:t===c&&"has-background-success-light",children:[Object(r.jsx)("td",{children:t!==c?Object(r.jsx)("td",{children:Object(r.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return n(t)},children:"+"})}):Object(r.jsx)("td",{children:Object(r.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return n(" ")},children:"-"})})}),Object(r.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})};s.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d499e8e6.chunk.js.map