<template>
  <div class="ctn">
    <div class="newAvis">
      <form preventDefault>
        <h1>
          Merci de bien vouloir remplir les champs suivants afin d'ajouter votre
          avis
        </h1>
        <label for="note">Note :</label>
        <div class="radio">
          <div class="note">
            <input
              type="radio"
              v-model="avis.note"
              name="note"
              id="n1"
              value="1"
              required
            />
            <label for="note">1</label>
          </div>

          <div class="note">
            <input
              type="radio"
              v-model="avis.note"
              name="note"
              id="n2"
              value="2"
            />
            <label for="note">2</label>
          </div>
          <div class="note">
            <input
              type="radio"
              v-model="avis.note"
              name="note"
              id="n3"
              value="3"
            />
            <label for="note">3</label>
          </div>
          <div class="note">
            <input
              type="radio"
              v-model="avis.note"
              name="note"
              id="n4"
              value="4"
            />
            <label for="note">4</label>
          </div>
          <div class="note">
            <input
              type="radio"
              v-model="avis.note"
              name="note"
              id="n5"
              value="5"
            />
            <label for="note">5</label>
          </div>
        </div>
        <div>
          <input type="number" v-model="avis.id_maitre" class="hidden" />
          <input type="number" v-model="avis.id_nounou" class="hidden" />
        </div>
        <textarea
          required
          v-model="avis.commentaire"
          name=""
          id=""
          cols="60"
          rows="10"
          placeholder="Votre commentaire ici"
        ></textarea>

        <input
          @click="newAvis"
          type="button"
          class="btn"
          value="Ajouter mon avis"
        />
      </form>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import myfooter from "../components/myfooter";

export default {
  name: "maitreChercheNounou",
  components: {
    myfooter
  },
  data() {
    return {
      avis: {},
      urlA: "http://localhost:6001/avis/newAvisOnN"
    };
  },
  created: function() {
    var token = VueJwtDecode.decode(localStorage.getItem("token"));
    this.avis.id_maitre = token.idMaitre;
    // console.log(`idMaitre : ${this.avis.id_maitre}`);
    this.$route.params.data;
    this.avis.id_nounou = this.$route.params.data.id_nounou;
    this.avis.id_garde = this.$route.params.data.id_garde;

    // console.log(`idNounou : ${this.$route.params.data.id_nounou}`);
    // console.log(`idGarde : ${this.$route.params.data.id_garde}`);
  },

  methods: {
    newAvis() {
      this.axios
        .post(this.urlA, this.avis)
        .then(() => {
          // console.log(res.data);
          alert("Votre avis vient d'être posté.")
          this.$router.push("/");
        })
        .catch(() => {
          // console.log(err);
        });
    }
  },
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
.ctn {
  color: black;
  font-family: "Merienda one", cursive, sans-serif;
}
.newAvis {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
}
.radio {
  display: flex;
}
.note {
  margin-left: 20px;
  /* margin-bottom: 20px; */
}
.hidden {
  visibility: hidden;
}
textarea {
  border-radius: 25px;
  padding: 10px;
  margin-top: 10px;
}
.btn {
  margin-top: 40px;
  width: 80%;
  height: 40px;
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

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #680d3b;
  border-radius: 25px;
  -webkit-box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.2);
  padding: 30px;
}
h1 {
  font-size: 20px;
  margin-bottom: 20px;
}
label {
  margin: 5px;
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .newAvis {
    padding: 20px;
  }
  h1 {
    text-align: center;
  }
  .ctn {
    width: 100%;
  }
  form {
    width: 100%;
  }
  textarea {
    width: 90%;
    border-radius: 25px;
    padding: 10px;
    margin-top: 10px;
  }
  .btn {
    width: 90%;
  }
}
</style>
