import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Home } from '@components/organisms/Home';

export const getStaticProps: GetStaticProps = async props => {
  const initialLocale = props.locale as string;
  const namespacesRequired = [
    'common',
    'about',
    'main',
    'projects',
    'timeline',
  ];

  const translations = await serverSideTranslations(
    initialLocale,
    namespacesRequired,
  );

  return {
    props: {
      ...translations,
    },
  };
};

export default function HomePage(): JSX.Element {
  return <Home />;
}
