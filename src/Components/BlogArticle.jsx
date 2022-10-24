import { Box, Button, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function BlogArticle({ post }) {
  return (
    <Box>
      <Flex
        key={post.id}
        gap="50px"
        flexDir={post.id % 2 === 0 ? "row" : "row-reverse"}
        display={{ base: "none", md: "flex" }}
      >
        <Box
          w="34%"
          pos="relative"
          _after={{
            content: '""',
            backgroundColor: "#008080",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "20px",
            left: "-20px",
            zIndex: "-1",
          }}
        >
          <Image
            src={post.img}
            w="100%"
            maxH="250px"
            objectFit="cover"
            borderRadius={10}
          />
        </Box>
        <Flex flexDir="column" gap="20px" w="66%" justify="space-between">
          <Link as={RouterLink} to={`/post/${post.id}`}>
            <Heading as="h1" fontSize="5xl">
              {post.title}
            </Heading>
          </Link>
          <Box as="p" fontSize="18px">
            {post.desc}
          </Box>
          <Button w="110px" variant="outline" colorScheme="red">
            Read More
          </Button>
        </Flex>
      </Flex>
      <Flex
        key={post.id}
        display={{ base: "flex", md: "none" }}
        flexDir={"column"}
      >
        <Box
          pos="relative"
          _after={{
            content: '""',
            backgroundColor: "#008080",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "20px",
            left: "-20px",
            zIndex: "-1",
          }}
        >
          <Image src={post.img} w="100%" borderRadius={15} />
        </Box>
        <Flex flexDir="column" justify="space-between">
          <Link as={RouterLink} to={`/post/${post.id}`}>
            <Heading as="h1" fontSize="4xl" mt={3}>
              {post.title}
            </Heading>
          </Link>
          <Box as="p" fontSize="1em" noOfLines={5} mt={2}>
            {post.desc}
          </Box>
          <Button w="7em" mt={3} variant="outline" colorScheme="red">
            Read More
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BlogArticle;
