(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Order_Report"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,u,"next",t)}function u(t){n(i,o,a,s,u,"throw",t)}s(void 0)}))}}},4554:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{separator:">"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("数据统计")]),r("el-breadcrumb-item",[t._v("数据报表")])],1),r("el-card",[r("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"main"}})])],1)},o=[],a=(r("96cf"),r("1da1")),i=r("164e"),s=r.n(i),u=r("60bb"),c=r.n(u),l={data:function(){return{options:{title:{text:"用户报表"},tooltip:{trigger:"axis"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{},yAxis:{type:"value"},series:[]}}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=s.a.init(document.getElementById("main")),t.next=3,this.$http.get("reports/type/1");case 3:if(r=t.sent,n=r.data,200===n.meta.status){t.next=7;break}return t.abrupt("return",this.$message.error("获取图表数据错误"));case 7:o=c.a.merge(n.data,this.options),e.setOption(o);case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},d=l,h=r("2877"),f=Object(h["a"])(d,n,o,!1,null,"6197e393",null);e["default"]=f.exports},6443:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{separator:">"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("订单管理")]),r("el-breadcrumb-item",[t._v("订单列表")])],1),r("el-card",[r("el-row",[r("el-col",{attrs:{span:8}},[r("div",[r("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},on:{clear:t.getOrderList},model:{value:t.queryInfo.query,callback:function(e){t.$set(t.queryInfo,"query",e)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getOrderList},slot:"append"})],1)],1)])],1),r("el-table",{attrs:{data:t.orderList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"订单编号",prop:"order_number"}}),r("el-table-column",{attrs:{label:"订单价格",prop:"order_price"}}),r("el-table-column",{attrs:{label:"是否付款",prop:"pay_status"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"===e.row.pay_status?r("el-tag",{attrs:{type:"success"}},[t._v("已付款")]):r("el-tag",{attrs:{type:"danger"}},[t._v("未付款")])]}}])}),r("el-table-column",{attrs:{label:"是否发货",prop:"is_send"}}),r("el-table-column",{attrs:{label:"下单时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("dataFormat")(e.row.create_time))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作"}},[[r("el-button",{attrs:{icon:"el-icon-edit",type:"primary",size:"mini"},on:{click:t.showBox}}),r("el-button",{attrs:{icon:"el-icon-location",type:"success",size:"mini"}})]],2)],1),r("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[1,5,10,15],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"修改地址",visible:t.addressVisible,width:"50%"},on:{"update:visible":function(e){t.addressVisible=e},close:t.addressDialogClosed}},[r("el-form",{ref:"addressFormRef",attrs:{model:t.addressForm,rules:t.addressRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"省市区/县",prop:"address"}},[r("el-input",{model:{value:t.addressForm.address,callback:function(e){t.$set(t.addressForm,"address",e)},expression:"addressForm.address"}})],1),r("el-form-item",{attrs:{label:"详细地址",prop:"address1"}},[r("el-input",{model:{value:t.addressForm.address1,callback:function(e){t.$set(t.addressForm,"address1",e)},expression:"addressForm.address1"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addressVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addressVisible=!1}}},[t._v("确 定")])],1)],1)],1)},o=[],a=(r("96cf"),r("1da1")),i={data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:5},total:0,orderList:[],addressVisible:!1,addressForm:{address:[],address1:""},addressFormRules:{address:[{required:!0,message:"请选择省市区县",trigger:"blur"}],address1:[{required:!0,message:"请填写详细信息",trigger:"blur"}]}}},created:function(){this.getOrderList()},methods:{getOrderList:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("orders",{params:this.queryInfo});case 2:if(e=t.sent,r=e.data,200===r.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error("获取订单列表失败"));case 6:this.total=r.data.total,this.orderList=r.data.goods;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSizeChange:function(t){this.queryInfo.pagesize=t,this.getOrderList()},handleCurrentChange:function(t){this.queryInfo.pagenum=t,this.getOrderList()},showBox:function(){this.addressVisible=!0},addressDialogClosed:function(){this.$refs.addressFormRef.resetFields()}}},s=i,u=r("2877"),c=Object(u["a"])(s,n,o,!1,null,"1d40d13e",null);e["default"]=c.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=E(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l="suspendedStart",d="suspendedYield",h="executing",f="completed",p={};function m(){}function y(){}function g(){}var v={};v[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(q([])));w&&w!==r&&n.call(w,a)&&(v=w);var x=g.prototype=m.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(r,o,a,i){var s=c(t[r],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(s.arg)}var r;function o(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=o}function E(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw a;return I()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=c(t,e,r);if("normal"===u.type){if(n=r.done?f:d,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=f,r.method="throw",r.arg=u.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=c(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function q(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,g[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var a=new L(u(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),x[s]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=q,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:q(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=Order_Report-legacy.6a3fb3fc.js.map