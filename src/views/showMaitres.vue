<template>
  <div class="ctn">
    <div class="chat">
      <h2>Le Matou</h2>
      <input v-model="chat.prenom_chat" type="text" placeholder="Prénom" required readonly />
   
   <div class="input">
   
      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="chat.sterilise"
            id="sterilise"
            name="sterilise"
            value="true"
            disabled
          />
          <label for="sterilise">est stérilisé</label>
        </div>
        <div class="non">
          <input
            type="radio"
            v-model="chat.sterilise"
            id="nsterilise"
            name="sterilise"
            value="false"
            disabled
          />
          <label for="nsterilise">n'est pas stérilisé</label>
        </div>
      </div>

      <p>s'entend bien avec les autres chats :</p>
      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="chat.tolere_les_chats"
            name="tolereleschats"
            id="tolereleschats"
            value="true"
            disabled
          />
          <label for="tolereleschats">oui</label>
        </div>

        <div class="non">
          <input
            type="radio"
            v-model="chat.tolere_les_chats"
            name="tolereleschats"
            id="netolerePASleschats"
            value="false"
            disabled
          />
          <label for="netolerePASleschats">non</label>
        </div>
      </div>

      <p>s'entend bien avec les autres animaux :</p>

      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="chat.tolere_les_animaux"
            name="tolerelesanimaux"
            id="tolerelesanimaux"
            value="true"
            disabled
          />
          <label for="tolerelesanimaux">oui</label>
        </div>

        <div class="non">
          <input
            type="radio"
            v-model="chat.tolere_les_animaux"
            name="tolerelesanimaux"
            id="netolerePASlesanimaux"
            value="false"
            disabled
          />
          <label for="netolerePASlesanimaux">non</label>
        </div>
      </div>

      <p>a peur des enfants :</p>

      <div class="radio">
        <div class="oui">
          <input
            type="radio"
            v-model="chat.a_peur_des_enfants"
            name="apeurdesenfants"
            id="apeurdesenfants"
            value="true"
            disabled
          />
          <label for="apeurdesenfants">oui</label>
        </div>

        <div class="non">
          <input
            type="radio"
            v-model="chat.a_peur_des_enfants"
            name="apeurdesenfants"
            id="memePasPeur"
            value="false"
            disabled
          />
          <label for="memePasPeur">non</label>
        </div>
      </div>
      </div>
      <label for="pbsante">Problème de santé particulier :</label>
      <input
        v-model="chat.probleme_de_sante_particulier"
        type="text"
        placeholder="Problème de santé particulier"
        class="inputText"
        id="pbsante"
        required
        readonly
      />
      <textarea
        v-model="chat.description"
        cols="40"
        rows="12"
        placeholder="Décrivez-vous et votre expérience avec les chats."
        required
        readonly
      >Décrivez-vous, votre expérience avec les chats ou les animaux en général, pourquoi vous avez envie de vous en occuper.</textarea>
    </div>
    <div class="maitre">
      <!-- <div class="catsitter"> -->
      <h1>Son maitre</h1>

      <div class="ctnchamps">
        <div class="sbchamps">
          <input v-model="maitre.prenom" type="text" placeholder="Prénom" required readonly />
          <input v-model="maitre.nom" type="text" placeholder="Prénom" required readonly />

          <input
            v-model="maitre.code_postal"
            type="number"
            placeholder="Code postal"
            required
            readonly
          />
        </div>

        <div class="sbchamps2">
          <input v-model="maitre.ville" type="text" placeholder="Ville" required readonly />

          <input v-model="maitre.email" type="email" placeholder="Email" required />

        </div>
      </div>
    </div>
  </div>
</template>
      
      <script>
export default {
  name: "showMaitres",
  components: {},
  data() {
    return {
      maitre: {},
      chat: {}
    };
  },
  // on passe le paramètre data dans l'url mais il n'est pas visible, c'est propre à vuejs
  // au created, on récupère le param data
  created: function() {
    this.maitre = this.$route.params.data;
    this.chat = this.$route.params.data.chat;
  }
};
</script>
      
      <style scoped>
.ctn {
  width: 100%;
  display: flex;
  font-family: cursive, sans-serif;
  font-size: 20px;
  background-color: whitesmoke;
}
form {
  /* padding: 20px; */
  /* width: 100%; */
  font-family: cursive, sans-serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: hotpink; */
  /* 
         align-content: center;
         justify-items: center; */
}

.ctnchamps {
  /* background-color: lightslategray; */
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
.maitre {
  /* background-color: #ff2d95; */
  width: 50%;
  height: 820px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.chat {
  /* background-color: yellowgreen; */
  width: 50%;
  height: 820px;
  padding: 40px;
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
}

h2 {
  margin: 20px;
}
p {
  text-align: justify;
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
.btn2 {
  padding: 0px;
}
input {
  border-radius: 10px;
  height: 30px;
  margin: 10px;
  padding: 10px;
}
.radio {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
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
  height: 380px;
}
.btn2 {
  width: 40%;
}
.chat {
  height: 1000px;
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
  .maitre {
    width: 100%;
  }
     
   .ctnchamps {
    background-color: lightslategray;
    width: 100%;
    height: 400px;
  }
  .chat {
  background-color: #ff2d95;
  width: 100%;
  height: 1050px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
}
h1 {
  font-size: 30px;
}
  p {
    text-align: justify;
  }
  input.inputText {
    width: 90%;
    height: 35px;
  }
  .btn {
width: 90%;
  }

}
</style>
      