import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { GridLayout, Label } from '../../../src/main';

describe('GridLayout', () => {
  // StackLayout Mock up values.

  // Props
  const columns = '*, 3*, auto, 100';
  const rows = '*, 2*, auto, 200';

  const FirstLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'First',
        },
        attrs: {
          row: 0,
          col: 0,
        },
      });
    },
  };
  const SecondLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Second',
        },
        attrs: {
          row: 0,
          col: 1,
        },
      });
    },
  };
  const ThirdLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Third',
        },
        attrs: {
          row: 1,
          col: 0,
          colSpan: 2,
        },
      });
    },
  };

  const ForthLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Forth',
        },
        attrs: {
          row: 0,
          col: 2,
          rowSpan: 2,
        },
      });
    },
  };

  const gridLayoutWrapper = mount(GridLayout, {
    name: 'GridLayout',
    // This will converted to props.
    props: {
      columns: String,
      rows: String,
    },
    propsData: {
      columns,
      rows,
    },
    slots: {
      default: [FirstLabel, SecondLabel, ThirdLabel, ForthLabel],
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`columns property is equal to ${columns} and rows property is equal to ${rows}.`, () => {
      expect(gridLayoutWrapper.props().columns).to.equal(columns);
      expect(gridLayoutWrapper.props().rows).to.equal(rows);
    });
  });

  describe('Finding Label components in gridlayout wrapper', () => {
    it('there are four label component inside the layout.', () => {
      const labelWrappers = gridLayoutWrapper.findAll(Label).wrappers;
      expect(labelWrappers.length).to.equal(4);
    });

    it('label component displays the given text prop(`First`) correctly inside the layout.', () => {
      const labelWrappers = gridLayoutWrapper.findAll(Label).wrappers;
      const label = labelWrappers[0].find(Label);
      expect(label.element.textContent.trim()).to.equal('First');
    });

    it('label component displays the given text prop(`Second`) correctly inside the layout.', () => {
      const labelWrappers = gridLayoutWrapper.findAll(Label).wrappers;
      const label = labelWrappers[1].find(Label);
      expect(label.element.textContent.trim()).to.equal('Second');
    });
  });

  //TODO some attributes removing on vue test. Attributes added by CommonDirective but test will remove.
  xdescribe('the attributes are passed to the style of the child components sucessfully.', () => {
    it(`row and rowspan attributes are passed to the component correctly.`, () => {
      const labelWrappers = gridLayoutWrapper.findAll(Label).wrappers;
      expect(labelWrappers[0].element.style.gridRow).to.equal(0);
      expect(labelWrappers[3].element.style.gridRowEnd).to.equal(2);
    });
  });
});
