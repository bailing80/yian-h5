(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ac68c8b"],{"0489":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"pageContainer",staticClass:"pageContainer"},[n("div",{ref:"pageSearch",staticClass:"pageSearch"},[n("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("el-collapse-item",{attrs:{title:"工单详情",name:"1"}},[n("div",{staticStyle:{padding:"20px 50px"}},[n("img",{staticStyle:{display:"block",width:"65%",height:"100%"},attrs:{src:t.imgrul,alt:""}})]),n("div",{staticStyle:{padding:"10px 0",display:"flex","justify-content":"center","z-index":"9999"}},[n("a",{staticStyle:{"margin-right":"10px"},attrs:{href:t.pdfURL+"/"+t.item1,target:"_blank"}},[n("el-button",{attrs:{type:"primary",size:"small"}},[t._v("查看并下载")])],1),n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.returnBtn()}}},[t._v("返回")])],1)])],1)],1)])},u=[],o=(n("28a5"),n("350a")),c=n("858e"),i={components:{pdf:c["a"]},data:function(){return{activeNames:["1"],pdfList:[],numPages:[],imgrul:"",item1:"",imgURL:this.$store.state.settings.imgURL,pdfURL:this.$store.state.settings.pdfURL}},mounted:function(){this.getPdf()},methods:{getPdf:function(){var t=this,e=this.$route.query.sendData;Object(o["K"])(e).then((function(e){var n=e.data.split(";");t.item1=n[0],t.pdfimglist=e.data;var r=Math.ceil(1e5*Math.random()),u=t.pdfimglist.slice(4,t.pdfimglist.indexOf("."));t.imgrul=""!=u?t.pdfURL+"/images/"+u+".jpg?"+r:"",t.numPages=2}))},returnBtn:function(){this.$router.push({name:"SendOrdersList"})}},destroyed:function(){window.onresize=null}},a=i,d=n("2877"),s=Object(d["a"])(a,r,u,!1,null,null,null);e["default"]=s.exports},10:function(t,e){},11:function(t,e){},"350a":function(t,e,n){"use strict";n.d(e,"y",(function(){return u})),n.d(e,"r",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"t",(function(){return i})),n.d(e,"x",(function(){return a})),n.d(e,"Q",(function(){return d})),n.d(e,"h",(function(){return s})),n.d(e,"L",(function(){return f})),n.d(e,"K",(function(){return p})),n.d(e,"u",(function(){return l})),n.d(e,"d",(function(){return m})),n.d(e,"D",(function(){return h})),n.d(e,"S",(function(){return b})),n.d(e,"j",(function(){return y})),n.d(e,"I",(function(){return j})),n.d(e,"e",(function(){return O})),n.d(e,"H",(function(){return v})),n.d(e,"T",(function(){return I})),n.d(e,"k",(function(){return A})),n.d(e,"B",(function(){return g})),n.d(e,"q",(function(){return S})),n.d(e,"s",(function(){return B})),n.d(e,"A",(function(){return q})),n.d(e,"R",(function(){return P})),n.d(e,"i",(function(){return G})),n.d(e,"z",(function(){return k})),n.d(e,"J",(function(){return J})),n.d(e,"M",(function(){return L})),n.d(e,"n",(function(){return w})),n.d(e,"N",(function(){return x})),n.d(e,"O",(function(){return C})),n.d(e,"G",(function(){return R})),n.d(e,"p",(function(){return N})),n.d(e,"C",(function(){return E})),n.d(e,"V",(function(){return U})),n.d(e,"m",(function(){return z})),n.d(e,"F",(function(){return D})),n.d(e,"o",(function(){return $})),n.d(e,"E",(function(){return _})),n.d(e,"U",(function(){return M})),n.d(e,"l",(function(){return H})),n.d(e,"v",(function(){return K})),n.d(e,"c",(function(){return T})),n.d(e,"w",(function(){return F})),n.d(e,"P",(function(){return Q})),n.d(e,"g",(function(){return V})),n.d(e,"b",(function(){return W})),n.d(e,"a",(function(){return X}));var r=n("b775");function u(t){return Object(r["a"])({url:"/applyJob/queryApplyJobGroupList",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/applyJob/isExist",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/applyJob/checkDeviceExisAdmin",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/applyJob/productRepairAdmin",method:"post",data:t})}function a(t){return Object(r["a"])({url:"/applyJob/queryApplyJob",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/applyJob/updApplyJobInfo",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/applyJob/delApplyJobInfo?ids=".concat(t),method:"post"})}function f(t){return Object(r["a"])({url:"/serviceEvaluate/queryServiceEvaluate",method:"post",data:t})}function p(t){return Object(r["a"])({url:"reportType/queryReportByGroupId?assignId=".concat(t),method:"post"})}function l(t){return Object(r["a"])({url:"/customerAdmin/queryAdminCustomerList",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/customerAdmin/addCustomerInfoById",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/customerAdmin/queryCustomernfoById",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/customerAdmin/updCustomerInfoById",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/customerAdmin/delCustomerInfo?ids=".concat(t),method:"post"})}function j(t){return Object(r["a"])({url:"/productInfo/queryProductInfoList",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/productInfo/addProductInfo",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/productInfo/queryProductInfoById",method:"post",data:t})}function I(t){return Object(r["a"])({url:"/productInfo/updProductInfoById",method:"post",data:t})}function A(t){return Object(r["a"])({url:"/productInfo/delProductInfo?ids=".concat(t),method:"post"})}function g(t){return Object(r["a"])({url:"/productArchives/queryArchivesListNew",method:"post",data:t})}function S(t){return Object(r["a"])({url:"/productArchives/insertProductArchivesNew",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/productArchives/isExist",method:"post",data:t})}function q(t){return Object(r["a"])({url:"/productArchives/queryArchivesDetailNew",method:"post",data:t})}function P(t){return Object(r["a"])({url:"/productArchives/updArchivesInfoNew",method:"post",data:t})}function G(t){return Object(r["a"])({url:"/productArchives/delArchivesInfo?ids=".concat(t),method:"post"})}function k(t){return Object(r["a"])({url:"/productArchives/queryArchivesDetail",method:"post",data:t})}function J(t){return Object(r["a"])({url:"/customerService/queryRecordsList",method:"post",data:t})}function L(t){return Object(r["a"])({url:"/customerService/replyById",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/customerService/deteteConsulting?ids=".concat(t),method:"post"})}function x(t){return Object(r["a"])({url:"/customerService/replyContent",method:"post",data:t})}function C(t){return Object(r["a"])({url:"/checkcenter/socket/push/".concat(t),method:"post"})}function R(t){return Object(r["a"])({url:"/partsBuy/queryPartsList",method:"post",data:t})}function N(t){return Object(r["a"])({url:"/partsBuy/insertPartsBuy",method:"post",data:t})}function E(t){return Object(r["a"])({url:"/partsBuy/queryBuyInfoById",method:"post",data:t})}function U(t){return Object(r["a"])({url:"/partsBuy/updatePartsBuyById",method:"post",data:t})}function z(t){return Object(r["a"])({url:"/partsBuy/deletePartdBuyById?ids=".concat(t),method:"post"})}function D(t){return Object(r["a"])({url:"/repairSkillGuidance/queryGuidanceList",method:"post",data:t})}function $(t){return Object(r["a"])({url:"/repairSkillGuidance/insertGuidance",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/repairSkillGuidance/queryGuidanceInfoById",method:"post",data:t})}function M(t){return Object(r["a"])({url:"/repairSkillGuidance/updateGuidance",method:"post",data:t})}function H(t){return Object(r["a"])({url:"/repairSkillGuidance/deleteGiudance?ids=".concat(t),method:"post"})}function K(t){return Object(r["a"])({url:"/afterServicePic/queryAfterService",method:"post",data:t})}function T(t){return Object(r["a"])({url:"/afterServicePic/addAfterService",method:"post",data:t})}function F(t){return Object(r["a"])({url:"/afterServicePic/queryAfterServiceInfoById",method:"post",data:t})}function Q(t){return Object(r["a"])({url:"/afterServicePic/updAfterServiceInfoById",method:"post",data:t})}function V(t){return Object(r["a"])({url:"/afterServicePic/delAfterServiceInfo?ids=".concat(t),method:"post"})}function W(t){return Object(r["a"])({url:"/applyJob/queryGroupAndStaffInfoByGroupId",method:"post",data:t})}function X(t){return Object(r["a"])({url:"/applyJob/queryGroupHistoryByGroupId",method:"post",data:t})}},8:function(t,e){},9:function(t,e){}}]);