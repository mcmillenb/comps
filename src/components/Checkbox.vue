<template>
  <label :class="css">
    <input type="checkbox" v-model="innerVal">
    {{ label }}
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue {
  @Prop()
  value!: string;

  @Prop()
  label!: string;

  css = 'thx-checkbox';

  get innerVal() {
    return this.value;
  }

  set innerVal(val) {
    this.$emit('input', val);
  }
}
</script>

<style lang="scss">
.thx-checkbox {
  display: flex;

  > input {
    margin-right: 8px;
  }
}
</style>
