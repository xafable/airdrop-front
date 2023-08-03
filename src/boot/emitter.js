import mitt from 'mitt'
import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  const emitter = mitt()



  // for Composition API
  app.provide('emitter', emitter)
})
