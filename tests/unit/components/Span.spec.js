import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Span from '../../../src/components/Span';

describe('Span Component Unit Test.', () => {
  const wrapperText = 'Initial String';
  const childSpanText = 'hey, this is the child span.';

  const ChildSpan = {
    render(h) {
      return h(Span, {
        props: {
          text: childSpanText,
        },
        attrs: {
          color: 'red',
          width: 100,
          height: 100,
        },
      });
    },
  };

  const wrapper = mount(Span, {
    props: {
      text: {
        type: String,
        default: '',
      },
    },
    propsData: {
      text: 'Initial String',
    },
    slots: {
      default: [ChildSpan],
    },
  });

  describe('the component received given props correctly.', () => {
    it(`Given width property is equal to ${wrapperText}.`, () => {
      expect(wrapper.props().text).to.equal(wrapperText);
    });
  });

  describe(`the span component displays the given text which is ${wrapperText} and slot which is another Span component.`, () => {
    it(`the text inside the parent Span component is equal to.${wrapperText}`, done => {
      const parentSpan = wrapper.findAll('span').at(0);
      expect(parentSpan.element.textContent.includes(wrapperText)).to.equal(true);
      done();
    });
    it(`the child span which is the slot in the parent displays the ${childSpanText}.`, done => {
      const childSpan = wrapper.findAll('span').at(1);
      expect(childSpan.element.textContent.trim()).to.equal(childSpanText);
      done();
    });
  });
});
