(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1051da35"],{"02f4":function(t,e,n){var r=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var o,i,c=String(a(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===s||(i=c.charCodeAt(u+1))<56320||i>57343?t?c.charAt(u):o:t?c.slice(u,u+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0a49":function(t,e,n){var r=n("9b43"),a=n("626a"),o=n("4bf8"),i=n("9def"),c=n("cd1c");t.exports=function(t,e){var n=1==t,u=2==t,s=3==t,d=4==t,l=6==t,f=5==t||l,p=e||c;return function(e,c,h){for(var v,m,y=o(e),b=a(y),O=r(c,h,3),g=i(b.length),j=0,C=n?p(e,g):u?p(e,0):void 0;g>j;j++)if((f||j in b)&&(v=b[j],m=O(v,j,y),t))if(n)C[j]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return j;case 2:C.push(v)}else if(d)return!1;return l?-1:s||d?d:C}}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"1fbe":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"pageContainer",staticClass:"pageContainer"},[n("div",{ref:"pageSearch",staticClass:"pageSearch"},[n("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("el-collapse-item",{attrs:{title:"维修技能指引详情",name:"1"}},[n("div",{staticClass:"details"},[n("el-row",{staticClass:"detailsRow",attrs:{gutter:10}},[n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("拥有者：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:3}},[t._v(t._s(t._f("dicFilter")(t.detailsData.owner,t.owners)))]),n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("指引类型：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:3}},[t._v(t._s(t._f("dicFilter")(t.detailsData.type,t.types)))]),n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("产品线：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:3}},[t._v(t._s(t._f("dicFilter")(t.detailsData.productLine,t.productLines)))]),n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("型号：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:3}},[t._v(t._s(t._f("dicFilter")(t.detailsData.model,t.models)))])],1),n("el-row",{staticClass:"detailsRow",attrs:{gutter:10}},[n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("文件格式：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:3}},[t._v(t._s(t._f("dicFilter")(t.detailsData.format,t.formats)))]),n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("是否还可以下载：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:3}},[t._v(t._s(t._f("dicFilter")(t.detailsData.isDown,t.isDowns)))]),n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("标题：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:3}},[t._v(t._s(t.detailsData.title))]),n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("描述：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:3}},[t._v(t._s(t.detailsData.describe))])],1),n("el-row",{staticClass:"detailsRow",attrs:{gutter:10}},[n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("内容：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:21}},[n("span",{domProps:{innerHTML:t._s(t.detailsData.content)}})])],1),n("el-row",{staticClass:"detailsRow",attrs:{gutter:10}},[n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("图片：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:21}},t._l(t.imgList,(function(e){return n("img",{key:e.id,staticStyle:{width:"200px",height:"200px","margin-right":"50px"},attrs:{src:t.imgURL+e}})})),0)],1),n("el-row",{staticClass:"detailsRow",attrs:{gutter:10}},[n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("视频：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:9}},[""==t.detailsData.video?n("span",[t._v("暂无视频")]):t._e(),""!=t.detailsData.video?n("video",{staticStyle:{width:"300px"},attrs:{src:t.imgURL+t.detailsData.video,controls:"controls"}},[t._v("您的浏览器不支持视频播放")]):t._e()]),n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("附件：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:3}},[""==t.detailsData.fileName?n("span",[t._v("暂无附件")]):t._e(),""!=t.detailsData.fileName?n("span",[t._v(t._s(t.detailsData.fileName))]):t._e()]),n("el-col",{staticClass:"detailsTitle",attrs:{span:3}},[t._v("创建时间：")]),n("el-col",{staticClass:"detailsBodle",attrs:{span:3}},[t._v(t._s(t.detailsData.addTime))])],1)],1),n("div",{staticStyle:{margin:"20px","text-align":"center"}},[n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.returnBtn()}}},[t._v("返回")])],1)])],1)],1)])},a=[],o=(n("28a5"),n("20d6"),n("2934")),i=n("350a"),c={filters:{dicFilter:function(t,e){var n=e.findIndex((function(e){return t==e.value}));return n>-1?e[n].lable:t}},data:function(){return{activeNames:["1"],imgURL:this.$store.state.settings.imgURL,productLines:[],models:[],owners:[],types:[],formats:[],isDowns:[],detailsData:{},imgList:[]}},mounted:function(){this.fetchAllDict(),this.backfillData()},methods:{fetchAllDict:function(){var t=this,e="PRODUCT_LINE,EQUI_MODEL,OWNER,DIRECT_TYPE,FORMAT_TYPE,WHETHER";Object(o["e"])(e).then((function(e){t.productLines=e.data.PRODUCT_LINE,t.models=e.data.EQUI_MODEL,t.owners=e.data.OWNER,t.types=e.data.DIRECT_TYPE,t.formats=e.data.FORMAT_TYPE,t.isDowns=e.data.WHETHER}))},backfillData:function(){var t=this,e=this.$route.query.sendData,n={id:e};Object(i["E"])(n).then((function(e){t.detailsData=e.data,t.imgList=e.data.picture.split(",")}))},returnBtn:function(){this.$router.push({name:"ServiceGuide"})}},destroyed:function(){window.onresize=null}},u=c,s=(n("64f7"),n("2877")),d=Object(s["a"])(u,r,a,!1,null,"fde38e26",null);e["default"]=d.exports},"20d6":function(t,e,n){"use strict";var r=n("5ca1"),a=n("0a49")(6),o="findIndex",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),r(r.P+r.F*i,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(o)},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),a=n("32e9"),o=n("79e5"),i=n("be13"),c=n("2b4c"),u=n("520a"),s=c("species"),d=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=c(t),p=!o((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),h=p?!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[f](""),!e})):void 0;if(!p||!h||"replace"===t&&!d||"split"===t&&!l){var v=/./[f],m=n(i,f,""[t],(function(t,e,n,r,a){return e.exec===u?p&&!a?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),y=m[0],b=m[1];r(String.prototype,t,y),a(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),a=n("cb7c"),o=n("ebd6"),i=n("0390"),c=n("9def"),u=n("5f1b"),s=n("520a"),d=n("79e5"),l=Math.min,f=[].push,p="split",h="length",v="lastIndex",m=4294967295,y=!d((function(){RegExp(m,"y")}));n("214f")("split",2,(function(t,e,n,d){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(a,t,e);var o,i,c,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,p=void 0===e?m:e>>>0,y=new RegExp(t.source,d+"g");while(o=s.call(y,a)){if(i=y[v],i>l&&(u.push(a.slice(l,o.index)),o[h]>1&&o.index<a[h]&&f.apply(u,o.slice(1)),c=o[0][h],l=i,u[h]>=p))break;y[v]===o.index&&y[v]++}return l===a[h]?!c&&y.test("")||u.push(""):u.push(a.slice(l)),u[h]>p?u.slice(0,p):u}:"0"[p](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,r):b.call(String(a),n,r)},function(t,e){var r=d(b,t,this,e,b!==n);if(r.done)return r.value;var s=a(t),f=String(this),p=o(s,RegExp),h=s.unicode,v=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(y?"y":"g"),O=new p(y?s:"^(?:"+s.source+")",v),g=void 0===e?m:e>>>0;if(0===g)return[];if(0===f.length)return null===u(O,f)?[f]:[];var j=0,C=0,_=[];while(C<f.length){O.lastIndex=y?C:0;var I,x=u(O,y?f:f.slice(C));if(null===x||(I=l(c(O.lastIndex+(y?0:C)),f.length))===j)C=i(f,C,h);else{if(_.push(f.slice(j,C)),_.length===g)return _;for(var A=1;A<=x.length-1;A++)if(_.push(x[A]),_.length===g)return _;C=j=I}}return _.push(f.slice(j)),_}]}))},2934:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"n",(function(){return i})),n.d(e,"m",(function(){return c})),n.d(e,"o",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return v})),n.d(e,"a",(function(){return m})),n.d(e,"l",(function(){return y})),n.d(e,"d",(function(){return b}));var r=n("b775");function a(t){return Object(r["a"])({url:"/dicCode/queryAdminDicByType?type=".concat(t),method:"post"})}function o(t){return Object(r["a"])({url:"/dicCode/addDicCode",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/dicCode/queryDicValueByType",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/dicCode/queryDicById",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/dicCode/updateDicCode",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/dicCode/deleteDicCode",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/dicCode/queryAdminDicByType?type=CITY&parentId=".concat(t),method:"post"})}function l(t){return Object(r["a"])({url:"/dicCode/queryAdminDicByType?type=district&parentId=".concat(t),method:"post"})}function f(t){return Object(r["a"])({url:"/dicCode/queryAdminDicByType?type=EQUI_MODEL&parentId=".concat(t),method:"post"})}function p(t){return Object(r["a"])({url:"/dicCode/queryAdminDicByType?type=PARTS_TYPE_TWO&parentId=".concat(t),method:"post"})}function h(t){return Object(r["a"])({url:"/dicCode/queryAdminDicByType?type=PARTS_TYPE_THREE&parentId=".concat(t),method:"post"})}function v(t){return Object(r["a"])({url:"/dicCode/getList?types=".concat(t),method:"post"})}function m(t){return Object(r["a"])({url:"/applyJob/addApplyRecord",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/applyJob/queryApplyJobGroup",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/excel/uploadExcel",method:"post",data:t})}},"350a":function(t,e,n){"use strict";n.d(e,"y",(function(){return a})),n.d(e,"r",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"t",(function(){return c})),n.d(e,"x",(function(){return u})),n.d(e,"Q",(function(){return s})),n.d(e,"h",(function(){return d})),n.d(e,"L",(function(){return l})),n.d(e,"K",(function(){return f})),n.d(e,"u",(function(){return p})),n.d(e,"d",(function(){return h})),n.d(e,"D",(function(){return v})),n.d(e,"S",(function(){return m})),n.d(e,"j",(function(){return y})),n.d(e,"I",(function(){return b})),n.d(e,"e",(function(){return O})),n.d(e,"H",(function(){return g})),n.d(e,"T",(function(){return j})),n.d(e,"k",(function(){return C})),n.d(e,"B",(function(){return _})),n.d(e,"q",(function(){return I})),n.d(e,"s",(function(){return x})),n.d(e,"A",(function(){return A})),n.d(e,"R",(function(){return D})),n.d(e,"i",(function(){return B})),n.d(e,"z",(function(){return E})),n.d(e,"J",(function(){return T})),n.d(e,"M",(function(){return w})),n.d(e,"n",(function(){return R})),n.d(e,"N",(function(){return S})),n.d(e,"O",(function(){return q})),n.d(e,"G",(function(){return P})),n.d(e,"p",(function(){return L})),n.d(e,"C",(function(){return k})),n.d(e,"V",(function(){return G})),n.d(e,"m",(function(){return J})),n.d(e,"F",(function(){return N})),n.d(e,"o",(function(){return F})),n.d(e,"E",(function(){return U})),n.d(e,"U",(function(){return H})),n.d(e,"l",(function(){return M})),n.d(e,"v",(function(){return Y})),n.d(e,"c",(function(){return $})),n.d(e,"w",(function(){return W})),n.d(e,"P",(function(){return Q})),n.d(e,"g",(function(){return z})),n.d(e,"b",(function(){return V})),n.d(e,"a",(function(){return K}));var r=n("b775");function a(t){return Object(r["a"])({url:"/applyJob/queryApplyJobGroupList",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/applyJob/isExist",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/applyJob/checkDeviceExisAdmin",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/applyJob/productRepairAdmin",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/applyJob/queryApplyJob",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/applyJob/updApplyJobInfo",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/applyJob/delApplyJobInfo?ids=".concat(t),method:"post"})}function l(t){return Object(r["a"])({url:"/serviceEvaluate/queryServiceEvaluate",method:"post",data:t})}function f(t){return Object(r["a"])({url:"reportType/queryReportByGroupId?assignId=".concat(t),method:"post"})}function p(t){return Object(r["a"])({url:"/customerAdmin/queryAdminCustomerList",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/customerAdmin/addCustomerInfoById",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/customerAdmin/queryCustomernfoById",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/customerAdmin/updCustomerInfoById",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/customerAdmin/delCustomerInfo?ids=".concat(t),method:"post"})}function b(t){return Object(r["a"])({url:"/productInfo/queryProductInfoList",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/productInfo/addProductInfo",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/productInfo/queryProductInfoById",method:"post",data:t})}function j(t){return Object(r["a"])({url:"/productInfo/updProductInfoById",method:"post",data:t})}function C(t){return Object(r["a"])({url:"/productInfo/delProductInfo?ids=".concat(t),method:"post"})}function _(t){return Object(r["a"])({url:"/productArchives/queryArchivesListNew",method:"post",data:t})}function I(t){return Object(r["a"])({url:"/productArchives/insertProductArchivesNew",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/productArchives/isExist",method:"post",data:t})}function A(t){return Object(r["a"])({url:"/productArchives/queryArchivesDetailNew",method:"post",data:t})}function D(t){return Object(r["a"])({url:"/productArchives/updArchivesInfoNew",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/productArchives/delArchivesInfo?ids=".concat(t),method:"post"})}function E(t){return Object(r["a"])({url:"/productArchives/queryArchivesDetail",method:"post",data:t})}function T(t){return Object(r["a"])({url:"/customerService/queryRecordsList",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/customerService/replyById",method:"post",data:t})}function R(t){return Object(r["a"])({url:"/customerService/deteteConsulting?ids=".concat(t),method:"post"})}function S(t){return Object(r["a"])({url:"/customerService/replyContent",method:"post",data:t})}function q(t){return Object(r["a"])({url:"/checkcenter/socket/push/".concat(t),method:"post"})}function P(t){return Object(r["a"])({url:"/partsBuy/queryPartsList",method:"post",data:t})}function L(t){return Object(r["a"])({url:"/partsBuy/insertPartsBuy",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/partsBuy/queryBuyInfoById",method:"post",data:t})}function G(t){return Object(r["a"])({url:"/partsBuy/updatePartsBuyById",method:"post",data:t})}function J(t){return Object(r["a"])({url:"/partsBuy/deletePartdBuyById?ids=".concat(t),method:"post"})}function N(t){return Object(r["a"])({url:"/repairSkillGuidance/queryGuidanceList",method:"post",data:t})}function F(t){return Object(r["a"])({url:"/repairSkillGuidance/insertGuidance",method:"post",data:t})}function U(t){return Object(r["a"])({url:"/repairSkillGuidance/queryGuidanceInfoById",method:"post",data:t})}function H(t){return Object(r["a"])({url:"/repairSkillGuidance/updateGuidance",method:"post",data:t})}function M(t){return Object(r["a"])({url:"/repairSkillGuidance/deleteGiudance?ids=".concat(t),method:"post"})}function Y(t){return Object(r["a"])({url:"/afterServicePic/queryAfterService",method:"post",data:t})}function $(t){return Object(r["a"])({url:"/afterServicePic/addAfterService",method:"post",data:t})}function W(t){return Object(r["a"])({url:"/afterServicePic/queryAfterServiceInfoById",method:"post",data:t})}function Q(t){return Object(r["a"])({url:"/afterServicePic/updAfterServiceInfoById",method:"post",data:t})}function z(t){return Object(r["a"])({url:"/afterServicePic/delAfterServiceInfo?ids=".concat(t),method:"post"})}function V(t){return Object(r["a"])({url:"/applyJob/queryGroupAndStaffInfoByGroupId",method:"post",data:t})}function K(t){return Object(r["a"])({url:"/applyJob/queryGroupHistoryByGroupId",method:"post",data:t})}},"520a":function(t,e,n){"use strict";var r=n("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,c="lastIndex",u=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[c]||0!==e[c]}(),s=void 0!==/()??/.exec("")[1],d=u||s;d&&(i=function(t){var e,n,i,d,l=this;return s&&(n=new RegExp("^"+l.source+"$(?!\\s)",r.call(l))),u&&(e=l[c]),i=a.call(l,t),u&&i&&(l[c]=l.global?i.index+i[0].length:e),s&&i&&i.length>1&&o.call(i[0],n,(function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(i[d]=void 0)})),i}),t.exports=i},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"64f7":function(t,e,n){"use strict";var r=n("810f"),a=n.n(r);a.a},"810f":function(t,e,n){},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},cd1c:function(t,e,n){var r=n("e853");t.exports=function(t,e){return new(r(t))(e)}},e853:function(t,e,n){var r=n("d3f4"),a=n("1169"),o=n("2b4c")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),r(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}}}]);