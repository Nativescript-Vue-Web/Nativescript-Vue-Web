import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { ActionBar, ActionItem, NavigationButton } from '../../../src/main';

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

  const ActionBarWrapper = shallowMount(ActionBar, {
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

  it(`find the navigationbutton and actionitem components in wrapper.`, () => {
    expect(ActionBarWrapper.findAll(NavigationButton).length).to.equal(2);
    expect(ActionBarWrapper.findAll(ActionItem).length).to.equal(1);
  });
});
