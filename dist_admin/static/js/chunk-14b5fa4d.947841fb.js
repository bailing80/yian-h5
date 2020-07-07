(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14b5fa4d"],{1:function(e,t){},"1f13":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"pageContainer",staticClass:"pageContainer"},[a("div",{ref:"pageSearch",staticClass:"pageSearch"},[a("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"结果筛选",name:"1"}},[a("div",{staticClass:"searchRow"},[a("span",[a("span",[e._v("用户类型：")]),a("span",{staticClass:"searchItem"},[a("el-select",{attrs:{placeholder:"请选择",size:"small",clearable:""},model:{value:e.pageQuery.userType,callback:function(t){e.$set(e.pageQuery,"userType",t)},expression:"pageQuery.userType"}},[a("el-option",{attrs:{label:"员工",value:"1"}}),a("el-option",{attrs:{label:"医院",value:"2"}}),a("el-option",{attrs:{label:"渠道",value:"3"}})],1)],1)]),a("span",[a("span",[e._v("用户名称：")]),a("span",{staticClass:"searchItem"},[a("el-input",{attrs:{size:"small",clearable:""},model:{value:e.pageQuery.staffName,callback:function(t){e.$set(e.pageQuery,"staffName",t)},expression:"pageQuery.staffName"}})],1)]),a("span",{staticClass:"kaishi"},[a("span",[e._v("开始时间：")]),a("span",{staticClass:"searchItem"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",size:"small"},model:{value:e.pageQuery.startTime,callback:function(t){e.$set(e.pageQuery,"startTime",t)},expression:"pageQuery.startTime"}})],1)]),a("span",{staticClass:"kaishi"},[a("span",[e._v("结束时间：")]),a("span",{staticClass:"searchItem"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期",size:"small"},model:{value:e.pageQuery.endTime,callback:function(t){e.$set(e.pageQuery,"endTime",t)},expression:"pageQuery.endTime"}})],1)]),a("span",{staticClass:"anniu"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(t){return e.commonSearch()}}},[e._v("筛选")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.excelBtn()}}},[e._v("批量导出")]),a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.returnBtn()}}},[e._v("返回")])],1)])])],1)],1),a("div",{staticClass:"tableRow"},[e._m(0),a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"userOnlineStatisList",attrs:{"element-loading-text":"Loading",data:e.userOnlineStatisList,fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"60"}}),a("el-table-column",{attrs:{property:"userType",label:"用户类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.userType?a("span",[e._v("员工")]):e._e(),2==t.row.userType?a("span",[e._v("医院")]):e._e(),3==t.row.userType?a("span",[e._v("渠道")]):e._e()]}}])}),a("el-table-column",{attrs:{property:"staffName",label:"用户名称",align:"center"}}),a("el-table-column",{attrs:{property:"onlineCount",label:"上线次数",align:"center"}}),a("el-table-column",{attrs:{property:"onlineTime",label:"上线时间",align:"center"}})],1)],1),a("div",{staticClass:"tableBottom"},[a("div"),a("div",{ref:"paginationContainer",staticClass:"paginationContainer"},[a("el-pagination",{attrs:{small:"",background:"","prev-text":"上一页","next-text":"下一页","current-page":e.pageQuery.page,"page-sizes":e.pageSizes,"page-size":e.pageQuery.rows,layout:"prev, pager, next, total, sizes, jumper",total:e.pageQuery.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tableTitle"},[a("span",[a("i",{staticClass:"el-icon-news"}),a("span",[e._v("用户上线-列表统计")])])])}],i=(a("7f7f"),a("ac6a"),a("f855")),r=a("1146"),l=a.n(r),o={data:function(){return{activeNames:["1"],userOnlineStatisList:[],pageQuery:{userType:"",staffName:"",startTime:"",endTime:"",totalCount:0,page:1,rows:10},usernametype:[{id:1,name:"员工"},{id:2,name:"医院"},{id:3,name:"渠道"}],listLoading:!0,tableHeight:250,pageSizes:[10,20,30]}},mounted:function(){this.fetchListData()},methods:{fetchListData:function(){var e=this;this.listLoading=!0;var t=this.pageQuery;Object(i["b"])(t).then((function(t){e.userOnlineStatisList=t.data.list,e.pageQuery.totalCount=t.data.total,e.listLoading=!1}))},handleSizeChange:function(e){this.pageQuery.page=1,this.pageQuery.rows=e,this.fetchListData()},handleCurrentChange:function(e){this.pageQuery.page=e,this.fetchListData()},commonSearch:function(){var e=this;this.listLoading=!0;var t=this.pageQuery;Object(i["b"])(t).then((function(t){e.userOnlineStatisList=t.data.list,e.pageQuery.totalCount=t.data.total,e.listLoading=!1}))},handleSelectionChange:function(e){this.multipleSelection=e},allSelect:function(){this.$refs.userOnlineStatisList.toggleAllSelection()},cancelSelect:function(){this.$refs.userOnlineStatisList.clearSelection()},reverseSelect:function(e){var t=this;e&&e.forEach((function(e){t.$refs.userOnlineStatisList.toggleRowSelection(e)}))},excelBtn:function(){var e=this;this.pageQuery.rows=1e5,Object(i["b"])(this.pageQuery).then((function(t){if(e.pageQuery.rows=10,0==t.data.list.length)e.$message.warning("没有要导出的数据");else{for(var a=0;a<=t.data.list.length-1;a++)for(var n=0;n<=e.usernametype.length-1;n++)t.data.list[a].userType==e.usernametype[n].id&&(t.data.list[a].userType=e.usernametype[n].name);var s=[["用户类型","用户名称","上线次数","上线时间"]];t.data.list.map((function(e){var t=[];t.push(e.userType),t.push(e.staffName),t.push(e.onlineCount),t.push(e.onlineTime),s.push(t)}));var i=l.a.utils.book_new(),r=l.a.utils.aoa_to_sheet(s);l.a.utils.book_append_sheet(i,r,"用户上线-列表统计"),l.a.writeFile(i,"用户上线-列表统计.xlsx")}}))},returnBtn:function(){this.$router.push({name:"UserOnlineStatis"})}},destroyed:function(){window.onresize=null}},u=o,c=(a("83e2"),a("2877")),p=Object(c["a"])(u,n,s,!1,null,"2d850c01",null);t["default"]=p.exports},2:function(e,t){},3:function(e,t){},"83e2":function(e,t,a){"use strict";var n=a("f2b7"),s=a.n(n);s.a},f2b7:function(e,t,a){},f855:function(e,t,a){"use strict";a.d(t,"g",(function(){return s})),a.d(t,"f",(function(){return i})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return c}));var n=a("b775");function s(e){return Object(n["a"])({url:"dataStatistics/queryProductlineCountPic",method:"post",data:e})}function i(e){return Object(n["a"])({url:"dataStatistics/queryProductlineCountForm",method:"post",data:e})}function r(e){return Object(n["a"])({url:"dataStatistics/queryOrderPic",method:"post",data:e})}function l(e){return Object(n["a"])({url:"dataStatistics/queryOrderForm",method:"post",data:e})}function o(e){return Object(n["a"])({url:"dataStatistics/queryOnlinePic",method:"post",data:e})}function u(e){return Object(n["a"])({url:"dataStatistics/queryOnlineForm",method:"post",data:e})}function c(e){return Object(n["a"])({url:"dataStatistics/queryEmployeeOrderPic",method:"post",data:e})}}}]);