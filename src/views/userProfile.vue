<template>
  <div>
      <h1>Mon profil</h1>

      <!-- <myfooter/> -->
  </div>
</template>

<script>

import VueJwtDecode from "vue-jwt-decode";

export default {
    name: "userProfile",
    component: {
        // myfooter
    },
    data() {
    return {
      user: {},
      
    };
  },
  created: function() {
      this.user=  VueJwtDecode.decode(localStorage.getItem("token"));
      if (this.user.contains('idMaitre')) {
        this.profilMaitre = true
      } 
      else {
           this.profilNou = true
      }
},
methods: {}
}
</script>
<style scoped>
input {
      border-radius: 10px;
      height: 30px;
}
</style>