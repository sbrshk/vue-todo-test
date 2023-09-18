<script setup lang="ts">
import {withDefaults, defineProps, defineEmits} from "vue";

interface Props {
  title?: string;
  icon?: string;
  kind?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

interface Emits {
  (e: 'onClick'): void;
}

  const props = withDefaults(defineProps<Props>(), {
  kind: 'primary',
  size: 'medium'
});
const emit = defineEmits<Emits>();
</script>

<template>
  <button
      :class="['btn', `btn-${props.kind}`, `btn-${props.size}`]"
      :disabled="props.disabled"
      @click="emit('onClick')">
    <font-awesome-icon v-if="!!props.icon" :icon="['far', props.icon]" />
    {{ props.title }}
  </button>
</template>

<style scoped lang="scss">
.btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &-large {
    padding: 8px 16px;
  }

  &-medium {
    padding: 6px 12px;
  }

  &-small {
    padding: 4px 8px;
  }

  &-primary {
    background: hsla(160, 100%, 37%, 1);
    color: #181818;
    border: none;

    &:disabled {
      background: hsla(160, 30%, 37%, 1);
      color: #2c3e50
    }

    &:hover {
      cursor: pointer;
      background: hsla(160, 100%, 42%, 1);
    }

    &:active {
      background: hsla(160, 100%, 30%, 1);
    }
  }

  &-secondary {
    background: transparent;
    color: hsla(160, 100%, 37%, 1);
    border: 1px solid hsla(160, 100%, 37%, 1);
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      color: hsla(160, 100%, 42%, 1);
      border: 1px solid hsla(160, 100%, 42%, 1);
    }

    &:active {
      color: hsla(160, 100%, 30%, 1);
      border: 1px solid hsla(160, 100%, 30%, 1);
    }
  }

  &-ghost {
    background: transparent;
    border: none;
    cursor: pointer;
    color: hsla(160, 100%, 37%, 1);

    &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1);
      color: hsla(160, 100%, 42%, 1);
    }
  }
}
</style>
