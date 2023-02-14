// ==UserScript==
// @name        New script - juejin.cn
// @namespace   Violentmonkey Scripts
// @match       https://juejin.cn/post/*
// @grant       none
// @version     1.0
// @author      -
// @description 2022/7/8 14:45:08
// ==/UserScript==

document.addEventListener("copy",function(e){
  e.clipboardData.setData('text/plain', window.getSelection().toString());
  //取消默认事件，才能修改复制的值
  e.preventDefault();
})
