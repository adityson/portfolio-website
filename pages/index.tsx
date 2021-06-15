import Head from 'next/head'
import { Flex, Heading, Text, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home|Portfolio</title>
      </Head>

      <Flex height='100vh' justifyContent='center' alignItems='center' bgColor='#ebf8ff'>
        <Flex margin="0 30px">
          <Image src='/static/images/dogepfp.jpg' boxSize='200px' borderRadius='full' />
        </Flex>
        <Flex flexDirection='column'>
          <Heading as='h2' size='3xl' marginBottom='20px' color='#065666'> Hello, I'm Aditya! </Heading>
          <Text fontSize='lg' maxW='650px'>
            Welcome to my website! Finally decided to make one about myself. 
            I plan to regularly maintain the domain and add updates to the sections 
            as I venture into the world of Software Development.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
