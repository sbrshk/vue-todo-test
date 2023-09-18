<script setup lang="ts">
import {withDefaults, defineProps, defineEmits} from "vue";

interface Props {
  title?: string;
  icon?: string;
  kind?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  removable?: boolean;
  removeIcon?: string;
}

interface Emits {
  (e: 'onClick'): void;
  (e: 'onRemove'): void;
}

const props = withDefaults(defineProps<Props>(), {
  kind: 'primary',
  size: 'medium',
  removable: false
});

const emit = defineEmits<Emits>();
</script>

<template>
<div :class="['tag', `tag-${props.kind}`, `tag-${props.size}`]" @click="emit('onClick')">
  <font-awesome-icon v-if="!!props.icon" :icon="['far', props.icon]" />
  {{ props.title }}
  <font-awesome-icon v-if="props.removable" class="removeIcon" :icon="['far', props.removeIcon]" @click="emit('onRemove')" />
</div>
</template>

<style scoped lang="scss">
.tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: default;
  transition: all .3s ease;

  &-large {
    padding: 8px 16px;
    gap: 8px;
  }

  &-medium {
    padding: 6px 12px;
    gap: 6px;
  }

  &-small {
    font-size: 12px;
    padding: 4px 8px;
    gap: 4px;
  }

  &-primary {
    color: hsla(160, 100%, 57%, 1);
    background: hsla(160, 100%, 18%, 1);
  }

  &-secondary {
    color: hsla(160, 100%, 42%, 1);
    background: hsla(160, 100%, 12%, 0.8);
    border: 1px solid hsla(160, 100%, 22%, 1);

    &:hover {
      background: hsla(160, 100%, 22%, 0.8);
    }
  }

  &-ghost {
    color: #f2f2f2;
  }
}

.removeIcon {
  cursor: pointer;
  transition: all .3s ease;
  color: hsla(160, 100%, 32%, 1);

  &:hover {
    color: hsla(160, 100%, 42%, 1);
  }

  &:active {
    color: hsla(160, 100%, 22%, 1);
  }
}
</style>
