<script setup>

</script>

<template>
  <main>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cabinet">Cabinet</router-link>
    </div>
    <router-view/>
  </main>
</template>

<style scoped>
 main {
   width: 50vw;
   height: 70vh;
   margin: 15vh 25vw
 }
</style>
