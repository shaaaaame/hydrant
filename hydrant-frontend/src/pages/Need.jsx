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
import { LuCamera, LuInfo, LuSend } from 'react-icons/lu'

function Need() {
  const [recordedChunks, setRecordedChunks] = useState([])
  const [location, setLocation] = useState()
  const [rank, setRank] = useState(1)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Box width="100vw" height="100svh">
      <StepsRoot defaultStep={0} count={3} width="100vw" linear>
        <StepsList width="100%">
          <StepsItem index={0} icon={<LuCamera />} />
          <StepsItem index={1} icon={<LuInfo />} />
          <StepsItem index={2} icon={<LuSend />} />
        </StepsList>

        <StepsContent index={0}>
          <WebcamVideo setRecordedChunks={setRecordedChunks} />
        </StepsContent>
        <StepsContent index={1}>
          <Information
            setLocation={setLocation}
            setRank={setRank}
            setName={setName}
            setDescription={setDescription}
          />
        </StepsContent>
        <StepsContent index={2}>
          <Send
            recordedChunks={recordedChunks}
            location={location}
            rank={rank}
            name={name}
            description={description}
          />
        </StepsContent>
        <StepsCompletedContent>All steps are complete!</StepsCompletedContent>
      </StepsRoot>
    </Box>
  )
}

export default Need
