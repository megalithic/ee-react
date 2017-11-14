import {Workspace} from './workspace';

describe('<Workspace />', () => {
  const comp = mount(<Workspace />);

  it('renders a primary sidebar', () => {
    expect(comp.find('[data-test-id="primary-sidebar"]')).toBePresent();
  });

  it('renders a canvas', () => {
    expect(comp.find('[data-test-id="canvas"]')).toBePresent();
  });
});
