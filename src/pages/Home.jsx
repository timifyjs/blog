import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import BlogArticle from "../Components/BlogArticle";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

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
