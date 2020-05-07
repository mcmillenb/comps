<template>
  <button @click="onClick">Click Me</button>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Button extends Vue {
  message = 'Hello!'

  onClick(): void {
    window.alert(this.message);
  }
}
</script>
