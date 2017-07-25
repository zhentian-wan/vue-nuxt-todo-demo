import Vuex from 'vuex'
import axios from 'axios'

const store = () => new Vuex.Store({
  state: {
    todos: [
    ]
  },
  mutations: {
    init (state, todos) {
      state.todos = todos
    },
    add (state, todo) {
      state.todos = [
        ...state.todos,
        todo
      ]
    },
    remove (state, todo) {
      state.todos = state.todos.filter((t) => {
        return t.id !== todo.id
      })
    },
    toggle (state, todo) {
      state.todos = state.todos.map(t => {
        return t.id === todo.id
            ? todo
            : t
      })
    }
  },
  actions: {
    async add (context, task) {
      const commit = context.commit
      const res = await axios.post('https://todos-cuvsmolowg.now.sh/todos', {
        task,
        complete: false
      })
      commit('add', res.data)
    },
    async remove ({commit}, todo) {
      await axios.delete(`https://todos-cuvsmolowg.now.sh/todos/${todo.id}`)
      commit('remove', todo)
    },
    async toggle ({commit}, todo) {
      const res = await axios.patch(`https://todos-cuvsmolowg.now.sh/todos/${todo.id}`, {complete: !todo.complete})
      commit('toggle', res.data)
    }
  }
})

export default store
