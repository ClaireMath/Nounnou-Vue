<template>
  <div class="">
      <!-- -------------------------------------- Mon chat ------------------------------------------------- -->

        <div class="chat">
          <h2>Mon (Mes) chat(s)</h2>
          <select v-model="maitre.nombre_de_chats" required>
            <!-- <option disabled value="">Nombre de chats que je peux garder en même temps</option> -->
            <option v-for="" value="1"></option>
            
          </select>

          <input
            v-model="chat.prenom_chat"
            type="text"
            class="inputText"
            style="resize:horizontal; width:200px; height:30px"
            placeholder="Prénom de mon chat"
            required
          />
          <!-- <label for="avatar">Photo de mon chat:</label> -->

          <!-- <input class="inputphoto" type="file" v-on:change="handleFileUpload()" accept="image/png, image/jpeg" /> -->

          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="chat.sterilise"
                id="sterilise"
                name="sterilise"
                value="true"
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
              />
              <label for="memePasPeur">non</label>
            </div>
          </div>

          <input
            v-model="chat.probleme_de_sante_particulier"
            type="text"
            placeholder="Problème de santé particulier"
            class="inputText"
            style="resize:horizontal; width:60%; height:30px"
            required
          />

          <textarea
            v-model="chat.description"
            cols="60"
            rows="12"
            placeholder="Décrivez votre boule de poils."
          ></textarea>
        </div>
      </div>
  
</template>

<script>
export default {
  name: 'chat',
  components: {
    
    // HelloWorld
  },
  data() {
    return {
      chat: {}
};
},
created: function() {

},
methods: {

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
