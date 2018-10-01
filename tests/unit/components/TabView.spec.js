import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { TabView, TabViewItem } from '../../../src/main';

describe('TabView', () => {
  const selectedIndex = 1;
  const wrapper = mount(TabView, {
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
  // const Vue = createLocalVue();
  const tab1Title = 'Tab 1';
  const tab2Title = 'Tab 2';
  const tab1 = {
    render(h) {
      return h(TabViewItem, {
        props: {
          title: tab1Title,
        },
      });
    },
  };
  const tab2 = {
    render(h) {
      return h(TabViewItem, {
        props: {
          title: tab2Title,
        },
      });
    },
  };

  const wrapper = mount(TabView, {
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

  it(`selectedIndex property is equal to: 0.`, () => {
    expect(wrapper.props().selectedIndex).to.equal(0);
  });

  it(`child component length equal to 2.`, () => {
    expect(wrapper.vm.$slots.default.length).to.equal(2);
  });

  /*
  it(`children length equal to 2.`, () => {
    Vue.nextTick(() => {
      expect(wrapper.vm.children.length).to.equal(2);
    });
  });

  it(`Tab titles are correct.`, done => {
    Vue.nextTick(() => {
      console.log('wrapper.html()', wrapper.html()); // eslint-disable-line
      console.log('wrapper.find.text()', wrapper.find('#tab-1').html()); // eslint-disable-line
      expect(wrapper.find('#tab-1').text()).to.equal(tab1Title);
      done();
    });
  });*/
});
