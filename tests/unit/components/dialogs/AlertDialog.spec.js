import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import AlertDialog from '../../../../src/components/dialogs/AlertDialog';
import Button from '../../../../src/components/Button';

describe('AlertDialog', () => {
  // AlertDialog mock up values.
  const title = 'initial string';
  const message = 'initial string';
  const okButtonText = 'okButtonText';
  const isModalVisible = true;

  const close = sinon.spy(AlertDialog.methods, 'close');
  // Initializing the component.
  const wrapper = mount(AlertDialog, {
    name: 'AlertDialog',
    props: {
      title: String,
      message: String,
      okButtonText: String,
    },
    propsData: {
      title,
      message,
      okButtonText,
    },
  });
  wrapper.setData({ isModalVisible: true });
  describe('the component receives given props correctly.', () => {
    it(`title property is equal to: ${title}.`, () => {
      expect(wrapper.props().title).to.equal(title);
    });
    it(`okButtonText property is equal to: ${okButtonText}.`, () => {
      expect(wrapper.props().okButtonText).to.equal(okButtonText);
    });
    it(`isModalVisible property is equal to: ${isModalVisible}.`, () => {
      expect(wrapper.vm.isModalVisible).to.equal(isModalVisible);
    });
  });
  describe('the component contains exactly one Button.', () => {
    it('there is one Button.', () => {
      expect(wrapper.contains(Button)).to.equal(true);
      expect(wrapper.findAll(Button).length).to.equal(1);
    });
  });

  describe('Events testing', () => {
    it('the click event of Button element with ok-button class is passed to the component successfully.', () => {
      const button = wrapper.find('.nvw-alert-dialog__footer__ok-button');
      button.trigger('click');
      expect(wrapper.emitted().submit.length).to.equal(1);
      expect(close.called).to.equal(true);
      expect(wrapper.vm.isModalVisible).to.equal(false);
    });

    it('triggered close event on alert-dialog close', () => {
      wrapper.setData({ isModalVisible: true });
      const modal = wrapper.find('.nvw-alert-dialog');
      modal.trigger('click');
      expect(wrapper.emitted().submit.length).to.equal(2);
      expect(close.called).to.equal(true);
      expect(wrapper.vm.isModalVisible).to.equal(false);
    });
  });
});
