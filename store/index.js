import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    todos: [
    ]
  },
  mutations: {
    init: (state, todos) => {
      state.todos = todos
    }
  }
})

export default store
