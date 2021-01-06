<script lang="ts">
import { defineComponent } from 'vue'
import { Counter } from './components/Counter';

export default defineComponent({
  name: 'App',
  components: {
    Counter,
  }
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Counter :startCount="1" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>