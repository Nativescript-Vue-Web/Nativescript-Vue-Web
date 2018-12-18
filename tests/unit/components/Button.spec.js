import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import Button from '../../../src/components/Button.vue';

describe('Button.vue', () => {
  const text = 'initial string';
  const type = 'button';
  const textWrap = false;
  const isEnabled = true;
  const number = 3;
  const tap = sinon.spy();
  const wrapper = mount(Button, {
    name: 'Button',
    props: {
      text: String,
      textWrap: Boolean,
      type: String,
      isEnabled: Boolean,
    },
    propsData: {
      text,
      type,
      textWrap,
      isEnabled,
    },
    listeners: {
      tap,
    },
  });
  it(`initial value taken from text is equal to: ${text}.`, () => {
    expect(wrapper.props().text).to.equal(text);
  });
  it(`initial value taken from isEnabled is equal to: ${isEnabled}.`, () => {
    expect(wrapper.props().isEnabled).to.equal(isEnabled);
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
  it(`when isEnabled is changed click events dont fire: ${isEnabled}.`, () => {
    wrapper.setProps({ isEnabled: false });
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
  it(`the text inside the Button component is equal to a number.${number}`, done => {
    wrapper.setProps({ text: number });
    expect(wrapper.props().text).to.equal(number);
    done();
  });
});

describe('the shows icon correctly.', () => {
  const text = 'bell | fonticon';
  const wrapper = mount(Button, {
    name: 'Label',
    props: {
      text: String,
    },
    propsData: {
      text,
    },
  });
  it(`Icon component given \`bell\` class`, () => {
    expect(wrapper.find(Button).classes()).to.includes('bell');
  });
  it(`Icon components text should be empty`, () => {
    expect(
      wrapper
        .find('button')
        .text()
        .replace(/\n/g, '')
        .trim(),
    ).to.equal('');
  });
});
