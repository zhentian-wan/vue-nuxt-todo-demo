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
    <section class="pa2">
      <h2>Lazy loading...</h2>
      <button @click="show = true">Lazy load</button>
      <div v-if="show">
        <Async></Async>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import {init} from './shared'

  const Async = resolve => {
    console.log('loading...')
    setTimeout(() => {
      require(['~components/async.vue'], resolve)
      console.log('loaded')
    }, 1000)
  }

  export default {
    fetch: init,
    computed: {
      ...mapState({
        todos: (state) => state.todos
      })
    },
    components: {
      Async
    },
    data () {
      return {
        task: 'Some data',
        show: false
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
