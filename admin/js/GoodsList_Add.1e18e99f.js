(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GoodsList_Add"],{1276:function(e,t,r){"use strict";var a=r("d784"),n=r("44e7"),o=r("825a"),s=r("1d80"),i=r("4840"),l=r("8aa5"),c=r("50c4"),u=r("14c3"),d=r("9263"),p=r("d039"),g=[].push,f=Math.min,h=4294967295,m=!p((function(){return!RegExp(h,"y")}));a("split",2,(function(e,t,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var a=String(s(this)),o=void 0===r?h:r>>>0;if(0===o)return[];if(void 0===e)return[a];if(!n(e))return t.call(a,e,o);var i,l,c,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,m=new RegExp(e.source,p+"g");while(i=d.call(m,a)){if(l=m.lastIndex,l>f&&(u.push(a.slice(f,i.index)),i.length>1&&i.index<a.length&&g.apply(u,i.slice(1)),c=i[0].length,f=l,u.length>=o))break;m.lastIndex===i.index&&m.lastIndex++}return f===a.length?!c&&m.test("")||u.push(""):u.push(a.slice(f)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var n=s(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,n,r):a.call(String(n),t,r)},function(e,n){var s=r(a,e,this,n,a!==t);if(s.done)return s.value;var d=o(e),p=String(this),g=i(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),x=new g(m?d:"^(?:"+d.source+")",v),_=void 0===n?h:n>>>0;if(0===_)return[];if(0===p.length)return null===u(x,p)?[p]:[];var y=0,w=0,k=[];while(w<p.length){x.lastIndex=m?w:0;var I,R=u(x,m?p:p.slice(w));if(null===R||(I=f(c(x.lastIndex+(m?0:w)),p.length))===y)w=l(p,w,b);else{if(k.push(p.slice(y,w)),k.length===_)return k;for(var F=1;F<=R.length-1;F++)if(k.push(R[F]),k.length===_)return k;w=y=I}}return k.push(p.slice(y)),k}]}),!m)},"14c3":function(e,t,r){var a=r("c6b6"),n=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"44e7":function(e,t,r){var a=r("861d"),n=r("c6b6"),o=r("b622"),s=o("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==n(e))}},"4f9b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{separator:">"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("商品管理")]),r("el-breadcrumb-item",[e._v("添加商品")])],1),r("el-card",[r("el-alert",{attrs:{title:"添加商品信息",closable:!1,type:"info",center:"","show-icon":""}}),r("el-steps",{attrs:{space:200,"align-center":"",active:e.activeIndex-0,"finish-status":"success"}},[r("el-step",{attrs:{title:"基本信息"}}),r("el-step",{attrs:{title:"商品参数"}}),r("el-step",{attrs:{title:"商品属性"}}),r("el-step",{attrs:{title:"商品图片"}}),r("el-step",{attrs:{title:"商品内容"}}),r("el-step",{attrs:{title:"完成"}})],1),r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"100px","label-position":"top"}},[r("el-tabs",{attrs:{"tab-position":"left","before-leave":e.beforeTabLeave},on:{"tab-click":e.tabClicked},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{model:{value:e.addForm.goods_name,callback:function(t){e.$set(e.addForm,"goods_name",t)},expression:"addForm.goods_name"}})],1),r("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_price,callback:function(t){e.$set(e.addForm,"goods_price",t)},expression:"addForm.goods_price"}})],1),r("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[r("el-input",{model:{value:e.addForm.goods_weight,callback:function(t){e.$set(e.addForm,"goods_weight",t)},expression:"addForm.goods_weight"}})],1),r("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_number,callback:function(t){e.$set(e.addForm,"goods_number",t)},expression:"addForm.goods_number"}})],1),r("el-form-item",{attrs:{label:"商品分类",prop:"goods_cat"}},[r("el-cascader",{attrs:{options:e.cateList,props:e.cateProps},on:{change:e.handleChange},model:{value:e.addForm.goods_cat,callback:function(t){e.$set(e.addForm,"goods_cat",t)},expression:"addForm.goods_cat"}})],1)],1),r("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},e._l(e.manyTableData,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-checkbox-group",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}},e._l(t.attr_vals,(function(e,t){return r("el-checkbox",{key:t,attrs:{border:"",label:e}})})),1)],1)})),1),r("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},e._l(e.onlyTableData,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-input",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}})],1)})),1),r("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[r("el-upload",{attrs:{action:e.uploadURL,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"list-type":"picture",headers:e.headerObj,"on-success":e.handleSuccess}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),r("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[r("quill-editor",{model:{value:e.addForm.goods_introduce,callback:function(t){e.$set(e.addForm,"goods_introduce",t)},expression:"addForm.goods_introduce"}}),r("el-button",{staticClass:"btnAdd",attrs:{type:"primary"},on:{click:e.add}},[e._v("添加商品")])],1)],1)],1)],1),r("el-dialog",{attrs:{title:"图片预览",visible:e.previewVisible,width:"50%"},on:{"update:visible":function(t){e.previewVisible=t}}},[r("img",{staticClass:"previewimg",attrs:{src:e.previewPath,alt:""}})])],1)},n=[],o=(r("c740"),r("4160"),r("a15b"),r("a434"),r("ac1f"),r("1276"),r("159b"),r("96cf"),r("1da1")),s=r("60bb"),i=r.n(s),l={data:function(){return{activeIndex:"0",addForm:{goods_name:"",goods_price:0,goods_weight:0,goods_number:0,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},addFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_cat:[{required:!0,message:"请选中商品分类",trigger:"blur"}]},cateList:[],cateProps:{label:"cat_name",value:"cat_id",children:"children"},manyTableData:[],onlyTableData:[],uploadURL:"https://www.liulongbin.top:8888/api/private/v1/upload",headerObj:{Authorization:window.sessionStorage.getItem("token")},previewPath:"",previewVisible:!1}},created:function(){this.getCateList()},methods:{getCateList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("categories");case 2:if(t=e.sent,r=t.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",this.$message.error("获取商品分类失败"));case 6:this.cateList=r.data;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleChange:function(){3!==this.addForm.goods_cat.length&&(this.addForm.goods_cat=[])},beforeTabLeave:function(e,t){if("0"===t&&3!==this.addForm.goods_cat.length)return this.$message.error("请先选择商品分类"),!1},tabClicked:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("1"!==this.activeIndex){e.next=11;break}return e.next=3,this.$http.get("categories/".concat(this.cateId,"[2]/attributes"),{params:{sel:"many"}});case 3:if(t=e.sent,r=t.data,200===r.meta.status){e.next=7;break}return e.abrupt("return",this.$message.error("获取动态参数列表失败"));case 7:r.data.forEach((function(e){e.attr_vals=0===e.attr_vals.length?[]:e.attr_vals.split(" ")})),this.manyTableData=r.data,e.next=19;break;case 11:if("2"!==this.activeIndex){e.next=19;break}return e.next=14,this.$http.get("categories/".concat(this.cateId,"[2]/attributes"),{params:{sel:"only"}});case 14:if(a=e.sent,n=a.data,200===n.meta.status){e.next=18;break}return e.abrupt("return",this.$message.error("获取静态属性列表失败"));case 18:this.onlyTableData=n.data;case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handlePreview:function(e){this.previewPath=e.response.data.url,this.previewVisible=!0},handleRemove:function(e){var t=e.response.data.tmp_path,r=this.addForm.pics.findIndex((function(e){return e.pic===t}));this.addForm.pics.splice(r,1)},handleSuccess:function(e){var t={pic:e.data.tmp_path};this.addForm.pics.push(t)},add:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("请填写必要的表单项！"));case 2:return a=i.a.cloneDeep(e.addForm),a.goods_cat=a.goods_cat.join(","),e.manyTableData.forEach((function(t){var r={arrt_id:t.attr_id,attr_value:t.attr_vals.join(",")};e.addForm.attrs.push(r)})),e.onlyTableData.forEach((function(t){var r={arrt_id:t.attr_id,attr_value:t.attr_vals};e.addForm.attrs.push(r)})),a.attrs=e.addForm.attrs,t.next=9,e.$http.post("goods",a);case 9:if(n=t.sent,o=n.data,201===o.meta.status){t.next=13;break}return t.abrupt("return",e.$message.error("添加商品失败"));case 13:e.$message.success("添加商品成功"),e.$touter.push("/goods");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},computed:{cateId:function(){return 3===this.addForm.goods_cat.length?this.addForm.goods_cat[2]:null}}},c=l,u=(r("98d3"),r("2877")),d=Object(u["a"])(c,a,n,!1,null,"acdbc27c",null);t["default"]=d.exports},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9263:function(e,t,r){"use strict";var a=r("ad6d"),n=r("9f7f"),o=RegExp.prototype.exec,s=String.prototype.replace,i=o,l=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(i=function(e){var t,r,n,i,d=this,p=c&&d.sticky,g=a.call(d),f=d.source,h=0,m=e;return p&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),m=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(f="(?: "+f+")",m=" "+m,h++),r=new RegExp("^(?:"+f+")",g)),u&&(r=new RegExp("^"+f+"$(?!\\s)",g)),l&&(t=d.lastIndex),n=o.call(p?r:d,m),p?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:l&&n&&(d.lastIndex=d.global?n.index+n[0].length:t),u&&n&&n.length>1&&s.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n}),e.exports=i},"98d3":function(e,t,r){"use strict";var a=r("d47b"),n=r.n(a);n.a},"9f7f":function(e,t,r){"use strict";var a=r("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("23cb"),o=r("a691"),s=r("50c4"),i=r("7b0b"),l=r("65f0"),c=r("8418"),u=r("1dde"),d=r("ae40"),p=u("splice"),g=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,m=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!g},{splice:function(e,t){var r,a,u,d,p,g,v=i(this),x=s(v.length),_=n(e,x),y=arguments.length;if(0===y?r=a=0:1===y?(r=0,a=x-_):(r=y-2,a=h(f(o(t),0),x-_)),x+r-a>m)throw TypeError(b);for(u=l(v,a),d=0;d<a;d++)p=_+d,p in v&&c(u,d,v[p]);if(u.length=a,r<a){for(d=_;d<x-a;d++)p=d+a,g=d+r,p in v?v[g]=v[p]:delete v[g];for(d=x;d>x-a+r;d--)delete v[d-1]}else if(r>a)for(d=x-a;d>_;d--)p=d+a-1,g=d+r-1,p in v?v[g]=v[p]:delete v[g];for(d=0;d<r;d++)v[d+_]=arguments[d+2];return v.length=x-a+r,u}})},ac1f:function(e,t,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},c740:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").findIndex,o=r("44d2"),s=r("ae40"),i="findIndex",l=!0,c=s(i);i in[]&&Array(1)[i]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!c},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o(i)},cb38:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{separator:">"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("商品管理")]),r("el-breadcrumb-item",[e._v("商品列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:15}},[r("el-col",{attrs:{span:8}},[r("div",[r("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},on:{clear:e.getGoodList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getGoodList},slot:"append"})],1)],1)]),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:e.goAddpage}},[e._v("添加商品")])],1)],1),r("el-table",{attrs:{data:e.goodList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"商品名称",prop:"goods_name"}}),r("el-table-column",{attrs:{label:"商品价格(元)",prop:"goods_price",width:"100px"}}),r("el-table-column",{attrs:{label:"商品重量",prop:"goods_weight",width:"70px"}}),r("el-table-column",{attrs:{label:"创建时间",width:"140px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dataFormat")(t.row.add_time))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",width:"130px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"}}),r("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(r){return e.removeById(t.row.goods_id)}}})]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,5,10,15],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},n=[],o=(r("96cf"),r("1da1")),s={data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:10},goodList:[],total:0}},created:function(){this.getGoodList()},methods:{getGoodList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("goods",{params:this.queryInfo});case 2:if(t=e.sent,r=t.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",this.$message.error("获取失败"));case 6:this.goodList=r.data.goods,this.total=r.data.total;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getGoodList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getGoodList()},removeById:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(r=e.sent,"confirm"===r){e.next=5;break}return e.abrupt("return",this.$message.error("已经取消删除"));case 5:return e.next=7,this.$http.delete("goods/".concat(t));case 7:if(a=e.sent,n=a.data,200===n.meta.status){e.next=11;break}return e.abrupt("return",this.$message.error("删除失败"));case 11:this.$message.success("删除成功 "),this.getGoodList();case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),goAddpage:function(){this.$router.push("/goods/add")}}},i=s,l=r("2877"),c=Object(l["a"])(i,a,n,!1,null,"2c5faaf3",null);t["default"]=c.exports},d47b:function(e,t,r){},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),o=r("b622"),s=r("9263"),i=r("9112"),l=o("species"),c=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var g=o(e),f=!n((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),h=f&&!n((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!f||!h||"replace"===e&&(!c||!u)||"split"===e&&!d){var m=/./[g],b=r(g,""[e],(function(e,t,r,a,n){return t.exec===s?f&&!n?{done:!0,value:m.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u}),v=b[0],x=b[1];a(String.prototype,e,v),a(RegExp.prototype,g,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}p&&i(RegExp.prototype[g],"sham",!0)}}}]);
//# sourceMappingURL=GoodsList_Add.1e18e99f.js.map