import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { demandBuild } from './vitePlugins/demandBuild'// 自定引入注册路由
// import { autoImportRouter } from './vitePlugins/autoImportRouter'// 自定引入注册路由
// import { getSourceCode } from './vitePlugins/getSourceCode'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_APP_BASE_URL,
    plugins: [
      vue(),
      demandBuild(),
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
