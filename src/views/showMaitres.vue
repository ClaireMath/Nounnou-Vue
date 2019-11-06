<template>
  <div class="ctn">
    <div class="chat">
      <h2>Le Matou</h2>
      <input v-model="chat.prenom_chat" type="text" placeholder="Prénom" required readonly />
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

          <!-- <input v-model="maitre.mdp" type="password" placeholder="Mot de passe" required /> -->
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
  display: flex;
  /* flex-direction: row; */
}
</style>
      