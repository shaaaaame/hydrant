import { Box, Button, Center, Grid } from '@chakra-ui/react'
import WebcamVideo from './AssistanceComponents/WebcamVideo'
import { Group } from '@chakra-ui/react'
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from '../components/ui/steps'
import { useState } from 'react'
import Information from './AssistanceComponents/Information'
import Send from './AssistanceComponents/Send'

function Need() {
  const [recordedChunks, setRecordedChunks] = useState([])
  const [location, setLocation] = useState()
  const [rank, setRank] = useState(1)

  return (
    <Box width="100%" height="100svh">
      <StepsRoot defaultStep={0} count={3}>
        <StepsList padding="10px" width="100%">
          <StepsItem index={0} title="Record" />
          <StepsItem index={1} title="Information" />
          <StepsItem index={2} title="Send" />
        </StepsList>

        <StepsContent index={0}>
          <WebcamVideo setRecordedChunks={setRecordedChunks} />
        </StepsContent>
        <StepsContent index={1}>
          <Information setLocation={setLocation} setRank={setRank} />
        </StepsContent>
        <StepsContent index={2}>
          <Send recordedChunks={recordedChunks} location={location} rank={rank} />
        </StepsContent>
        <StepsCompletedContent>All steps are complete!</StepsCompletedContent>
      </StepsRoot>
    </Box>
  )
}

export default Need
