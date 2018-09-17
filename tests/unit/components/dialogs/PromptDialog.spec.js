import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { PromptDialog, Button, TextField } from '../../../../src/main';

describe('PromptDialog', () => {
  // PromptDialog mock up values.
  const title = 'initial string';
  const message = 'initial string';
  const okButtonText = 'okButtonText';
  const cancelButtonText = 'cancelButtonText';
  const defaultText = 'defaultText';
  const inputType = 'inputType';
  const isModalVisible = true;
  const value = 'initial string';

  // Initializing the component.
  const wrapper = mount(PromptDialog, {
    name: 'PromptDialog',
    props: {
      title: String,
      message: String,
      okButtonText: String,
      cancelButtonText: String,
      defaultText: String,
      inputType: String,
      value: String,
    },
    propsData: {
      title,
      message,
      okButtonText,
      cancelButtonText,
      defaultText,
      inputType,
      value,
    },
  });
  wrapper.setData({ isModalVisible: true });
  describe('the component receives given events correctly.', () => {
    it(`title property is equal to: ${title}.`, () => {
      expect(wrapper.props().title).to.equal(title);
    });
    it(`message property is equal to: ${message}.`, () => {
      expect(wrapper.props().message).to.equal(message);
    });
    it(`okButtonText property is equal to: ${okButtonText}.`, () => {
      expect(wrapper.props().okButtonText).to.equal(okButtonText);
    });
    it(`cancelButtonText property is equal to: ${cancelButtonText}.`, () => {
      expect(wrapper.props().cancelButtonText).to.equal(cancelButtonText);
    });
    it(`defaultText property is equal to: ${defaultText}.`, () => {
      expect(wrapper.props().defaultText).to.equal(defaultText);
    });
    it(`inputType property is equal to: ${inputType}.`, () => {
      expect(wrapper.props().inputType).to.equal(inputType);
    });
    it(`value property is equal to: ${value}.`, () => {
      expect(wrapper.props().value).to.equal(value);
    });
    it(`isModalVisible property is equal to: ${isModalVisible}.`, () => {
      expect(wrapper.vm.isModalVisible).to.equal(isModalVisible);
    });
  });
  describe('the component contains exactly two Button and one TextField.', () => {
    it('there is two Button.', () => {
      expect(wrapper.contains(Button)).to.equal(true);
      expect(wrapper.findAll(Button).length).to.equal(2);
    });
  });

  describe('the component contains elemets.', () => {
    it('the component contains one p element', () => {
      expect(wrapper.contains('p')).to.equal(true);
    });
    it('the component contains one h4 element.', () => {
      expect(wrapper.contains('h4')).to.equal(true);
    });
    it('the component contains one TextField.', () => {
      expect(wrapper.contains(TextField)).to.equal(true);
    });
  });

  describe('changes h4 and p value.', () => {
    it('set the h4 value', () => {
      const h4 = wrapper.find('h4');
      h4.element.value = 'new header';
      expect(h4.element.value).to.equal('new header');
    });
    it('set the p value', () => {
      const p = wrapper.find('p');
      p.element.value = 'new message';
      expect(p.element.value).to.equal('new message');
    });
  });
});
