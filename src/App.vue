<template>
  <div class="container">
    <h3 class="center-align">Batalla de GITHUB</h3>
    <div class="row">
      <div class="col s12 m12">
        <Estadistica esta="1"/>
        <Estadistica esta="2"/>
        <div class="center-align block col s12 m12">
          <button class="waves-effect waves-light btn-large btn-block">Fight</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Estadistica from './components/Estadistica.vue'

export default {
  name: 'App',
  components: {
    Estadistica
  }
}     
</script>

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
