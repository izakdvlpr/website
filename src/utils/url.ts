import urlJoin from 'url-join';

import { WEB_URL } from './constants';

const urlRegex = /^https?:\/\/+/;

export function makeUrl(path: string, appUrl = WEB_URL): string {
  if (urlRegex.test(path)) {
    return path;
  }

  return urlJoin(appUrl, path);
}
