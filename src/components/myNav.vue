<template>
    <div class="ctn">
        <router-link to="/inscription">S'incrire</router-link> 
        
        <router-link to="/login">Se connecter</router-link> 
        
        <router-link to="/fonctionnement">Mon profil</router-link> 
        
        <router-link to="/fonctionnement">Fonctionnement du service</router-link> 
        
        <router-link to="/reglement">Les règles d'or</router-link> 
        
        <router-link to="/todoliste">La to-do liste du propriétaire</router-link> 
        
        <router-link to="/conseilsnounous">Conseils pour nos Nounous</router-link> 
        
        <router-link to="/alimentsdangereux">Aliments dangereux pour nos matous</router-link> 
        
        <router-link to="/objetsutiles">Objets vraiment utiles</router-link> 
        
        <router-link to="/sorties">Nos prochaines sorties</router-link> 
        

    </div>
    </template>

<script>

export default {
  name: "myNav",
  

data() {
      return {
       
       
      }
    },

    methods: {
        
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
    left: -500px;
    /* top: 160px; */
    width: 35%;
    height: 100%;
    z-index: 5;
    border-radius: 20px;
  }
  a {
    text-decoration: none;
    padding: 5px;
    color: black
  }
 
/* Tablettes */
@media screen and (min-width: 481px) and (max-width: 1024px) {
  
.ctn {
    width: 50%;
    height: 450px;
    font-size: 1.2em;
  }
}
@media screen and (min-width: 320px) and (max-width: 480px) {
  .ctn {
   
    font-size: 15px;
    width: 100%;
    height: 380px;
    left: 0px;
  }
}
</style>