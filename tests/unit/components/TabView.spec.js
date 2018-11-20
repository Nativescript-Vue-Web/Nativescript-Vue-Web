import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { TabView, TabViewItem } from '../../../src/main';

describe('TabView', () => {
  const selectedIndex = 1;
  let wrapper;
  before(() => {
    wrapper = mount(TabView, {
      name: 'TabView',
      props: {
        selectedIndex: {
          type: Number,
          default: 0,
        },
      },
      propsData: {
        selectedIndex,
      },
    });
  });
  it(`selectedIndex property is equal to: ${selectedIndex}.`, () => {
    expect(wrapper.props().selectedIndex).to.equal(selectedIndex);
  });
  it(`currentTabIndex is equal to: ${selectedIndex}.`, () => {
    expect(wrapper.vm.currentTabIndex).to.equal(selectedIndex);
  });
  it(`direction is equal to: to-right.`, () => {
    expect(wrapper.vm.direction).to.equal('to-right');
  });
});

describe('TabView+TabViewItem', () => {
  const tab1Title = 'Tab 1';
  const tab2Title = 'Tab 2';
  let tab1, tab2, wrapper;
  before(() => {
    tab1 = {
      render(h) {
        return h(TabViewItem, {
          props: {
            title: tab1Title,
          },
        });
      },
    };
    tab2 = {
      render(h) {
        return h(TabViewItem, {
          props: {
            title: tab2Title,
          },
        });
      },
    };

    wrapper = mount(TabView, {
      name: 'TabView',
      sync: false,
      props: {
        selectedIndex: {
          type: Number,
          default: 0,
        },
      },
      slots: {
        default: [tab1, tab2],
      },
    });
  });

  it(`selectedIndex property is equal to: 0.`, () => {
    expect(wrapper.props().selectedIndex).to.equal(0);
  });

  it(`child component length equal to 2.`, () => {
    expect(wrapper.vm.$slots.default.length).to.equal(2);
  });

  xit(`children length equal to 2.`, () => {
    expect(wrapper.vm.children.length).to.equal(2);
  });
  xit(`Tab titles are correct.`, () => {
    expect(wrapper.find('#tab-1').text()).to.equal(tab1Title);
    expect(wrapper.find('#tab-2').text()).to.equal(tab1Title);
  });
  xit(`TabView component click last button.`, () => {
    wrapper
      .findAll('button')
      .at(1)
      .element.click();
    expect(wrapper.emitted().selectedIndexChanged[0][0]).to.equal(1);
  });
});

describe('Tab view item change case', () => {
  it('Change item to out of list', done => {
    const Wrapper = {
      name: 'Wrapper',
      template: '<TabView ref="tabview"><TabViewItem title="Tab 1" /></TabView>',
      components: {
        TabView,
        TabViewItem,
      },
    };

    const mountedWrapper = mount(Wrapper);

    mountedWrapper.vm.$refs['tabview'].chooseTab(10);
    mountedWrapper.vm.$refs['tabview'].chooseTab(0);
    mountedWrapper.vm.$refs['tabview'].chooseTab(-5);

    mountedWrapper.find(TabView).setData({ currentTabIndex: 20 });
    expect(mountedWrapper.vm.$refs['tabview'].activeChild).to.equal(undefined);

    mountedWrapper.find(TabView).setData({ currentTabIndex: 1 });
    expect(mountedWrapper.vm.$refs['tabview'].activeChild).to.equal(undefined);

    mountedWrapper.find(TabView).setData({ currentTabIndex: 0 });
    expect(mountedWrapper.vm.$refs['tabview'].activeChild).to.not.equal(undefined);

    mountedWrapper.vm.$nextTick(() => {
      expect(mountedWrapper.findAll('button').length).to.equal(1);
      done();
    });
  });

  it('Change item', done => {
    const Wrapper = {
      name: 'Wrapper',
      template: '<TabView ref="tabview"><TabViewItem title="Tab 1" /><TabViewItem title="Tab 2" /></TabView>',
      components: {
        TabView,
        TabViewItem,
      },
    };

    const mountedWrapper = mount(Wrapper);

    mountedWrapper.vm.$refs['tabview'].chooseTab(1);
    mountedWrapper.vm.$refs['tabview'].chooseTab(0);

    mountedWrapper.vm.$nextTick(() => {
      expect(mountedWrapper.findAll('button').length).to.equal(2);
      done();
    });
  });
});
