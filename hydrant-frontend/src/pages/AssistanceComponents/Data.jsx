import { Grid, Box, Flex } from '@chakra-ui/react'
import { Switch } from '../../components/ui/switch'

function Data({
  showMarkers,
  setShowMarkers,
  showHeatmap,
  setShowHeatmap,
  showHydrants,
  setShowHydrants,
}) {
  return (
    <Box
      overflowY="scroll"
      height="95%"
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
      <Grid templateRows="min-content min-content" height="100%" position={'relative'} gap="10px">
        <Box borderRadius="20px" bg="gray.700" overflow={'hidden'}>
          <Flex padding="10px">
            <Box>
              <Switch value={showHeatmap} onCheckedChange={() => setShowHeatmap(!showHeatmap)} />{' '}
              Toggle heatmap
            </Box>
          </Flex>
          <Flex padding="10px">
            <Box>
              <Switch value={showHydrants} onCheckedChange={() => setShowHydrants(!showHydrants)} />{' '}
              Toggle hydrants
            </Box>
          </Flex>
          <Flex padding="10px">
            <Box>
              <Switch value={showMarkers} onCheckedChange={() => setShowMarkers(!showMarkers)} />{' '}
              Toggle markers
            </Box>
          </Flex>
        </Box>
        <Grid templateColumns={'repeat(2, 1fr)'} gap="10px">
          <Box borderRadius={'20px'} bg="gray.700" padding="10px">
            B
          </Box>
          <Box borderRadius={'20px'} bg="gray.700" padding="10px">
            C
          </Box>
        </Grid>
        <Box height="300px"></Box>
      </Grid>
    </Box>
  )
}

export default Data
