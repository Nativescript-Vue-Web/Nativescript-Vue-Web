import { expect } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import sinon from 'sinon';
import ListView from '../../../src/components/ListView';
import VTemplate from '../../../src/components/VTemplate';

describe('ListView & v-template components Unit Test.', () => {
  let localVue;
  let myIns;
  const items = ['özer', 'tümay', 'yiğit', 'muammer', 'gizem'];
  const itemTap = sinon.spy();
  const MockUpEvents = {
    $listeners: {
      itemTap,
    },
    $el: {
      addEventListener: sinon.spy(),
      removeEventListener: sinon.spy(),
    },
  };
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.component('VTemplate', VTemplate);
    myIns = mount(ListView, {
      props: {
        items: {
          type: Array,
          required: true,
        },
        '+alias': {
          type: String,
          default: 'item',
        },
        '+index': {
          type: String,
        },
      },
      propsData: {
        items,
      },
      template: `
              <ListView for="item in items" @itemTap="onItemTap"> 
              <v-template>
                <Label :text="item" />
              </v-template>
            
              <v-template if="$odd">
                <!-- For items with an odd index, shows the label in red. -->
                <Label :text="item" color="red" />
              </v-template>
            </ListView>
              `,
      localVue,
    });
  });
  it('getItemContext function is binded to the ListView component.', done => {
    expect(myIns.vm.getItemContext).not.equal(null || undefined);
    done();
  });
  it('Check if itemTap event is passed to ListView and it loads the event just after being mounted.', done => {
    ListView.mounted.call(MockUpEvents);
    expect(MockUpEvents.$el.addEventListener.called).to.equal(true);
    done();
  });
  it('Check if itemTap event is passed to ListView and it removes event just before being destroyed.', done => {
    ListView.beforeDestroy.call(MockUpEvents);
    expect(MockUpEvents.$el.removeEventListener.called).to.equal(true);
    done();
  });
});
