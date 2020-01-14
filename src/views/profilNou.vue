<template>
  <div class="bigctn">
    <form @submit.prevent="updateProfileNou" accept-charset="UTF-8">
      <div class="bigBox">
        <div class="smallBoxNou">
          <h1>Mon profil Nounou</h1>

          <p>
            Merci de bien vouloir remplir votre profil sans quoi il n'apparaitra
            pas aux utilisateurs.
          </p>
          <div class="ctnchamps">
            <div class="sbchamps">
              <input
                v-model="nounou.prenom"
                type="text"
                placeholder="Prénom"
                required
              />

              <input
                v-model="nounou.adresse"
                type="text"
                placeholder="Adresse"
                required
              />

              <input
                v-model="nounou.code_postal"
                type="number"
                placeholder="Code postal"
                required
              />
            </div>

            <div class="sbchamps2">
              <input
                v-model="nounou.ville"
                type="text"
                placeholder="Ville"
                required
              />

              <input
                v-model="nounou.email"
                type="email"
                placeholder="Email"
                disabled
              />

              <input
                v-model="nounou.telephone"
                type="number"
                placeholder="Téléphone"
                required
              />
            </div>
          </div>
          <div class="select">
            <p>Nombre de chats que je peux garder en même temps</p>
            <select v-model="nounou.capacite_d_accueil" required>
              <option value="1">un chat</option>
              <option value="2">deux chats</option>
              <option value="3">trois chats</option>
              <option value="4">quatre chats</option>
            </select>
          </div>

          <p>Avez-vous déjà eu un ou des chats?</p>
          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="nounou.a_deja_eu_des_chats"
                name="chat"
                id="ouichats"
                value="true"
              />
              <label for="ouichats">oui</label>
            </div>

            <div class="non">
              <input
                type="radio"
                v-model="nounou.a_deja_eu_des_chats"
                name="chat"
                id="nonchats"
                value="false"
              />
              <label for="nonchats">non</label>
            </div>
          </div>
          <p>Avez-vous déjà eu un ou des animaux?</p>
          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="nounou.a_deja_eu_des_animaux"
                name="animaux"
                id="ouianimaux"
                value="true"
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
              />
              <label for="nonanimaux">non</label>
            </div>
          </div>
          <div class="select">
            <p>
              Nombre d'heures consacrées au matou par jour : (minmum une heure)
            </p>
            <select v-model="nounou.peut_consacrer_n_heure_par_jour" required>
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
          >
Décrivez-vous, votre expérience avec les chats ou les animaux en général, pourquoi vous avez envie de vous en occuper.</textarea
          >

          <p>Je suis disponible immédiatement :</p>
          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="nounou.statut_disponible"
                name="dispo"
                id="dispo"
                value="true"
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
              />
              <label for="pasdispo">non</label>
            </div>
          </div>
          <p>Je suis :</p>
          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="nounou.non_fumeur"
                id="Nfumeur"
                name="fumeur"
                value="true"
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
              />
              <label for="fumeur">Fumeur</label>
            </div>
          </div>
        </div>

        <div class="logement">
          <h2>Mon logement</h2>

          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="logement.type_de_logement"
                id="maison"
                name="logement"
                value="maison"
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
              />
              <label for="appartement">Appartement</label>
            </div>
          </div>
          <p>Superficie :</p>
          <input
            v-model="logement.superficie"
            type="text"
            class="logInputText"
            required
          />

          <p>Nombre de personnes habitants dans mon logement :</p>
          <input
            v-model="logement.nombre_d_habitants"
            type="number"
            class="logInputText"
            required
          />

          <p>Des enfants habitent dans mon logement ?</p>
          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="logement.sans_enfant"
                name="kidsInFlat"
                id="kids"
                value="false"
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
              />
              <label for="noAnimals">non</label>
            </div>
          </div>

          <p>
            Je possède un accès à l'extérieur (jardin, terrasse ou balcon) :
          </p>
          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="logement.acces_a_l_exterieur"
                name="extAccess"
                id="ext"
                value="true"
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
              />
              <label for="noext">non</label>
            </div>
          </div>

          <input
            @click="mesAvis"
            type="button"
            class="btn btn2"
            value="Ce que l'on pense de moi (avis)"
          />

          <div class="results">
            <myTableAvis v-if="show" :resultats="resultatAvis"></myTableAvis>
          </div>
        </div>
      </div>
      <input type="submit" class="btn" value="Mettre mon compte à jour" />
    </form>
    <myfooter></myfooter>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import myfooter from "../components/myfooter";
import myTableAvis from "../components/myTableAvis";

export default {
  name: "profilNou",
  components: {
    myfooter,
    myTableAvis
  },
  data() {
    return {
      nounou: {},
      logement: {},
      resultatAvis: [],
      show: false,
      id_nounou: {}
    };
  },
  created: function() {
    // console.log(this.logement);
    // console.log(this.nounou);

    // if (!localStorage.getItem("token")) {
    //   this.$router.push("/login");
    // }
    // else {
    //   this.nounou = VueJwtDecode.decode(localStorage.getItem("token"));
    // }
    //TERNAIRE
    //  ? = alors tu me fais ça
    // : = sinon tu me fais ça
    !localStorage.getItem("token")
      ? this.$router.push("/login")
      : (this.nounou = VueJwtDecode.decode(localStorage.getItem("token")));
    // console.log(this.nounou.idNounou);
    // console.log(this.nounou);
    this.displayFlat();
  },

  methods: {
    displayFlat() {
      this.axios
        .get(
          `http://localhost:6001/logement/getOneByIdNounou/${this.nounou.idNounou}`
        )
        .then(res => {
          // console.log(res.data);
          if (res.data !== null) {
            this.logement = res.data;
          } else {
            return;
          }
        })
        .catch(err => {
          alert(err);
        });
    },

    updateProfileNou() {
      this.axios.post(
        "http://localhost:6001/nounou/updateByEmail",
        this.nounou
      );
      this.logement.id_nounou = this.nounou.idNounou;

      this.axios
        .post("http://localhost:6001/logement/create", this.logement)
        .then(() => {
          // console.log(res);
          this.$router.push("/");
          alert("Votre profil a été mis à jour avec succès.");
        })
        .catch(() => {
          // console.log(err);
        });
    },

    mesAvis() {
      // console.log("this.nounou.idNounou : " + this.nounou.idNounou);
      // console.log(this.nounou.idNounou);
      this.axios
        .get(
          "http://localhost:6001/avis/AllAvisByNounou/" + this.nounou.idNounou
        )

        .then(res => {
          // console.log(res.data);
          this.resultatAvis = res.data;
          this.show = true;
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style scoped>
.bigctn {
  background-color: whitesmoke;
  font-family: "merienda one", cursive, sans-serif;
}
form {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: hotpink; */
}
.results {
  width: 100%;
}
.bigBox {
  /* background-color: brown; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.smallBoxNou {
  /* background-color: greenyellow; */
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ctnchamps {
  /* background-color: lightslategray; */
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.sbchamps {
  /* background-color: teal; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sbchamps2 {
  /* background-color: turquoise; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logement {
  /* background-color: #ff2d95; */
  width: 50%;
  padding-top: 20px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
}
label {
  margin-top: 12px;
}
.select {
  width: 100%;
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
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 1px;
}
.btn2 {
  width: 100%;
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
.logInputText {
  width: 50%;
}
.radio {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
.ctnchamps {
  display: flex;
  flex-direction: column;
  height: 280px;
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  form {
    /* background-color: hotpink; */
    padding: 0px;
  }
  .bigBox {
    width: 100%;
    /* background-color: brown; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .smallBoxNou {
    /* background-color: goldenrod; */
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .ctnchamps {
    /* background-color: lightslategray; */
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

  .logement {
    width: 100%;
    padding: 20px;
  }
}
</style>
