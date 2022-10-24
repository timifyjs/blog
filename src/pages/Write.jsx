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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Editor } from "@tinymce/tinymce-react";

import "../index.css";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Write = () => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [category, setCategory] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const editorRef = useRef(null);
  return (
    <>
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
            <Button
              my={4}
              rightIcon={isPreviewing ? <FiArrowUp /> : <FiArrowDown />}
              onClick={onOpen}
            >
              Preview
            </Button>
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
            <RadioGroup onChange={setCategory} value={category}>
                <Radio value="art">Art</Radio>
                <Radio value="science">Science</Radio>
                <Radio value="tech">Technology</Radio>
                <Radio value="food">Food</Radio>
                <Radio value="design">Design</Radio>
            </RadioGroup>
          </Flex>
        </Flex>
      </Flex>
      {isOpen &&
        <Modal isOpen={isOpen} onClose={onClose}
        >
          <ModalOverlay style={{ backdropFilter: 'blur(2px)' }} />
          <ModalContent
            w="90vw"
            h={'80vh'}
            maxW={'6xl'}
          >
            <ModalHeader>Blog Preview</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                bg="white"
                h={100}

                p={5}
                borderRadius={10}
                dangerouslySetInnerHTML={{
                  __html: editorRef.current.getContent(),
                }}
              ></Box>
            </ModalBody>

            <ModalFooter>
              <Button variant='ghost' onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      }
    </>
  );
};

export default Write;
