(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08c6d7bb"],{"0a49":function(t,e,n){var a=n("9b43"),r=n("626a"),i=n("4bf8"),o=n("9def"),c=n("cd1c");t.exports=function(t,e){var n=1==t,u=2==t,s=3==t,l=4==t,d=6==t,p=5==t||d,f=e||c;return function(e,c,h){for(var y,m,g=i(e),b=r(g),v=a(c,h,3),L=o(b.length),C=0,O=n?f(e,L):u?f(e,0):void 0;L>C;C++)if((p||C in b)&&(y=b[C],m=v(y,C,g),t))if(n)O[C]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return C;case 2:O.push(y)}else if(l)return!1;return d?-1:s||l?l:O}}},1:function(t,e){},1169:function(t,e,n){var a=n("2d95");t.exports=Array.isArray||function(t){return"Array"==a(t)}},2:function(t,e){},"20d6":function(t,e,n){"use strict";var a=n("5ca1"),r=n("0a49")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},2934:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"n",(function(){return o})),n.d(e,"m",(function(){return c})),n.d(e,"o",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return y})),n.d(e,"a",(function(){return m})),n.d(e,"l",(function(){return g})),n.d(e,"d",(function(){return b}));var a=n("b775");function r(t){return Object(a["a"])({url:"/dicCode/queryAdminDicByType?type=".concat(t),method:"post"})}function i(t){return Object(a["a"])({url:"/dicCode/addDicCode",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/dicCode/queryDicValueByType",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/dicCode/queryDicById",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/dicCode/updateDicCode",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/dicCode/deleteDicCode",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/dicCode/queryAdminDicByType?type=CITY&parentId=".concat(t),method:"post"})}function d(t){return Object(a["a"])({url:"/dicCode/queryAdminDicByType?type=district&parentId=".concat(t),method:"post"})}function p(t){return Object(a["a"])({url:"/dicCode/queryAdminDicByType?type=EQUI_MODEL&parentId=".concat(t),method:"post"})}function f(t){return Object(a["a"])({url:"/dicCode/queryAdminDicByType?type=PARTS_TYPE_TWO&parentId=".concat(t),method:"post"})}function h(t){return Object(a["a"])({url:"/dicCode/queryAdminDicByType?type=PARTS_TYPE_THREE&parentId=".concat(t),method:"post"})}function y(t){return Object(a["a"])({url:"/dicCode/getList?types=".concat(t),method:"post"})}function m(t){return Object(a["a"])({url:"/applyJob/addApplyRecord",method:"post",data:t})}function g(t){return Object(a["a"])({url:"/applyJob/queryApplyJobGroup",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/excel/uploadExcel",method:"post",data:t})}},3:function(t,e){},"706c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"pageContainer",staticClass:"pageContainer"},[n("div",{ref:"pageSearch",staticClass:"pageSearch"},[n("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("el-collapse-item",{attrs:{title:"结果筛选",name:"1"}},[n("div",{staticClass:"searchRow"},[n("span",[n("span",[t._v("产品线：")]),n("span",{staticClass:"searchItem"},[n("el-select",{attrs:{placeholder:"请选择",size:"small",clearable:""},on:{change:t.productLineChange},model:{value:t.pageQuery.productLine,callback:function(e){t.$set(t.pageQuery,"productLine",e)},expression:"pageQuery.productLine"}},t._l(t.productLines,(function(t,e){return n("el-option",{key:e,attrs:{label:t.lable,value:t.value}})})),1)],1)]),n("span",[n("span",[t._v("型号：")]),n("span",{staticClass:"searchItem"},[n("el-select",{attrs:{disabled:t.disabledModel,placeholder:"请选择",size:"small",clearable:""},model:{value:t.pageQuery.model,callback:function(e){t.$set(t.pageQuery,"model",e)},expression:"pageQuery.model"}},t._l(t.models,(function(t){return n("el-option",{key:t.id,attrs:{label:t.lable,value:t.lable}})})),1)],1)]),n("span",[n("span",[t._v("开始时间：")]),n("span",[n("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"开始时间",size:"small"},model:{value:t.pageQuery.startTime,callback:function(e){t.$set(t.pageQuery,"startTime",e)},expression:"pageQuery.startTime"}})],1)]),n("span",[n("span",[t._v("结束时间：")]),n("span",[n("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"结束时间",size:"small"},model:{value:t.pageQuery.endTime,callback:function(e){t.$set(t.pageQuery,"endTime",e)},expression:"pageQuery.endTime"}})],1)]),n("span",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.commonSearch()}}},[t._v("筛选")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.excelBtn()}}},[t._v("批量导出")]),n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.returnBtn()}}},[t._v("返回")])],1)])])],1)],1),n("div",{staticClass:"tableRow"},[t._m(0),n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"productLineStatisList",attrs:{"element-loading-text":"数据查询中请稍后。。。",data:t.productLineStatisList,fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"60"}}),n("el-table-column",{attrs:{property:"productLine",label:"产品线",align:"center"}}),n("el-table-column",{attrs:{property:"AZ",label:"安装数量",align:"center"}}),n("el-table-column",{attrs:{property:"WX",label:"维修数量",align:"center"}}),n("el-table-column",{attrs:{property:"HF",label:"回访数量",align:"center"}}),n("el-table-column",{attrs:{property:"PX",label:"培训数量",align:"center"}}),n("el-table-column",{attrs:{property:"ZX",label:"专项数量",align:"center"}}),n("el-table-column",{attrs:{property:"WL",label:"物料领用",align:"center"}})],1)],1),n("div",{staticClass:"tableBottom"},[n("div"),n("div",{ref:"paginationContainer",staticClass:"paginationContainer"},[n("el-pagination",{attrs:{small:"",background:"","prev-text":"上一页","next-text":"下一页","current-page":t.pageQuery.page,"page-sizes":t.pageSizes,"page-size":t.pageQuery.rows,layout:"prev, pager, next, total, sizes, jumper",total:t.pageQuery.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tableTitle"},[n("span",[n("i",{staticClass:"el-icon-news"}),n("span",[t._v("产品线-列表统计")])])])}],i=(n("ac6a"),n("7514"),n("20d6"),n("f855")),o=n("2934"),c=n("1146"),u=n.n(c),s={filters:{dicFilter:function(t,e){var n=e.findIndex((function(e){return t==e.value}));return n>-1?e[n].lable:t}},data:function(){return{activeNames:["1"],productLineStatisList:[],productLineStatisList1:[],multipleSelection:[],pageQuery:{productLine:"",model:"",totalCount:0,page:1,rows:10,startTime:"",endTime:""},productLines:[],disabledModel:!0,models:[],listLoading:!0,tableHeight:250,pageSizes:[10,20,30]}},mounted:function(){this.fetchListData(),this.fetchAllDict()},methods:{fetchAllDict:function(){var t=this,e="PRODUCT_LINE,EQUI_MODEL";Object(o["e"])(e).then((function(e){t.productLines=e.data.PRODUCT_LINE,t.models=e.data.EQUI_MODEL}))},productLineChange:function(t){var e=this;this.pageQuery.model="",this.disabledModel=!0;var n={};if(n=this.productLines.find((function(e){return e.value===t})),void 0!=n){var a=n.id;this.disabledModel=!1,Object(o["h"])(a).then((function(t){"{}"!=JSON.stringify(t.data)?e.models=t.data.EQUI_MODEL:e.models=[]}))}},fetchListData:function(){var t=this;this.listLoading=!0,Object(i["f"])(this.pageQuery).then((function(e){console.log(e),t.productLineStatisList=e.data.list,t.pageQuery.totalCount=e.data.total,t.listLoading=!1}))},handleSizeChange:function(t){this.pageQuery.page=1,this.pageQuery.rows=t,this.fetchListData()},handleCurrentChange:function(t){this.pageQuery.page=t,this.pageQuery.productLine="",this.fetchListData()},commonSearch:function(){var t=this;this.listLoading=!0;var e=this.pageQuery;""==this.pageQuery.productLine?this.pageQuery.page=1:delete this.pageQuery.page,Object(i["f"])(e).then((function(e){t.productLineStatisList=e.data.list,t.pageQuery.totalCount=e.data.total,t.listLoading=!1}))},handleSelectionChange:function(t){this.multipleSelection=t},allSelect:function(){this.$refs.productLineStatisList.toggleAllSelection()},cancelSelect:function(){this.$refs.productLineStatisList.clearSelection()},reverseSelect:function(t){var e=this;t&&t.forEach((function(t){e.$refs.productLineStatisList.toggleRowSelection(t)}))},excelBtn:function(){var t=this,e={};e=""==this.pageQuery.productLine?{productLine:this.pageQuery.productLine,model:this.pageQuery.model,totalCount:0,page:1,rows:1e6}:{productLine:this.pageQuery.productLine,model:this.pageQuery.model,totalCount:0,rows:1e6},Object(i["f"])(e).then((function(e){if(t.productLineStatisList1=e.data.list,0==t.productLineStatisList1.length)t.$message.warning("没有要导出的数据");else{var n=[["产品线","安装数量","维修数量","回访数量","培训数量","专项数量","物料领用"]];t.productLineStatisList1.map((function(t){var e=[];e.push(t.productLine),e.push(t.AZ),e.push(t.WX),e.push(t.HF),e.push(t.PX),e.push(t.ZX),e.push(t.WL),n.push(e)}));var a=u.a.utils.book_new(),r=u.a.utils.aoa_to_sheet(n);u.a.utils.book_append_sheet(a,r,"产品线-列表统计"),u.a.writeFile(a,"产品线-列表统计.xlsx")}}))},returnBtn:function(){this.$router.push({name:"ProductLineStatis"})}},destroyed:function(){window.onresize=null}},l=s,d=n("2877"),p=Object(d["a"])(l,a,r,!1,null,null,null);e["default"]=p.exports},7514:function(t,e,n){"use strict";var a=n("5ca1"),r=n("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},cd1c:function(t,e,n){var a=n("e853");t.exports=function(t,e){return new(a(t))(e)}},e853:function(t,e,n){var a=n("d3f4"),r=n("1169"),i=n("2b4c")("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),a(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},f855:function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var a=n("b775");function r(t){return Object(a["a"])({url:"dataStatistics/queryProductlineCountPic",method:"post",data:t})}function i(t){return Object(a["a"])({url:"dataStatistics/queryProductlineCountForm",method:"post",data:t})}function o(t){return Object(a["a"])({url:"dataStatistics/queryOrderPic",method:"post",data:t})}function c(t){return Object(a["a"])({url:"dataStatistics/queryOrderForm",method:"post",data:t})}function u(t){return Object(a["a"])({url:"dataStatistics/queryOnlinePic",method:"post",data:t})}function s(t){return Object(a["a"])({url:"dataStatistics/queryOnlineForm",method:"post",data:t})}function l(t){return Object(a["a"])({url:"dataStatistics/queryEmployeeOrderPic",method:"post",data:t})}}}]);