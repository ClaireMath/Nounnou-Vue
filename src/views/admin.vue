<template>
  <div>
    <div class="admin">
      <div class="nounous">
        <input
          @click="catSittersList"
          type="button"
          class="btn"
          value="Liste des Nounous"
        />
        <tableAdmin v-if="showNounous" :resultats="allNounous"></tableAdmin>
      </div>

      <div class="maitres">
        <input
          @click="ownersList"
          type="button"
          class="btn"
          value="Liste des Maitres"
        />
        <tableAdmin v-if="showMaitres" :resultats="allMaitres"></tableAdmin>
      </div>
    </div>
    <myfooter />
  </div>
</template>

<script>
import myfooter from "../components/myfooter";
import VueJwtDecode from "vue-jwt-decode";
import tableAdmin from "../components/tableAdmin";

export default {
  name: "admin",
  components: {
    myfooter,
    tableAdmin
  },
  data() {
    return {
      urlNounou: "http://localhost:6001/nounou/All",
      urlMaitre: "http://localhost:6001/maitre/displayAll",
      showNounous: false,
      showMaitres: false,
      allNounous: [],
      allMaitres: [],
      token: {}
    };
  },
  created: function() {},

  methods: {
    catSittersList() {
      
      this.axios.get(this.urlNounou)
        .then(res => {
          // console.log(res);
          this.allNounous = res.data;
          this.showNounous = true;
        })
        .catch(() => {
          // console.log(err);
        });
    },

    ownersList() {
      // console.log(this.allMaitres);
      this.axios
        .get(this.urlMaitre)
        .then(res => {
          // console.log(res);
          this.allMaitres = res.data;
          this.showMaitres = true;
        })
        .catch(() => {
          // console.log(err);
        });
    }
  },

  beforeRouteEnter(from, to, next) {
    if (localStorage.getItem("token") !== null) {
      var token = VueJwtDecode.decode(localStorage.getItem("token"));
      // console.log(token);
      if (token.admin == false) {
        next("/");
      } else {
        next();
      }
    }
  }
};
</script>

<style scoped>
.admin {
  width: 100%;
  min-height: 500px;
  background-color: whitesmoke;
  color: black;
  font-family: "Merienda One", cursive, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.nounous,
.maitres {
  width: 100%;
  margin: 10px;
}
.btn {
  width: 30%;
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
  font-size: 1em;
  letter-spacing: 1px;
}
.btn:hover {
  color: #ffffff;
  background-color: #680d3b;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .btn {
    width: 100%;
  }
}
</style>
