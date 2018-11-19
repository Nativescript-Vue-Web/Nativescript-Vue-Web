import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import DatePicker from '../../../src/components/DatePicker';

describe('DatePicker Unit Test.', () => {
  describe('Date type checking', () => {
    it('Date type Date', () => {
      const date = new Date(2017, 2, 10);
      const wrapper = mount(DatePicker, {
        name: 'DatePicker',
        propsData: {
          value: date,
        },
      });
      expect(wrapper.props().value instanceof Date).to.equal(true);
    });

    it('Date type String', () => {
      const date = '2017-02-15';
      const wrapper = mount(DatePicker, {
        name: 'DatePicker',
        propsData: {
          value: date,
        },
      });
      expect(wrapper.props().value instanceof Date).to.equal(false);
    });
  });
});
