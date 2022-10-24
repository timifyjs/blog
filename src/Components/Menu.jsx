import { Box, Flex, Heading, Button, Image } from "@chakra-ui/react";
import { Link, useLocation, useRoutes } from "react-router-dom";

const Menu = () => {

  const currLocation = useLocation();
  const currPost = currLocation.pathname.split('/')[2]
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
  const filterdPosts = posts.filter(post=>post.id !=currPost)
  return (
    <Box display="flex" flexDir="column" gap="20px">
      <Heading as="h1" fontSize="24px" fontWeight="bold" noOfLines={1}>
        Other posts you may like
      </Heading>
      {filterdPosts.map((post) => (
        
        <Flex flexDir="column" gap="10px" mb="1rem">
          <Box>
            <Image
              src={post.img}
              w="100%"
              h="200px"
              objectFit="cover"
              rounded="10px"
            />
          </Box>
          <Flex flexDir="column" gap="10px" justify="space-between">
            <Link to={`/post/${post.id}`}>
              <Heading as="h1" fontSize="24px">
                {post.title}
              </Heading>
            </Link>

            <Button w="110px" variant="outline" colorScheme="red">
              Read More
            </Button>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default Menu;
