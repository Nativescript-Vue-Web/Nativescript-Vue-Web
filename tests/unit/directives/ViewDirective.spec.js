import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import { StackLayout, Label, Nvw } from '../../../src/main';

describe('Action Dialog Plugin Testing', () => {
  const localVue = createLocalVue();
  localVue.use(Nvw);

  const SideDrawer = {
    name: 'SideDrawer',
    template:
      '<StackLayout class="sidedrawer"><StackLayout ref="drawerContent" class="drawer-content"></StackLayout>' +
      '<StackLayout ref="mainContent" class="main-content"></StackLayout><slot /></StackLayout>',
    components: {
      StackLayout,
    },
  };

  localVue.component('SideDrawer', SideDrawer);

  const Wrapper = {
    name: 'Wrapper',
    template:
      '<SideDrawer ref="drawer">\n' +
      '    <StackLayout v-view:drawerContent class="sideStackLayout">\n' +
      '        <Label text="left" />\n' +
      '    </StackLayout>\n' +
      '    <StackLayout v-view:mainContent>\n' +
      '        <Label text="right" />\n' +
      '    </StackLayout>\n' +
      '    <StackLayout v-view:another>\n' +
      '        <Label text="another" />\n' +
      '    </StackLayout>\n' +
      '</SideDrawer>',
    components: {
      SideDrawer,
      StackLayout,
      Label,
    },
  };

  it(`The ViewComponent is shown on the document.`, () => {
    const mountedWrapper = mount(Wrapper, {
      localVue,
    });

    expect(mountedWrapper.contains('div')).to.equal(true);
    expect(
      mountedWrapper
        .findAll('.drawer-content')
        .at(0)
        .text(),
    ).to.not.equal('');
    expect(
      mountedWrapper
        .findAll('.main-content')
        .at(0)
        .text(),
    ).to.not.equal('');
  });
});
