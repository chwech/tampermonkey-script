// ==UserScript==
// @name        New script
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 2023/2/3 11:16:36
// @grant    GM_registerMenuCommand
// ==/UserScript==

let window = unsafeWindow;
// vue2
GM_registerMenuCommand('vue2', () => {
  let vue, Vue, node, walker;
  walker = window.document.createTreeWalker(document.body, 1);

  while(node = walker.nextNode()) {
    if (node.__vue__) {
      vue = node.__vue__
      Vue = vue.__proto__.constructor

        while(Vue.super){
          Vue = Vue.super
        }

        Vue.config.devtools = true;

        var hook = window.__VUE_DEVTOOLS_GLOBAL_HOOK__
        hook.emit('init',Vue)

        console.log('打开成功，关闭f12再打开f12,注意不用刷新页面')
        break
    }
  }

})

// vue3
GM_registerMenuCommand('vue3', () => {
  let vue, node, walker;
  walker = window.document.createTreeWalker(document.body, 1);

  while ((node = walker.nextNode())) {
    if (node.__vue_app__) {
      vue = node.__vue_app__;
      if (!vue.config.devtools) {
        vue.config.devtools = true;
        if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
          window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('app:init', vue, vue.version, {
            Fragment: 'Fragment',
            Text: 'Text',
            Comment: 'Comment',
            Static: 'Static'
          });
          console.log('打开成功，关闭f12再打开f12,注意不用刷新页面')
          break;
        }
      }
    }
  }
})




