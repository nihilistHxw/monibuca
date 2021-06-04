(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c76e6"],{"511e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"搜索名称关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1),t._v(" "),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.onAddRtsp}},[t._v("添加拉流转发")])],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pageList,border:"",fit:""}},[a("el-table-column",{attrs:{label:"StreamPath"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.Stream&&e.row.Stream.StreamPath)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("formatPassTimeFilter")(e.row.Stream&&e.row.Stream.StartTime))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"总接收"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("unitSpeedFormatFilter")(e.row.InBytes))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"总发送"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("unitSpeedFormatFilter")(e.row.OutBytes))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onShowHeader(e.row)}}},[t._v("头信息")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onStop(e.row)}}},[t._v("中止")])]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":t.currentPage,total:t.dataListFilter.length},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}),t._v(" "),a("el-dialog",{attrs:{title:"添加拉流转发",visible:t.dialogVisible,width:"700px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",[a("el-form",{ref:"dataForm",attrs:{rules:t.rules,model:t.tempForm,"label-width":"120px"}},[a("el-form-item",{attrs:{prop:"streamPath",label:"StreamPath(m7s流标识）"}},[a("el-input",{attrs:{placeholder:"live/test"},model:{value:t.tempForm.streamPath,callback:function(e){t.$set(t.tempForm,"streamPath",e)},expression:"tempForm.streamPath"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"target",label:"RTSP源地址或者HLS源地址"}},[a("el-input",{attrs:{placeholder:"输入拉流地址"},model:{value:t.tempForm.target,callback:function(e){t.$set(t.tempForm,"target",e)},expression:"tempForm.target"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.dialogSubmitting},on:{click:function(e){return t.handleRelay("dataForm")}}},[t._v("确 定")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"RTSP SDPRaw",visible:t.dialogVisible2,width:"1000px"},on:{"update:visible":function(e){t.dialogVisible2=e}}},[a("pre",{staticStyle:{"max-height":"900px",overflow:"auto"}},[t._v("     "+t._s(t.tempRtspSDPRaw)+"\n   ")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible2=!1}}},[t._v("关 闭")])],1)])],1)},i=[],n=(a("55dd"),a("4ec3")),o={name:"relays",data:function(){return{dataList:[],searchKey:"",currentPage:1,dialogVisible:!1,dialogVisible2:!1,tempRtspSDPRaw:"",tempForm:{streamPath:"",target:""},dialogSubmitting:!1,rules:{streamPath:[{required:!0,trigger:"blur",message:"require streamPath"}],target:[{required:!0,trigger:"blur",message:"require target"}]}}},created:function(){this.init()},computed:{dataListFilter:function(){var t=[],e=this.searchKey.trim();return t=e?this.dataList.filter((function(t){return-1!==t.Name.indexOf(e)})):this.dataList,t},pageList:function(){return this.dataListFilter.slice(10*(this.currentPage-1),10*this.currentPage)}},methods:{init:function(){this.getList()},getList:function(){var t=this,e=Object(n["m"])(),a=Object(n["l"])();this.$on("hook:destroyed",(function(){e.close(),llistHls.close()}));var r=[],i=[];a.onmessage=function(e){e.data&&(i=JSON.parse(e.data)||[],i.sort((function(t,e){t.StreamPath,e.StreamPath})),t.dataList=r.concat(i))},e.onmessage=function(e){e.data&&(r=JSON.parse(e.data)||[],r.sort((function(t,e){t.StreamPath,e.StreamPath})),t.dataList=r.concat(i))}},onAddRtsp:function(){this.dialogVisible=!0,this.tempForm.streamPath="",this.tempForm.target=""},onShowHeader:function(t){this.tempRtspSDPRaw=t.SDPRaw},onStop:function(t){var e=this;this.$confirm("是否中止流转发","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["y"])(t.StreamInfo.StreamPath).then((function(t){1===t.code?e.$message({type:"error",message:t.msg||"网络异常"}):e.$message({type:"success",message:"中止流转发成功!"})}))})).catch((function(){}))},handleRelay:function(t){var e=this;this.$refs[t].validate((function(t){t&&(e.dialogSubmitting=!0,(0==e.tempForm.target.indexOf("rtsp")?n["v"]:n["relayHLS"])(e.tempForm).then((function(t){1===t.code?e.$message({type:"error",message:t.msg||"网络异常"}):e.$message({type:"success",message:"已启动拉流!"}),e.dialogVisible=!1})).finally((function(){e.dialogSubmitting=!1})))}))}}},s=o,l=a("2877"),c=Object(l["a"])(s,r,i,!1,null,"bab6cc3c",null);e["default"]=c.exports}}]);