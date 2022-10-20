import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Title Will be here",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not ke Aldus PageMaker including versions of Lorem Ipsum.  into electronic type",
      img: "/image1.jpg",
    },
    {
      id: 2,
      title: "Title Will be here",
      desc: "Description will be here",
      img: "/image2.jpg",
    },
    {
      id: 3,
      title: "Title Will be here",
      desc: "Description will be here",
      img: "/image3.jpg",
    },
    {
      id: 4,
      title: "Title Will be here",
      desc: "Description will be here",
      img: "/image4.jpg",
    },
  ];
  return (
    // @delete className
    <Box color="red.400" mt="10px" className="home">
      <Flex flexDir="column" className="post" mt="50px" gap="50px">
        {posts.map((post) => (
          <Flex key={post.id} gap="50px" _odd={{ flexDir: "row-reverse" }}>
            <Box
              w="34%"
              pos="relative"
              _before={{
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
                // zIndex={2}
              />
            </Box>
            <Flex flexDir="column" gap="20px" w="66%" justify="space-between">
              <Link as={RouterLink} to={`/post/${post.id}`}>
                <Heading as="h1" fontSize="3xl">
                  {post.title}
                </Heading>
              </Link>
              <Box as="p">{post.desc}</Box>
              <Button w="110px" variant="outline" colorScheme="red">
                Read More
              </Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
