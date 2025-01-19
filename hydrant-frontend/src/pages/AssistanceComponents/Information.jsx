import {
  Box,
  Button,
  Image,
  HStack,
  Text,
  Grid,
  Flex,
  StepsNextTrigger,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { LuArrowRight, LuDownload } from 'react-icons/lu'
import { useCallback, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Radio, RadioGroup } from '../../components/ui/radio'
import { Field } from '../../components/ui/field'

function Information({ setLocation, setRank, setName, setDescription }) {
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
    <Flex direction="column" justify={'flex-start'} padding={'20px'} width="100%" gap="20px">
      <Field label="Name">
        <Input
          placeholder="John"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </Field>
      <Field label="Description">
        <Input
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
      </Field>
      <Text>Please rank the fire on the following scale:</Text>
      <Box>
        <Image src="fire-rank.png" width="100%" />
        <Image src="fire-rank2.png" width="100%" />
      </Box>
      <Box padding="20px" width="100%">
        <RadioGroup defaultValue="1" width="100%" size="md" onValueChange={(d) => setRank(d.value)}>
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
    </Flex>
  )
}

export default Information
