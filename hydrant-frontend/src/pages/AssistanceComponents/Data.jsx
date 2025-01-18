import { Grid, Box } from "@chakra-ui/react"

function Data() {
  return (
    <Box overflowY="scroll" height="95%" css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: "orange.300",
          borderRadius: '24px',
        },
      }}>
        <Grid templateRows="repeat(4, 1fr)" height="200%" position={"relative"} gap="10px" >
            <Box borderRadius="20px" bg="gray.700">A</Box>
            <Grid templateColumns={"repeat(2, 1fr)"} gap="10px">
                <Box borderRadius={"20px"} bg="gray.700">B</Box>
                <Box borderRadius={"20px"} bg="gray.700">C</Box>
            </Grid>
            <Box height="300px"></Box>
        </Grid>
    </Box>

  )
}

export default Data