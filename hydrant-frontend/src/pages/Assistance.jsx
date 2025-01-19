import { Grid, Box, Heading, Tabs, Flex, Button } from '@chakra-ui/react'
import { LuActivity, LuHandHelping, LuHouse } from 'react-icons/lu'
import Data from './AssistanceComponents/Data'

import { APIProvider, Map, Marker, AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps'
import './Assistance.css'
import Aid from './AssistanceComponents/Aid'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getVideo } from '../utils/client'
import { buildHeatmapLayer } from '../utils/map'
import { useState } from 'react'

function Assistance() {
  const [aidData, setAidData] = useState()
  const [index, setIndex] = useState('data')

  const time = new Date()

  const map = useMap()

  buildHeatmapLayer(map)

  const { data, isLoading } = useQuery({
    queryKey: ['video'],
    queryFn: () => {
      return getVideo()
    },
    refetchInterval: 2000,
  })

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

        <Tabs.Root
          onValueChange={(i) => {
            setIndex(i.value)
          }}
          value={index}
          variant="line"
          size="lg"
          height="100%">
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
            <Aid marker={aidData} />
          </Tabs.Content>
        </Tabs.Root>
      </Flex>

      <Box width={'50vw'} height={'100svh'}>
        <Map
          mapId="1601de34a15a1520"
          style={{ width: '100%', height: '100%' }}
          defaultCenter={{ lat: 43.6608616, lng: -79.3991105 }}
          defaultZoom={17}
          gestureHandling={'greedy'}
          disableDefaultUI={true}>
          {data &&
            data.map((d) => {
              return (
                <AdvancedMarker
                  key={d.request_id}
                  position={{ lat: Number(d.latitude), lng: Number(d.longitude) }}
                  onClick={() => {
                    setAidData(d)
                    setIndex('aid')
                  }}>
                  <Pin background={'#fdba74'} borderColor={'#242424'} />
                </AdvancedMarker>
              )
            })}
          {/* <AdvancedMarker position={{ lat: 43.6608616, lng: -79.3991105 }}>
              <Pin background={'#0f9d58'} borderColor={'#006425'} glyphColor={'#60d98f'} />
            </AdvancedMarker> */}
        </Map>
      </Box>
    </Grid>
  )
}

export default Assistance
