<template>
  <div :class="css" :style="{ backgroundColor }">
    <div
      :class="`${css}__color`"
      v-for="{ hex, key, label } in colors"
      :key="key"
      :style="getStyle(hex)"
    >
      <span>{{ label }}</span>
      <span>#{{ hex.toUpperCase() }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { invertColor } from './utils';

@Component
export default class Colors extends Vue {
  @Prop({ default: () => [] })
  public colors!: Themes.Color[];

  css = 'thx-util-colors'

  getStyle(hex: string): object {
    const color = invertColor(hex, true);
    return { backgroundColor: `#${hex}`, color };
  }

  get backgroundColor(): string {
    const color = this.colors.find(c => c.key === 'background');
    return '#' + (color?.hex || 'ffffff');
  }
}
</script>

<style lang="scss" scoped>
.thx-util-colors {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding: 40px;
  border-radius: 2px;

  &__color {
    min-height: 80px;
    padding: 16px;
    display: flex;
    flex-direction: column;

    > span:last-child {
      opacity: .6;
    }
  }
}
</style>
