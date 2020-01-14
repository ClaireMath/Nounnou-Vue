<template>
  <div>
    <div class="catsearch">
      <h1>Trouver un chat à garder</h1>

      <form @submit.prevent="showcats">
        <input
          v-model="maitre.ville"
          type="text"
          name=""
          id="ville"
          placeholder="Ville de l'hôte"
        />

        <input v-model="maitre.statut_disponible" type="checkbox" id="dispo" />
        <label for="dispo">ayant besoin d'être gardé bientôt</label>

        <input v-model="chat.tolere_les_chats" type="checkbox" id="okchats" />
        <label for="okchats">qui s'entend avec les chats</label>

        <input
          v-model="chat.tolere_les_animaux"
          type="checkbox"
          id="okanimaux"
        />
        <label for="okanimaux">qui s'entend avec les autres animaux</label>

        <input
          v-model="chat.a_peur_des_enfants"
          type="checkbox"
          id="peurdesenfants"
        />
        <label for="peurdesenfants">qui s'entend bien avec les enfants</label>

        <input class="btn" type="submit" value="Rechercher" />
      </form>

      <div class="results">
        <!-- boucler pour afficher tous les résultats (v-for)
        dans data créer variable qui s'appelle resultats
        (voir datatable) 
         -->
        <!-- // le premier resultat, c'est celui qui est dans props, donc dans l'enfant
        // le deuxième resultat, c'est celui qui est dans data-->
        <myTable v-if="show" :resultats="resultatmaitres"></myTable>
      </div>
    </div>

    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from "../components/myfooter";
import myTable from "../components/myTable";

export default {
  name: "catSearch",
  components: {
    myfooter,
    myTable
  },
  data() {
    return {
      maitre: {},
      show: false,
      chat: {},
      resultatmaitres: [],
      url: "http://localhost:6001/maitre/AllByVilleEtStatut"
    };
  },
  created: function() {},

  methods: {
    showcats() {
      this.axios
        .post(this.url, { maitre: this.maitre, chat: this.chat })
        .then(res => {
          // console.log(res.data);
          this.resultatmaitres = res.data;
          this.show = true;
          // console.log(this.resultatmaitres);
        })
        .catch(err => {
          alert(err);
        });
    }
  },
  // from: Route d'où je viens : the current route being navigated away from.
  // to: Route où je veux aller : the target Route Object being navigated to.
  // next: Fonction callback appelée quand ma condition est remplie
  beforeRouteEnter(from, to, next) {
    if (localStorage.getItem("token") == null) {
      next("/login");
    } else {
      next();
    }
  }
};
</script>
<style scoped>
.cursive {
  font-family: "Merienda One";
}
.catsearch {
  background-color: whitesmoke;
  color: black;
  font-family: "Merienda One", cursive, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
}
h1 {
  text-align: center;
}
.results {
  margin-top: 40px;
  width: 100%;
}
form {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #680d3b;
  border-radius: 25px;
  padding: 20px;
}
#ville {
  margin: 20px;
  width: 70%;
}
.btn {
  width: 250px;
  height: 50px;
  font-family: "Livvic", sans-serif;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  color: hsl(330, 78%, 23%);
  background-color: whitesmoke;
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 1px;
  padding: 0px;
}
.btn:hover {
  color: #ffffff;
  background-color: #680d3b;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
}
label {
  margin-bottom: 30px;
}
input {
  border-radius: 25px;
  height: 30px;
  width: 50%;
  padding: 10px;
}
select {
  margin-bottom: 30px;
  border-radius: 25px;
  height: 30px;
  width: 50%;
}
.checkbox {
  height: 20px;
}
/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  form {
    width: 90%;
  }
  .btn {
    width: 60%;
  }
  .catsearch {
    padding: 0px;
  }
}
</style>
