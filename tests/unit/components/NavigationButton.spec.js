import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import NavigationButton from '../../../src/components/NavigationButton.vue';

describe('NavigationButton', () => {
  const text = 'Main Page';
  const newText = 'User Page';
  const wrapper = mount(NavigationButton, {
    name: 'NavigationButton',
    props: {
      text: String,
    },
    propsData: {
      text,
    },
  });
  it(`text property is equal to: ${text}.`, () => {
    expect(wrapper.props().text).to.equal(text);
  });
  it(`change text prop to new text: ${newText}.`, () => {
    wrapper.setProps({ text: newText });
    expect(wrapper.props().text).to.equal(newText);
  });
  it('navigation button changed text to icon.', () => {
    wrapper.setProps({ webIcon: 'fa fa-add' });
    expect(wrapper.props().text).to.equal(newText);
  });
  it(`Listen event: assert event has been emitted one time`, () => {
    wrapper.trigger('click');
    expect(wrapper.emitted('tap').length).to.equal(1);
  });
});
