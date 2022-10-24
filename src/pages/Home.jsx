import { Box, Flex } from "@chakra-ui/react";
import BlogArticle from "../Components/BlogArticle";
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
          <BlogArticle post={post} key={post.id} />
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
