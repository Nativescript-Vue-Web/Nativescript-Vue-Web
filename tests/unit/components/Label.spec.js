import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Label from '../../../src/components/Label.vue';

describe('Label.vue', () => {
  const text = 'initial string';
  const textWrap = false;
  const wrapper = mount(Label, {
    name: 'Label',
    props: {
      text: String,
      textWrap: Boolean,
    },
    propsData: {
      text,
      textWrap,
    },
  });
  it(`initial value taken from text is equal to: ${text}.`, () => {
    expect(wrapper.props().text).to.equal(text);
  });
  it(`textWrap property is equal to: ${textWrap}.`, () => {
    expect(wrapper.props().textWrap).to.equal(textWrap);
  });

  if (textWrap) {
    it(`the type attribute which is equivalent of textWrap in Nativescript-vue is equal to: ${textWrap ? 'normal' : 'nowrap'}.`, () => {
      expect(wrapper.find('div').element.style.whiteSpace).to.equal('normal');
    });
  } else {
    it(`the type attribute which is equivalent of textWrap in Nativescript-vue is equal to: ${textWrap ? 'normal' : 'nowrap'}.`, () => {
      expect(wrapper.find('div').element.style.whiteSpace).to.equal('nowrap');
    });
  }
});
