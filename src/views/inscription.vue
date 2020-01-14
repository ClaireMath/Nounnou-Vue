<template>
  <div class="ctn">
    <div class="inscription">
      <form>
        <h1>Inscription</h1>
        <p>Je suis :</p>
        <select @change="onChangeF($event)">
          <option value>Veuillez sélectionner un choix</option>
          <option value="nounou">Nounou</option>
          <option value="maitre">Maitre</option>
        </select>
        <div v-if="nounou">
          <NouInscription></NouInscription>
        </div>
        <div v-if="maitre">
          <MaitreInscription></MaitreInscription>
        </div>
      </form>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>

import MaitreInscription from "../components/MaitreInscription";
import NouInscription from "../components/NouInscription";
import myfooter from "../components/myfooter";

export default {
  name: "inscription",
  components: {
    MaitreInscription,
    NouInscription,
    myfooter
  },

  data() {
    return {
      nounou: false,
      maitre: false
    };
  },
  created()  {

  },

  methods: {
    onChangeF(event) {
      if (event.target.value == "nounou") {
        this.nounou = true;
        this.maitre = false;
      } else if (event.target.value == "maitre") {
        this.nounou = false;
        this.maitre = true;
      } else if (event.target.value == "") {
        this.nounou = false;
        this.maitre = false;
      } else {
        return;
      }
    }
  }
};
</script>
<style scoped>
.ctn {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-family: "merienda one", cursive, sans-serif;
}
.inscription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  background-color: whitesmoke;
}
form {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #680d3b;
  border-radius: 25px;
  -webkit-box-shadow: 4px 4px 8px 2px rgba(0,0,0,0.2) ;
  box-shadow: 4px 4px 8px 2px rgba(0,0,0,0.2) ;
  padding: 20px;
}
h1 {
  font-size: 20px;
  margin-bottom: 20px;
}
p {
  margin-bottom: 10px;
}
select {
  border-radius: 10px;
  height: 30px;
}
</style>