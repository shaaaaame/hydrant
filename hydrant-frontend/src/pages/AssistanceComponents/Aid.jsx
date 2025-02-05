import { AspectRatio, Box, Image, Grid, Flex, Text } from '@chakra-ui/react'

function NoMarker() {
  return <Box>Please select a marker.</Box>
}

function Details({ marker }) {
  return (
    <Box
      height="95%"
      width="100%"
      overflow={'scroll'}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'orange.300',
          borderRadius: '24px',
        },
      }}>
      <Grid templateColumns="1fr 1.5fr" gap="20px" width="100%" pr="5px">
        <AspectRatio ratio={9 / 16} maxW="100%">
          <iframe title="help" src={marker.video_url} allowFullScreen />
        </AspectRatio>
        <Flex direction="column" justify="flex-start" gap="15px">
          <p>
            <Text color="orange.300" fontWeight={'bold'}>
              Name:{' '}
            </Text>{' '}
            {marker.name}
          </p>
          <p>
            <Text color="orange.300" fontWeight={'bold'}>
              Description:{' '}
            </Text>{' '}
            {marker.description}
          </p>
          <p>
            <Text color="orange.300" fontWeight={'bold'}>
              Time:{' '}
            </Text>{' '}
            {marker.created_at}
          </p>
          <p>
            <Text color="orange.300" fontWeight={'bold'}>
              Coordinates:{' '}
            </Text>{' '}
            {marker.latitude}, {marker.longitude}
          </p>
          <p>
            <Text color="orange.300" fontWeight={'bold'}>
              Severity:{' '}
            </Text>{' '}
            {marker.rank}
          </p>
        </Flex>
      </Grid>
    </Box>
  )
}

function Aid({ marker }) {
  if (marker) {
    return <Details marker={marker} />
  } else {
    return <NoMarker />
  }
}

export default Aid
