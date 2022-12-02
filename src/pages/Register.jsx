import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [err, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(inputs);

  const handleSubmit = async (e) => {
    console.log(inputs);
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      navigate("/login");
      console.log(res);
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

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
        {/* error */}
        {err && (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            <AlertDescription>{err}</AlertDescription>
          </Alert>
        )}
        {/* form */}
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            variant="filled"
            placeholder="Enter username"
            onChange={handleChange}
            name="username"
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            variant="filled"
            placeholder="Enter valid e-mail"
            onChange={handleChange}
            name="email"
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
              name="password"
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
          Register
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
