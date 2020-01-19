<template>
  <div class="bigctn">
    <form @submit.prevent="addNewMaitre">
      <div class="ctninput">
        <input
          v-model="maitre.prenom"
          type="text"
          placeholder="Prénom"
          required
        />
        <input v-model="maitre.nom" type="text" placeholder="Nom" required />

        <input
          v-model="maitre.email"
          type="email"
          placeholder="Email"
          required
        />

        <input
          v-model="maitre.mdp"
          type="password"
          placeholder="mot de passe"
          required
        />

        <div class="regles">
          <label id="regles"
            >Je m'engage à respecter les règles énoncées sur le site sous peine
            de poursuites pénales</label
          >
          <input type="checkbox" id="regles" required />
        </div>
      </div>
      <input type="submit" value="Créer mon compte" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "MaitreInscription",
  data() {
    return {
      maitre: {},
      url: "http://localhost:6001/maitre/newMaitre"
    };
  },
  methods: {
    addNewMaitre() {
      this.axios
        .post("http://localhost:6001/maitre/newMaitre", this.maitre)
        .then(res => {
          localStorage.setItem("token", res.data.token);
          this.$router.push("/profilMaitre");
          window.location.reload();
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
.bigctn {
  padding: 20px;
}
.ctninput {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.div {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
input {
  margin: 5px;
  width: 80%;
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
.regles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
}
#regles {
  text-align: justify;
}
/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  form {
    width: 120px;
  }
  .ctninput {
    width: 150%;
  }
}
</style>
