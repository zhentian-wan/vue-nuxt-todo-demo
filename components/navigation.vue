<template>
  <nav class="f6 fw6 ttu tracked">
    <nuxt-link exact class="link dim gray dib mr3" to="/" title="Home">Home</nuxt-link>
    <nuxt-link class="link dim gray dib mr3" to="/active" title="Active">Active</nuxt-link>
    <nuxt-link class="link dim gray dib mr3" to="/completed" title="Completed">Completed</nuxt-link>
  </nav>
</template>

<style>
  a.nuxt-link-active {
    color: black;
    font-weight: bold;
  }
</style>
