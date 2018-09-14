import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import { ModalDialog } from '../../../src/main';

describe('ModalDialog', () => {
  const close = sinon.spy();
  // Initializing the component.
  const wrapper = mount(ModalDialog, {
    name: 'ModalDialog',
    slots: {
      header: '<span>My Header</span>',
    },
    listeners: {
      close,
    },
  });

  describe('click testing of the top div tag.', () => {
    it('the div at top gets clicked and close event is emitted.', () => {
      const div = wrapper.find('.nu-modal');
      div.trigger('click');
      expect(wrapper.emitted().close.length).to.equal(1);
      expect(close.called).to.equal(true);
    });
  });

  describe('the component contains elemets.', () => {
    it('the component contains one header element', () => {
      expect(wrapper.contains('header')).to.equal(true);
    });
    it('the component contains one section element.', () => {
      expect(wrapper.contains('section')).to.equal(true);
    });
    it('the component contains one footer element.', () => {
      expect(wrapper.contains('footer')).to.equal(true);
    });
  });

  describe('slot testing.', () => {
    it('slot itself and the given text to slot component are rendered correctly.', () => {
      expect(wrapper.find('span').text()).to.equal('My Header');
    });
  });
});
