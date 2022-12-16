import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  AddIcon,
  Image,
} from "@chakra-ui/react";
import { RiArrowDownSLine, RiPinDistanceLine } from "react-icons/ri";
import { BsFillLightningFill } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import { GiScooter } from "react-icons/gi";

import drawer from "../Styles/Drawerstyle.module.css";

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button colorScheme="white" onClick={onOpen}>
        <Box>
          <Box style={{ color: "gray", display: "flex", fontSize: "14px" }}>
            <BsFillLightningFill color="orange" />
            Express Delivery to
          </Box>
          <Box style={{ color: "black", display: "flex" }}>
            400001 Mumbai
            <RiArrowDownSLine size={"20px"} />
          </Box>
        </Box>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Choose your Location
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <Input width="65%" borderRadius={"0px"} height="38px" />
                <Button
                  style={{
                    marginTop: "-4px",
                    borderRadius: "0px",
                    height: "40px",
                  }}
                  colorScheme="teal">
                  Check
                </Button>
              </Box>

              <Box>
                <FormLabel htmlFor="url">Saved Addresses</FormLabel>
                <InputGroup>
                  <InputLeftAddon height={"60px"}>
                    <FcPlus size="20px" />
                  </InputLeftAddon>
                  <Input height={"60px"} placeholder="Add New Address" />
                </InputGroup>
              </Box>

              <Box>
                <Box
                  style={{
                    display: "flex",
                    border: "0px solid blue",
                    justifyContent: "space-between",
                    height: "90px",
                    textAlign: "center",
                    alignItems: "center",
                    backgroundColor: "#eef4ff",
                    padding: "10px",
                  }}>
                  <GiScooter size="30px" color="green" />
                  <Box style={{ border: "0px solid red", width: "80%" }}>
                    Serving more than 1,000 towns and cities in India.
                  </Box>
                </Box>

                <Box
                  style={{
                    display: "flex",
                    border: "0px solid blue",
                    justifyContent: "space-between",
                    height: "90px",
                    textAlign: "center",
                    alignItems: "center",
                    backgroundColor: "#cef8ff",
                    padding: "10px",
                    marginTop: "50px",
                  }}>
                  <RiPinDistanceLine size="30px" color="green" />
                  <Box style={{ border: "0px solid red" }}>
                    Over 30,00,000 orders safely delivered Know more
                  </Box>
                </Box>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
