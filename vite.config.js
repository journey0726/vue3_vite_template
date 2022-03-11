import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

//dev 配置
import server from './config/server.js'

//prod 配置
import build from './config/build.js'

//获取绝对路径
function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
  root: process.cwd(), // 项目根目录
  base: '/', // 开发或生产环境服务的公共基础路径。
  server,
  define: {},  //定义全局常量
  plugins: [vue()],
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      }
    ]
  },
  build,
})
