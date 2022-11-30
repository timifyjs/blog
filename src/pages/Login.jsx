import { useState } from "react";

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
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

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
          <Heading>Login</Heading>
          <Text>Enter your email and password for Login</Text>
        </VStack>
        {err && (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            <AlertDescription>{err}</AlertDescription>
          </Alert>
        )}
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            variant="filled"
            placeholder="Enter valid e-mail"
            onChange={handleChange}
          />
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
              onChange={handleChange}
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
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Text textAlign="center">
          Don't have an Account?{" "}
          <Link to="/register" style={{ color: "#4299E1" }}>
            Click here
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default Login;
