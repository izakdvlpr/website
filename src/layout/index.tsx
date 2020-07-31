import React from 'react';

import Meta from './meta';

export interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Layout: React.FC<Props> = ({
  title = 'Meu portfólio 😄',
  description = 'Meu portfólio nele eu conto mais sobre mim 😄',
  image = 'https://avatars2.githubusercontent.com/u/44278486?v=4',
  url = 'https://zevdvlpr.ml',
  children,
}) => (
  <>
    <Meta title={title} description={description} image={image} url={url} />
    {children}
  </>
);

export default Layout;
