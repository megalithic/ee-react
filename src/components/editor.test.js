import Editor from './editor.js';

describe('<Editor />', () => {
  const comp = mount(<Editor />);

  it('renders a menubar', () => {
    expect(comp.find('[data-test-id="menubar"]')).toBePresent();
  });

  it('renders a workspace', () => {
    expect(comp.find('[data-test-id="workspace"]')).toBePresent();
  });
});
