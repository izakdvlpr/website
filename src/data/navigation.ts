export interface INavigation {
  name: string;
  href: string;
}

export const navigation: INavigation[] = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];
