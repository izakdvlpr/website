import { DefaultLayout } from '@components/templates/DefaultLayout';

import { About } from './About';
import { Home } from './Home';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Timeline } from './Timeline';

export function Main(): JSX.Element {
  return (
    <DefaultLayout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Timeline />
    </DefaultLayout>
  );
}
