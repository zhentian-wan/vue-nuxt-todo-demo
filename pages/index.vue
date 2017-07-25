<template>
  <div>
    <form @submit.prevent="add(task)">
      <input v-model="task" type="text" />
      <input type="submit" value="ADD">
    </form>
    <article class="pa3 pa5-ns">
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="flex items-center ph3 pv3 bb b--light-silver">
          <span v-bind:class="{strike: todo.complete}" class="flex-auto">{{todo.id}} {{todo.task}}</span>
          <button @click="toggle(todo)"><img src="https://icon.now.sh/check" alt="toggle"></button>
          <button @click="remove(todo)"><img src="https://icon.now.sh/trash" alt="delete"></button>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import {init} from './shared'

  export default {
    fetch: init,
    computed: {
      ...mapState({
        todos: (state) => state.todos
      })
    },
    data () {
      return {
        task: 'Some data'
      }
    },
    methods: {
      ...mapActions([
        'add',
        'remove',
        'toggle'
      ])
    }
  }
</script>
