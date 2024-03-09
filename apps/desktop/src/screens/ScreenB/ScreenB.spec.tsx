import { render } from '@testing-library/react';
import { ScreenB } from './ScreenB';

//
//

describe('DESKTOP - ScreenB', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScreenB />);
    expect(baseElement).toMatchSnapshot();
  });
});
