import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import { WebView } from '../../../src/main';

describe('WebView.vue', () => {
  const src = 'initial string';

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
  describe('the component contains exactly one iframe and one div.', () => {
    it('there is one div.', () => {
      expect(wrapper.contains('div')).to.equal(true);
      expect(wrapper.findAll('div').length).to.equal(1);
    });
    it('loadFinished event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.loadFinished).to.not.equal(undefined);
    });
  });
  describe('the component receives given props correctly.', () => {
    it(`initial value taken from text is equal to: ${src}.`, () => {
      expect(wrapper.props().src).to.equal(src);
    });
  });
});
