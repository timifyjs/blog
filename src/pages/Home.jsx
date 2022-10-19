import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Title Will be here",
      desc: "Description will be here",
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
      <Box className="post">
        {posts.map((post) => (
          <Box key={post.id}>
            <Box>
              <Image src={post.img} />
            </Box>
            <Box>
              <Link to={`/post/${post.id}`}>
                <Heading as="h1">{post.title}</Heading>
                <Box as="p">{post.desc}</Box>
                <Button>Read More</Button>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
