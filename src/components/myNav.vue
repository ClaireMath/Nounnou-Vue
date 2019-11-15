<template>
    <div class="ctn">
        <router-link 
        to="/inscription">S'incrire</router-link> 
        
        <router-link to="/login">Se connecter</router-link> 
        
        <p @click="showprofile">Mon profil</p> 
        
        <router-link to="/fonctionnement">Fonctionnement du service</router-link> 
        
        <router-link to="/reglement">Les règles d'or</router-link> 
        
        <router-link to="/todoliste">La to-do liste du propriétaire</router-link> 
        
        <router-link to="/conseilsnounous">Conseils pour nos Nounous</router-link> 
        
        <router-link to="/objetsutiles">Objets vraiment utiles</router-link> 
        
        <router-link to="/sorties">Nos prochaines sorties</router-link> 
        

    </div>
    </template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: "myNav",
  

data() {
      return {
       user: {}
      }
    },

    methods: {
      showprofile() {
      if (!localStorage.getItem("token")) {
        this.$router.push({ name: "login" });
      } else {
        this.user = VueJwtDecode.decode(localStorage.getItem("token"));
        if (this.user.idNounou) {
          this.$router.push("/profilNou");
        } else {
          this.$router.push({ name: "profilMaitre" });
        }
      }
    }
        
}}
</script>
<style scoped>
  .ctn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    opacity: 1;
    position: absolute;
    font-family: cursive, sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    width: 90%;
    height: 90%;
    z-index: 5;
    border-radius: 20px;
  }
  a {
    text-decoration: none;
    padding: 5px;
    color: black
  }
  p {
    cursor:pointer;
  }
 /* Ecran d'ordi portable*/
@media screen and (min-width: 769px) and (max-width :1280px) {
}
/* Tablettes */
@media screen and (min-width: 481px) and (max-width: 768px) {
  
.ctn {
    width: 90%;
    height: 400px;
    font-size: 1.2em;
  }
}
/* Téléphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .ctn {
   
    font-size: 15px;
    width: 100%;
    height: 380px;
    left: 0px;
  }
}
</style>