<script setup lang="ts">
import {defineProps, defineEmits, ref, computed, nextTick} from "vue";
import {Categories} from "../types";
import {Button, Input, Tag} from "../components/ui";

interface Props {
  categories: any[];
}

interface Emits {
  (e: 'addCategory', category: Categories | string): void;
  (e: 'removeCategory', category: Categories): void;
  (e: 'clearCategories'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const availableCategories = computed(() => Object.values(Categories).filter((category) => !props.categories.includes(category)));
const showCustomCategoryInput = ref(false);
const customCategory = ref("");

const addCategory = (category) => {
  emit("addCategory", category);
}

const clearCategories = () => {
  emit("clearCategories");
}

const addCustomCategory = () => {
  if (customCategory.value.length) {
    emit("addCategory", customCategory.value);
    customCategory.value = "";
    showCustomCategoryInput.value = false;
  }
}

const displayCustomCategoryInput = async () => {
  showCustomCategoryInput.value = true;

  const customCategoryInput = document.querySelector('#customCategoryInput');
  await nextTick();

  // TODO: investigate later
  console.log(customCategoryInput) // null
  // customCategoryInput.focus();
}
</script>

<template>
  <div class="wrapper">
    <Tag
        v-for="category in props.categories"
        :key="category"
        :title="category"
        removable
        removeIcon="trash-can"
        kind="ghost"
        size="small"
        @onRemove="emit('removeCategory', category)"
    />
    <Tag
        v-for="category in availableCategories"
        :key="category"
        :title="category"
        icon="square-plus"
        kind="secondary"
        size="small"
        @onClick="addCategory(category)"
    />
    <Button
        v-if="!showCustomCategoryInput"
        icon="square-plus"
        kind="primary"
        size="medium"
        @onClick="displayCustomCategoryInput"
    />
    <Input
        v-if="showCustomCategoryInput"
        v-model="customCategory"
        ref="customCategoryInput"
        size="small"
        placeholder="New category..."
        @onEnter="addCustomCategory"
    />
  </div>
  <div class="wrapper">
    <Button
        v-if="props.categories.length"
        title="Clear categories"
        icon="circle-xmark"
        kind="secondary"
        @onClick="clearCategories"
    />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
}
</style>
