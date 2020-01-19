<template>
  <div class="ctn">
    <div class="login">
      <form>
        <h1>Merci de bien vouloir vous connecter</h1>

        <p>Je suis :</p>

        <select @change="onChangeF($event)">
          <option value="">Veuillez sélectionner un choix</option>
          <option value="nounou">Nounou</option>
          <option value="maitre">Maitre</option>
        </select>

        <div v-if="nounou">
          <loginNou></loginNou>
        </div>
        <div v-if="maitre">
          <loginMaitre> </loginMaitre>
        </div>
      </form>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import loginNou from "../components/loginNou";
import loginMaitre from "../components/loginMaitre";
import myfooter from "../components/myfooter";

export default {
  name: "login",
  components: {
    loginNou,
    loginMaitre,
    myfooter
  },
  data() {
    return {
      nounou: false,
      maitre: false
    };
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
  /* background-color: whitesmoke; */
  color: black;
  font-family: "Merienda one", cursive, sans-serif;
}
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: whitesmoke;
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
p {
  margin-bottom: 10px;
}
select {
  border-radius: 10px;
  height: 30px;
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  h1 {
    text-align: center;
  }
  form {
    width: 90%;
  }
}
</style>
