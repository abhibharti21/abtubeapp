import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box minH={'40'} bgColor={'black'} p={['3', '16']} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack p={['15px 0', '3']} w={'full'} textTransform={'uppercase'}>
          <Heading>Abhi Tube</Heading>
          <Text>&copy; all rights reseved 2023-2025</Text>
        </VStack>

        <VStack
          w={'full'}
          p={['15px 0', '3']}
          borderTop={['2px solid white', 'none']}
          borderBottom={['2px solid white', 'none']}
          borderRight={['none', '2px solid white']}
          borderLeft={['none', '2px solid white']}
        >
          <Heading
            fontSize={['.9rem', '1.2rem']}
            textTransform={'capitalize'}
            textAlign={['center', 'start']}
          >
            Connect us on our social media platforms:-
          </Heading>
          <HStack justifyContent={'space-evenly'} w={'full'} pt="4">
            <Button
              padding={'9px 15px'}
              colorScheme={'linkedin'}
              borderRadius={'full'}
              size={'lg'}
            >
              <a
                href="https://www.linkedin.com/in/abhishek-bharti-3322b1189/"
                target={'_blank'}
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </Button>
            <Button
              padding={'9px 15px'}
              colorScheme={'facebook'}
              borderRadius={'full'}
              size={'lg'}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100041314941490"
                target={'_blank'}
                rel="noreferrer"
              >
                <AiFillFacebook />
              </a>
            </Button>
            <Button
              padding={'9px 15px'}
              colorScheme={'whiteAlpha'}
              borderRadius={'full'}
              size={'lg'}
            >
              <a
                href="https://github.com/abhibharti21"
                target={'_blank'}
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </Button>
          </HStack>
        </VStack>
        <VStack alignItems={'stretch'} w={'full'} p={['15px 0', '3']}>
          <Heading size={'md'} textTransform="uppercase" textAlign={'center'}>
            suscribe us to get More
          </Heading>
          <HStack borderBottom={'2px dashed white'} pb={'2'}>
            <Input
              type={'email'}
              m={'0'}
              placeholder="Enter Your Email..."
              border={'none'}
              outline={'none'}
              focusBorderColor={'none'}
              borderRadius={'none'}
            />
            <Button p={'1 5'} colorScheme={'red'}>
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
