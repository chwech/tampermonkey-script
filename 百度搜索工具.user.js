// ==UserScript==
// @name        New script - baidu.com
// @namespace   Violentmonkey Scripts
// @match       https://www.baidu.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 2022/7/29 10:08:50
// ==/UserScript==
function addStyle () {
  const style = document.createElement('style')
style.innerHTML = `
.ch_search_wrapper input[type=checkbox] {
    -webkit-appearance: checkbox!important;
}
`
document.head.appendChild(style)
}


window.onload = () => {
  addStyle()
  
  
  let formRef = document.getElementById('form')

console.log(formRef)


const filters = `
  <label for="ch_id_1">
    <input id="ch_id_1" type="checkbox" value="CSDN">
    CSDN
  </label>
  <label for="ch_id_2">
    <input id="ch_id_2" type="checkbox" value="博客园">
    博客园
  </label>
  <label for="ch_id_3">
    <input id="ch_id_3" type="checkbox" value="百度文库">
    百度文库
  </label>
<label for="ch_id_4">
    <input id="ch_id_4" type="checkbox" value="脚本之家">
    脚本之家
  </label>
<label for="ch_id_5">
    <input id="ch_id_5" type="checkbox" value="腾讯云">
    腾讯云
  </label>
<label for="ch_id_6">
    <input id="ch_id_6" type="checkbox" value="PHP中文网">
    PHP中文网
  </label>
`
const wrapper = document.createElement('span')
wrapper.innerHTML = filters
wrapper.classList.add('ch_search_wrapper')
formRef.appendChild(wrapper)
  
const keyword = document.getElementById('kw')
const submitBtn = document.getElementById('su')

  document.querySelectorAll('input[id*=ch_id_]').forEach(el => {
    el.addEventListener('change', (e) => {
      const target = e.target
      if (target.checked) {
        keyword.value = keyword.value + ' -' + target.value 
      } else {
        keyword.value = keyword.value.replaceAll(' -' + target.value, '')
      }

      submitBtn.click()
      setTimeout(() => {
  addStyle()        
      }, 2000)
      
      console.log(e, keyword.value)
    })
  })
}

