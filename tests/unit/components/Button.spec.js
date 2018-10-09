import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import Button from '../../../src/components/Button.vue';

describe('Button.vue', () => {
  const text = 'initial string';
  const type = 'button';
  const textWrap = false;
  const tap = sinon.spy();
  const wrapper = mount(Button, {
    name: 'Button',
    props: {
      text: String,
      textWrap: Boolean,
      type: String,
    },
    propsData: {
      text,
      type,
      textWrap,
    },
    listeners: {
      tap,
    },
  });
  it(`initial value taken from text is equal to: ${text}.`, () => {
    expect(wrapper.props().text).to.equal(text);
  });
  it(`textWrap property is equal to: ${textWrap}.`, () => {
    expect(wrapper.props().textWrap).to.equal(textWrap);
  });
  it('click event property is passed to the component successfully.', () => {
    wrapper.trigger('click');
    wrapper.trigger('click');
    expect(tap.calledTwice).to.equal(true);
    expect(wrapper.emitted().tap.length).to.equal(2);
  });
  it(`the type attribute which is equivalent of white-space in Nativescript-vue is equal to: ${textWrap ? 'normal' : 'nowrap'}.`, () => {
    if (textWrap) {
      expect(wrapper.find('button').element.style.whiteSpace).to.equal('normal');
    } else {
      expect(wrapper.find('button').element.style.whiteSpace).to.equal('nowrap');
    }
  });
});
