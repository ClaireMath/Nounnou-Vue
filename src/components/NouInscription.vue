<template>
  <div class="bigctn">
    
    <form @submit.prevent="addNewNounou">
      <div class="ctninput">
       
        <input v-model="nounou.nom" type="text" name id placeholder="Nom" required />

        <input v-model="nounou.prenom" type="text" name id placeholder="Prénom" required />

        <input v-model="nounou.email" type="email" name id placeholder="Email" required />

        <input v-model="nounou.mdp" type="tel" name id placeholder="mot de passe" required />

        <!--  -->
      </div>
      <input type="submit" value="Créer mon compte" class="btn" />
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

// import headertemplate from '../components/header.vue'

import VueJwtDecode from "vue-jwt-decode";
export default {
  name: "NouInscription",
  data() {
    return {
      nounou: {},
      url: "http://localhost:6001/nounou/register"
    };
  },

  methods: {
    addNewNounou() {
      this.axios
        .post(this.url, this.nounou)
        .then(res => {
          localStorage.setItem("token", res.data.token);

          this.$router.push("/profilNou");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.bigctn {
  padding: 20px;
}
.ctninput {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  width: 600px;
  /* height: 600px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.div {
  height: 90%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;


}
input {
  margin: 5px;
  width: 80%;
}
/*
legend {
  padding: 3px 6px;
} */
.btn {
  width: 150px;
  height: 30px;
  font-family: "Livvic", sans-serif;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  color: hsl(330, 78%, 23%);
  background-color: whitesmoke;
  /* font-family: cursive, "sans-serif"; */
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 1px;
}
.btn:hover {
  color: #ffffff;
  background-color: #680d3b;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
}
input {
  border-radius: 10px;
  height: 30px;
}
/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
 /* .ctn {
   width: 50%;
 } */
 /* .bigctn {
   width: 100%;
 } */
 form {
  width: 120px;
 }
 .ctninput {
   width: 150%;
 }
} 
</style>