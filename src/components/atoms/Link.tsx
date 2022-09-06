import type { UrlObject } from 'url';

import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import { useMemo, HTMLAttributes } from 'react';

import type { PropsWithChildren } from '@interfaces/react';

interface LinkProps extends NextLinkProps, HTMLAttributes<HTMLElement> {}

function parseUrl(url?: string | UrlObject): string | undefined {
  if (!url) return undefined;

  return (typeof url === 'object' ? url.href : url) || undefined;
}

export function Link({
  children,
  ...props
}: PropsWithChildren<LinkProps>): JSX.Element {
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
