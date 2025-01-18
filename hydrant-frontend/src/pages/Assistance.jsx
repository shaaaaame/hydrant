import { Grid, Box, Heading, Tabs, Flex} from "@chakra-ui/react"
import { LuActivity, LuHandHelping} from "react-icons/lu"

import { APIProvider, Map } from "@vis.gl/react-google-maps"
import "./Assistance.css"

function Assistance() {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
        <Flex width={"100%"} height="100svh" p="20px" direction="column" gap="20px">
          <Heading as="h3" color="orange.300">hydant.</Heading>

          <Box>
          <Tabs.Root defaultValue="data">
            <Tabs.List>
              <Tabs.Trigger value="data" >
                <LuActivity />
                Data
              </Tabs.Trigger>
              <Tabs.Trigger value="aid" >
                <LuHandHelping />
                Aid
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="data">Data</Tabs.Content>
            <Tabs.Content value="aid">Aid</Tabs.Content>
          </Tabs.Root>

          </Box>
        </Flex>

        <Box width={"60vw"} height={"100svh"}>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map
                style={{width: '100%', height: '100%'}}
                defaultCenter={{lat: 43.6608616, lng: -79.3991105}}
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