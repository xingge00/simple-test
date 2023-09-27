import path from 'path'
import fs from 'fs'

const KeyWord = '// !!injectModules //'

const injectCode = () => {
  const rootPath = process.cwd()
  const targetPath = path.normalize(`${rootPath}/src/modules`)
  const dirList = fs.readdirSync(targetPath).filter(dir => !dir.includes('.'))
  console.log(dirList)
  // return `${
  //   dirList.map(module => `import ${module} from './modules/${module}/main.js'`).join('\n')
  // }`

  const res = dirList.map((module) => {
    const key = `./${module}/main.js`
    return `${module}: import.meta.globEager('${key}')['${key}'].default`
  }).join(',\n    ')
  return `
  modules = {
    ${res}
  }`
}

export const demandBuild = () => {
  return {
    name: 'vite-plugin-demand-build',
    enforce: 'pre',
    resolveId(id) {
      // if (id === KeyWord) {
      //   return id // 返回id表明命中，vite不再询问其他插件处理该id请求
      // }
      return null // 返回null表明是其他id要继续处理
    },
    load(id) {
      // if (id === KeyWord) return injectCode()
      return null
    },
    transform(code) {
      let res = code
      if (code.includes(KeyWord)) {
        const temp = injectCode()
        res = code.replaceAll(KeyWord, temp)
        console.log(temp)
      }

      return res
    },
  }
}

export default demandBuild
