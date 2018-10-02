import { expect } from 'chai';
import Gestures from '../../../src/mixins/GestureMixin';

describe('Gesture Mixin Unit Test.', () => {
  describe('Gesture Mixin has two hooks in its life cycle, mounted and beforeDestroy.', () => {
    it('First life cycle hook is mounted.', done => {
      expect(Gestures.mounted).to.not.equal(undefined);
      done();
    });
    it('Second life cycle hook is beforeDestroy.', done => {
      expect(Gestures.beforeDestroy).to.not.equal(undefined);
      done();
    });
  });
});
