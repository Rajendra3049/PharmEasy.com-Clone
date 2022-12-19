import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function CustomerReview() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                The app is really wonderful. Being a Product Manager myself, I
                would say that the User experience (UI/UX) of the app is top
                notch (easy to use, simple and convenient). Coming to services
                and delivery, I would say Pharmeasy is doing a tremendous job
                even during this unprecedented pandemic situation.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"
              }
              name={"Rajarshi Sarkar"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Best service and app amongst all available. I have been using it
                for more than 3 years, and even during the pandemic, they have
                kept their standards high and are delivering the order within 24
                hours. Keep up the good work.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"
              }
              name={"Darpan Dholakia"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                This app is a game changer for me. I am unable to go out always
                to buy medicinal products. Pharmeasy gives me the last liberty
                to shop essential healthcare products from home. The app is very
                user friendly and me being an elderly person do not find any
                difficulty in using it. They deliver well in time. Thanks😊
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"
              }
              name={"Lipi Chaudhuri"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
