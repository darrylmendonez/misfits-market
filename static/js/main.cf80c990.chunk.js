(this["webpackJsonpmisfits-market"]=this["webpackJsonpmisfits-market"]||[]).push([[0],[,,,,function(e,t,a){"use strict";a.r(t);var r=a(10);t.default=r.default},,,,,,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r);t.default=function(e){var t=e.items,r=e.shoppingCart,s=e.handleIncrement,i=e.handleDecrement,c=t&&r?t.map((function(e){return n.a.createElement("div",{key:e.id,className:"card mx-3 my-3"},n.a.createElement("div",{className:"card-body"},n.a.createElement("img",{className:"img-fluid card-img-top",src:a(34)("".concat(e.imgPath)),alt:""}),n.a.createElement("h5",{className:"card-title"},e.product),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("small",null,"MSRP: ",n.a.createElement("span",{className:"strikeout"},"$",e.msrp)),n.a.createElement("br",null),n.a.createElement("strong",null,"Buy: ",n.a.createElement("span",null,"$",e.price.toFixed(2))),n.a.createElement("br",null),n.a.createElement("small",null,"Save: $",(e.msrp-e.price).toFixed(2)),e.soldOut?n.a.createElement("div",{className:"text-danger"},"Sold Out"):n.a.createElement("div",{className:"text-success"},"In Stock")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"text-right"},e.soldOut?null:n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mt-4 disable-select"},"Add to cart:",n.a.createElement("br",null),n.a.createElement("i",{onClick:function(){return i(r[e.id],e.id)},className:"fa fa-minus-circle yellow-text","aria-hidden":"true"}),n.a.createElement("span",{className:"mx-2"},"Qty: ",r[e.id]),n.a.createElement("i",{onClick:function(){return s(e.id)},className:"fa fa-plus-circle yellow-text","aria-hidden":"true"}),n.a.createElement("span",{className:"text-success ".concat(r[e.id]?"slide-in-blurred-bottom":"slide-out-blurred-top")},"Added!"))))))))})):n.a.createElement("div",{className:"center"},"Loading...");return n.a.createElement("div",{className:"card-container"},c)}},,,,,,,,,,function(e){e.exports=JSON.parse('["./assets/mushrooms.jpg","./assets/canola-oil.jpg","./assets/butternut-squash.jpg","./assets/green-bell-peppers.jpg","./assets/pomelo.jpg","./assets/rosemary.jpg","./assets/beets.jpg","./assets/hen-of-the-wood.jpg","./assets/pineapple.jpg","./assets/guacamole.jpg","./assets/pears.jpg"]')},function(e,t,a){e.exports=a(47)},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){var r={".":4,"./":4,"./Items":10,"./Items.js":10,"./assets/beets.jpg":35,"./assets/butternut-squash.jpg":36,"./assets/canola-oil.jpg":37,"./assets/green-bell-peppers.jpg":38,"./assets/guacamole.jpg":39,"./assets/hen-of-the-wood.jpg":40,"./assets/mushrooms.jpg":41,"./assets/pears.jpg":42,"./assets/pineapple.jpg":43,"./assets/pomelo.jpg":44,"./assets/rosemary.jpg":45,"./index":4,"./index.js":4};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id=34},function(e,t,a){e.exports=a.p+"static/media/beets.7616eabe.jpg"},function(e,t,a){e.exports=a.p+"static/media/butternut-squash.34c00947.jpg"},function(e,t,a){e.exports=a.p+"static/media/canola-oil.e3c1d2a1.jpg"},function(e,t,a){e.exports=a.p+"static/media/green-bell-peppers.371a8bd6.jpg"},function(e,t,a){e.exports=a.p+"static/media/guacamole.9778459d.jpg"},function(e,t,a){e.exports=a.p+"static/media/hen-of-the-wood.4baae736.jpg"},function(e,t,a){e.exports=a.p+"static/media/mushrooms.86fbb50c.jpg"},function(e,t,a){e.exports=a.p+"static/media/pears.a996c31f.jpg"},function(e,t,a){e.exports=a.p+"static/media/pineapple.db2309a6.jpg"},function(e,t,a){e.exports=a.p+"static/media/pomelo.cfe37dbb.jpg"},function(e,t,a){e.exports=a.p+"static/media/rosemary.765164a0.jpg"},,function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return A}));var r=a(0),n=a.n(r),s=a(9),i=a.n(s),c=a(3),l=a(2),o=a(18),m=(a(32),a(5)),u=a(6),d=a(8),p=a(7),h=(a(33),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.orderSummaryDetails;return n.a.createElement("nav",{className:"navbar navbar-light light-grey-bg sticky-top"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Misfits Market"),n.a.createElement("div",{className:"".concat(e.totalNumberOfItems>0?"yellow-text":"grey-text"),"data-toggle":"modal","data-target":"#exampleModal"},n.a.createElement("strong",null,e.totalNumberOfItems),n.a.createElement("i",{className:"fa fa-shopping-cart fa-2x","aria-hidden":"true"}))))}}]),a}(r.Component)),g=Object(l.b)((function(e){return{items:e.itemData.items,shoppingCart:e.itemData.shoppingCart,orderSummaryDetails:e.itemData.orderSummaryDetails}}))(h),f=a(4),b=a(14),E=a.n(b),v=a(19),j=a(20),N=function(){return function(e){(function(){var e=Object(v.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://applicant-dev.misfitsmarket.com/api/test/v1");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(t){for(var a=t.data.items,r=0;r<a.length;r++)a[r].imgPath=j[r],a[r].justAdded=!1;for(var n={},s=0;s<a.length;s++)n[a[s].id]=0;e({type:"INITIAL_ITEMS",items:t.data.items,shoppingCart:n})})).catch((function(e){return console.log("Error: ",e)}))}},y=function(e){return{type:"INCREMENT_QUANTITY",id:e}},O=function(e){return{type:"DECREMENT_QUANTITY",id:e}},x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(){A.dispatch(N()),A.dispatch({type:"USER_PURCHASED_TRUE"})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.shoppingCart,r=e.orderSummaryDetails,s=e.userPurchased;console.log("shoppingCart: ",a);var i,c=[];if(void 0!==a){i=Object.entries(a);for(var l=0;l<i.length;l++)i[l][1]>0&&c.push(i[l])}var o=c.length?c.map((function(e){return n.a.createElement("li",{className:"list-group-item",key:e[0]-1},n.a.createElement("h6",null,t[e[0]-1].product),n.a.createElement("span",null,"Qty: ",e[1]),n.a.createElement("br",null),n.a.createElement("span",null,"$",t[e[0]-1].price," each"),n.a.createElement("span",{className:"pull-right"},"Price: $",(t[e[0]-1].price*e[1]).toFixed(2)))})):n.a.createElement("div",null,"There are no items in your cart"),m=c.length?n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"pull-right"},"Shipping & handling: $",r.shipping.toFixed(2)),n.a.createElement("br",null),n.a.createElement("span",{className:"pull-right"},"Tax: $",r.tax.toFixed(2)),n.a.createElement("br",null),n.a.createElement("strong",{className:"pull-right"},"Total (",r.totalNumberOfItems," items): $",r.total.toFixed(2))):null,u=s?n.a.createElement("h6",{className:"text-success tracking-in-expand"},n.a.createElement("i",{className:"fa fa-check-square-o","aria-hidden":"true"})," Your order has been received!"):n.a.createElement("ul",{className:"list-group"},o,m);return n.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h6",{className:"modal-title",id:"exampleModalLabel"},"Order Summary"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},u),n.a.createElement("div",{className:"modal-footer"},s?n.a.createElement("button",{type:"button",className:"btn btn-warning","data-dismiss":"modal"},"Start a new order"):n.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Continue shopping"),r.total?n.a.createElement("button",{onClick:this.handleClick,type:"button",className:"btn btn-warning"},"Buy Now"):null))))}}]),a}(r.Component),C=Object(l.b)((function(e){return{items:e.itemData.items,shoppingCart:e.itemData.shoppingCart,orderSummaryDetails:e.itemData.orderSummaryDetails,userPurchased:e.itemData.userPurchased}}))(x),D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleIncrement=function(e){A.dispatch(y(e))},e.handleDecrement=function(e,t){e>0&&A.dispatch(O(t))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){A.dispatch(N())}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.shoppingCart;return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(f.default,{items:t,shoppingCart:a,handleIncrement:this.handleIncrement,handleDecrement:this.handleDecrement})))),n.a.createElement(C,{items:t,shoppingCart:a}))}}]),a}(r.Component),I=Object(l.b)((function(e){return{items:e.itemData.items,shoppingCart:e.itemData.shoppingCart,userPurchased:e.itemData.userPurchased}}),(function(e){return{incrementQuantity:function(t){return e(y(t))},decrementQuantity:function(t){return e(O(t))},hideConfirmationMsg:function(t){return e(function(e){return{type:"HIDE_CONFIRMATION_MSG",id:e}}(t))}}}))(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(15),w=a(1),k={items:[],shoppingCart:{},orderSummaryDetails:{totalNumberOfItems:0,tax:0,shipping:0,total:0},userPurchased:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIAL_ITEMS":return Object(w.a)(Object(w.a)({},e),{},{items:t.items,shoppingCart:t.shoppingCart,orderSummaryDetails:{totalNumberOfItems:0,tax:0,shipping:0,total:0}});case"INCREMENT_QUANTITY":var a=e.shoppingCart;a[t.id]++;var r=e.orderSummaryDetails;r.totalNumberOfItems++,r.total=parseFloat((e.orderSummaryDetails.total+e.items[t.id-1].price).toFixed(2));var n=e.items;return n[t.id-1].justAdded=!0,Object(w.a)(Object(w.a)({},e),{},{items:Object(S.a)(n),shoppingCart:Object(w.a)({},a),orderSummaryDetails:Object(w.a)({},r),userPurchased:!1});case"DECREMENT_QUANTITY":var s=e.shoppingCart;s[t.id]--;var i=e.orderSummaryDetails;return i.totalNumberOfItems--,i.total=parseFloat((e.orderSummaryDetails.total-e.items[t.id-1].price).toFixed(2)),Object(w.a)(Object(w.a)({},e),{},{shoppingCart:Object(w.a)({},s),orderSummaryDetails:i});case"HIDE_CONFIRMATION_MSG":var c=e.items;return c[t.id-1].justAdded=!1,Object(w.a)(Object(w.a)({},e),{},{items:Object(S.a)(c)});case"USER_PURCHASED_TRUE":return Object(w.a)(Object(w.a)({},e),{},{userPurchased:!0});default:return e}},_=Object(c.c)({itemData:T}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,A=Object(c.e)(_,M(Object(c.a)(o.a)));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,{store:A},n.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.cf80c990.chunk.js.map