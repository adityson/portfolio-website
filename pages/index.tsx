import Head from 'next/head'
import { Flex, Heading, Text, Image } from '@chakra-ui/react'
import About from '../components/About/About'
import ScrollAnchor from '../components/ScrollAnchor/ScrollAnchor'

export default function Home() {

  const anc: string[] = ['#about', '#intro'];

  return (
    <>
      <Head>
        <title>Home|Portfolio</title>
      </Head>

      <Flex id='intro' height='100vh' justifyContent='center' alignItems='center'>
        <Flex margin="0 30px">
          <Image src='/static/images/dogepfp.jpg' boxSize='250px' borderRadius='24px' />
        </Flex>
        <Flex flexDirection='column'>
          <Heading as='h1' size='4xl' marginBottom='20px' color='#065666'> Hello, I'm Aditya! </Heading>
          <Text fontSize='xl' maxW='650px'>
            Welcome to my website! Finally decided to make one about myself. 
            I plan to regularly maintain the domain and add updates to the sections 
            as I venture into the world of Software Development.
          </Text>
        </Flex>
      </Flex>
      <ScrollAnchor jump={anc} />
      <About />
    </>
  )
}
