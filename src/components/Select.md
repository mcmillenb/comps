```vue
<template>
  <theme-switcher>
    <h1>Select Example</h1>
    <thx-select v-model="value" :options="options"/>
    <br>
    <p>This is the selected value: {{ value }}</p>
  </theme-switcher>
</template>

<script>
import ThemeSwitcher from '../themes/ThemeSwitcher';
import ThxSelect from './Select';

export default {
  components: { ThemeSwitcher, ThxSelect },
  data() {
    return {
      value: 'apple',
      options: ['apple', 'banana', 'carrot']
    }
  }
};
</script>
```
