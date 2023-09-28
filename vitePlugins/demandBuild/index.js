import path from 'path'
import fs from 'fs'

const injectCode = (modulesConfig) => {
  const rootPath = process.cwd()
  const targetPath = path.normalize(`${rootPath}/src/modules`)
  const dirList = fs.readdirSync(targetPath).filter(dir => !dir.includes('index.js'))
  console.log(dirList)

  const res = dirList.filter((i) => {
    if (!modulesConfig) return true // 如果没有配置则加载全部
    return modulesConfig.split(',').includes(i)
  }).map((module) => {
    const key = `./${module}/main.js`
    return `${module}: import.meta.globEager('${key}')['${key}'].default`
  }).join(',\n    ')
  return `
  modules = {
    ${res}
  }`
}

export const demandBuild = (config) => {
  const {
    placeholderKeyWord = '// !!injectModules //',
    modulesConfig,
  } = config
  return {
    name: 'vite-plugin-demand-build',
    enforce: 'pre',

    transform(code, id) {
      // 优化：只有src/modules/index.js才出发占位符替换
      if (!id.includes('src/modules/index.js')) return code

      let res = code
      if (code.includes(placeholderKeyWord)) {
        const temp = injectCode(modulesConfig)
        res = code.replaceAll(placeholderKeyWord, temp)
        console.log(temp)
      }

      return res
    },
  }
}

export default demandBuild
