<template>
  <div>
    <div class="catsittersearch">
      <!-- <div class="catsitter"> -->
      <h1>Trouver une Nounou</h1>

      <form @submit.prevent="shownounou">
        <input v-model="nounou.ville" type="text" placeholder="Ville de l'hôte" class="ville" />

        <input class="checkbox" v-model="nounou.statut_disponible" type="checkbox" id="dispo" />
        <label for="dispo">Disponible immédiatement</label>

        <select v-model="nounou.capacite_d_accueil">
          <option value="1">Pour un chat</option>
          <option value="2">Pour deux chats</option>
          <option value="3">Pour trois chats</option>
          <option value="4">Pour quatre chats</option>
        </select>

        <input class="checkbox" v-model="nounou.non_fumeur" type="checkbox" id="nonfumeur" />
        <label for="nonfumeur">Non fumeur</label>

        <input class="checkbox" v-model="nounou.sans_enfant" type="checkbox" id="sansenfant" />
        <label for="sansenfant">Sans enfant</label>

        <input class="checkbox" v-model="nounou.sans_animal" type="checkbox" id="sansanimal" />
        <label for="sansanimal">Sans animal</label>

        <input type="submit" value="Rechercher" class="btn" />
      </form>
      <div class="results">
        
        <!-- // le premier nounou, c'est celui qui est dans props, donc dans l'enfant
        // le deuxième nounou, c'est celui qui est dans data-->
        <myTable v-if="show" :resultats="resultatnounou"></myTable>
      </div>
    </div>
    <myfooter />
  </div>
</template>

<script>
// @ is an alias to /src
import myfooter from "../components/myfooter";
import myTable from "../components/myTable";
export default {
  name: "catsittersearch",
  components: {
    myfooter,
    myTable
  },

  data() {
    return {
      nounou: {},
      show: false,
      resultatnounou: [],
      url: "http://localhost:6001/nounou/AllByVilleStatutCapaDaccueil"
    };
  },

  // updated() {
  //   console.log(this.resultatnounou);
  // },
  methods: {
    shownounou() {
      // console.log(this.nounou)

      //  console.log(this.nounou.statut_disponible)
      //  console.log(this.nounou.sans_enfant)
      //  console.log(this.url);

      this.axios
        .post(this.url, this.nounou)
        .then(res => {
          this.resultatnounou = res.data;
          this.show = true;
        })
        .catch(err => {
          // console.log(err)
        });
    }
  },
  // from: Route d'où je viens : the target Route Object being navigated to.
  // to: Route où je veux aller : the current route being navigated away from.
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
.catsittersearch {
  background-color: whitesmoke;
  color: black;
  font-family: "Merienda One", cursive, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
form {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #680d3b;
  border-radius: 25px;
  padding: 20px;
}
.results {
  margin-top: 40px;
  width: 100%;
}
.ville {
  margin: 20px;
}

/* .catsitter {
  display: flex;
  justify-content: center;
} */
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
  /* font-family: cursive, "sans-serif"; */
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
}
</style>