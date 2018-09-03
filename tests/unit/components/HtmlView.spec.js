import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { HtmlView } from '../../../src/main';

describe('HtmlView', () => {
  // Mock up values.
  const html = '<div><h1>Gizem</h1></div>';

  const wrapper = mount(HtmlView, {
    name: 'HtmlView',
    // This will converted to props.
    props: {
      html: String,
    },
    propsData: {
      html,
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`html property is equal to: ${html}.`, () => {
      expect(wrapper.props().html).to.equal(html);
    });
    it(`the component contains span element`, () => {
      expect(wrapper.contains('span')).to.equal(true);
    });
  });
  describe('the span inside the component has attributes', () => {
    it(`finding span element and the element has attribute html`, () => {
      expect(wrapper.find('span').attributes().html).to.equal(html);
    });
  });
});
