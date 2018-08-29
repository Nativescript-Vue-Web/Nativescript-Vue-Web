import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import ActivityIndicator from '../../../src/components/ActivityIndicator.vue';

describe('ActivityIndicator', () => {
  const busy = false;
  const wrapper = mount(ActivityIndicator, {
    name: 'ActivityIndicator',
    props: {
      busy: Boolean,
    },
    propsData: {
      busy,
    },
  });
  it(`busy property is equal to: ${busy}.`, () => {
    expect(wrapper.props().busy).to.equal(busy);
  });
  it('click event property is passed to the component successfully.', () => {
    wrapper.setProps({ busy: !busy });
    expect(wrapper.props().busy).to.equal(!busy);
  });
  it(`Listen event: assert event has been emitted one time`, () => {
    expect(wrapper.emitted('busyChange').length).to.equal(1);
  });
});
