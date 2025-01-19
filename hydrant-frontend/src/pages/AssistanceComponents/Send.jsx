import { useEffect, useCallback } from 'react'
import { useMutation } from '@tanstack/react-query'
import Loading from '../../utils/loading'
import { Button, Center, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router'
import { LuBadgeCheck } from 'react-icons/lu'

function Send({ recordedChunks, location, rank }) {
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

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      // TODO: insert endpoint
    },
    mutationKey: ['markerdata'],
  })

  useEffect(() => {
    if (recordedChunks) {
      mutate()
    }
  }, [recordedChunks])

  if (recordedChunks && location && rank) {
    return (
      <Center width="100%" height="100svh">
        {isPending ? (
          <Loading />
        ) : (
          <Flex direction="column" gap="20px" height="300px" align={'center'}>
            <LuBadgeCheck size="200px" color="green" />
            <Heading as="h3">Help is on the way.</Heading>
            <Link to="/">
              <Button bg="orange.300">Back to home.</Button>
            </Link>
          </Flex>
        )}
      </Center>
    )
  } else {
    return <div></div>
  }
}

export default Send
