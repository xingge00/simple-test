import path from 'path'
import fs from 'fs'

const KeyWord = 'demandBuild'

const injectCode = () => {
  const rootPath = process.cwd()
  const targetPath = path.normalize(`${rootPath}/src/modules`)
  const dirList = fs.readdirSync(targetPath).filter(dir => !dir.includes('.')).filter(dir => dir === 'a')
  console.log(dirList)
  // return `${
  //   dirList.map(module => `import ${module} from './modules/${module}/main.js'`).join('\n')
  // }`

  const res = dirList.map((module) => {
    return `
    import ${module} from './${module}/main.js'
    `
  }).join('\n')
  return `${res}`
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
      if (code.includes('// !!injectBuild //')) {
        const temp = injectCode()
        res = code.replaceAll('// !!injectBuild //', temp)
        console.log(temp)
      }

      return res
    },
  }
}

export default demandBuild
