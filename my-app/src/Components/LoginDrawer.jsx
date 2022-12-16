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
  background,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { RiArrowDownSLine, RiPinDistanceLine } from "react-icons/ri";
import { BsFillLightningFill } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import { GiScooter } from "react-icons/gi";
import { BsPerson, BsCart2 } from "react-icons/bs";

// import AuthContext
import { AuthContext } from "../Context/AuthContext";

export default function LoginDrawer({ phoneNo, setPhoneNo }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [otpState, setOtpState] = React.useState(false);
  const [otpNumber, setOtpNumber] = React.useState("");
  // const [OTP, setOTP] = React.useState("");

  const { auth, setAuth, Login, Logout } = React.useContext(AuthContext);

  function OtpGenerator() {
    let num = "1234567890";
    let OTP = otpNumber;
    for (let i = 0; i < 4; i++) {
      OTP += num[Math.floor(Math.random() * 10)];
    }
    setOtpNumber(OTP);
    setOtpState(true);
  }

  // console.log(otpNumber);
  // function ResendOtp() {
  //   setOtpNumber("");
  // }
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
        onClose={onClose}
        size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Image src="/images/MediCare.png" alt="logo" />
          </DrawerHeader>
          {otpState ? (
            ""
          ) : (
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel>Quick Login / Register</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children="+91" />
                    <Input
                      type="number"
                      borderRadius={"0px"}
                      height="38px"
                      placeholder="Enter Your Phone Number"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      maxLength={10}
                      style={{ marginTop: "2px" }}
                    />
                  </InputGroup>
                </Box>
                <Button
                  onClick={OtpGenerator}
                  style={{ backgroundColor: "#10847e", color: "white" }}>
                  Send OTP
                </Button>
              </Stack>
            </DrawerBody>
          )}
          {otpState ? (
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  Your OTP is{" "}
                  <span style={{ color: "orangered" }}>{otpNumber}</span>
                </Box>
                <Box>
                  <FormLabel>Enter OTP sent to +91 {phoneNo}</FormLabel>
                  <HStack>
                    <PinInput>
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                </Box>

                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "left",
                    border: "0px solid red",
                    width: "75%",
                    color: "#10847e",
                  }}>
                  <Button
                    style={{ fontSize: "12px", background: "none" }}
                    onClick={() => setOtpState(false)}>
                    Change Number
                  </Button>
                  {/* <Button
                    style={{ fontSize: "12px", background: "none" }}
                    onClick={ResendOtp}>
                    Resend OTP
                  </Button> */}
                </Box>
                <Button
                  style={{ backgroundColor: "#10847e", color: "white" }}
                  onClick={Login}>
                  Continue
                </Button>
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
