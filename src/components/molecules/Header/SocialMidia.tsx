import { HStack, Icon, Link } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

interface IIcon {
  name: string;
  link: string;
  icon: IconType;
}

const icons: Array<IIcon> = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/izakdvlpr',
    icon: BsTwitter,
  },
  { name: 'Github', link: 'https://github.com/izakdvlpr', icon: BsGithub },
  {
    name: 'Twitter',
    link: 'https://www.linkedin.com/in/izakdvlpr',
    icon: BsLinkedin,
  },
];

export function SocialMidia(): JSX.Element {
  return (
    <HStack spacing={4} display={{ base: 'none', lg: 'unset' }}>
      {icons.map(data => (
        <Link key={data.name} href={data.link} isExternal>
          <Icon as={data.icon} w={6} h={6} color="black" />
        </Link>
      ))}
    </HStack>
  );
}
