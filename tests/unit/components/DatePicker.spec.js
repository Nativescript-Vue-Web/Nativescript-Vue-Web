import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import DatePicker from '../../../src/components/DatePicker';

describe('DatePicker Unit Test.', () => {
  // Mock up values.
  const date = new Date('2018-07-18');
  const minDate = new Date('2012-07-11');
  const maxDate = new Date('2020-07-29');
  const dateChange = sinon.spy();

  const updateValueSpy = sinon.spy(DatePicker.methods, 'updateValue');

  const wrapper = mount(DatePicker, {
    name: 'DatePicker',
    propsData: {
      minDate,
      maxDate,
      dateChange,
      date,
    },
    listeners: {
      dateChange,
    },
  });

  describe('Change the value inside input element and check the emitted events.', () => {
    it('The value inside the input will be set to "2017-08-22" and the dateChange event will be emitted.', done => {
      wrapper.find('input').setValue(new Date('2017-08-22').toISOString().split('T', 1)[0]);
      expect(updateValueSpy.called).to.equal(true);
      expect(wrapper.emitted().input.length).to.equal(1);
      const newDate = new Date(wrapper.emitted().input[0][0]).toISOString().split('T', 1)[0];
      expect(newDate).to.equal(new Date('2017-08-22').toISOString().split('T', 1)[0]);
      done();
    });

    it('The value inside the input will be set to "2017-15-32" and the dateChange event will not be emitted.', done => {
      const oldDate = new Date('2016-07-18');

      const wrapper = mount(DatePicker, {
        name: 'DatePicker',
        propsData: {
          date: oldDate,
        },
      });

      wrapper.find('input').setValue('2017-15-32');
      expect(updateValueSpy.called).to.equal(true);
      expect(wrapper.emitted().input).to.equal(undefined);
      done();
    });

    it('Wrong date', done => {
      const oldDate = new Date('2016-07-18');
      const newDate = new Date('2018-02-35');

      const wrapper = mount(DatePicker, {
        name: 'DatePicker',
        propsData: {
          date: oldDate,
        },
      });
      wrapper.setProps({ date: newDate });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.element.value).to.equal('');
        done();
      });
    });
  });

  describe('Events triggered', () => {
    it('DateChange event is also emitted.', done => {
      const oldDate = new Date('2016-07-18');
      const newDate = new Date('2018-07-18');

      const wrapper = mount(DatePicker, {
        name: 'DatePicker',
        propsData: {
          date: oldDate,
        },
      });
      wrapper.setProps({ date: newDate });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.emitted().dateChange.length).to.equal(1);
        done();
      });
    });
  });

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
