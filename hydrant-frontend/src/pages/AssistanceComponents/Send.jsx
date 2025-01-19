import { useEffect, useCallback, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import Loading from '../../utils/loading'
import { Button, Center, Flex, Heading, Box } from '@chakra-ui/react'
import { Link } from 'react-router'
import { LuBadgeCheck } from 'react-icons/lu'
import { postVideo } from '../../utils/client'

function Send({ recordedChunks, location, rank, name, description }) {
  const [sent, setSent] = useState(false)
  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.style = 'display: none'
      a.href = url
      a.download = 'react-webcam-stream-capture.webm'
      a.click()
      window.URL.revokeObjectURL(url)
      //   setRecordedChunks([])
    }
  }, [recordedChunks])

  const { mutate, isPending, isSettled } = useMutation({
    mutationFn: (data) => {
      postVideo(data)
    },
    mutationKey: ['markerdata'],
  })

  const sendData = () => {
    setSent(true)
    if (recordedChunks) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      })
      mutate({
        video: blob,
        latitude: 43.6608616,
        longitude: -79.3991105,
        rank: rank,
        name: name,
        description: description,
        user: 1,
      })
    }
  }

  return (
    <Flex height="70svh" direction={'column'} justify={'flex-start'}>
      <Center width="100%" height="70svh">
        {!sent && (
          <Flex justify={'center'} direction="column" gap="10px">
            <Heading as="h3" fontSize="xl" color="orange.300">
              Ready to send?
            </Heading>
            <Button onClick={() => sendData()} bg="gray.100">
              Send
            </Button>
          </Flex>
        )}

        {sent &&
          (isPending ? (
            <Loading />
          ) : (
            <Flex direction="column" gap="20px" height="300px" align={'center'}>
              <LuBadgeCheck size="200px" color="green" />
              <Heading as="h3">Help is on the way.</Heading>
              <Link to="/">
                <Button bg="orange.300">Back to home.</Button>
              </Link>
            </Flex>
          ))}
      </Center>
    </Flex>
  )
}

export default Send
