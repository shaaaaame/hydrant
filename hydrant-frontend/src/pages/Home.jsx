import { Center, Stack, Heading, Flex, Box } from "@chakra-ui/react"
import { Link } from "react-router"
import { Button } from "../components/ui/button"
import "../pages/Home.css"

function Home() {
  return (
    <Center className="home">
        <div className="home-title">
            <Heading as='h3' color="orange.300" fontFamily={"Climate Crisis"} textStyle={'4xl'}>hydrant.</Heading>
        </div>
        <Flex  width={'100%'} direction="column" height={"60vh"} pt="60px">
            <Box boxSize={'6xl'}>
                <Heading as='h1' fontSize={"7xl"}>
                    Blaze the trail to safety.
                </Heading>
            </Box>
            <Stack className="centerbox" width="300px">
            <Link to={"/need"}><Button bg="orange.300" width="200px">I am in need.</Button></Link>
                <Link to={"/assistance"}><Button bg="orange.300" width="200px">I am able to help.</Button></Link>
            </Stack>
        </Flex>

    </Center>
  )
}

export default Home