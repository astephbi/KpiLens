import React from 'react';
import {
  useColorModeValue,
  useColorMode,
  HStack,
  Box,
  Image,
  Flex,
  Text,
  Icon,
  Link,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/img/logo.svg';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  /*   const links = [
    { path: '/', element: <Home /> },
    { path: '/pricing', element: <Pricing /> },
  ]; */
  return (
    <Flex mx={20} py={15} justify="space-between">
      <HStack gap={8}>
        <Image src={logo} alt="Logo Kpilens" height={7} />
        <Link>Pricing</Link>
        <Link>Industries</Link>
        <Link>Ressources</Link>
      </HStack>
      <HStack>
        <Link fontWeight="bold" color="secondary">
          Sign in
        </Link>
        <Button bgColor="secondary" color="white">
          Get started
        </Button>
        <IconButton>
          <Icon
            as={colorMode === 'light' ? MoonIcon : SunIcon}
            alignSelf="center"
            size="md"
            height="28px"
            width="30px"
            onClick={() => toggleColorMode()}
          />
        </IconButton>
      </HStack>
    </Flex>
  );
};

export default Navbar;
