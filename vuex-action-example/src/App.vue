<template>
  <div id="app">
    <hello/>
  </div>
</template>

<script>
import hello from './components/hello'

export default {
  name: 'App',
  components: {
    hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
