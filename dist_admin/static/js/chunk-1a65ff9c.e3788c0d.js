(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a65ff9c"],{2934:function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"n",(function(){return u})),r.d(t,"m",(function(){return i})),r.d(t,"o",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return s})),r.d(t,"h",(function(){return m})),r.d(t,"k",(function(){return f})),r.d(t,"i",(function(){return p})),r.d(t,"j",(function(){return b})),r.d(t,"a",(function(){return y})),r.d(t,"l",(function(){return h})),r.d(t,"d",(function(){return v}));var n=r("b775");function o(e){return Object(n["a"])({url:"/dicCode/queryAdminDicByType?type=".concat(e),method:"post"})}function a(e){return Object(n["a"])({url:"/dicCode/addDicCode",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/dicCode/queryDicValueByType",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/dicCode/queryDicById",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/dicCode/updateDicCode",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/dicCode/deleteDicCode",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/dicCode/queryAdminDicByType?type=CITY&parentId=".concat(e),method:"post"})}function s(e){return Object(n["a"])({url:"/dicCode/queryAdminDicByType?type=district&parentId=".concat(e),method:"post"})}function m(e){return Object(n["a"])({url:"/dicCode/queryAdminDicByType?type=EQUI_MODEL&parentId=".concat(e),method:"post"})}function f(e){return Object(n["a"])({url:"/dicCode/queryAdminDicByType?type=PARTS_TYPE_TWO&parentId=".concat(e),method:"post"})}function p(e){return Object(n["a"])({url:"/dicCode/queryAdminDicByType?type=PARTS_TYPE_THREE&parentId=".concat(e),method:"post"})}function b(e){return Object(n["a"])({url:"/dicCode/getList?types=".concat(e),method:"post"})}function y(e){return Object(n["a"])({url:"/applyJob/addApplyRecord",method:"post",data:e})}function h(e){return Object(n["a"])({url:"/applyJob/queryApplyJobGroup",method:"post",data:e})}function v(e){return Object(n["a"])({url:"/excel/uploadExcel",method:"post",data:e})}},"76ee":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"pageContainer",staticClass:"pageContainer"},[r("div",{ref:"pageSearch",staticClass:"pageSearch"},[r("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[r("el-collapse-item",{attrs:{title:e.title,name:"1"}},[r("div",{staticClass:"searchRow"},[r("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"250px",size:"small"}},[r("el-form-item",{attrs:{label:"产品线名称：",prop:"lable"}},[r("el-input",{model:{value:e.form.lable,callback:function(t){e.$set(e.form,"lable",t)},expression:"form.lable"}})],1),r("el-form-item",{attrs:{label:"产品线备注："}},[r("el-input",{attrs:{type:"textarea",resize:"none",placeholder:"请输入内容",maxlength:"200","show-word-limit":""},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提交")]),r("el-button",{on:{click:function(t){return e.returnBtn()}}},[e._v("返回")])],1)],1)],1)])],1)],1)])},o=[],a=r("2934"),u={data:function(){var e=function(e,t,r){var n=/^[\u4e00-\u9fa5A-Za-z0-9-\_]+$/;if(!t)return r(new Error("类型不能为空"));n.test(t)?r():r(new Error("类型格式不正确"))};return{activeNames:["1"],title:"",disabledHR:!1,form:{type:"PRODUCT_LINE",lable:"",value:"",remarks:""},rules:{lable:[{required:!0,message:"请输入产品线名称",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10 个字符",trigger:"blur"}],value:[{required:!0,validator:e,trigger:"blur"}]}}},mounted:function(){this.addOrEdit()},methods:{addOrEdit:function(){var e=this,t=e.$route.query.sendData;if(t){e.title="修改产品线";var r={id:t};Object(a["m"])(r).then((function(t){e.form.id=t.data.id,e.form.type="PRODUCT_LINE",e.form.lable=t.data.lable,e.form.value=t.data.value,e.form.remarks=t.data.remarks})),e.disabledHR=!0}else e.title="添加产品线",e.disabledHR=!1},queryValue:function(){var e=this;if(this.form.value){var t={type:"PRODUCT_LINE",value:this.form.value};Object(a["n"])(t).then((function(t){console.log(t),e.$message.success("类型可以使用")}))}},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;var r=t,n=r.$route.query.sendData;if(n){var o=r.form;Object(a["o"])(o).then((function(e){r.$message.success(e.msg),r.$router.push({name:"ProductLine"})}))}else{var u=r.form;Object(a["b"])(u).then((function(e){r.$message.success(e.msg),r.$router.push({name:"ProductLine"})}))}}))},returnBtn:function(){this.$router.push({name:"ProductLine"})}},destroyed:function(){window.onresize=null}},i=u,c=r("2877"),d=Object(c["a"])(i,n,o,!1,null,null,null);t["default"]=d.exports}}]);