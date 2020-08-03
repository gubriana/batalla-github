<template>
  <div>
    <div class="row">
      <div class="col s4 m4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Git hub de: {{nombre}}</span>
          </div>
          <div class="card-action">
            <p>Public Repositories: {{repositories}}</p>
            <p>Numbre of followers: {{numFollowers}}</p>
            <p>Number Following: {{numFollowing}}</p>
            <p>Public Gists: {{gists}}</p>
            <p>Total score: {{totalScore}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Estadistica',
  data() {
    return {
      nombre: '',
      repositories: 0,
      numFollowers: 0,
      numFollowing: 0,
      gists: 0,
      totalScore: 0
    }
  },
  mounted() {
    this.axios.get('https://api.github.com/users/gubriana')
    .then((datos) => {
      const user = datos.data;
      this.nombre = user.login;
      this.repositories = user.public_repos;
      this.numFollowers = user.followers;
      this.numFollowing = user.following;
      this.gists = user.public_gists;
      this.totalScore = this.repositories + this.numFollowers + this.gists;
    })
  }
}
</script>