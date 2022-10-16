import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  VStack,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      // minHeight="100vh"
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
      background="white"
      className="login"
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full" mb="2rem">
          <Heading>Register</Heading>
          <Text>Let's create an Account</Text>
        </VStack>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input variant="filled" placeholder="Enter username" />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input variant="filled" placeholder="Enter valid e-mail" />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              variant="filled"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <Button
          rounded="md"
          colorScheme="blue"
          variant="solid"
          w="full"
          mt="20px"
        >
          Login
        </Button>
        <Text textAlign="center">
          Already have an Account?{" "}
          <Link to="/login" style={{ color: "#4299E1" }}>
            Click here
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default Register;