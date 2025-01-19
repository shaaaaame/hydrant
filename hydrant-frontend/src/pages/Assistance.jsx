import { Grid, Box, Heading, Tabs, Flex, Button } from '@chakra-ui/react'
import { LuActivity, LuHandHelping, LuHouse } from 'react-icons/lu'
import Data from './AssistanceComponents/Data'

import { APIProvider, Map } from '@vis.gl/react-google-maps'
import './Assistance.css'
import Aid from './AssistanceComponents/Aid'
import { Link } from 'react-router'

function Assistance() {
  const time = new Date()
  return (
    <Grid templateColumns="repeat(2, 1fr)" overflow={'hidden'}>
      <Flex width="50vw" height="100svh" p="20px" direction="column" gap="20px">
        <Flex justify={'space-between'}>
          <Link to="/">
            <Heading as="h3" color="orange.300">
              hydrant.
            </Heading>
          </Link>
          <Link to="/">
            <Button variant={'ghost'} focusRing={'none'}>
              <LuHouse />
            </Button>
          </Link>
        </Flex>

        <Tabs.Root defaultValue="data" variant="line" size="lg" height="100%">
          <Tabs.List>
            <Tabs.Trigger value="data" focusRing={'none'}>
              <LuActivity />
              Data
            </Tabs.Trigger>
            <Tabs.Trigger value="aid" focusRing="none">
              <LuHandHelping />
              Aid
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Indicator rounded="12" />
          <Tabs.Content value="data" height="90%">
            <Data />
          </Tabs.Content>
          <Tabs.Content value="aid" height="90%">
            <Aid
              marker={{
                lat: 1,
                lng: 1,
                time: time.toTimeString(),
                video: 'https://www.youtube.com/embed/QhBnZ6NPOY0',
                address: '55 St George St',
              }}
            />
          </Tabs.Content>
        </Tabs.Root>
      </Flex>

      <Box width={'50vw'} height={'100svh'}>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <Map
            style={{ width: '100%', height: '100%' }}
            defaultCenter={{ lat: 43.6608616, lng: -79.3991105 }}
            defaultZoom={18}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </APIProvider>
      </Box>
    </Grid>
  )
}

export default Assistance
