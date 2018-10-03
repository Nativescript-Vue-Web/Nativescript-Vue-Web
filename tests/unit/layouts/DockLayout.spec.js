import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { DockLayout, Label } from '../../../src/main';

describe('Docklayout Test', () => {
  it('the component has child components in its slots', () => {
    const DockLayoutWrapper = mount(DockLayout, {
      name: 'DockLayout',
      attrs: {
        stretchLastChild: false,
      },
      slots: {
        default: ['<Label dock="left" text="Left Label" />', '<Label dock="top" text="Top Label" />'],
      },
      components: {
        Label,
      },
    });

    expect(DockLayoutWrapper.find('[data-area="left"]').findAll('label').length).to.equal(1);
    expect(DockLayoutWrapper.find('[data-area="top"]').findAll('label').length).to.equal(1);
  });

  it('the component has child 4 dock positions in its slots', () => {
    const DockLayoutWrapper = mount(DockLayout, {
      name: 'DockLayout',
      attrs: {
        stretchLastChild: true,
      },
      slots: {
        default: [
          Label,
          '<Label dock="left" text="Left Label" />',
          '<Label dock="top" text="Top Label" />',
          '<Label dock="right" text="Right Label" />',
          '<Label dock="bottom" text="Bottom Label" />',
        ],
      },
      components: {
        Label,
      },
    });

    expect(DockLayoutWrapper.find('[data-area="left"]').findAll('label').length).to.equal(1);
    expect(DockLayoutWrapper.find('[data-area="top"]').findAll('label').length).to.equal(1);
    expect(DockLayoutWrapper.find('[data-area="right"]').findAll('label').length).to.equal(1);
    expect(DockLayoutWrapper.find('[data-area="bottom"]').findAll('label').length).to.equal(1);
  });

  it('if label has not dock attribute, dock should be default to center dock.', () => {
    const DockLayoutWrapper = mount(DockLayout, {
      name: 'DockLayout',
      attrs: {
        stretchLastChild: true,
      },
      slots: {
        default: [Label, '<Label dock="left" text="Left Label" />', '<Label text="Bottom Label" />'],
      },
      components: {
        Label,
      },
    });

    expect(DockLayoutWrapper.findAll('label').length).to.equal(2);
  });

  it('elements of nextsibling last labels should be non-flexible.', () => {
    const DockLayoutWrapper = mount(DockLayout, {
      name: 'DockLayout',
      attrs: {
        stretchLastChild: true,
      },
      slots: {
        default: ['<Label dock="left" text="Left Label" />', '<Label dock="top" text="Top Label" />'],
      },
      components: {
        Label,
      },
    });

    expect(DockLayoutWrapper.findAll('label').length).to.equal(2);
  });
});
