import { DefaultLayout } from '@/components/templates/DefaultLayout';

import { About } from './About';
import { Main } from './Main';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Timeline } from './Timeline';

export function Home(): JSX.Element {
  return (
    <DefaultLayout>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Timeline />
    </DefaultLayout>
  );
}
