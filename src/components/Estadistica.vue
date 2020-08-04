<template>
  <div>
    <div class="col s6 m6">
      <div class="card hoverable">
        <div class="center-align">
          <input v-model="githubUserName" type="text" placeholder="Escribe el nombre de tu usuario"/>
          <br><br>
          <button class="waves-effect waves-light btn" @click="sendUser">Ingresar usuario</button>
          <br><br>
        </div>
        <div class="divider"></div>
        <div class="card-content">
          <span class="card-title">Git hub de: {{userName}}</span>
        </div>
        <div class="card-action">
          <p>Public Repositories: {{repositories}}</p>
          <p>Numbre of Followers: {{numFollowers}}</p>
          <p>Number Following: {{numFollowing}}</p>
          <p>Public Gists: {{gists}}</p>
          <p>Total Score: {{totalScore}}</p>
        </div>
        <div class="card-content">
          <img v-for="(seguidor,i) in imgFollowers" :key="i" :src="seguidor.avatar_url" alt="" >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Estadistica',
  props: {
    esta: String
  },
  data() {
    return {
      userName: '',
      repositories: 0,
      numFollowers: 0,
      numFollowing: 0,
      gists: 0,
      totalScore: 0,
      imgFollowers: [],
      githubUserName: ''
    }
  },
  methods: {
    sendUser() {
      this.axios.get(`https://api.github.com/users/${this.githubUserName}`)
      .then((datos) => {
        const user = datos.data;
        this.userName = user.login;
        this.repositories = user.public_repos;
        this.numFollowers = user.followers;
        this.numFollowing = user.following;
        this.gists = user.public_gists;
        this.totalScore = this.repositories + this.numFollowers + this.gists;
        if (this.esta == '1'){
          this.$store.commit('cambiarPuntaje1',this.totalScore)
        } else {
          this.$store.commit('cambiarPuntaje2', this.totalScore)
        }
      })
      .catch((error) => {
        alert(error);
      });
      this.axios.get(`https://api.github.com/users/${this.githubUserName}/followers`)
      .then((datos) => {
        const seguidores = datos.data;
        this.imgFollowers = seguidores;
      })
      .catch((error) => {
        alert(error);
      });
    }
  }
}
</script>
<style scoped>
  img {
    width: 20%;
  }
</style>