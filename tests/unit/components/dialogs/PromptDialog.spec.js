import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import PromptDialog from '../../../../src/components/dialogs/PromptDialog';
import Button from '../../../../src/components/Button';
import TextField from '../../../../src/components/TextField';

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

  const close = sinon.spy(PromptDialog.methods, 'close');
  const submit = sinon.spy(PromptDialog.methods, 'submit');

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
    it('there are two Button.', () => {
      expect(wrapper.contains(Button)).to.equal(true);
      expect(wrapper.findAll(Button).length).to.equal(2);
    });
    it('there are one TextField.', done => {
      expect(wrapper.contains(TextField)).to.equal(true);
      expect(wrapper.findAll(TextField).length).to.equal(1);
      done();
    });
  });

  describe('the component contains elemets.', () => {
    it('the component contains one TextField.', () => {
      expect(wrapper.contains(TextField)).to.equal(true);
    });
  });

  describe('Events testing.', () => {
    it('Changing the val of the value fields.', done => {
      wrapper.find(TextField).setValue('new value');
      expect(wrapper.find(TextField).element.value).to.equal('new value');
      done();
    });
    it('the click event of ok Button is passed to component successfully and the prompt dialog gets hidden.', done => {
      const button = wrapper.find('.nvw-prompt-dialog__footer__ok-button');
      button.trigger('click');
      expect(wrapper.emitted().submit.length).to.equal(1);
      expect(wrapper.emitted().submit[0][0].text).to.equal('new value');
      expect(submit.called).to.equal(true);
      expect(wrapper.vm.isModalVisible).to.equal(false);
      done();
    });
    it('Show the dialog by changing the given v-if value and test the close method of the prompt dialog.', done => {
      wrapper.setData({ isModalVisible: true });
      expect(wrapper.vm.isModalVisible).to.equal(true);
      const button = wrapper.find('.nvw-prompt-dialog__footer__cancel-button');
      button.trigger('click');
      expect(wrapper.emitted().submit.length).to.equal(2);
      expect(wrapper.emitted().submit[1][0].result).to.equal(false);
      expect(close.called).to.equal(true);
      expect(wrapper.vm.isModalVisible).to.equal(false);
      done();
    });
  });
});
