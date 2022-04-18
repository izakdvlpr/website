/* eslint-disable @typescript-eslint/ban-types */

import type { ReactNode } from 'react';

export type PropsWithChildren<T extends Record<string, any> = {}> = T & {
  children?: ReactNode;
};
