import App from './app.js';

describe('<App />', () => {
  const comp = mount(<App />);

  it('renders a menubar', () => {
    expect(comp.find('[data-test-id="menubar"]')).toBePresent();
  });

  it('renders a workspace', () => {
    expect(comp.find('[data-test-id="workspace"]')).toBePresent();
  });
});
