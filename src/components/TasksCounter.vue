<script setup>
import {useTodoStore} from "../stores/todo";

const todoStore = useTodoStore();
</script>

<template>
  <h3 v-if="todoStore.uncheckedCount">You've got {{ todoStore.uncheckedCount }} task{{`${ todoStore.uncheckedCount === 1 ? '' : 's'}`}} left</h3>
  <h3 v-else>No tasks! Enjoy your day :)</h3>
</template>

<style scoped>

</style>
