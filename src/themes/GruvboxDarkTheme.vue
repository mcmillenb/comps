<template>
  <div :class="css">
    <colors :colors="colors"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Colors from './Colors.vue';
import { GruvboxDark as paletteColors } from './palettes';
import { Component } from 'vue-property-decorator';

@Component({
  components: { Colors }
})
export default class GruvboxDarkTheme extends Vue {
  css = 'thx-theme-gruvbox-dark'

  colors = paletteColors
}
</script>
