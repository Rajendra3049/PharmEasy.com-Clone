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
  HStack,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { RiArrowDownSLine, RiPinDistanceLine } from "react-icons/ri";
import { BsFillLightningFill } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import { GiScooter } from "react-icons/gi";
import { BsPerson, BsCart2 } from "react-icons/bs";

export default function LoginDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [otp, setOtp] = React.useState(false);
  return (
    <>
      <Button colorScheme="white" onClick={onOpen}>
        <Box>
          <Box style={{ color: "black", display: "flex", fontWeight: "400" }}>
            <BsPerson size={"22px"} />
            <p style={{ marginLeft: "5px" }}>Hello,Login</p>
          </Box>
        </Box>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Image src="/images/MediCare.png" alt="logo" />
          </DrawerHeader>
          {otp ? (
            ""
          ) : (
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel>Quick Login / Register</FormLabel>
                  <Input
                    borderRadius={"0px"}
                    height="38px"
                    placeholder="Enter Your Phone Number"
                  />
                </Box>
                <Button onClick={() => setOtp(true)}>Send OTP</Button>
              </Stack>
            </DrawerBody>
          )}
          {otp ? (
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel>Enter OTP sent to +91 8359833649</FormLabel>
                  <HStack>
                    <PinInput>
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                </Box>
                <Box>
                  <Button>Change Number</Button>
                  <Button>Resend</Button>
                </Box>
                <Button>Continue</Button>
              </Stack>
            </DrawerBody>
          ) : (
            ""
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
