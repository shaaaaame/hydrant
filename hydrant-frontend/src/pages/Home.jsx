import { Center, Stack, Heading, Flex, Box, Image, Grid, Text } from '@chakra-ui/react'
import { Link } from 'react-router'
import { Button } from '../components/ui/button'
import '../pages/Home.css'

function Home() {
  return (
    <Grid
      className="home"
      overflow={'hidden'}
      width="100vw"
      height={'100svh'}
      templateRows={'1fr 2fr 1fr'}
      gap="10px">
      <Grid templateColumns={'min-content 1fr'}>
        <Heading as="h1" color="orange.300" fontFamily={'Climate Crisis'} fontSize={'180px'}>
          hydrant.
        </Heading>
        <Box position="relative" width="100%">
          <Text position={'absolute'} bottom="10px" right="10px" textAlign={'right'}>
            firefighting <br />
            emergency <br />
            services.
          </Text>
        </Box>
      </Grid>

      <Box width="100%" overflow={'hidden'} position="relative" borderRadius={'20px'}>
        <Image src="fighter.jpg" position={'relative'} />
      </Box>

      <Flex width={'100%'} direction="row" height={'30%'}>
        {/* <Box boxSize={{ base: '100%', lg: '6xl' }}>
          <Heading as="h1" fontSize={{ base: '5xl', lg: '7xl' }}>
            Blaze the trail to safety.
          </Heading>
        </Box> */}
        <Grid templateColumns={'1fr 1fr'} gap={'10px'} className="centerbox" width="100%">
          <Link to={'/need'}>
            <Button
              bg="orange.300"
              width={{ base: '100%' }}
              height={{ base: '100%', md: '200px' }}
              position="relative">
              <Box position="absolute" top="13px" left="13px" fontWeight={'bold'} fontSize="xl">
                I am in need.
              </Box>
              <Box position="absolute" bottom="10px" right="10px" fontSize={'sm'}>
                Share your location with us and we’ll help.
              </Box>
            </Button>
          </Link>
          <Link to={'/assistance'}>
            <Button bg="orange.300" width={{ base: '100%' }} height={{ base: '100%', md: '200px' }}>
              <Box position="absolute" top="13px" left="13px" fontWeight={'bold'} fontSize="xl">
                I am able to help.
              </Box>
              <Box position="absolute" bottom="10px" right="10px" fontSize="sm">
                Find those in need.
              </Box>
            </Button>
          </Link>
        </Grid>
      </Flex>
      {/* <Image
        src="public/8978717.png"
        width={'500px'}
        position="absolute"
        bottom="100px"
        right="20px"
        display={{ base: 'none', md: 'inherit' }}
      /> */}
    </Grid>
  )
}

export default Home
