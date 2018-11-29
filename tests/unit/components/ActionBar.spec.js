import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { ActionBar, ActionItem, NavigationButton, StackLayout } from '../../../src/main';

describe('ActionItem', () => {
  const title = 'Main Page';
  const newTitle = 'Edit Page';
  const navigationText = 'Edit';
  const actionText = 'Back';

  const ActionItemWrapper = {
    render(h) {
      return h(ActionItem, {
        props: {
          text: actionText,
        },
      });
    },
  };

  const NavigationButtonWrapper = {
    render(h) {
      return h(NavigationButton, {
        props: {
          text: navigationText,
        },
      });
    },
  };

  const NavigationButtonWrapper2 = {
    render(h) {
      return h(NavigationButton, {
        props: {
          text: navigationText,
        },
      });
    },
  };

  const ActionBarWrapper = mount(ActionBar, {
    name: 'ActionBar',
    props: {
      title: String,
    },
    propsData: {
      title,
    },
    slots: {
      default: [ActionItemWrapper, NavigationButtonWrapper, NavigationButtonWrapper2],
    },
    components: {
      ActionItem,
      NavigationButton,
    },
  });

  it(`text property is equal to: ${title}.`, () => {
    expect(ActionBarWrapper.props().title).to.equal(title);
  });

  it(`change text prop to new text: ${title}.`, () => {
    ActionBarWrapper.setProps({ title: newTitle });
    expect(ActionBarWrapper.props().title).to.equal(newTitle);
  });

  it(`child component length equal to 3.`, () => {
    expect(ActionBarWrapper.vm.$slots.default.length).to.equal(3);
  });

  it(`If it has not child component, show only title.`, () => {
    const ActionBarWrapper2 = mount(ActionBar, {
      name: 'ActionBar',
      props: {
        title: String,
      },
      propsData: {
        title,
      },
    });
    expect(Object.keys(ActionBarWrapper2.vm.$slots).length).to.equal(0);
  });

  it('find the navigationbutton components in wrapper.', done => {
    const Wrapper = {
      name: 'Wrapper',
      template: '<ActionBar><NavigationButton text="Bar Item 1" /><NavigationButton text="Bar Item 2" /></ActionBar>',
      components: {
        ActionBar,
        NavigationButton,
      },
    };

    const mountedWrapper = mount(Wrapper);

    mountedWrapper.vm.$nextTick(() => {
      const style1 = window.getComputedStyle(mountedWrapper.findAll('.nvw-navigation-button').at(0).element);
      const style2 = window.getComputedStyle(mountedWrapper.findAll('.nvw-navigation-button').at(1).element);

      expect(style1._values.display).to.equal('none');
      expect(style2._values.display).to.not.equal('none');
      expect(mountedWrapper.findAll('.nvw-navigation-button').length).to.equal(2);
      done();
    });
  });

  it('find the actionitem components in wrapper.', done => {
    const Wrapper = {
      name: 'Wrapper',
      template:
        '<StackLayout><ActionBar title="title"><StackLayout></StackLayout></ActionBar><ActionBar>' +
        '<ActionItem text="Bar Item 1" /><ActionItem text="Bar Item 2" /></ActionBar></StackLayout>',
      components: {
        ActionBar,
        ActionItem,
        StackLayout,
      },
    };

    const mountedWrapper = mount(Wrapper);

    mountedWrapper.vm.$nextTick(() => {
      expect(mountedWrapper.findAll('.nvw-action-item').length).to.equal(2);
      done();
    });
  });
});
