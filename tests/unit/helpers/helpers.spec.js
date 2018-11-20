import { expect } from 'chai';
import sinon from 'sinon';
import * as helpers from '../../../src/helpers/helpers';

describe('Helpers Test', () => {
  describe('Debounce Test', () => {
    it('Immediate test', () => {
      const spy = sinon.spy();
      const func = helpers.debounce(spy, 500, true);
      func();
      expect(spy.callCount).to.equal(0);
    });
    it('Call it several times and function called 0 times before 500ms', () => {
      const spy = sinon.spy();
      const func = helpers.debounce(spy, 500);
      func();
      func();
      func();
      expect(spy.callCount).to.equal(0);
    });
    it('Call it several times and function called 1 times after 500ms', done => {
      const spy = sinon.spy();
      const func = helpers.debounce(spy, 500);
      func();
      func();
      func();
      setTimeout(() => {
        expect(spy.callCount).to.equal(1);
        done();
      }, 501);
    });
  });
  it('camelCaseToDash', () => {
    const camelCaseText = helpers.camelCaseToDash('NativescriptVueWeb');
    expect(camelCaseText).to.equal('-nativescript-vue-web');
  });
  it('addPx', () => {
    const pxValue = helpers.addPx('50');
    expect(pxValue).to.include('px');
  });
});
