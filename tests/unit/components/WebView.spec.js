import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import { WebView } from '../../../src/main';

describe('WebView.vue', () => {
  const src = 'http://nativescript-vue.org/';

  const loadStarted = sinon.spy();
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
      loadStarted,
      loadFinished,
    },
    attachToDocument: true,
  });
  describe('the component receives given props correctly.', () => {
    it(`initial source taken from src is equal to: ${src}.`, () => {
      expect(wrapper.props().src).to.equal(src);
    });
    it('loadFinished event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.loadFinished).to.not.equal(undefined);
    });
    it('loadStarted event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.loadStarted).to.not.equal(undefined);
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
    it('the WebView emits load event so, event handler named loadStarted gets thrown.', () => {
      wrapper.find('iframe').trigger('load');
      expect(wrapper.emitted().loadStarted.length).to.equal(1);
      expect(loadStarted.called).to.equal(true);
    });
  });

  describe('src prop is changed succesfully.', () => {
    it(`changing src prop.`, () => {
      wrapper.setProps({ src: '<div><h1>gizem</h1></div>' });
      wrapper.vm.src = '<div><h1>gizem</h1></div>';
      expect(wrapper.props().src).to.equal('<div><h1>gizem</h1></div>');
    });
  });
});

describe('WebView component src prop changing', () => {
  const src = 'http://nativescript-vue.org/';

  const wrapper2 = mount(WebView, {
    name: 'WebView',
    props: {
      src: String,
    },
    propsData: {
      src,
    },
  });
  describe('the component receives given props correctly.', () => {
    it(`initial source taken from src is equal to: ${src}.`, () => {
      expect(wrapper2.props().src).to.equal(src);
    });
  });

  describe('src prop is changed succesfully.', () => {
    it(`changing src prop.`, () => {
      wrapper2.setProps({ src: '~/html' });
      wrapper2.vm.src = '~/html';
      expect(wrapper2.props().src).to.equal('~/html');
    });
  });
});

describe('WebView component src prop changing', () => {
  const src = '~/about';

  const wrapper3 = mount(WebView, {
    name: 'WebView',
    props: {
      src: String,
    },
    propsData: {
      src,
    },
  });
  describe('the component receives given props correctly.', () => {
    it(`initial source taken from src is equal to: ${src}.`, () => {
      expect(wrapper3.props().src).to.equal(src);
    });
  });

  describe('src prop is changed succesfully.', () => {
    it(`changing src prop.`, () => {
      wrapper3.setProps({ src: 'http://nativescript-vue.org/' });
      wrapper3.vm.src = 'http://nativescript-vue.org/';
      expect(wrapper3.props().src).to.equal('http://nativescript-vue.org/');
    });
  });
});
