import {
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsBookmarkPlus, BsFillHeartFill } from "react-icons/bs";
import { FiEdit2, FiHome } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <>
      <Flex justify="space-between" align="center" py={4}>
        {/* left */}
        <Box>
          <Link to="/">
            <Heading as="h1">Logo</Heading>
          </Link>
        </Box>
        {/* right */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link to="/" p={2}>
            <Button
              colorScheme="red"
              variant="ghost"
              rightIcon={<FiHome />}
              w="100%"
            >
              Home
            </Button>
          </Link>
          <Link to="/saved" p={2}>
            <Button
              colorScheme="red"
              variant="ghost"
              rightIcon={<BsBookmarkPlus />}
              w="100%"
            >
              Saved
            </Button>
          </Link>
          <Link to="/liked" p={2}>
            <Button
              colorScheme="red"
              variant="ghost"
              rightIcon={<BsFillHeartFill />}
              w="100%"
            >
              Liked
            </Button>
          </Link>
          <Link to="/write" p={2}>
            <Button
              colorScheme="red"
              variant="ghost"
              rightIcon={<FiEdit2 />}
              w="100%"
            >
              Write
            </Button>
          </Link>
          <Box
            as="span"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize="18px"
            py={["0px"]}
          >
            {currentUser?.username}
          </Box>
          {currentUser ? (
            <Button
              onClick={logout}
              ml="1rem"
              variant="outline"
              colorScheme="red"
            >
              <Link to="/login">Logout</Link>
            </Button>
          ) : (
            <Link to="/login">
              <Button ml="1rem" variant="outline" colorScheme="red">
                Logout
              </Button>
            </Link>
          )}
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<AiOutlineMenu />}
            display={["flex", "flex", "none", "none"]}
          />
        </Flex>

        <IconButton
          onClick={onOpen}
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<AiOutlineMenu color="#FF3030" />}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay style={{ backdropFilter: "blur(5px)" }} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <IconButton
              onClick={onClose}
              cursor="pointer"
              justify="flex-end"
              aria-label="Open Menu"
              size="lg"
              mr={2}
              icon={<BsXLg color="#FF3030" />}
              display={["flex", "flex", "none", "none"]}
            />
          </DrawerHeader>
          <DrawerBody>
            <Flex
              flexDir="column"
              justify="center"
              align="center"
              display={["flex", "flex", "none", "none"]}
            >
              <Link to="/" p={2}>
                <Button
                  mt="10px"
                  fontSize="1.2rem"
                  colorScheme="red"
                  variant="ghost"
                  leftIcon={<FiHome />}
                >
                  Home
                </Button>
              </Link>
              <Link to="/saved" p={2}>
                <Button
                  mt="10px"
                  fontSize="1.2rem"
                  colorScheme="red"
                  variant="ghost"
                  leftIcon={<BsBookmarkPlus />}
                >
                  Saved
                </Button>
              </Link>
              <Link to="/liked" p={2}>
                <Button
                  mt="10px"
                  fontSize="1.2rem"
                  colorScheme="red"
                  variant="ghost"
                  leftIcon={<BsFillHeartFill />}
                >
                  Liked
                </Button>
              </Link>
              <Link to="/write" p={2}>
                <Button
                  mt="10px"
                  fontSize="1.2rem"
                  colorScheme="red"
                  variant="ghost"
                  leftIcon={<FiEdit2 />}
                >
                  Write
                </Button>
              </Link>
              <Box
                as="span"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="18px"
                py={["12px", "0px", "0px", "0px"]}
              >
                {currentUser?.username}
              </Box>
              {currentUser ? (
                <Button
                  onClick={logout}
                  ml="1rem"
                  variant="outline"
                  colorScheme="red"
                >
                  <Link to="/login">Logout</Link>
                </Button>
              ) : (
                <Link to="/login">
                  <Button ml="1rem" variant="outline" colorScheme="red">
                    Logout
                  </Button>
                </Link>
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
