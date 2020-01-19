<template>
  <div class="bigBox">
    <div class="box">
      <input
        type="submit"
        class="btn"
        @click="accept"
        value="J'accepte la garde"
      />

      <input
        type="submit"
        class="btn"
        @click="decline"
        value="Je décline la garde"
      />
    </div>

    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from "../components/myfooter";

export default {
  name: "confirmationGardeN",
  components: {
    myfooter
  },
  data() {
    return {
      idGarde: "",
      url1: "http://localhost:6001/garde/accept/:idGarde",
      url2: "http://localhost:6001/garde/decline/:idGarde"
    };
  },
  created: function() {
    // trop compliqué d'envoyer dans node les params sur l'url,
    // donc on a envoyé la donnée dans une query avec le point d'interrogation dans l'url
    // c'est pour ça que plus bas, on na pas params mais query
    this.idGarde = this.$route.query.idGarde;
  },

  methods: {
    accept() {
      console.dir(this);

      this.axios
        .put(`http://localhost:6001/garde/accept/${this.idGarde}`)
        .then(res => {
          // console.log(res);
          this.garde = res.data;
          alert(
            "Vous avez accepté la garde et nous vous en remercions, vous pouvez dès maintenant prendre conctact avec le maitre du chat"
          );
          this.$router.push("/");
        })
        .catch(err => {
          alert(err)
        });
    },

    decline() {
      this.axios
        .put(`http://localhost:6001/garde/decline/${this.idGarde}`)
        .then(res => {
          // console.log(res);
          this.garde = res.data;
          alert("Vous avez décliné la garde");
          this.$router.push("/");
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
.bigBox {
  background-color: whitesmoke;
}
.box {
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px;
}

.btn {
  width: 65%;
  height: 40px;
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
  padding: 0px;
}
.btn:hover {
  color: #ffffff;
  background-color: #680d3b;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
}
/* TABLETTE */
@media screen and (min-width: 481px) and (max-width: 768px) {
}
/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .bigBox {
    width: 100%;
    /* background-color: brown; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .btn {
  width: 90%;
  }
}
</style>
