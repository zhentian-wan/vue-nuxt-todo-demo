<template>
  <div>
    <article class="pa3 pa5-ns">
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="flex items-center ph3 pv3 bb b--light-silver">
          <span class="flex-auto">{{todo.id}} {{todo.task}}</span>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import {init} from './shared'

  export default {
    fetch: init,
    computed: {
      ...mapState({
        todos: (state) => state.todos.filter(t => t.complete)
      })
    }
  }
</script>
