import { useRef, useState } from "react";
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
import { Editor } from "@tinymce/tinymce-react";

import "../index.css";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Write = () => {
  const [value, setValue] = useState("");
  const [isPreviewing, setIsPreviewing] = useState(false);

  const editorRef = useRef(null);
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
        <Box>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            apiKey="d0fr27mlsmn34kv1hdqote8gat4i30z1jm9s0nbx255lyup8"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter | " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
            }}
          />
          <Button
            my={4}
            rightIcon={isPreviewing ? <FiArrowUp /> : <FiArrowDown />}
            onClick={() => setIsPreviewing((p) => !p)}
          >
            Preview
          </Button>
          {isPreviewing && (
            <Box
              bg="white"
              h={100}
              w="100%"
              p={5}
              borderRadius={10}
              dangerouslySetInnerHTML={{
                __html: editorRef.current.getContent(),
              }}
            ></Box>
          )}
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
