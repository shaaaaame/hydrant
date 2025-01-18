import { Box, Button, Image, HStack, Text, Grid, Flex, StepsNextTrigger } from '@chakra-ui/react'
import { LuArrowRight, LuDownload } from 'react-icons/lu'
import { useCallback, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Radio, RadioGroup } from '../../components/ui/radio'

function Information({ setLocation, setRank }) {
  function success(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    setLocation({ latitude, longitude })
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
  }

  function error() {
    console.log('Unable to retrieve your location')
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error)
  } else {
    console.log('Geolocation not supported')
  }

  return (
    <Box padding={'20px'} width="100%">
      <Text fontSize={'xl'}>Please rank the fire on the following scale:</Text>
      <Box>
        <Image src="fire-rank.png" width="100%" />
        <Image src="fire-rank2.png" width="100%" />
      </Box>
      {/* <div>
        {location && (
          <p>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
        )}
      </div> */}
      {/* {recordedChunks.length > 0 && (
        <Button
          onClick={handleDownload}
          position={'absolute'}
          right="20px"
          bottom="30px"
          bg="gray.100">
          <LuDownload />
        </Button>
      )} */}
      <Box padding="20px" width="100%">
        <RadioGroup defaultValue="1" width="100%" size="lg" onValueChange={(d) => setRank(d.value)}>
          <Grid templateColumns="repeat(3, 1fr)">
            <Radio value="1" height="70px">
              Rank 1
            </Radio>
            <Radio value="2" height="70px">
              Rank 2
            </Radio>
            <Radio value="3" height="70px">
              Rank 3
            </Radio>
            <Radio value="4" height="70px">
              Rank 4
            </Radio>
            <Radio value="5" height="70px">
              Rank 5
            </Radio>
            <Radio value="6" height="70px">
              Rank 6
            </Radio>
          </Grid>
        </RadioGroup>
      </Box>
      <Flex width={'100%'} justifyContent={'flex-end'}>
        <StepsNextTrigger>
          <Button bg="orange.300" size="lg">
            Next <LuArrowRight />
          </Button>
        </StepsNextTrigger>
      </Flex>
    </Box>
  )
}

export default Information
