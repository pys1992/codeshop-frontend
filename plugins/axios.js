export default function({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    store.commit('loading/increment')
  })
  $axios.onResponse(response => {
    store.commit('loading/decrement')
  })
  $axios.onError(err => {
    store.commit('loading/decrement')
  })
}
