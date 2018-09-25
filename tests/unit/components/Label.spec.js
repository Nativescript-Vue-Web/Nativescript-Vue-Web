import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Label from '../../../src/components/Label.vue';
import Span from '../../../src/components/Span';

describe('Label.vue', () => {
  const emptyLabel = mount(Label);

  const text = 'initial string';
  const textWrap = false;
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

  const wrapper = mount(Label, {
    name: 'Label',
    props: {
      text: String,
      textWrap: Boolean,
    },
    propsData: {
      text,
      textWrap,
    },
    slots: {
      default: [ChildSpan],
    },
  });
  it(`initial value taken from text is equal to: ${text}.`, () => {
    expect(wrapper.props().text).to.equal(text);
  });
  it(`textWrap property is equal to: ${textWrap}.`, () => {
    expect(wrapper.props().textWrap).to.equal(textWrap);
  });
  it(`the type attribute which is equivalent of textWrap in Nativescript-vue is equal to: no-wrap.`, () => {
    expect(wrapper.find(Label).element.style.whiteSpace).to.equal('nowrap');
  });
  it(`the type attribute which is equivalent of textWrap in Nativescript-vue is equal to: normal.`, () => {
    wrapper.setProps({ textWrap: true });
    expect(wrapper.find(Label).element.style.whiteSpace).to.equal('normal');
  });
  it(`Label default text value should be empty string.`, () => {
    expect(emptyLabel.props().text).to.equal('');
  });

  describe(`the label displays the given text which is ${text} and slot which is Span component inside the wrapper.`, () => {
    it(`the text inside the Label component is equal to.${text}`, done => {
      const parentSpan = wrapper.findAll('span').at(0);
      expect(parentSpan.element.textContent.includes(text)).to.equal(true);
      done();
    });
    it(`the child span which is the slot in the parent(Label) displays the ${childSpanText}.`, done => {
      const childSpan = wrapper.findAll('span').at(1);
      expect(childSpan.element.textContent.trim()).to.equal(childSpanText);
      done();
    });
  });
});

describe('the component received given props correctly.', () => {
  const text = 'bell | fonticon';
  const wrapper = mount(Label, {
    name: 'Label',
    props: {
      text: String,
    },
    propsData: {
      text,
    },
  });
  it(`Icon component given \`bell\` class`, () => {
    expect(wrapper.find(Label).classes()).to.includes('bell');
  });
  it(`Icon components text should be empty`, () => {
    expect(
      wrapper
        .find('span')
        .text()
        .replace(/\n/g, '')
        .trim(),
    ).to.equal('');
  });
});
