<template>
  <div id="app">
    <keep-alive exclude="Searchresults">
      <router-view></router-view>
    </keep-alive>
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
  import MainTarBar from 'components/contents/maintarbar/MainTarBar'
  import {getconfig} from "./network/global";
  export default {
    name: 'app',
    components: {
        MainTarBar
    },
    created() {

      getconfig().then(res=> {
        //console.log("第一次" + res);
        this.$store.commit("addglobalconfig", res);

        //console.log("第四次" + this.$store.state.globalconfig.activitycount1);
      })




    },
    beforeCreate() {
      // var flag;
      // var jsBridge = (function () {
      //   function connectWebViewJavascriptBridge(callback) {
      //     if (window.WebViewJavascriptBridge) {
      //
      //       callback(WebViewJavascriptBridge);
      //       alert("windowWebViewJavascriptBridge");
      //     } else {
      //       document.addEventListener('WebViewJavascriptBridgeReady', function () {
      //         callback(WebViewJavascriptBridge);
      //       }, false)
      //       alert("have no windowWebViewJavascriptBridge");
      //     }
      //   }
      //   connectWebViewJavascriptBridge(function (WebViewJavascriptBridge) {
      //     alert("start callback");
      //     WebViewJavascriptBridge.init(function (message, responseCallback) {
      //
      //     });
      //     WebViewJavascriptBridge.registerHandler("contactsList", function(data, responseCallback) {
      //       phoneNumbers=(data);
      //     });
      //     WebViewJavascriptBridge.registerHandler("contacts", function(data, responseCallback) {
      //       var datas=JSON.parse(data);
      //       if(currentNum==1){
      //         name1=datas.name;
      //         tel1=datas.phone;
      //         $("#firstTxtName").val(datas.name);
      //         $("#firstTxtTel").val(datas.phone);
      //       }else {
      //         name2=datas.name;
      //         tel2=datas.phone;
      //         $("#secondTxtName").val(datas.name);
      //         $("#secondTxtTel").val(datas.phone);
      //       }
      //     });
      //     WebViewJavascriptBridge.callHandler('getAppVersion', {}, function (response) { callback(response); });
      //     fn && fn();
      //     alert("end callback");
      //   })
      //   return {
      //     init: function (fn) {
      //       connectWebViewJavascriptBridge(function (WebViewJavascriptBridge) {
      //         WebViewJavascriptBridge.init(function (message, responseCallback) {
      //
      //         });
      //
      //         fn && fn();
      //
      //       })
      //     },
      //     copyWechat: function (obj) {
      //       WebViewJavascriptBridge.callHandler('copyWechat', { pageID: obj.pageID }, function (response) { });
      //     },
      //     saveQR: function (obj) {
      //       WebViewJavascriptBridge.callHandler('saveQR', { pageID: obj.pageID }, function (response) { });
      //     },
      //     showAppPage: function (obj) {
      //       WebViewJavascriptBridge.callHandler('showAppPage', { pageID: obj.pageID }, function (response) { });
      //     },
      //     jumpTo: function (obj) {
      //       WebViewJavascriptBridge.callHandler('jumpTo', {}, function (response) { });
      //     },
      //     showWebPage: function (obj) {
      //       WebViewJavascriptBridge.callHandler('showWebPage', { title: obj.title, pageUrl: obj.pageUrl }, function (response) { });
      //     },
      //     getSid: function (callback) {
      //       WebViewJavascriptBridge.callHandler('getSid', {}, function (response) { callback(response); });
      //     },
      //     getContacts: function (callback) {
      //       WebViewJavascriptBridge.callHandler('getContacts', {}, function (response) { callback(response); });
      //     },
      //     getAppVersion: function (callback) {
      //       WebViewJavascriptBridge.callHandler('getAppVersion', {}, function (response) {
      //         flag=response;
      //         callback(response);
      //       });
      //     }
      //   }
      // })();
      //
      //
      //
      // console.log("初始化");
      //
      // document.addEventListener("click",function () {
      //   console.log("发生点击事件");
      //   alert("发生点击事件");
      // });
      //
      //
      // var callback = function () {
      //   console.log("监听开始")
      //   alert("监听开始")
      //   console.log(plus.device.uuid)
      //
      //   console.log(plus.device.imei)
      //
      //   console.log(plus.device.model)
      //
      //   console.log(plus.device.vendor)
      //
      //   console.log(plus.device.imsi)
      //   console.log("监听结束")
      // };
      // var plusReady = function (callback) {
      //
      //   console.log("函数开始")
      //   alert("函数开始")
      //
      //   if (window.plus) {
      //     callback();
      //     alert("windowplus")
      //   } else {
      //     document.addEventListener('plusready', callback);
      //     alert("have no windowplus")
      //   }
      //
      //   console.log("函数结束")
      //   alert("函数结束")
      // };
      // plusReady(callback);


      //document.addEventListener("plusready", function(){
        //
        // function device(name){
        //   return plus.device.name
        // }
        //
        // console.log(device('uuid'))
        //
        // console.log(device('imei'))
        //
        // console.log(device('model'))
        //
        // console.log(device('vendor'))
        //
        // console.log(device('imsi'))
      //   console.log("监听开始")
      //   alert("监听开始")
      //   console.log(plus.device.uuid)
      //
      //   console.log(plus.device.imei)
      //
      //   console.log(plus.device.model)
      //
      //   console.log(plus.device.vendor)
      //
      //   console.log(plus.device.imsi)
      //   console.log("监听结束")
      //
      // })
      //console.log("初始化结束")
    }
  }
</script>

<style>
  /*css 引入方式*/
  @import "assets/css/base.css";
</style>
