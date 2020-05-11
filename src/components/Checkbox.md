```vue
<template>
  <theme-switcher>
    <h1>Checkbox Example</h1>
    <thx-checkbox label="Are you sure?" v-model="value"/>
    <br>
    <p>This is the checkbox value: {{ value }}</p>
  </theme-switcher>
</template>

<script>
import ThemeSwitcher from '../themes/ThemeSwitcher';
import ThxCheckbox from './Checkbox';

export default {
  components: { ThemeSwitcher, ThxCheckbox },
  data() {
    return {
      value: true
    }
  }
};
</script>
```
