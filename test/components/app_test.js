import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//Group together similar tests
describe('Test the App component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App)
  })

  //Test a single attribute of a target
  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist
  })
  //
  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist
  })


})
