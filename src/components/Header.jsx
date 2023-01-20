import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        position={'fixed'}
        top={4}
        left={4}
        p={'0'}
        w={'10'}
        h={'10'}
        variant={'solid'}
        colorScheme={'red'}
        onClick={onOpen}
        zIndex={100}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <h1>Abhi Tube</h1>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'red'}
                mt={4}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              pos={'fixed'}
              bottom={6}
              left={0}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} variant={'solid'} colorScheme={'red'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button onClick={onClose} variant={'outline'} colorScheme={'red'}>
                <Link to={'/sign_up'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
