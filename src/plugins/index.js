const pluginFiles = import.meta.globEager('./*.js')

export default function instanllPlugins (app) {
  Object.keys(pluginFiles).forEach(key => {
    if (key !== './index.js') {
      if (typeof pluginFiles[key].default === 'function') {
        pluginFiles[key].default(app)
      }
    }
  })
}

