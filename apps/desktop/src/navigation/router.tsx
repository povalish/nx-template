import { createMemoryRouter } from 'react-router-dom';
import { paths } from './paths';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export const router = createMemoryRouter([
  {
    path: paths.ScreenA,
    element: <ScreenA />,
  },
  {
    path: paths.ScreenB,
    element: <ScreenB />,
  },
]);
