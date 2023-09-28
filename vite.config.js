import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { demandBuild } from './vitePlugins/demandBuild'
// import { autoImportRouter } from './vitePlugins/autoImportRouter'// 自定引入注册路由
// import { getSourceCode } from './vitePlugins/getSourceCode'

export default defineConfig((bbb) => {
  const { mode } = bbb
  const env = loadEnv(mode, process.cwd())
  let modulesConfig
  if (mode === 'development') {
    modulesConfig = env.VITE_DEV_MODULE
  } else {
    modulesConfig = env.VITE_BUILD_MODULE
  }
  console.log('bbb', bbb)
  console.log('mode', mode)
  console.log('env', env)
  return {
    base: env.VITE_PUBLIC_PATH,
    plugins: [
      vue(),
      demandBuild({
        placeholderKeyWord: '// !!injectModules //',
        modulesConfig,
      }),
      // autoImportRouter(),
      // getSourceCode(),
    ],
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
      extensions: ['.vue', '.js', '.jsx'],
    },
    server: {
      port: 8848,
      open: true,
      outDir: 'dist',
    },

  }
})
