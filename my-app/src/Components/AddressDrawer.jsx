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
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { RiArrowDownSLine, RiPinDistanceLine } from "react-icons/ri";
import { BsFillLightningFill } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import { GiScooter } from "react-icons/gi";
import drawer from "../Styles/Drawerstyle.module.css";
import { Link } from "react-router-dom";

export default function AddressDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button colorScheme="white" onClick={onOpen}>
        <Button colorScheme="teal" variant="solid" w="350px" marginLeft="-18px">
          Add Delivery Address
        </Button>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Add Delivery Address
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <form isRequired>
                <FormControl isRequired>
                  <Input type="text" placeholder="Deliver to" />
                  <br />
                  <br />

                  <Input type="number" placeholder="Mobile no" />
                  <FormHelperText>
                    For all delivery related communication.
                  </FormHelperText>
                  <br />

                  <Input type="number" placeholder="Pin Code" w="40%" />
                  <br />
                  <br />
                  <Input type="text" placeholder="House no and building" />
                  <br />
                  <br />
                  <Input type="text" placeholder="Street no" />
                  <br />
                  <Link to="/Payment">
                    {" "}
                    <Button mt={4} colorScheme="teal" type="submit">
                      Save and Continue
                    </Button>
                  </Link>
                </FormControl>
              </form>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
