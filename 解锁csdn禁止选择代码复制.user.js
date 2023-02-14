// ==UserScript==
// @name        解锁csdn禁止选择代码复制
// @namespace   Violentmonkey Scripts
// @match       https://blog.csdn.net/*
// @grant       none
// @version     1.0
// @author      -
// @description 2022/6/2 16:25:27
// ==/UserScript==
function main() {
  const preElements = document.querySelectorAll('pre')
  if (preElements) {
    preElements.forEach(pre => {
      pre.style.userSelect = 'text'
    })
  }
  
  const codeElements = document.querySelectorAll('code')
  if (codeElements) {
    codeElements.forEach(code => {
      code.style.userSelect = 'text'
    })
  }
}

main()
