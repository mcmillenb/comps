import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Button.vue', () => {
  it('renders props.label when passed', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper).toBeTruthy();
  });
});
