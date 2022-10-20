import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import { Link as RouterLink } from "react-router-dom";
import Menu from "../Components/Menu";

const Single = () => {
  return (
    <Flex gap="40px" mt={8}>
      {/* main content */}
      <Box w="70%" display="flex" flexDir="column" gap="30px">
        <Image
          src="/image1.jpg"
          w="100%"
          h="300px"
          objectFit="cover"
          rounded="16px"
        />
        {/* user info */}
        <Flex align="center" gap="20px">
          <Image
            src="/user_1.jpg"
            w="70px"
            h="70px"
            objectFit="cover"
            rounded="50%"
          />
          <Flex flexDir="column">
            <Box as="span" fontSize="18px" fontWeight="bold">
              John Doe
            </Box>
            <Box as="p" fontSize="16px" fontWeight="400">
              Posted 2 days ago
            </Box>
          </Flex>
          <Link as={RouterLink} to={`/write?edit=2`}>
            <FiEdit size="20px" cursor="pointer" color="teal" />
          </Link>
          <Box>
            <FiTrash2 size="20px" color="red" cursor="pointer" />
          </Box>
        </Flex>

        {/* title */}
        <Heading as="h1" color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          explicabo labore ipsum?
        </Heading>
        <Box as="p" textAlign="justify" lineHeight="30px" fontSize="18px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Box>
      </Box>
      {/* menu */}
      <Box w="30%">
        <Menu />
      </Box>
    </Flex>
  );
};

export default Single;
