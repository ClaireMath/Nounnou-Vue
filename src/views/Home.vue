<template>
  <div class="home">
    <div class="monMain">
      <h1 v-if="user">Bonjour {{ myToken.prenom }}!</h1>
      <h1 v-if="inconnu">Bonjour !</h1>
    </div>

    <myfooter></myfooter>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import myfooter from "../components/myfooter";

export default {
  name: "home",
  components: {
    myfooter
  },
  data() {
    return {
      inconnu: null,
      user: null,
      myToken: null
    };
  },
  created() {
    
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("token") == "null"
    ) {
      this.inconnu = true;
      this.user = false;
      return;
    } else {
      this.user = true;
      this.inconnu = false;
      this.myToken = VueJwtDecode.decode(localStorage.getItem("token"));
    }
  },
  methods: {}
};
</script>
<style scoped>
.home {
  width: 100%;
}
.monMain {
  width: 100%;
  background: url("../assets/3SnugglingCats.jpg") no-repeat center;
  background-size: cover;
  height: 1200px;
  font-family: "merienda one", cursive, "sans-serif";
}
h1 {
  position: relative;
  padding: 5px;
  text-align: center;
}

/* Ecran d'ordi portable*/
@media screen and (min-width: 769px) and (max-width: 1280px) {
  .monMain {
    height: 770px;
  }
}

/* Tablette*/
@media screen and (min-width: 481px) and (max-width: 768px) {
  .monMain {
    height: 575px;
  }
  h1 {
    position: relative;
    padding: 5px;
    text-align: center;
  }
}

/* Téléphone*/
@media screen and (min-width: 320px) and (max-width: 480px) {
  .monMain {
    height: 350px;
    background: url("../assets/3SnugglingCats.jpg") no-repeat center;
    background-size: 320px;
  }
  h1 {
    font-size: 1em;
    padding: 5px;
  }
}
</style>
