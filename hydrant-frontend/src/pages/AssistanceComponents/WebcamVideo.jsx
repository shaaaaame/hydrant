import { AspectRatio, Box, Button, Center, Grid, StepsNextTrigger } from '@chakra-ui/react'
import { isMobile, isMobileSafari } from 'react-device-detect'
import { useCallback, useRef, useState } from 'react'
import { LuDownload } from 'react-icons/lu'
import Webcam from 'react-webcam'

export default function WebcamVideo({ setRecordedChunks }) {
  const webcamRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const [capturing, setCapturing] = useState(false)

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data))
      }
    },
    [setRecordedChunks]
  )

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true)
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: 'video/webm',
    })
    mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable)
    mediaRecorderRef.current.start()
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable])

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop()
    setCapturing(false)
  }, [mediaRecorderRef, setCapturing])

  let videoConstraints = null
  if (isMobile || isMobileSafari) {
    videoConstraints = {
      facingMode: { exact: 'environment' },
      height: { min: 480 },
      width: { min: 720 },
      aspectRatio: 1.5,
    }
  } else {
    videoConstraints = {
      facingMode: 'user',
      height: { min: 720 },
      width: { min: 480 },
      aspectRatio: 0.6666666667,
    }
  }

  return (
    <Box width="100%" position={'relative'} height="90svh">
      <Webcam
        width={480}
        height={720}
        audio={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />

      <Center>
        {capturing ? (
          <StepsNextTrigger>
            <Center>
              <Button
                onClick={handleStopCaptureClick}
                position={'absolute'}
                borderWidth="3px"
                borderColor="orange.300"
                focusRing="none"
                width="100px"
                height="100px"
                borderRadius="50px"
                bottom="30px">
                <Center>
                  <Box width={'30px'} height="30px" bg="orange.300"></Box>
                </Center>
              </Button>
            </Center>
          </StepsNextTrigger>
        ) : (
          <Button
            onClick={handleStartCaptureClick}
            position="absolute"
            bg="orange.300"
            focusRing={'none'}
            width="100px"
            height="100px"
            borderRadius="50px"
            bottom="30px"></Button>
        )}
      </Center>
    </Box>
  )
}
