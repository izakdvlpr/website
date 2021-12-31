import { TPropsWithChildren } from '@interfaces/react';

export function DefaultLayout({ children }: TPropsWithChildren): JSX.Element {
  return <div>{children}</div>;
}
