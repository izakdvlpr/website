import type { UrlObject } from 'url';

import NextLink, { type LinkProps } from 'next/link';
import { useMemo, HTMLAttributes } from 'react';

import type { PropsWithChildren } from '@interfaces/react';

interface Props extends LinkProps, HTMLAttributes<HTMLElement> {}

function parseUrl(url?: string | UrlObject): string | undefined {
  if (!url) return undefined;

  return (typeof url === 'object' ? url.href : url) || undefined;
}

export function Link({
  children,
  ...props
}: PropsWithChildren<Props>): JSX.Element {
  const href = useMemo(
    () => parseUrl(props.as) || parseUrl(props.href),
    [props.as, props.href],
  );

  return (
    <NextLink {...props}>
      <a {...props} href={href}>
        {children}
      </a>
    </NextLink>
  );
}
