export default {
    host: '0.0.0.0',   //将此设置为 0.0.0.0 或者 true 将监听所有地址
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }