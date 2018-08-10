import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import Button from '@/components/Button.vue';

describe('Button.vue', () => {
  it('renders props.msg when passed', () => {
    const text = 'Name';
    const wrapper = shallowMount(Button, {
      propsData: { text },
    });
    expect(wrapper.html()).to.include(text);
  });
});
