<template>
  <div class="ctn">
    <div class="nounou">
      <!-- <div class="catsitter"> -->
      <h1>Nounou</h1>

      <div class="ctnchamps">
        <div class="sbchamps">
          <input v-model="nounou.prenom" type="text" placeholder="Prénom" required readonly />

          <input v-model="nounou.nom" type="text" placeholder="Nom" required readonly />

          <input v-model="nounou.adresse" type="text" placeholder="Adresse" required readonly />

          <input
            v-model="nounou.code_postal"
            type="number"
            placeholder="Code postal"
            required
            readonly
          />
        </div>

        <div class="sbchamps2">
          <input v-model="nounou.ville" type="text" placeholder="Ville" required readonly />

          <!-- <input v-model="nounou.email" type="email" placeholder="Email" required />
          -->
          <!-- <input v-model="nounou.mdp" type="password" placeholder="Mot de passe" required /> -->
        </div>
      </div>
      <div class="select">
        <p>Nombre de chats que la nounou peut garder en même temps :</p>
        <select v-model="nounou.capacite_d_accueil" required disabled>
          <!-- <option disabled value="">Nombre de chats que je peux garder en même temps</option> -->
          <option value="1">un chat</option>
          <option value="2">deux chats</option>
          <option value="3">trois chats</option>
          <option value="4">quatre chats</option>
        </select>
      </div>

      <p>Cette nounou a déjà eu des chats :</p>
      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="nounou.a_deja_eu_des_chats"
            name="chat"
            id="ouichats"
            value="true"
            disabled
          />
          <label for="ouichats">oui</label>
        </div>
        <!-- v-model="picked" -->
        <div class="non">
          <input
            disabled
            type="radio"
            v-model="nounou.a_deja_eu_des_chats"
            name="chat"
            id="nonchats"
            value="false"
          />
          <label for="nonchats">non</label>
        </div>
      </div>
      <p>Cette nounou a déjà eu des animaux :</p>
      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="nounou.a_deja_eu_des_animaux"
            name="animaux"
            id="ouianimaux"
            value="true"
            disabled
          />
          <label for="ouianimaux">oui</label>
        </div>
        <div class="non">
          <input
            type="radio"
            v-model="nounou.a_deja_eu_des_animaux"
            name="animaux"
            id="nonanimaux"
            value="false"
            disabled
          />
          <label for="nonanimaux">non</label>
        </div>
      </div>
      <div class="select">
        <p>Nombre d'heures consacrées au matou par jour : (minmum une heure)</p>
        <select v-model="nounou.peut_consacrer_n_heure_par_jour" required disabled>
          <!-- v-model="selected" -->
          <!-- <option disabled value="">Nombre de chats que je peux garder en même temps</option> -->
          <option value="1">une heure</option>
          <option value="2">deux heures</option>
          <option value="3">trois heures</option>
          <option value="4">plus de trois heures</option>
        </select>
      </div>

      <textarea
        v-model="nounou.description"
        cols="40"
        rows="12"
        placeholder="Décrivez-vous et votre expérience avec les chats."
        required
        readonly
      >Petit mot de la nounou :</textarea>

      <p>Disponible immédiatement :</p>
      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="nounou.statut_disponible"
            name="dispo"
            id="dispo"
            value="true"
            disabled
          />
          <label for="dispo">oui</label>
        </div>
        <div class="non">
          <input
            type="radio"
            v-model="nounou.statut_disponible"
            name="dispo"
            id="pasdispo"
            value="false"
            disabled
          />
          <label for="pasdispo">non</label>
        </div>
      </div>
      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="nounou.non_fumeur"
            id="Nfumeur"
            name="fumeur"
            value="true"
            disabled
          />
          <label for="Nfumeur">Non fumeur</label>
        </div>
        <div class="non">
          <input
            type="radio"
            v-model="nounou.non_fumeur"
            id="fumeur"
            name="fumeur"
            value="false"
            disabled
          />
          <label for="fumeur">Fumeur</label>
        </div>
      </div>
    </div>
    <div class="logement">
      <h2>Son logement</h2>

      <!-- <div class="radio"></div> -->
      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="logement.type_de_logement"
            id="maison"
            name="logement"
            value="maison"
            disabled
          />
          <label for="maison">Maison</label>
        </div>
        <div class="non">
          <input
            type="radio"
            v-model="logement.type_de_logement"
            id="appartement"
            name="logement"
            value="appartement"
            disabled
          />
          <label for="appartement">Appartement</label>
        </div>
      </div>
      <p>Superficie :</p>
      <input v-model="logement.superficie" type="text" required readonly />

      <p>Nombre de personnes habitants dans mon logement :</p>
      <input v-model="logement.nombre_d_habitants" type="number" required readonly />

      <p>Des enfants habitent dans mon logement ?</p>
      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="logement.sans_enfant"
            name="kidsInFlat"
            id="kids"
            value="false"
            disabled
          />
          <label for="kids">oui</label>
        </div>
        <div class="non">
          <input
            type="radio"
            v-model="logement.sans_enfant"
            name="kidsInFlat"
            id="noKids"
            value="true"
            disabled
          />
          <label for="noKids">non</label>
        </div>
      </div>
      <p>Des animaux vivent dans mon logement :</p>
      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="logement.sans_animal"
            name="animalsInFlat"
            id="animals"
            value="false"
            disabled
          />
          <label for="animals">oui</label>
        </div>
        <div class="non">
          <input
            type="radio"
            v-model="logement.sans_animal"
            name="animalsInFlat"
            id="noAnimals"
            value="true"
            disabled
          />
          <label for="noAnimals">non</label>
        </div>
      </div>

      <p>Je possède un accès à l'extérieur (jardin, terrasse ou balcon) :</p>
      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="logement.acces_a_l_exterieur"
            name="extAccess"
            id="ext"
            value="true"
            disabled
          />
          <label for="ext">oui</label>
        </div>
        <div class="non">
          <input
            type="radio"
            v-model="logement.acces_a_l_exterieur"
            name="extAccess"
            id="noext"
            value="false"
            disabled
          />
          <label for="noext">non</label>
        </div>
      </div>
    </div>
  </div>
</template>
      
      <script>
export default {
  name: "showNounous",
  components: {},
  data() {
    return {
      nounou: {},
      logement: {}
    };
  },
  // on passe le paramètre data dans l'url mais il n'est pas visible, c'est propre à vuejs
  // au created, on récupère le param data
  created: function() {
    this.nounou = this.$route.params.data;
    this.logement = this.$route.params.data.logement;
  }
};
</script>
      
      <style scoped>
.ctn {
  display: flex;
  
  font-family: cursive, sans-serif;
  font-size: 20px;
   /* background-color: whitesmoke; */
}
.nounou {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: aqua;
}
/* form {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hotpink; */
  /* 
         align-content: center;
         justify-items: center; */
/* } */

/* .bigBox {
  background-color: brown;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
} */
/* .smallBoxNou {
  background-color: greenyellow;
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
} */
.ctnchamps {
  background-color: lightslategray;
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.sbchamps {
  background-color: teal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sbchamps2 {
  background-color: turquoise;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logement {
  background-color: #ff2d95;
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
label {
  margin-top: 12px;
}
.select {
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}
h2 {
  margin: 20px;
}
p {
  margin-top: 20px;
}
select {
  margin: 10px;
  border-radius: 25px;
  width: 60%;
  height: 25px;
}
textarea {
  border-radius: 25px;
  padding: 10px;
}
.btn {
  width: 50%;
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
  margin: 10px;
  padding: 10px;
}
.radio {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  /* padding: 10px; */
}
.oui {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.non {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
/* TABLETTE */
@media screen and (min-width: 481px) and (max-width: 768px) {
}
/* .ctn {
  flex-wrap: wrap;

} */
.ctnchamps {
  display: flex;
  flex-direction: column;
  height: 280px;
}
textarea {
  width: 90%;
}


/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  
  .ctn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  }
  .nounou {
    width: 100%;
  }
  .logement {
    width: 100%;
  }
  
  .ctnchamps {
    background-color: lightslategray;
    width: 100%;
    height: 280px;
  }
  p {
    text-align: justify;
  }
  h1 {
    font-size: 29px;
  }
  textarea {
    width: 99%;
  }
  .btn {
    width: 90%;
  }
}
</style>
      