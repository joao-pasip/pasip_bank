import { 
  Center,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack
} from "@chakra-ui/react"
import React from "react"

export const Card = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Box
      minHeight='100vh'
      backgroundColor='#4a5568'
      padding='2rem'
    >
      <Center
        height='container.md'
      >

        <Box
          backgroundColor='#319795'
          color='white'
          padding='2rem'
          borderRadius='1rem'
          w='100%'
          minHeight='50vh'
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
        >
          <h1>Faça o login</h1>
          <Input
            placeholder="email"
            pr='4.5rem'
            _placeholder={{ opacity: .5, color: 'white' }}
            focusBorderColor='#4A5568'
            margin='1rem'
          />
          <InputGroup size='md'>
            <Input
              placeholder="password"
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              _placeholder={{ opacity: .5, color: 'white' }}
              focusBorderColor='#4A5568'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Center margin='1rem'>
            <Stack direction='row' align='center'>
              <Button
                colorScheme='#4b4f56'
                size='md'
                variant='outline'
                color='#ebedf0'
                width='100%'
                _hover={{ bg: '#4b4f56' }}
                borderColor='#ccd0d5'
              >
                Entrar
              </Button>
            </Stack>
          </Center>

        </Box>
      </Center>
    </Box>
  )
}