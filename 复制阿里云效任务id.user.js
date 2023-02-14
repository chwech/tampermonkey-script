// ==UserScript==
// @name        复制阿里云效任务id
// @namespace   Violentmonkey Scripts
// @match       https://devops.aliyun.com/organization/**
// @match       https://devops.aliyun.com/project/**/bug/view/**/task/**
// @match       https://devops.aliyun.com/project/**/bug/section/all/task/**
// @match       https://devops.aliyun.com/project/**/story/section/all/task/**
// @match       https://devops.aliyun.com/project/**/bug/section/all
// @match       https://devops.aliyun.com/project/**/bug/section/**/task/**
// @match       https://devops.aliyun.com/project/**/tasks/scrum/**
// @grant       none
// @version     1.0
// @author      -
// @description 2022/5/26 10:41:20
// ==/UserScript==

console.log('hello script')

function main() {
  window.onload = () => {
    console.log('onload**----', window)
    render()
    
    // 监听弹窗变化
    observeModal()
  }
  
  // 前进/后退
  window.onpopstate = () => {
    render()
  }
}

function observeModal () {
  var targetNode = document.querySelector("body");
  var observerOptions = {
    childList: true,  // 观察目标子节点的变化，是否有添加或者删除
    attributes: false, // 观察属性变动
    subtree: false     // 观察后代节点，默认为 false
  }
  var callback = (mutationList, observer) => {
    mutationList.forEach((mutation) => {
      switch(mutation.type) {
        case 'childList':
          const modalElement = mutation.addedNodes[0]
          if (modalElement?.classList?.contains('modal')) {
            render()
          }
          /* 从树上添加或移除一个或更多的子节点；参见 mutation.addedNodes 与
             mutation.removedNodes */
          break;
        case 'attributes':
          /* mutation.target 中某节点的一个属性值被更改；该属性名称在 mutation.attributeName 中，
             该属性之前的值为 mutation.oldValue */
          break;
      }
    });
  }

  var observer = new MutationObserver(callback);
  observer.observe(targetNode, observerOptions);
}

function render () {
  setTimeout(() => {
    renderUi()
  }, 1500)
}




function renderUi() {
  const exsistElement = document.querySelector('#__script_copy_task_id_btn__')
  if (exsistElement) return
  
  const targetElement = document.querySelector('.task-detail-action-list__action')

  if (targetElement) {
    const button = targetElement.cloneNode(true)
    button.id = '__script_copy_task_id_btn__'
    button.title = '复制任务长id'
    button.onclick = () => {
      copyTaskId()
    }
    const parentElement = targetElement.parentNode
    parentElement.insertBefore(button, targetElement)
  }
}

function getTaskId() {
  const href = window.location.href
  let id = href.split('/')
  id = id[id.length - 1]
  
  return id
}

function copyTaskId() {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.value = getTaskId()
  input.select()
  document.execCommand('copy')
  input.remove()
}


main()
