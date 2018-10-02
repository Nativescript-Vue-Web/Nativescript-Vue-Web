import { expect } from 'chai';
import { mount, shallowMount } from '@vue/test-utils';
import { SegmentedBar, SegmentedBarItem } from '../../../src/main.js';

describe('SegmentedBar', () => {
  // Mock up values.
  const items = [{ title: 'Segment0' }, { title: 'Segment1' }, { title: 'Segment2' }, { title: 'Segment3' }];
  const selectedIndex = 0;

  describe('the component receives given props correctly.', () => {
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
      expect(wrapper.vm.currentTabIndex).to.equal(selectedIndex);
    });
    it(`childrens size is equal to: ${items.length}.`, () => {
      expect(wrapper.vm.children.length).to.equal(items.length);
      expect(wrapper.vm.childrenFromSlots.length).to.equal(0);
    });
  });

  describe('segmentedBar component contains button component', () => {
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

    it(`segmentedBar component contains ${items.length} buttons.`, () => {
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

  describe('segmentedBar component contains Slot component', () => {
    const tab1Title = 'Tab 1';
    const tab2Title = 'Tab 2';
    const tab1 = {
      render(h) {
        return h(SegmentedBarItem, {
          props: {
            title: tab1Title,
          },
        });
      },
    };
    const tab2 = {
      render(h) {
        return h(SegmentedBarItem, {
          props: {
            title: tab2Title,
          },
        });
      },
    };
    const wrapper = mount(SegmentedBar, {
      model: {
        event: 'input',
        prop: 'selectedIndex',
      },
      name: 'SegmentedBar',
      props: {
        selectedIndex: Number,
      },
      slots: {
        default: [tab1, tab2],
      },
    });

    xit(`children's size is equal to: 2.`, () => {
      expect(wrapper.vm.children.length).to.equal(2);
      expect(wrapper.vm.childrenFromSlots.length).to.equal(2);
    });
  });
});
