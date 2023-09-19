<script setup lang="ts">

import {TodoItem} from "../types";
import {useTodoStore} from "../stores/todo";
import Button from "./ui/Button.vue";
import Tag from "./ui/Tag.vue";

interface Props {
  item: TodoItem
}

const props = defineProps<Props>();

const {checkTodo, removeTodo} = useTodoStore();
</script>

<template>
  <div class="wrapper">
    <div class="item">
      <input class="itemCheckbox" type="checkbox" :checked="props.item.checked" @change="checkTodo(props.item.id)" />
      <span :style="{textDecoration: props.item.checked ? 'line-through' : 'none'}">{{props.item.title}}</span>
      <Tag
          v-for="category in props.item.categories"
          :key="category"
          :title="category"
          :icon="'flag'"
          :kind="'primary'"
          :size="'small'"
      />
    </div>
    <Button
      :icon="'trash-can'"
      :kind="'ghost'"
      :size="'small'"
      @onClick="removeTodo(props.item.id)"
    />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;

  &:not(:last-of-type) {
    border-bottom: 1px solid #2c3e50;
  }
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.itemCheckbox {
  width: 16px;
  height: 16px;
  background: transparent;
  border: 1px solid hsla(160, 100%, 37%, 1);
}
</style>
