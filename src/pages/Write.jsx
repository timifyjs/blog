import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <Flex gap="50px" my="30px">
      {/* content */}
      <Box w="70%" display="flex" flexDir="column" gap={6}>
        <FormControl isRequired>
          <FormLabel>Post Title</FormLabel>
          <Input
            variant="filled"
            placeholder="Enter Title here"
            // w={{ base: "100%", md: "70%", lg: "50%" }}
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <Box h="300px">
          <ReactQuill
            theme="snow"
            style={{ height: "100%", border: "none" }}
            value={value}
            onChange={setValue}
          />
        </Box>
      </Box>
      {/* menu */}
      <Flex flexDir="column" gap="15px" w="30%">
        <Box
          display="flex"
          flexDir="column"
          gap={2}
          p="15px"
          border="1px solid gray"
        >
          <Heading fontSize="24px" as="h1">
            Publish{" "}
          </Heading>
          <Box as="span">
            <b>Status : </b> Draft
          </Box>
          <Box as="span">
            <b>Visibility : </b> Public
          </Box>
          <input type="file" style={{ display: "none" }} id="file" />
          <label
            htmlFor="file"
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Upload File
          </label>
          <HStack>
            <Button variant="outline" colorScheme="blue">
              Save as a Draft
            </Button>
            <Button variant="solid" colorScheme="blue">
              Upadate
            </Button>
          </HStack>
        </Box>
        <Flex flexDir="column" gap={2} p="15px" border="1px solid gray">
          <Heading fontSize="24px" as="h1">
            Category | Tags
          </Heading>
          <Radio value="3">Art</Radio>
          <Radio value="3">Science</Radio>
          <Radio value="3">Technology</Radio>
          <Radio value="3">Food</Radio>
          <Radio value="3">Design</Radio>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Write;
