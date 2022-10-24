import { Box, Button, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function BlogArticle({ post }) {
  return (
    <Box>
      <Flex
        key={post.id}
        gap="50px"
        flexDir={post.id % 2 === 0 ? "row" : "row-reverse"}
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
          <Image src={post.img} w="100%" maxH="250px" objectFit="cover" />
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
    </Box>
  );
}

export default BlogArticle;
