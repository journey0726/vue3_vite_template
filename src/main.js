import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import installPlugins from './plugins/index'
import * as ElIcons from '@element-plus/icons-vue'

let app = createApp(App)

//注册全局组件
for (let name in ElIcons) {
    app.component(name, ElIcons[name])
}

// 安装插件 
// 必须在挂载之前安装插件
installPlugins(app)

app.use(router).use(store).mount('#app')