import Com from './com.vue'

const store = {
  state: {
    count: '',
  },
}
const router = [{ name: 'a/view' }]
const component = {
  Com,
}
export default {
  store,
  router,
  component,
}
