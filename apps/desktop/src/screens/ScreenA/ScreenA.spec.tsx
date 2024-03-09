import { render } from '@testing-library/react';
import { ScreenA } from './ScreenA';

//
//

describe('DESKTOP - ScreenA', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScreenA />);
    expect(baseElement).toMatchSnapshot();
  });
});
