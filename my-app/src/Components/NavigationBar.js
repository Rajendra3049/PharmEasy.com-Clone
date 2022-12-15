import { ReactNode } from "react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { CiMobile2, CiDiscount1 } from "react-icons/ci";
import { BsPerson, BsCart2 } from "react-icons/bs";

import DrawerExample from "./drawer";
import LoginDrawer from "./LoginDrawer";
import NavStyle from "../Styles/Navstyle.module.css";

const Links = ["Download App", "Hello,Login", "Offers", "Cart"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}
    href={"#"}>
    {children}
  </Link>
);

export default function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white.100", "white.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            className={NavStyle.mainBox}>
            {/* logo */}
            <Box style={{ display: "flex" }}>
              <Box className={NavStyle.pinBtn}>
                {" "}
                <Image
                  className={NavStyle.logoImg}
                  src="/images/MediCare.png"
                  alt="logo"
                />{" "}
              </Box>
              <Box style={{ marginTop: "10px" }}>
                <DrawerExample />
              </Box>
            </Box>
            {/* pin Button */}

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              className={NavStyle.navAppBox}>
              <NavLink>
                <Box className={NavStyle.downloadApp}>
                  <CiMobile2 size={"22px"} />
                  <Box className={NavStyle.navHeading}>Download App</Box>
                </Box>
              </NavLink>
              <NavLink>
                <Box className={NavStyle.navApp}>
                  <BsPerson size={"50px"} />
                  <Box className={NavStyle.login}>
                    {" "}
                    {/* login drawer */}
                    <LoginDrawer />
                  </Box>
                </Box>
              </NavLink>
              <NavLink>
                <Box className={NavStyle.navApp}>
                  <CiDiscount1 size={"22px"} />
                  <Box className={NavStyle.navHeading}> Offers</Box>
                </Box>
              </NavLink>
              <NavLink>
                <Box className={NavStyle.navApp}>
                  <BsCart2 size={"22px"} />
                  <Box className={NavStyle.navHeading}>Cart</Box>
                </Box>
              </NavLink>
            </HStack>
          </HStack>
          {/* <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}>
                <Box className={NavStyle.navHeading}> user</Box>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
      <hr />
      <Box
        p={2}
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          margin: "auto",
          fontSize: "15px",
        }}>
        <Link>Medicine</Link>
        <Link>Lab Tests</Link>
        <Link>Healthcare</Link>
        <Link>Surgeries</Link>
        <Link>Health Blogs</Link>
        <Link>PLUS</Link>
        <Link>Offers</Link>
        <Link>Value Store</Link>
      </Box>
    </>
  );
}
