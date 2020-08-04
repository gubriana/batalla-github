<template>
  <div class="container-fluid" id="fondo">
    <div class="container">
      <br>
      <h3 class="center-align grey-text">Batalla de GITHUB</h3>
      <div class="row">
        <div class="center-align block col s12 m12">
          <button class="waves-effect waves-light btn-large btn-block pulse" @click="btnBatalla">Fight!</button>
          <br><br>
        </div>
        
        <div class="col s12 m12">
          <Estadistica esta="1"/>
          <Estadistica esta="2"/>
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
  },
  methods: {
    btnBatalla(){
      const puntaje1 = this.$store.state.puntaje1;
      const puntaje2 = this.$store.state.puntaje2;
      if (puntaje1 > puntaje2) {
        alert('Ganó jugador de la izquierda')
      } else if (puntaje1 < puntaje2){
        alert('Ganó jugador de la derecha')
      } else {
        alert('Empate!')
      }
    }
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
#fondo {
  background-color:#eeeeee;
}
</style>
