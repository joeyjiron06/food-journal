(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),i=n.n(o),c=(n(508),n(21)),l=n(19),s=n(112),u=n(523),f=n(521),p=n(522),m=n(10),h=n.n(m),d=n(7),y=n(20),v=n.n(y);function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){g(e,t,n[t])})}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,l)}function c(e){i("next",e)}function l(e){i("throw",e)}c()})}}function E(){return Object(l.auth)().user}function k(e){return x.apply(this,arguments)}function x(){return(x=w(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.database)().user.child("meals").push(b({},t,{date:l.database.ServerValue.TIMESTAMP}));case 2:return e.next=4,C();case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return(j=w(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.database)().user.child("meals").child(t.id).update(t);case 2:return e.next=4,C();case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function S(){return(S=w(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.database)().user.child("meals").child(t.id).remove();case 2:return e.next=4,C();case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function C(){return N.apply(this,arguments)}function N(){return(N=w(h.a.mark(function e(){var t,n,a,r,o,i,c;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.auth)().user.id,e.next=3,V({userId:t,ascending:!1});case 3:return n=e.sent,a={meat:0,vegetarian:0,vegan:0,junkFood:0,dateOfAllVeganDay:0,junkFoodCountThisWeek:0,meatCountThisWeek:0,totalMeals:n.length,lastMeal:n[0]||null},r=v()().startOf("week"),o=v()().endOf("week"),n.forEach(function(e){"meat"===e.type&&a.meat++,"vegetarian"===e.type&&a.vegetarian++,"vegan"===e.type&&a.vegan++,"junk"===e.type&&a.junkFood++,v()(e.date).isBetween(r,o)&&("meat"===e.type&&a.meatCountThisWeek++,"junk"===e.type&&a.junkFoodCountThisWeek++)}),n.length&&(a.vegan=100*a.vegan/n.length,a.meat=100*a.meat/n.length,a.vegetarian=100*a.vegetarian/n.length,a.junkFood=100*a.junkFood/n.length),i=F(n),(c=i.find(function(e){return e.meals.every(function(e){return"vegan"===e.type})}))&&(a.dateOfAllVeganDay=c.date.getTime()),e.next=14,Object(l.database)().ref(t).child("statistics").set(a);case 14:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function P(e){var t={id:e.uid,photoUrl:e.photoURL,displayName:e.displayName};return Object(l.auth)().user=t,Object(l.database)().user=Object(l.database)().ref(t.id),Object(l.database)().user.child("info").set(t),t}function T(){return D.apply(this,arguments)}function D(){return(D=w(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e,t){var n=Object(l.auth)().onAuthStateChanged(function(a){a?e(a):t(a),n()})});case 2:return t=e.sent,e.abrupt("return",P(t));case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function _(){return M.apply(this,arguments)}function M(){return(M=w(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.auth)().signInWithRedirect(new l.auth.FacebookAuthProvider);case 2:return t=e.sent,n=t.user,e.abrupt("return",P(n));case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function A(){return R.apply(this,arguments)}function R(){return(R=w(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.auth)().signOut();case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function I(){return W.apply(this,arguments)}function W(){return(W=w(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.database)().ref(Object(l.auth)().user.id).set(null);case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function F(e){return e.reduce(function(e,t){var n=new Date(t.date),a=e[e.length-1];return n.getDate()!==(a&&a.date.getDate())&&(e.push({date:n,meals:[]}),a=e[e.length-1]),a.meals.push(t),e},[])}function L(e){return B.apply(this,arguments)}function B(){return(B=w(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V({userId:t,ascending:!1});case 2:return n=e.sent,e.abrupt("return",F(n));case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function V(e){return J.apply(this,arguments)}function J(){return(J=w(h.a.mark(function e(t){var n,a,r,o,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,a=t.ascending,r=void 0===a||a,e.next=3,Object(l.database)().ref(n).child("meals").orderByChild("date").once("value");case 3:if(o=e.sent,i=[],o.forEach(function(e){i.push(b({},e.val(),{id:e.key}))}),r){e.next=8;break}return e.abrupt("return",i.reverse());case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function U(e){return q.apply(this,arguments)}function q(){return(q=w(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.database)().ref(t).child("info").once("value");case 2:return n=e.sent,e.abrupt("return",n.val());case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function z(e){return Q.apply(this,arguments)}function Q(){return(Q=w(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.database)().ref(t).child("statistics").once("value");case 2:return n=e.sent,e.abrupt("return",n.val());case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function Y(){return G.apply(this,arguments)}function G(){return(G=w(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-journal-6eb44.firebaseio.com/.json?shallow=true");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",Object.keys(n));case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function K(){return Z.apply(this,arguments)}function Z(){return(Z=w(h.a.mark(function e(){var t,n,a,r,o,i,c,s,u;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:t=e.sent,n=[],a=!0,r=!1,o=void 0,e.prev=7,i=t[Symbol.iterator]();case 9:if(a=(c=i.next()).done){e.next=24;break}return s=c.value,e.next=13,U(s);case 13:if(u=e.sent){e.next=17;break}return console.warn(s,"hasnt logged in for a while"),e.abrupt("continue",21);case 17:return e.next=19,z(s);case 19:u.stats=e.sent,s===Object(l.auth)().user.id?n.unshift(u):n.push(u);case 21:a=!0,e.next=9;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(7),r=!0,o=e.t0;case 30:e.prev=30,e.prev=31,a||null==i.return||i.return();case 33:if(e.prev=33,!r){e.next=36;break}throw o;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return e.abrupt("return",n);case 39:case"end":return e.stop()}},e,this,[[7,26,30,38],[31,,33,37]])}))).apply(this,arguments)}function $(e){return($="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,l)}function c(e){i("next",e)}function l(e){i("throw",e)}c()})}}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function te(e,t){return!t||"object"!==$(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e){return(ne=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ae=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return te(a,(n=a=te(this,(e=ne(t)).call.apply(e,[this].concat(o))),a.state={isLoading:JSON.parse(localStorage.getItem("isReturningUser"))},a.login=H(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("isReturningUser",!0),e.prev=1,e.next=4,_();case 4:return t=e.sent,e.next=7,a.onAuthSuccess(t);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])})),n))}var n,a,o,i,c;return n=t,(a=[{key:"componentDidMount",value:(c=H(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:return t=e.sent,e.next=6,this.onAuthSuccess(t);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),this.setState({isLoading:!1});case 12:case"end":return e.stop()}},e,this,[[0,8]])})),function(){return c.apply(this,arguments)})},{key:"onAuthSuccess",value:(i=H(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:localStorage.setItem("user",JSON.stringify(t)),n=this.props.location&&this.props.location.state&&this.props.location.state.from&&this.props.location.state.from.pathname||"/feeds",this.props.history.replace(n);case 5:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.backgroundContainer},r.a.createElement("img",{className:t.backgroundImage,src:"img/loginpage1.jpg",alt:"login page"}),r.a.createElement("div",{className:t.backgroundOverlay})),r.a.createElement("div",{className:t.content},r.a.createElement("div",{className:t.title},"Food Journal"),r.a.createElement("p",{className:t.subtitle},"keeping track of what you eat"),r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.login,disabled:e},"Login with facebook"),e?r.a.createElement(d.b,{color:"secondary"}):null))}}])&&ee(n.prototype,a),o&&ee(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");X(e.prototype,t&&t.prototype),t&&X(e,t)}(t,e),t}(a.Component),re=Object(c.withStyles)(function(e){return{root:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"relative",color:"white"},backgroundContainer:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:-1},backgroundImage:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"},backgroundOverlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"black",opacity:.6},content:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},title:{fontSize:42,fontWeight:"bold"},subtitle:{marginBottom:40}}})(ae),oe=n(185),ie=Object(oe.a)(Object(c.withStyles)(function(e){return{image:{width:40,height:40,borderRadius:"100%",flexShrink:0}}})(function(e){var t=e.user,n=e.className,a=e.history,o=e.classes,i=e.onClick;return r.a.createElement("img",{className:"".concat(o.image," ").concat(n||""),src:t.photoUrl,alt:"avatar",onClick:function(){i?i():a.push("/user/".concat(t.id))}})}));var ce=function(e){var t=e.title,n=e.percentage,a=e.classes;return r.a.createElement("div",{className:a.stat},r.a.createElement(d.v,{className:a.statTitle},t),r.a.createElement("div",{className:a.statBarContainer},r.a.createElement("div",{className:a.statBar,style:{width:"".concat(n,"%")}})),r.a.createElement(d.v,{className:a.statPercentage},n.toFixed(0)+"%"))},le=Object(c.withStyles)(function(e){return{root:{display:"flex",backgroundColor:"white",padding:20},userName:{fontSize:16},status:{opacity:.65},stats:{marginTop:20},stat:{display:"flex",marginBottom:20},rightSide:{marginLeft:20,width:"100%"},statBarContainer:{flexGrow:1},statTitle:{minWidth:80,fontWeight:"bold",opacity:.7},statBar:{height:20,backgroundColor:e.palette.secondary.light},statPercentage:{minWidth:40,textAlign:"right"},extraStats:{opacity:.7},totalMeals:{textAlign:"right"}}})(function(e){var t=e.user,n=e.stats,a=e.classes,o=e.className,i=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["user","stats","classes","className"]);return r.a.createElement("div",Object.assign({className:"".concat(a.root," ").concat(o||"")},i),r.a.createElement(ie,{user:t}),r.a.createElement("div",{className:a.rightSide},r.a.createElement("div",{className:a.status},r.a.createElement(d.v,{className:a.userName},t.displayName),n&&n.lastMeal&&r.a.createElement(d.v,null,r.a.createElement("b",null,n.lastMeal.title," \u2022 "),v()(n.lastMeal.date).fromNow())),r.a.createElement("div",{className:a.stats},r.a.createElement(ce,{title:"Vegan",percentage:n.vegan,classes:a}),r.a.createElement(ce,{title:"Vegetarian",percentage:n.vegetarian,classes:a}),r.a.createElement(ce,{title:"Meat",percentage:n.meat,classes:a}),r.a.createElement(ce,{title:"Junk Food",percentage:n.junkFood,classes:a})),r.a.createElement("div",{className:a.extraStats},n.dateOfAllVeganDay&&r.a.createElement(d.v,{gutterBottom:!0},r.a.createElement("b",null,v()(n.dateOfAllVeganDay).fromNow()," "),"since last all vegan day"),r.a.createElement(d.v,{gutterBottom:!0},r.a.createElement("b",null,n.junkFoodCountThisWeek||0," "),"junk food meals eaten this week"),r.a.createElement(d.v,{gutterBottom:!0},r.a.createElement("b",null,n.meatCountThisWeek||0," "),"meat meals eaten this week"),r.a.createElement(d.v,{className:a.totalMeals},r.a.createElement("b",null,n.totalMeals||0," "),"meals"))))});function se(e){return(se="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,l)}function c(e){i("next",e)}function l(e){i("throw",e)}c()})}}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){pe(e,t,n[t])})}return e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function de(e,t){return!t||"object"!==se(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ye(e){return(ye=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ve=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return de(a,(n=a=de(this,(e=ye(t)).call.apply(e,[this].concat(o))),a.state={isLoading:!0,users:null,error:!1,mealTitle:null},a.handleMealTypeSelected=function(e){var t=e.target.value;a.setState({meal:fe({},a.state.meal,{type:t})})},a.handleMealTextChanged=function(e){var t=e.target.value,n=fe({},a.state.meal,{title:t});a.setState({meal:n})},a.handleCreateMeal=ue(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.meal,e.next=3,k(t);case 3:return e.next=5,a.fetchFeeds();case 5:a.setState({meal:null,users:a.state.users});case 6:case"end":return e.stop()}},e,this)})),n))}var n,a,o,i,c;return n=t,(a=[{key:"componentDidMount",value:(c=ue(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchFeeds();case 2:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"fetchFeeds",value:(i=ue(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K();case 3:t=e.sent,this.setState({isLoading:!1,users:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({isLoading:!1,error:!0});case 10:case"end":return e.stop()}},e,this,[[0,7]])})),function(){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,a=n.isLoading,o=n.users,i=n.error,c=n.meal;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.userContainer},r.a.createElement(d.u,{className:t.textField,fullWidth:!0,placeholder:"What did you have to eat?",value:c&&c.title||"",onChange:this.handleMealTextChanged}),c&&c.title&&r.a.createElement("div",{className:t.mealActionContainer},r.a.createElement(d.h,{required:!0},r.a.createElement(d.m,{htmlFor:"mealtype-required"},"Meal Type"),r.a.createElement(d.t,{className:t.mealTypeSelect,value:c&&c.type||"",onChange:this.handleMealTypeSelected,name:"mealtype",inputProps:{id:"mealtype-required"}},r.a.createElement(d.s,{value:"vegan"},"Vegan"),r.a.createElement(d.s,{value:"vegetarian"},"Vegetarian"),r.a.createElement(d.s,{value:"meat"},"Meat"),r.a.createElement(d.s,{value:"junk"},"Junk Food")),r.a.createElement(d.i,null,"Required")),r.a.createElement(d.k,{color:"primary",disabled:!c||!c.type||!c.title,onClick:this.handleCreateMeal},r.a.createElement(d.j,null,"send")))),a?r.a.createElement(d.b,null):i?r.a.createElement("div",{onClick:function(){return e.fetchFeeds()}},"Error fetching feed. Tap to reload."):o.map(function(e){return r.a.createElement(le,{key:e.id,user:e,stats:e.stats,className:t.userCard})}))}}])&&he(n.prototype,a),o&&he(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");me(e.prototype,t&&t.prototype),t&&me(e,t)}(t,e),t}(a.Component),be=Object(c.withStyles)(function(e){return{root:pe({maxWidth:600},e.breakpoints.up("sm"),{margin:"0 auto"}),userContainer:pe({display:"flex",alignItems:"center",padding:"20px 0"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"flex-start",padding:20}),userAvatar:{marginRight:20},userCard:{marginBottom:10},mealTypeButton:{minWidth:128},textField:{marginRight:10},mealActionContainer:{display:"flex",alignItems:"center"},mealTypeSelect:{minWidth:128}}})(ve);function ge(e){return(ge="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,l)}function c(e){i("next",e)}function l(e){i("throw",e)}c()})}}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ke(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function xe(e,t){return!t||"object"!==ge(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Oe(e){return(Oe=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var je=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return xe(a,(n=a=xe(this,(e=Oe(t)).call.apply(e,[this].concat(o))),a.state={showDeleteAccountConfirmation:!1},a.handleDeleteAccount=function(){a.setState({showDeleteAccountConfirmation:!0})},a.handleCancelDeleteAccount=function(){a.setState({showDeleteAccountConfirmation:!1})},a.handleDeleteAccountConfirmed=we(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return e.next=4,a.handleSignout();case 4:case"end":return e.stop()}},e,this)})),n))}var n,a,o,i;return n=t,(a=[{key:"handleSignout",value:(i=we(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("error signing out",e.t0);case 8:return e.prev=8,localStorage.clear(),window.location.reload(),e.finish(8);case 12:case"end":return e.stop()}},e,this,[[0,5,8,12]])})),function(){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this.props.classes,t=this.state.showDeleteAccountConfirmation;return r.a.createElement("div",{className:e.root},r.a.createElement(d.v,{variant:"display1",gutterBottom:!0},"Settings"),r.a.createElement(d.v,{gutterBottom:!0},"Thank you for using Food Journal. If you find a bug click on the github link below and submit an issue."),r.a.createElement("div",{className:e.linkContainer},r.a.createElement("a",{className:e.link,href:"https://github.com/joeyjiron06/food-journal"},"Github"),r.a.createElement("a",{className:e.link,href:"".concat(window.location.origin+"/food-journal","/privacy-policy.html")},"Privacy Policy"),r.a.createElement("a",{className:e.link,href:"".concat(window.location.origin+"/food-journal","/terms-of-service.html")},"Terms of Service")),r.a.createElement(d.a,{className:e.button,variant:"raised",color:"secondary",onClick:this.handleSignout},"Sign out"),r.a.createElement(d.a,{variant:"raised",color:"secondary",className:e.button,onClick:this.handleDeleteAccount},"Delete Account"),t&&r.a.createElement(d.c,{open:!0},r.a.createElement(d.g,null,"Delete Account"),r.a.createElement(d.e,null,r.a.createElement(d.f,null,"Are you sure you want to delete your account? This action cannot be undone.")),r.a.createElement(d.d,null,r.a.createElement(d.a,{onClick:this.handleCancelDeleteAccount},"Cancel"),r.a.createElement(d.a,{color:"secondary",onClick:this.handleDeleteAccountConfirmed},"Delete"))))}}])&&ke(n.prototype,a),o&&ke(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Ee(e.prototype,t&&t.prototype),t&&Ee(e,t)}(t,e),t}(a.Component),Se=Object(c.withStyles)({root:{padding:"30px 20px"},link:{color:"#3f51b5",textDecoration:"underline",marginRight:10},linkContainer:{marginBottom:20},button:{marginRight:20}})(je);function Ce(e){return(Ce="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Pe(e,t,n[t])})}return e}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e,t){return(Te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function De(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _e(e,t){return!t||"object"!==Ce(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Me(e){return(Me=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Ae=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return _e(a,(n=a=_e(this,(e=Me(t)).call.apply(e,[this].concat(o))),a.state={now:v()(new Date).valueOf(),yesterday:v()(new Date).subtract(1,"day").valueOf(),twoDaysAgo:v()(new Date).subtract(2,"day").valueOf()},a.handleTitleChanged=function(e){var t=e.target.value,n=Ne({},a.state.meal,{title:t});a.setState({meal:n})},a.handleMealTypeChanged=function(e){var t=e.target.value,n=Ne({},a.state.meal,{type:t});a.setState({meal:n})},a.handleMealDateChanged=function(e){var t=e.target.value,n=Ne({},a.state.meal,{date:t});a.setState({meal:n})},a.handleConfirm=function(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,l)}function c(e){i("next",e)}function l(e){i("throw",e)}c()})}}(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.meal,e.next=3,O(t);case 3:a.props.onConfirm(t);case 4:case"end":return e.stop()}},e,this)})),a.handleOnRemoveClicked=function(){a.setState({showRemoveConfirmDialog:!0})},a.handleCancelRemove=function(){a.setState({showRemoveConfirmDialog:!1})},a.handleConfirmRemove=function(){a.setState({showRemoveConfirmDialog:!1}),function(e){S.apply(this,arguments)}(a.state.meal),a.props.onRemove(a.props.meal)},n))}var n,a,o;return n=t,(a=[{key:"componentDidMount",value:function(){this.setState({meal:Ne({},this.props.meal)})}},{key:"render",value:function(){var e=this.props,t=e.onCancel,n=e.fullScreen,a=e.classes,o=this.state,i=o.meal,c=o.showRemoveConfirmDialog,l=o.now,s=o.yesterday,u=o.twoDaysAgo,f=!!i.type&&!!i.title;return r.a.createElement(d.c,{open:!0,fullScreen:n},r.a.createElement(d.g,null,"Edit Meal"),r.a.createElement(d.e,null,r.a.createElement(d.f,null,"Edit your meal below. All fields are required."),r.a.createElement(d.u,{fullWidth:!0,label:"Name of meal",value:i.title||"",onChange:this.handleTitleChanged,margin:"normal"}),r.a.createElement(d.k,{style:{position:"absolute",top:20,right:20},color:"secondary",onClick:this.handleOnRemoveClicked},r.a.createElement(d.j,null,"delete")),r.a.createElement(d.h,{className:a.form},r.a.createElement(d.m,{htmlFor:"edit-meal-type"},"Meal Type"),r.a.createElement(d.t,{value:i.type||"",onChange:this.handleMealTypeChanged,input:r.a.createElement(d.l,{name:"Meal Type",id:"edit-meal-type"})},r.a.createElement(d.s,{value:"junk"},"Junk food"),r.a.createElement(d.s,{value:"meat"},"Meat"),r.a.createElement(d.s,{value:"vegan"},"Vegan"),r.a.createElement(d.s,{value:"vegetarian"},"Vegetarian"))),r.a.createElement(d.h,{className:a.form},r.a.createElement(d.m,{htmlFor:"edit-meal-date"},"Date"),r.a.createElement(d.t,{value:i.date||"",onChange:this.handleMealDateChanged,input:r.a.createElement(d.l,{name:"Date",id:"edit-meal-date"})},r.a.createElement(d.s,{value:l},"Today"),r.a.createElement(d.s,{value:s},"Yesterday"),r.a.createElement(d.s,{value:u},"2 days ago"),r.a.createElement(d.s,{value:this.props.meal.date},new Date(this.props.meal.date).toLocaleDateString())))),r.a.createElement(d.d,null,r.a.createElement(d.a,{color:"primary",onClick:t},"Cancel"),r.a.createElement(d.a,{color:"primary",onClick:this.handleConfirm,disabled:!f},"Confirm")),c?r.a.createElement(d.c,{open:!0},r.a.createElement(d.g,null,"Remove ".concat(i.title,"?")),r.a.createElement(d.e,null,r.a.createElement(d.f,null,"Are you sure you want to delete ",i.title,"?")),r.a.createElement(d.d,null,r.a.createElement(d.a,{onClick:this.handleCancelRemove,color:"primary"},"Cancel"),r.a.createElement(d.a,{onClick:this.handleConfirmRemove,color:"secondary"},"Remove"))):null)}}])&&De(n.prototype,a),o&&De(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Te(e.prototype,t&&t.prototype),t&&Te(e,t)}(t,e),t}(a.Component),Re=Object(d.w)({breakpoint:"xs"})(Object(c.withStyles)(function(e){return{root:{},form:{display:"inline-block",marginRight:20,marginTop:20,minWidth:120}}})(Ae));function Ie(e){return(Ie="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function We(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,l)}function c(e){i("next",e)}function l(e){i("throw",e)}c()})}}function Fe(e,t){return(Fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Le(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Be(e,t){return!t||"object"!==Ie(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ve(e){return(Ve=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Je=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return Be(a,(n=a=Be(this,(e=Ve(t)).call.apply(e,[this].concat(o))),a.state={days:null,user:null,stats:null,isLoading:!0,error:!1},a.handleMealClicked=function(e){return function(){a.setState({editMeal:e})}},a.handleCloseModal=function(){a.setState({editMeal:null})},a.handleMealConfirmed=function(){var e=We(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.handleCloseModal(),a.loadData();case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleRemoveMeal=function(e){a.handleCloseModal(),a.loadData()},n))}var n,a,o,i;return n=t,(a=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:(i=We(h.a.mark(function e(){var t,n,a,r,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,n=t&&t.params.id,e.prev=2,e.next=5,U(n);case 5:return a=e.sent,e.next=8,z(n);case 8:return r=e.sent,e.next=11,L(n);case 11:o=e.sent,this.setState({days:o,user:a,stats:r,isLoading:!1}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0),this.setState({error:e.t0,isLoading:!1});case 19:case"end":return e.stop()}},e,this,[[2,15]])})),function(){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,a=n.days,o=n.user,i=n.stats,c=n.editMeal,l=n.isLoading,s=n.error,u=o&&o.id===E().id;return r.a.createElement("div",{className:t.root},r.a.createElement("div",null,l?r.a.createElement(d.b,{color:"secondary"}):s?r.a.createElement(d.v,null,"Error fetching meals."):a.length?r.a.createElement("div",null,r.a.createElement(le,{user:o,stats:i}),r.a.createElement(d.v,{variant:"headline",className:t.mealListTitle},"Meals"),r.a.createElement(d.n,{subheader:r.a.createElement("li",null)},a.map(function(n){return r.a.createElement("li",{key:"".concat(n.date)},r.a.createElement("ul",null,r.a.createElement(d.r,{disableSticky:!0},qe(n.date)),n.meals.map(function(n){return r.a.createElement(d.o,{key:n.id,className:t.mealListItem},r.a.createElement(d.q,{primary:n.title,secondary:Ue(n.date)?"".concat(v()(n.date).fromNow()," \u2022 ").concat(n.type):n.type}),u&&r.a.createElement(d.p,null,r.a.createElement(d.k,{onClick:e.handleMealClicked(n)},r.a.createElement(d.j,null,"edit"))))})))}))):r.a.createElement(d.v,null,"No meals added!")),!!c&&r.a.createElement(Re,{meal:c,onRemove:this.handleRemoveMeal,onConfirm:this.handleMealConfirmed,onCancel:this.handleCloseModal}))}}])&&Le(n.prototype,a),o&&Le(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Fe(e.prototype,t&&t.prototype),t&&Fe(e,t)}(t,e),t}(a.Component),Ue=function(e){var t=v()(e),n=v()().startOf("day"),a=v()().endOf("day");return t.isBetween(n,a)},qe=function(e){if(Ue(e))return"Today";var t=v()(e),n=v()().startOf("day").subtract(1,"day"),a=v()().endOf("day").subtract(1,"day");return t.isBetween(n,a)?"Yesterday":(n=n.subtract(1,"day"),a=a.subtract(1,"day"),t.isBetween(n,a)?"2 days ago":e.toLocaleDateString())},ze=Object(c.withStyles)(function(e){return{root:{maxWidth:600,margin:"0 auto",paddingTop:20},mealListTitle:{padding:"20px 16px"},mealListItem:{backgroundColor:"white"}}})(Je),Qe=Object(c.withStyles)(function(e){return{root:{background:"white",padding:"10px 20px",borderBottom:"solid 1px rgba(0,0,0,0.1)",position:"sticky",top:0,zIndex:100},logo:{height:28},divider:{display:"inline-block",width:1,height:30,margin:"0 10px",background:"black",opacity:.2},content:{maxWidth:600,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}})(Object(oe.a)(function(e){var t=e.history,n=e.classes;return r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.content},r.a.createElement("div",{onClick:function(){t.push("/feeds")}},r.a.createElement("img",{className:n.logo,src:"img/logo.png",alt:"logo"}),r.a.createElement("div",{className:n.divider}),r.a.createElement("img",{className:n.logo,src:"img/logo-text.png",alt:"logo"})),r.a.createElement(ie,{user:E(),onClick:function(){t.push("/settings")}})))})),Ye=function(e){return Object(l.auth)().user?r.a.createElement("div",null,r.a.createElement(Qe,null),r.a.createElement(s.a,e)):r.a.createElement(p.a,{to:{pathname:"/",state:{from:e.location}}})},Ge=function(){return r.a.createElement(u.a,null,r.a.createElement(f.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:re}),r.a.createElement(Ye,{path:"/feeds",component:be}),r.a.createElement(Ye,{path:"/settings",component:Se}),r.a.createElement(Ye,{path:"/user/:id",component:ze}),r.a.createElement(s.a,{component:re})))};function Ke(e){return(Ke="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ze(e,t){return(Ze=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function He(e,t){return!t||"object"!==Ke(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Xe(e){return(Xe=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var et=Object(c.createMuiTheme)({});Object(l.initializeApp)({apiKey:"AIzaSyASrQ26OQZNaY9NKmEtOL1O8Uw_SdlAcNg",authDomain:"food-journal-6eb44.firebaseapp.com",databaseURL:"https://food-journal-6eb44.firebaseio.com",projectId:"food-journal-6eb44",storageBucket:"",messagingSenderId:"1056680813971"});var tt=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return He(a,(n=a=He(this,(e=Xe(t)).call.apply(e,[this].concat(o))),a.state={},n))}var n,a,o;return n=t,(a=[{key:"render",value:function(){return r.a.createElement(c.MuiThemeProvider,{theme:et},r.a.createElement(Ge,null))}}])&&$e(n.prototype,a),o&&$e(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Ze(e.prototype,t&&t.prototype),t&&Ze(e,t)}(t,e),t}(a.Component),nt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function at(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(tt,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/food-journal",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/food-journal","/service-worker.js");nt?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):at(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):at(e)})}}()},508:function(e,t,n){},519:function(e,t,n){"use strict";"undefined"===typeof Promise&&(n(518).enable(),window.Promise=n(516)),n(180),Object.assign=n(110)},520:function(e,t,n){n(519),e.exports=n(187)}},[[520,0,1]]]);
//# sourceMappingURL=main.358b1c1a.chunk.js.map