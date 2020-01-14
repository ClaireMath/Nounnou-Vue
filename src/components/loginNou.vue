<template>
  <div class="bigctn">
    <form @submit="loginSubmit">
      <div class="ctninput">
        <input
          class="inputT"
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          v-model="password"
          required
        />
      </div>
      <input type="submit" value="Se connecter" class="btn" />
      <p v-if="erreur">Erreur dans l'identifiant ou le mot de passe</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "loginNou",

  data() {
    return {
      email: "",
      password: "",
      erreur: null
    };
  },
  // created: function () {

  //     this.nounou = VueJwtDecode.decode(localStorage.getItem('token'));
  // },

  methods: {
    loginSubmit: function(e) {
      e.preventDefault();
      this.axios
        .post("http://localhost:6001/nounou/login", {
          email: this.email,
          // le 1er mdp fait référence au champs dans node alors que
          // le this.password fait rappelle ce quil y a dans v-model
          mdp: this.password
        })
        .then(res => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            // this.$router.push("/");
            // le $ c'est pour récupérer des variables définies en global dans main.js
            this.$router.push({ name: "home" });
            window.location.reload();
          } else if (res.data.banni) {
            alert("Vous êtes banni, vous ne pouvez plus vous connecter");
          }
        })
        .catch(() => {
          this.erreur = true;
          // console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.bigctn {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ctninput {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.div {
  height: 90%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
p {
  margin-top: 20px;
}
input {
  margin: 5px;
  width: 80%;
}
.inputT {
  padding: 5px;
}
.btn {
  width: 150px;
  height: 30px;
  font-family: "Livvic", sans-serif;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  color: hsl(330, 78%, 23%);
  background-color: whitesmoke;
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
}
/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  form {
    width: 100%;
  }
  .ctninput {
    width: 150%;
  }
}
</style>
