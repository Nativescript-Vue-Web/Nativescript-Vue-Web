import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import ConfirmDialog from '../../../../src/components/dialogs/ConfirmDialog';
import Button from '../../../../src/components/Button';

describe('ConfirmDialog', () => {
  // ConfirmDialog mock up values.
  const title = 'initial string';
  const message = 'initial string';
  const okButtonText = 'okButtonText';
  const cancelButtonText = 'cancelButtonText';
  const isModalVisible = true;

  // Initializing the component.
  const wrapper = mount(ConfirmDialog, {
    name: 'ConfirmDialog',
    props: {
      title: String,
      message: String,
      okButtonText: String,
      cancelButtonText: String,
    },
    propsData: {
      title,
      message,
      okButtonText,
      cancelButtonText,
    },
  });
  wrapper.setData({ isModalVisible: true });
  describe('the component receives given props correctly.', () => {
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
    it(`isModalVisible property is equal to: ${isModalVisible}.`, () => {
      expect(wrapper.vm.isModalVisible).to.equal(isModalVisible);
    });
  });
  describe('the component contains exactly two Button.', () => {
    it('there is two Button.', () => {
      expect(wrapper.contains(Button)).to.equal(true);
      expect(wrapper.findAll(Button).length).to.equal(2);
    });
  });

  describe('Events testing', () => {
    it('the click event of Button element with ok-button class is passed to the component successfully.', () => {
      const button = wrapper.find('.nvw-confirm-dialog__footer__ok-button');
      button.trigger('click');
      expect(wrapper.vm.isModalVisible).to.equal(false);
    });
  });
});
