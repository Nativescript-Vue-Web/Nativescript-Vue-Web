import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { ActionDialog, Button } from '../../../../src/main';

describe('ActionDialog', () => {
  // ActionDialog mock up values.
  const title = 'initial string';
  const cancelButtonText = 'cancelButtonText';
  const options = ['option0', 'option1'];

  // Initializing the component.
  const wrapper = mount(ActionDialog, {
    name: 'ActionDialog',
    props: {
      title: String,
      cancelButtonText: String,
      options: Array,
    },
    propsData: {
      title,
      cancelButtonText,
      options,
    },
  });
  wrapper.setData({ isModalVisible: true });
  describe('the component receives given events correctly.', () => {
    it(`title property is equal to: ${title}.`, () => {
      expect(wrapper.props().title).to.equal(title);
    });
    it(`cancelButtonText property is equal to: ${cancelButtonText}.`, () => {
      expect(wrapper.props().cancelButtonText).to.equal(cancelButtonText);
    });
  });
  describe('the component contains exactly two Button.', () => {
    it('there is two Button.', done => {
      expect(wrapper.contains(Button)).to.equal(true);
      expect(wrapper.findAll(Button).length).to.equal(3);
      done();
    });
  });

  describe('the component contains elemets.', () => {
    it('the component contains one p element', () => {
      expect(wrapper.contains('p')).to.equal(true);
    });
    it('the component contains one section element', () => {
      expect(wrapper.contains('section')).to.equal(true);
    });
    it('the components contains one nav elemet', () => {
      expect(wrapper.contains('nav')).to.equal(true);
    });
    it('the component contains one lu element', () => {
      expect(wrapper.contains('ul')).to.equal(true);
    });
    it('the component contains one li element', () => {
      expect(wrapper.contains('li')).to.equal(true);
    });
  });

  describe('changes a and p value.', () => {
    it('set the p value', () => {
      const p = wrapper.find('p');
      p.element.value = 'new message';
      expect(p.element.value).to.equal('new message');
    });
  });
  describe('Events testing', () => {
    it('the click event of Button element with btn-action class is passed to the component successfully and the action dialog gets hidden.', () => {
      const button = wrapper.find('.nvw-button.btn-action');
      button.trigger('click');
      expect(wrapper.vm.isModalVisible).to.equal(false);
    });
  });
});
