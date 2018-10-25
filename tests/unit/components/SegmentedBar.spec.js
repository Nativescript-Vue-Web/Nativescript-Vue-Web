import Vue from 'vue';
import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import { SegmentedBar, SegmentedBarItem } from '../../../src/main.js';

describe('SegmentedBar', () => {
  // Mock up values.
  const items = [{ title: 'Segment0' }, { title: 'Segment1' }, { title: 'Segment2' }, { title: 'Segment3' }];
  const selectedIndex = 0;

  describe('SegmentedBar component receives given props correctly.', () => {
    const wrapper = shallowMount(SegmentedBar, {
      model: {
        event: 'input',
        prop: 'selectedIndex',
      },
      name: 'SegmentedBar',
      props: {
        items: {
          type: Array,
        },
        selectedIndex: Number,
      },
      propsData: {
        items,
        selectedIndex,
      },
    });

    it(`selectedIndex property is equal to: ${selectedIndex}.`, () => {
      expect(wrapper.props().selectedIndex).to.equal(selectedIndex);
    });
    it(`items property is equal to: ${JSON.stringify(items)}.`, () => {
      expect(wrapper.props().items).to.equal(items);
    });
    it(`currentTabIndex is equal to: ${selectedIndex}.`, () => {
      expect(wrapper.vm.currentIndex).to.equal(selectedIndex);
    });
    it(`childrens size is equal to: ${items.length}.`, () => {
      expect(wrapper.vm.children.length).to.equal(items.length);
      expect(wrapper.vm.childrenFromSlots.length).to.equal(0);
    });
  });

  describe('Style testing of the SegmentedBar.', () => {
    const wrapper = shallowMount(SegmentedBar, {
      model: {
        event: 'input',
        prop: 'selectedIndex',
      },
      name: 'SegmentedBar',
      props: {
        items: {
          type: Array,
        },
        selectedIndex: Number,
      },
      propsData: {
        items,
        selectedIndex,
      },
    });

    it(`when the button is active must be class "nvw-segmentedBar__button--active" `, () => {
      expect(wrapper.find('.nvw-segmentedBar__button--active').exists()).to.equal(true);
    });
    it(`when the button is inactive must be class "nvw-segmentedBar__button" `, () => {
      expect(wrapper.find('.nvw-segmentedBar__button').exists()).to.equal(true);
    });
  });

  describe('SegmentedBar component contains button component', () => {
    const wrapper = shallowMount(SegmentedBar, {
      model: {
        event: 'input',
        prop: 'selectedIndex',
      },
      name: 'SegmentedBar',
      props: {
        items: {
          type: Array,
        },
        selectedIndex: Number,
      },
      propsData: {
        items,
        selectedIndex,
      },
    });

    it(`SegmentedBar component contains ${items.length} buttons.`, () => {
      expect(wrapper.findAll('button').length).to.equal(items.length);
    });
    it(`segmentedBar component click last button.`, () => {
      wrapper
        .findAll('button')
        .at(3)
        .element.click();
      expect(wrapper.emitted().selectedIndexChanged[0][0]).to.equal(3);
    });
  });

  describe('the component contains one div.', () => {
    const wrapper = shallowMount(SegmentedBar, {
      model: {
        event: 'input',
        prop: 'selectedIndex',
      },
      name: 'SegmentedBar',
      props: {
        items: {
          type: Array,
        },
        selectedIndex: Number,
      },
      propsData: {
        items,
        selectedIndex,
      },
    });
    it('there is one div.', () => {
      expect(wrapper.contains('div.nvw-segmentedBar')).to.equal(true);
      expect(wrapper.findAll('div.nvw-segmentedBar').length).to.equal(1);
    });
  });

  describe('SegmentedBar+SegmentedBarItem', () => {
    const segmentedBarItemTitle = 'SegmentedBarItem 1';
    const segmentedBarItem2Title = 'SegmentedBarItem 2';
    let segmentedBarItem1, segmentedBarItem2, wrapper;
    before(() => {
      segmentedBarItem1 = {
        render(h) {
          return h(SegmentedBarItem, {
            props: {
              title: segmentedBarItemTitle,
            },
          });
        },
      };
      segmentedBarItem2 = {
        render(h) {
          return h(SegmentedBarItem, {
            props: {
              title: segmentedBarItem2Title,
            },
          });
        },
      };

      wrapper = mount(SegmentedBar, {
        name: 'SegmentedBar',
        props: {
          items: Array,
          selectedIndex: {
            type: Number,
            default: 0,
          },
        },
        propsData: {
          items,
          selectedIndex,
        },
        slots: {
          default: [segmentedBarItem1, segmentedBarItem2],
        },
      });
    });

    it(`child component length equal to 2.`, () => {
      expect(wrapper.vm.$slots.default.length).to.equal(2);
    });

    xit(`children length equal to 2.`, () => {
      expect(wrapper.vm.children.length).to.equal(2);
    });

    it(`If it has not child component, show items.`, () => {
      const wrapper2 = mount(SegmentedBar, {
        name: 'SegmentedBar',
        props: {
          items: Array,
          selectedIndex: {
            type: Number,
            default: 0,
          },
        },
      });
      expect(Object.keys(wrapper2.vm.$slots).length).to.equal(0);
    });
  });
});

describe('SegmentedBarItem', () => {
  it(`should update when title is changed.`, () => {
    const Constructor = Vue.extend(SegmentedBarItem);
    const comp = new Constructor().$mount();
    comp.title = 'newTitle';
    expect(comp._data.title).to.equal('newTitle');
  });
});
