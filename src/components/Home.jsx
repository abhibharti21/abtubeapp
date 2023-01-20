import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/moon.png';
import img5 from '../assets/5.png';
import '../style/Home.scss';

const headingStlyes = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
  borderRadius: '15px',
};

const Home = () => {
  return (
    <Box>
      <ImgContainer />
      <Container maxWidth={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          w="fit-content"
          py={2}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          w={'full'}
          h={'full'}
          py={'14'}
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            h={['40', '400']}
            filter={'hue-rotate(-130deg)'}
            id="img"
          />
          <Text
            w={['300px', '550px']}
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '3']}
            textAlign={'center'}
          >
            Abhi Tube is a web application software for playing multimedia
            computer files video files. Media players commonly display standard
            media control icons known from physical devices such as tape
            recorders and CD players, such as play, pause, fastforward,
            backforward, and stop buttons.With this video player you can play
            and watch videos from your any devices.It has over 280 million users
            globally. The platform currently operates on an ad-supported model
            and has a streaming library of over 150,000 hours in 11 languages.
            It is available on the web.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const ImgContainer = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading
          bgColor={'whiteAlpha.500'}
          color={'black'}
          {...headingStlyes}
          fontSize={['1.3rem', '3rem']}
        >
          Experience The Virtual Reality
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading
          bgColor={'whiteAlpha.500'}
          color={'black'}
          {...headingStlyes}
          fontSize={['1.3rem', '3rem']}
        >
          Enjoy The Virtual Reality Like A Game
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading
          bgColor={'whiteAlpha.500'}
          color={'black'}
          {...headingStlyes}
          fontSize={['1.3rem', '3rem']}
        >
          Play Games Using VR
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading
          bgColor={'whiteAlpha.500'}
          color={'black'}
          {...headingStlyes}
          fontSize={['1.3rem', '3rem']}
        >
          Live Beautiful Night With Virtual Reality
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
