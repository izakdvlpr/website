import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Main } from '@components/organisms/Main';

export const getStaticProps: GetStaticProps = async props => {
  const initialLocale = props.locale as string;
  const namespacesRequired = [
    'common',
    'about',
    'home',
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
  return <Main />;
}
