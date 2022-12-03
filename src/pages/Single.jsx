import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import { Link as RouterLink, useLocation } from "react-router-dom";
import Menu from "../Components/Menu";
import { AuthContext } from "../context/AuthContext";

const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  console.log(post);
  return (
    <Flex gap="40px" mt={8}>
      {/* main content */}
      <Box w="70%" display="flex" flexDir="column" gap="30px">
        <Image
          src="https://rb.gy/fpk6t8"
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
              {post.username}
            </Box>
            <Box as="p" fontSize="16px" fontWeight="400">
              Posted {moment(post.date).fromNow()}
            </Box>
          </Flex>
          {currentUser.username === post.username && (
            <Flex>
              <Link as={RouterLink} to={`/write?edit=2`}>
                <FiEdit size="20px" cursor="pointer" color="teal" />
              </Link>
              <Box>
                <FiTrash2 size="20px" color="red" cursor="pointer" />
              </Box>
            </Flex>
          )}
        </Flex>

        {/* title */}
        <Heading as="h1" color="black">
          {post.title}
        </Heading>
        <Box as="p" textAlign="justify" lineHeight="30px" fontSize="18px">
          {post.desc}
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
