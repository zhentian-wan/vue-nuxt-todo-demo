<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <article class="pa3 pa5-ns">
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="ph3 pv3 bb b--light-silver">{{todo.task}}</li>
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
        todos: (state) => state.todos
      })
    }
  }
</script>
