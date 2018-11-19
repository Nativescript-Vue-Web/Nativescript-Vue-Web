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

  xdescribe('the component receives given props correctly.', () => {
    it(`initial value taken from v-model is equal to: ${date}.`, done => {
      expect(wrapper.props().date).to.equal(date);
      done();
    });
    it(`minDate prop is equal to: ${minDate}.`, done => {
      expect(wrapper.props().minDate).to.equal(minDate);
      done();
    });
    it(`maxDate prop is equal to: ${maxDate}.`, done => {
      expect(wrapper.props().maxDate).to.equal(maxDate);
      done();
    });

    it(`min property is equal to ${minDate}.`, () => {
      expect(wrapper.attributes().min).to.equal(
        `${minDate.getFullYear().toString()}-${(minDate.getUTCMonth() + 1).toString().padStart(2, '0')}-${minDate
          .getUTCDate()
          .toString()
          .padStart(2, '0')}`,
      );
    });

    it(`max property is equal to ${maxDate}.`, () => {
      expect(wrapper.attributes().max).to.equal(
        `${maxDate.getFullYear().toString()}-${(maxDate.getUTCMonth() + 1).toString().padStart(2, '0')}-${maxDate
          .getUTCDate()
          .toString()
          .padStart(2, '0')}`,
      );
    });

    it('pressing return key event property is passed to the component successfully.', done => {
      expect(wrapper.vm.$listeners.dateChange).to.not.equal(undefined);
      done();
    });

    it(`day, month, year props checked`, () => {
      const day = 2;
      const month = 5;
      const year = 2018;

      const dateWrapper = mount(DatePicker, {
        propsData: {
          day,
          month,
          year,
        },
      });

      expect(dateWrapper.props().day).to.equal(day);
      expect(dateWrapper.props().month).to.equal(month);
      expect(dateWrapper.props().year).to.equal(year);
    });

    it(`day, month, year props empty`, () => {
      const dateWrapper = mount(DatePicker);
      const date = new Date();
      const day = date.getUTCDate();
      const month = date.getUTCMonth();
      const year = date.getFullYear();

      expect(dateWrapper.element.value).to.equal(`${year}-${month + 1}-${day}`);
    });
  });

  xdescribe('the input inside the component has attributes with correct values.', () => {
    it(`the maxDate attribute is equal to${maxDate}.`, done => {
      const maxDateAttr = wrapper.find('input').attributes().max;
      expect(new Date(maxDateAttr).toLocaleDateString()).to.equal(maxDate.toLocaleDateString());
      done();
    });
    it(`the minDate attribute is equal to${minDate}.`, done => {
      const minDateAttr = wrapper.find('input').attributes().min;
      expect(new Date(minDateAttr).toLocaleDateString()).to.equal(minDate.toLocaleDateString());
      done();
    });
  });

  xdescribe('Changing the prop and then check the value inside the input element.', () => {
    it('Changing the maxDate property.', done => {
      wrapper.setProps({ maxDate: new Date('2018-08-22') });
      const maxDateProp = wrapper.props().maxDate.toLocaleDateString();
      expect(maxDateProp).to.equal(new Date('2018-08-22').toLocaleDateString());
      done();
    });
    it('Changing the minDate property.', done => {
      wrapper.setProps({ minDate: new Date('2014-08-22') });
      const minDateProp = wrapper.props().minDate.toLocaleDateString();
      expect(minDateProp).to.equal(new Date('2014-08-22').toLocaleDateString());
      done();
    });
  });
  describe('Change the value inside input element and check the emitted events.', () => {
    xit('The value inside the input will be set to "2017-08-22" and the dateChange event will be emitted.', done => {
      wrapper.find('input').setValue(new Date('2017-08-22').toISOString().split('T', 1)[0]);
      expect(updateValueSpy.called).to.equal(true);
      expect(wrapper.emitted().input.length).to.equal(1);

      console.log(wrapper.emitted().input[0][0])

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
