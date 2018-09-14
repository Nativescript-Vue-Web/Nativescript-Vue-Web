import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import { AlertDialog, Button } from '../../../../src/main';

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

  describe('the component contains elemets.', () => {
    it('the component contains one p element', () => {
      expect(wrapper.contains('p')).to.equal(true);
    });
    it('the component contains one h4 element.', () => {
      expect(wrapper.contains('h4')).to.equal(true);
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

  describe('Events testing', () => {
    it('the click event of Button element with btn-alert class is passed to the component successfully.', () => {
      const button = wrapper.find('.nvw-button.btn-alert');
      button.trigger('click');
      expect(close.called).to.equal(true);
      expect(wrapper.vm.isModalVisible).to.equal(false);
    });
  });
});
