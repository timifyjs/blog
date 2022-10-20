import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <Flex
      flexDir="column"
      align="center"
      pos="relative"
      bg="#1B1B1B"
      color="white"
      mt={16}
    >
      <Box px={12} zIndex={1} bg="#1B1B1B" mt={8}>
        <Heading as="h1">Logo</Heading>
      </Box>
      <Box
        top="1.5rem"
        pos="absolute"
        h="1px"
        w={["50%", "70%", "70%", "70%"]}
        mt={8}
        bg="red.500"
      ></Box>
      <Box mt={3} mb={8} align="center">
        <Heading fontSize="xs" display="flex">
          © 2022 All rights reserved. Made with
          <Box as="span" mx={1} align="center" mt="3px">
            <BsFillHeartFill color="red" />
          </Box>
          and React.js
        </Heading>
      </Box>
    </Flex>
  );
};

export default Footer;
