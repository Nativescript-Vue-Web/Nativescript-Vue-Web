import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { DockLayout, Label } from '../../../src/main';

describe('Dock Layout', () => {
  const Label1 = {
    render(h) {
      return h(Label, {
        props: {
          text: 'left',
        },
        attrs: {
          dock: 'left',
          width: 100,
        },
      });
    },
  };

  const Label2 = {
    render(h) {
      return h(Label, {
        props: {
          text: 'top',
        },
        attrs: {
          dock: 'top',
          height: 100,
        },
      });
    },
  };

  const DockLayoutWrapper = mount(DockLayout, {
    name: 'DockLayout',
    attrs: {
      stretchLastChild: true,
    },
    slots: {
      default: [Label1, Label2],
    },
    components: {
      Label,
    },
  });

  describe('the component has child components in its slots.', () => {
    it('there is two textfield component inside the layout.', () => {
      expect(DockLayoutWrapper.findAll(Label).length).to.equal(2);
    });
  });
});
