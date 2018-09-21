import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import { WebView } from '../../../src/main';

describe('WebView.vue', () => {
  const src = 'http://nativescript-vue.org/';

  const loadFinished = sinon.spy();
  const wrapper = mount(WebView, {
    name: 'WebView',
    props: {
      src: String,
    },
    propsData: {
      src,
    },
    listeners: {
      loadFinished,
    },
  });
  describe('the component receives given props correctly.', () => {
    it(`initial source taken from src is equal to: ${src}.`, () => {
      expect(wrapper.props().src).to.equal(src);
    });
    it('loadFinished event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.loadFinished).to.not.equal(undefined);
    });
  });

  describe('the component contains exactly one iframe.', () => {
    it('there is one iframe.', () => {
      expect(wrapper.contains('iframe')).to.equal(true);
      expect(wrapper.findAll('iframe').length).to.equal(1);
    });
  });

  describe('event testing.', () => {
    it('the WebView emits load event so, event handler named loadFinished gets thrown.', () => {
      wrapper.find('iframe').trigger('load');
      expect(wrapper.emitted().loadFinished.length).to.equal(1);
      expect(loadFinished.called).to.equal(true);
    });
  });
  // IFrame test is ended.

  describe('html attribute is changed succesfully.', () => {
    it(`changing src prop.`, () => {
      wrapper.setProps({ src: '<div><h1>gizem</h1></div>' });
      wrapper.vm.src = '<div><h1>gizem</h1></div>';
      expect(wrapper.find('div').element.innerHTML).to.equal('<div><h1>gizem</h1></div>');
      expect(wrapper.find('div').exists()).to.equal(true);
      expect(wrapper.find('iframe').exists()).to.equal(false);
    });
  });
});
