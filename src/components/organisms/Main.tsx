import { Header } from '@components/molecules/Header';
import { DefaultLayout } from '@components/templates/DefaultLayout';

import { About } from './About';
import { Home } from './Home';

export function Main(): JSX.Element {
  return (
    <DefaultLayout>
      <Header />

      <Home />
      <About />
    </DefaultLayout>
  );
}
