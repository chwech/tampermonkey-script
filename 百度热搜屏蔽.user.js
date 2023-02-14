// ==UserScript==
// @name        百度热搜屏蔽
// @namespace   Violentmonkey Scripts
// @match       https://www.baidu.com/s
// @grant       none
// @version     1.0
// @author      -
// @description 2022/11/25 09:29:54
// ==/UserScript==
var a = document.querySelector('.opr-toplist1-table_3K7iH')
a.style.display = 'none'