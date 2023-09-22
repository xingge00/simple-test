// import { createApp } from 'vue'
// import App from '@/App.vue'

// const app = createApp(App)

// app.mount('#app')

// const modules = import.meta.globEager('./modules/*.js')
// console.log(modules)

// import modules from 'demandBuild'
// console.log(modules)

let b
// !!injectBuild //
// const a = import.meta.globEager('./a/main.js')['./a/main.js'].default
// const b = import.meta.globEager('./b/main.js')['./b/main.js'].default
// import a from './a/main.js'
// import b from './b/main.js'
// let a

console.log('index', a, b)
console.log(`main${a}${b}`)

export default {
  js: `main${a}${b}`,
}
