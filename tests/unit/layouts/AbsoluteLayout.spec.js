import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { AbsoluteLayout, Label } from '../../../src/main';

describe('Absolute Layout', () => {
  const Label1Position = { left: 10, top: 10 };
  const Label2Position = { left: 10, top: 12 };

  const Label1 = {
    render(h) {
      return h(Label, {
        props: {
          text: '10,10',
        },
        attrs: {
          left: Label1Position.left,
          top: Label1Position.top,
          width: 100,
          height: 100,
        },
      });
    },
  };

  const Label2 = {
    render(h) {
      return h(Label, {
        props: {
          text: '10,120',
        },
        attrs: {
          left: Label2Position.left,
          top: Label2Position.top,
          width: 100,
          height: 100,
          flexShrink: '0',
          flexGrow: '0',
          order: '0',
          flexWrapBefore: true,
          fontStyle: 'normal',
          fontWeight: 'bold',
        },
      });
    },
  };

  const AbsoluteLayoutWrapper = mount(AbsoluteLayout, {
    name: 'AbsoluteLayout',
    slots: {
      default: [Label1, Label2],
    },
    components: {
      Label,
    },
  });

  describe('the component has child components in its slots.', () => {
    it('there is two textfield component inside the layout.', () => {
      const labels = AbsoluteLayoutWrapper.findAll(Label);
      expect(labels.length).to.equal(2);
    });
  });

  describe('Absolute layout childs positions should be absolute', () => {
    //TODO position css not showing element style in tests.
    xit('Label position absolute checking', () => {
      const labels = AbsoluteLayoutWrapper.findAll(Label);
      expect(labels.at(0).element.style.position).to.equal('absolute');
    });

    it('Labels absolute positions (left, top) checking', () => {
      const labels = AbsoluteLayoutWrapper.findAll(Label);
      expect(labels.at(0).element.style.left).to.equal(`${Label1Position.left}px`);
      expect(labels.at(0).element.style.top).to.equal(`${Label1Position.top}px`);
      expect(labels.at(1).element.style.left).to.equal(`${Label2Position.left}px`);
      expect(labels.at(1).element.style.top).to.equal(`${Label2Position.top}px`);
    });
  });
});
