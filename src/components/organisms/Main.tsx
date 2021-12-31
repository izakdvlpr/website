import { DefaultLayout } from '@components/templates/DefaultLayout';

import { Home } from './Home';

export function Main(): JSX.Element {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}
