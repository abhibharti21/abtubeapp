import React from 'react';
import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h="100vh">
      <VStack color={'red'} h="full" justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input
              type={'file'}
              required
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100%+36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'red',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme={'red'}>Upload</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
