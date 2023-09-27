
let modules
// !!injectModules //

const errorList = []
const warningList = []

const { store: initStore, router: initRouter, component: initComponent } = Object.entries(modules).reduce((acc, [moduleName, module]) => {
  // 合并全局组件
  mergeObj(acc.component, module.component, warningList, '组件', moduleName)

  // 合并store
  const handleSotreField = ['state', 'mutations', 'actions', 'getters', 'modules']
  handleSotreField.forEach((field) => {
    mergeObj(
      acc.store[field],
      module?.store?.[field],
      warningList,
    `store.${field}`,
    moduleName,
    )
  })

  // 合并路由
  acc.router = mergeRouter(acc.router, module.router, errorList, warningList, moduleName)

  return acc
}, {
  store: {
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {},
  },
  router: [],
  component: {},
})

errorList.forEach(i => console.error(i))
warningList.forEach(i => console.warn(i))

function mergeObj(source, target = {}, warningList = [], tips = '', module = '') {
  Object.entries(target).forEach(([key, value]) => {
    if (source[key]) warningList.push(`模块：${module} ---> ${tips}命名冲突：已存在 ${key}`)
    else {
      source[key] = value
    }
  })
}
function mergeRouter(source, target = [], warningList = [], tips = '', module = '') {
  // todo重复提示
  return [...source, ...target]
}

export {
  initStore,
  initRouter,
  initComponent,
}
export default {}
