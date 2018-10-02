import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { SegmentedBar, SegmentedBarItem, Button } from '../../../src/main.js';

describe('SegmentedBar', () => {
  // Mock up values.
  const items = ['Segment0', 'Segment1', 'Segment2', 'Segment3'];
  const selectedIndex = 0;
  const selectedBackgroundColor = '';
  //const buttonText = 'button'; //tODO

  const ButtonWrapper = {
    render(h) {
      return h(Button, {
        props: {
          text: 'buttonText',
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
    // This will converted to props.
    props: {
      items: {
        type: Array,
      },
      selectedIndex: Number,
      selectedBackgroundColor: String,
    },
    propsData: {
      items,
      selectedIndex,
      selectedBackgroundColor,
    },
    slots: {
      default: [ButtonWrapper],
    },
    components: {
      Button,
      SegmentedBarItem,
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`items property is equal to: ${items}.`, () => {
      expect(wrapper.props().items).to.equal(items);
    });
    it(`selectedIndex property is equal to: ${selectedIndex}.`, () => {
      expect(wrapper.props().selectedIndex).to.equal(selectedIndex);
    });
    it(`selectedBackgroundColor property is equal to: ${selectedBackgroundColor}.`, () => {
      expect(wrapper.props().selectedBackgroundColor).to.equal(selectedBackgroundColor);
    });
  });
  describe('segmentedBar component contains div element and SegmentedBarItem component.', () => {
    it('there is div element inside the segmentedBar.', () => {
      expect(wrapper.contains('div')).to.equal(true);
    });
    it('there is segmentedBarItem component inside the segmentedBar.', () => {
      expect(wrapper.contains(SegmentedBarItem)).to.equal(true);
    });
  });
  describe('Style testing of the SegmentedBar.', () => {
    it('items are valid so the class must be "nvw-segmentedBar__tabHeader".', done => {
      expect(wrapper.find('.nvw-segmentedBar__tabHeader').exists()).to.equal(true);
      done();
    });
    it('items are null so the class must be "nvw-segmentedBar__slots".', done => {
      expect(wrapper.find('.nvw-segmentedBar__slots').exists()).to.equal(true);
      done();
    });
  });

  describe('segmentedBar component contains Button component', () => {
    it('there is Button component inside the segmentedBar.', () => {
      const segmentedBarItemWrappers = wrapper.find('.nvw-segmentedBar__slots').findAll(Button).wrappers;
      expect(segmentedBarItemWrappers.length).to.equal(1);
    });
    //TODO
    // it('Button component displays the given title prop{`buttonText`} correctly inside the segmentedBar.', () => {
    //   const buttonWrappers = wrapper.find('.nvw-segmentedBar__slots').findAll(Button).wrappers;
    //   expect(buttonWrappers.element.textContent.includes(buttonText)).to.equal(true);
    // });
  });
  describe('Event testing', () => {
    it('button click event passed successfully.', () => {
      wrapper
        .findAll('button')
        .at(0)
        .trigger('click');
    });
  });
});
