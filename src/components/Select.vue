<template>
  <div :class="css">
    <label v-if="label" :for="uid">{{ label }}</label>
    <select :class="`${css}__select`" v-model="innerVal" :id="uid">
      <option v-for="{ value, label } in formattedOptions" :key="value" :value="value">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';

interface SelectOption {
  value: string;
  label: string;
}

let uid = 0;

@Component
export default class Select extends Vue {
  @Prop()
  value!: string;

  @Prop()
  label!: string;

  @Prop({ default: () => [] })
  options!: SelectOption[] | string[];

  css = 'thx-select';
  uid = '';

  get formattedOptions(): SelectOption[] {
    if (typeof this.options[0] === 'string') {
      const options = this.options as string[];
      return options.map(o => ({ value: o, label: o }));
    } else {
      return this.options as SelectOption[];
    }
  }

  get innerVal() {
    return this.value;
  }

  set innerVal(val) {
    this.$emit('input', val);
  }

  mounted() {
    this.uid = this.css + '__select--' + (++uid);
  }
}
</script>

<style>
.thx-select {
  display: flex;
  flex-direction: column;
}
</style>
