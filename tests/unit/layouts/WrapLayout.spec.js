import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { WrapLayout, Label } from '../../../src/main';

describe('WrapLayout', () => {
  // WrapLayout mock up values.
  // Props
  const orientation = 'vertical';
  // Attributes
  const wrapLayoutWidth = 450;
  const wrapLayoutHeight = 450;

  // Defining the child components which are Labels.
  const FirstLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'First',
        },
        attrs: {
          height: 140,
          width: 140,
        },
      });
    },
  };
  const SecondLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Second',
        },
        attrs: {
          height: 140,
          width: 140,
        },
      });
    },
  };
  const ThirdLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Third',
        },
        attrs: {
          height: 140,
          width: 140,
        },
      });
    },
  };
  const ForthLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Forth',
        },
        attrs: {
          height: 140,
          width: 140,
        },
      });
    },
  };

  const wrapLayoutWrapper = mount(WrapLayout, {
    name: 'WrapLayout',
    props: {
      orientation: {
        type: String,
        default: 'horizontal',
      },
    },
    propsData: {
      orientation,
    },
    attrs: {
      backgroundColor: 'red',
      height: wrapLayoutHeight,
      width: wrapLayoutWidth,
    },
    slots: {
      default: [FirstLabel, SecondLabel, ThirdLabel, ForthLabel],
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`orientation property is equal to ${orientation} and flexDirection style is changed by this prop.`, () => {
      expect(wrapLayoutWrapper.props().orientation).to.equal(orientation);
    });
    it(`flexDirection style of the layout component is equal to ${orientation === 'vertical' ? 'vertical' : 'horizontal'} `, () => {
      expect(wrapLayoutWrapper.element.style.flexDirection).to.equal('column');
    });
  });

  describe('the attributes are passed to the style of the component sucessfully.', () => {
    it(`height attribute which is '${wrapLayoutHeight}' is passed to the component correctly.`, () => {
      expect(wrapLayoutWrapper.attributes().height).to.equal(wrapLayoutHeight.toString());
    });
    it(`height attribute which is '${wrapLayoutWidth}' is passed to the component correctly.`, () => {
      expect(wrapLayoutWrapper.attributes().width).to.equal(wrapLayoutWidth.toString());
    });
    it(`the height style of the component is equal to ${wrapLayoutHeight.toString().concat('px')}`, () => {
      expect(wrapLayoutWrapper.element.style.height).to.equal(wrapLayoutHeight.toString().concat('px'));
    });
    it(`the height style of the component is equal to ${wrapLayoutWidth.toString().concat('px')}`, () => {
      expect(wrapLayoutWrapper.element.style.width).to.equal(wrapLayoutWidth.toString().concat('px'));
    });
  });

  describe('the layout has child components in its slots and it renders children correctly.', () => {
    it('there are four label component inside the layout.', () => {
      const labelWrappers = wrapLayoutWrapper.findAll(Label).wrappers;
      expect(labelWrappers.length).to.equal(4);
    });

    it('label component displays the given text prop(`First`) correctly inside the layout.', () => {
      const labelWrappers = wrapLayoutWrapper.findAll(Label).wrappers;
      const label = labelWrappers[0].find(Label);
      expect(label.element.textContent.trim()).to.equal('First');
    });

    it('label component displays the given text prop(`Second`) correctly inside the layout.', () => {
      const labelWrappers = wrapLayoutWrapper.findAll(Label).wrappers;
      const label = labelWrappers[1].find(Label);
      expect(label.element.textContent.trim()).to.equal('Second');
    });
  });
});
