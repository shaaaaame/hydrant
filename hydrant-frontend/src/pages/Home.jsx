import { Center, Stack, Heading, Flex, Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router'
import { Button } from '../components/ui/button'
import '../pages/Home.css'

function Home() {
  return (
    <Center className="home" overflow={'hidden'} width="100vw" height={'100svh'}>
      <div className="home-title">
        <Heading as="h3" color="orange.300" fontFamily={'Climate Crisis'} textStyle={'4xl'}>
          hydrant.
        </Heading>
      </div>
      <Flex width={'100%'} direction="column" height={'60vh'} pt="60px">
        <Box boxSize={{ base: '100%', lg: '6xl' }}>
          <Heading as="h1" fontSize={{ base: '5xl', lg: '7xl' }}>
            Blaze the trail to safety.
          </Heading>
        </Box>
        <Stack className="centerbox" width={{ base: '100%', md: '300px' }}>
          <Link to={'/need'}>
            <Button bg="orange.300" width={{ base: '100%', md: '300px' }} height="50px">
              I am in need.
            </Button>
          </Link>
          <Link to={'/assistance'}>
            <Button bg="orange.300" width={{ base: '100%', md: '300px' }} height="50px">
              I am able to help.
            </Button>
          </Link>
        </Stack>
      </Flex>
      <Image
        src="public/8978717.png"
        width={'500px'}
        position="absolute"
        bottom="100px"
        right="20px"
        display={{ base: 'none', md: 'inherit' }}
      />
    </Center>
  )
}

export default Home
