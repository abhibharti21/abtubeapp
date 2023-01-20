import { Box, Button, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import sorry from '../assets/sorry.png';

const Error = () => {
  return (
    <Box w={'full'} h={'70vh'}>
      <VStack w={'full'} h={'full'} justifyContent={'center'}>
        <Image
          src={sorry}
          h={['150px', '200px']}
          pos={'relative'}
          bottom={'5'}
        />
        <Heading size={['md', 'xl']}>Sorry , Entered Url Not Found.</Heading>
        <Button colorScheme={'orange'} pos={'relative'} top={'5'}>
          <Link to="/">Go back to home page</Link>
        </Button>
      </VStack>
    </Box>
  );
};

export default Error;
