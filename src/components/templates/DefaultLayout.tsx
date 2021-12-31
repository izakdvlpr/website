import { SEO } from '@components/atoms/SEO';
import { TPropsWithChildren } from '@interfaces/react';

export function DefaultLayout({ children }: TPropsWithChildren): JSX.Element {
  return (
    <>
      <SEO />

      {children}
    </>
  );
}
