// ==UserScript==
// @name        直接访问网站
// @namespace   Violentmonkey Scripts
// @match       https://link.juejin.cn/
// @match       https://link.zhihu.com/
// @match       https://gitee.com/link
// @match       https://docs.qq.com/scenario/link.html
// @grant       none
// @version     1.0
// @author      -
// @description 2022/11/16 11:52:00
// ==/UserScript==

const url = new URL(location.href)

// 腾讯文档
if (url.host === 'docs.qq.com') {
  const targetUrl = url.searchParams.get('url')
  if (targetUrl) {
    location.href = targetUrl
  }

// 其它
} else {
  const targetUrl = url.searchParams.get('target')
  if (targetUrl) {
    location.href = targetUrl
  }
}