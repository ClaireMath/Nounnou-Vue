<template>
  <div class="ctn">
    <div class="demandeGarde">
      <form>
        <h1>Merci de bien vouloir remplir le formulaire de garde</h1>
        <label for="dateD">Date de début de garde :</label>
        <input v-model="garder.debut" type="date" name id="dateD" required/>

        <label for="dateF">Date de fin de garde :</label>
        <input v-model="garder.fin" type="date" name id="dateF" required/>

        <input
          @click="sendRequestForm"
          type="button"
          class="btn"
          value="Envoyer une demande de garde"
          
        />
      </form>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from "../components/myfooter";
import Router from "../router";
export default {
  name: "demandeGarde",
  components: {
    myfooter
  },
  data() {
    return {
        garder: {},
        url: "http://localhost:6001/garder/new"
    };
  },

  methods: {
      sendRequestForm() {
          this.axios
        .post(this.url, this.garder)
        .then(res => {
         alert("Votre demande vient d'être envoyée.")
          Router.push({ name: "home" });
        })
        .catch(err => {
          console.log(err);
        });
          
      }
  }
};
</script>
<style scoped>
.ctn {
  /* height: 600px; */
  color: black;
  font-family: "Merienda one", cursive, sans-serif;
}
.demandeGarde {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55vh;
  background-color: whitesmoke;
}
.btn {
  margin-top: 20px;
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
/* .ctnCompo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
} */
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

/* TABLETTE */
@media screen and (min-width: 481px) and (max-width: 768px) {
  .login {
    height: 70vh;
  }
}
/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  h1 {
    text-align: center;
  }
  .ctn {
    width: 100%;
  }
  .login {
    width: 100%;
    height: 75vh;
  }
  form {
    width: 80%;
  }
}
</style>