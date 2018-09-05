import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { StackLayout, Label } from '../../../src/main';

describe('StackLayout', () => {
  // StackLayout Mock up values.

  const LabelWrapper = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Native Vue Web Project test Label component text area',
        },
      });
    },
  };

  const Label1 = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Native Vue Web Project test Label component text area',
        },
        attrs: {
          verticalAlignment: 'top',
        },
      });
    },
  };

  const Label2 = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Native Vue Web Project test Label component text area',
        },
        attrs: {
          verticalAlignment: 'center',
        },
      });
    },
  };

  const stackLayoutHorizontal = mount(StackLayout, {
    name: 'StackLayout',
    // This will converted to props.
    props: {
      orientation: String,
    },
    propsData: {
      orientation: 'horizontal',
    },
    slots: {
      default: [LabelWrapper],
    },
  });

  const stackLayoutVertical = mount(StackLayout, {
    name: 'StackLayout',
    // This will converted to props.
    props: {
      orientation: String,
    },
    propsData: {
      orientation: 'vertical',
    },
    slots: {
      default: [Label1, Label2],
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`Orientation property is equal to horizontal`, () => {
      expect(stackLayoutHorizontal.classes()).to.include('nvw-stack-layout--horizontal');
    });

    it(`Orientation property is equal to vertical`, () => {
      expect(stackLayoutVertical.classes()).to.include('nvw-stack-layout--vertical');
    });
  });

  describe('Finding Label component in stacklayout wrapper', () => {
    it(`Check verticalAligment equal to top`, () => {
      const label = stackLayoutVertical.findAll(Label).at(0);
      expect(label.attributes().verticalalignment).to.equal('top');
    });
  });
});
