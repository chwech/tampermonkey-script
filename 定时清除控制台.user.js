// ==UserScript==
// @name        定时清除控制台
// @namespace   Violentmonkey Scripts
// @match       http://localhost/*
// @match       http://localhost:*/*
// @grant       none
// @version     1.0
// @author      -
// @description 2021/12/14 下午3:19:20
// ==/UserScript==

const timer = setInterval(() => {
  console.clear()
  console.log('已清除控制台')
}, 60 * 1000)

