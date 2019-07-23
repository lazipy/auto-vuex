import Vue from 'vue'
import Vuex from 'vuex'

let getters = {}
let modules = {}

function autoVuex (options) {
  options.files.keys().forEach(key => {
    // 如果是getters.js
    if (key.startsWith('./getters.js')) {
      console.log()
      getters = options.files(key).default || options.files(key)
      return
    }
    const path = key.slice(2, -3)
    const storeModule = options.files(key).default || options.files(key)
    modules[path] = storeModule
  })

  let store = new Vuex.Store({
    getters,
    modules,
    plugins: options.plugins
  })
  return store
}

Vue.use(Vuex)

// eslint-disable-next-line new-cap
export default autoVuex
