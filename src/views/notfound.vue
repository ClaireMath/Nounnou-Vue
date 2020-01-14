<template>
  <div>
    <h1>404 NOT FOUND</h1>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from "../components/myfooter";

export default {
  name: "notfound",
  components: {
    myfooter
  }
};
</script>
<style scoped>
div {
  background-color: whitesmoke;
}
h1 {
  color: red;
}
</style>
