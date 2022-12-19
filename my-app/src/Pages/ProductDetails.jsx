import React from "react";
import { useParams } from "react-router";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Grid,
  ButtonGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { m } from "framer-motion";

export default function ProductDetails() {
  let { id } = useParams();

  const [data, setData] = React.useState({});
  async function GetData() {
    try {
      let res = await fetch(`http://localhost:3000/data/${id}`);
      res = await res.json();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    GetData();
  }, []);

  async function PostData(e) {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:3000/cart`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      res = await res.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Grid border={"px solid red"}>
          <div
            style={{
              width: "400px",
              border: "0px solid red",
              height: "400px",
              marginBottom: "10%",
            }}>
            <Image
              border={"px solid green"}
              rounded={"md"}
              alt={"product image"}
              src={data.img}
              fit={"cover"}
              h={{ base: "100%", sm: "400px", lg: "100%" }}
              marginTop="10%"
              textAlign="center"
              margin="auto"
            />
          </div>
          <div style={{ border: "0px solid green" }}>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}>
              Select Available Variant
            </Text>
            <Text
              as={"span"}
              fontWeight={"bold"}
              style={{ marginBottom: "20px" }}>
              Flavor Available
            </Text>
            <Stack direction="column" marginTop="15px">
              <Wrap spacing={4}>
                <WrapItem>
                  <Button colorScheme="gray">Aloe Amla</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Aloe Vera</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Amla</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Amla Giloy</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Karela Jamun</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Tulsi Giloy</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Wheat Grass</Button>
                </WrapItem>
              </Wrap>
            </Stack>
            <div>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
                marginTop="30px">
                Key Nutrients:
              </Text>
            </div>
            <div>
              <b>1. Vitamin C</b> Vitamin C is one of the most powerful
              antioxidants found in nature. It keeps body cells safe from the
              harsh effects of free radicals. It helps in boosting immunity,
              iron absorption, collagen formation (needed for youthful and
              glowing skin), and maintenance of cartilage and bones. <br />
              <b> 2. Calcium</b> Calcium keeps bones and teeth strong. It plays
              an important role in the functioning of heart, muscles and nerves.
              It can also help in preventing high blood pressure, cancer and
              diabetes. When there isn't sufficient calcium in the body, the
              risk of osteoporosis rises and this results in brittle bones.
              <br />
              <b>3. Iron</b> Iron is present in the haemoglobin of the blood and
              is responsible for the transport of oxygen to all the cells of the
              body. Oxygen is necessary for the cells to perform all their
              tasks. Iron is a part of many enzymes that perform vital functions
              of the body and also helps to maintain energy level.
              <br />
              <b>4. Sodium</b> Optimum levels of sodium are necessary for
              maintaining electrolyte balance in the body. It plays an important
              role in controlling blood pressure, proper functioning of nerves
              and muscles. Sodium can also help in protecting the heart by
              lowering bad cholesterol levels.
            </div>
          </div>
        </Grid>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}>
              {data.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"3xl"}>
              Rs.{data.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"1xl"}
                fontWeight={"300"}>
                EverHerb Karela Jamun Juice is formulated with the extracts of
                Karela or bitter gourd and the whole Jamun fruit. Since ancient
                times, Karela and Jamun have been used to keep blood sugar
                levels steady. Bitter gourd is a natural blood-sugar controller
                and has been used by Ayurvedic doctors for centuries to help
                diabetes patients. When used along with appropriate medication,
                a healthy diet and regular exercise, EverHerb Karela Jamun Juice
                can be helpful to keep blood glucose levels in check.
              </Text>
              <Text fontSize={"lg"}>
                Moreover, EverHerb Karela Jamun Juice can also help speed up
                digestion and aid in preventing hyperacidity or acid reflux. It
                can help to remove toxins from the blood and can aid in
                improving the body’s immunity to prevent infections and can also
                manage cough. Because of its hydrating effect on the bowels, it
                can help to ease constipation. EverHerb Karela Jamun Juice is
                100 % natural and vegan. It contains no added sugar.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}>
                Key Benefits
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Helps maintain blood sugar level</ListItem>
                  <ListItem>Promotes blood purification</ListItem>{" "}
                  <ListItem>Prevents infections</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Promotes healthy skin</ListItem>
                  <ListItem>
                    Prevents excessive weight gain by decreasing appetite
                  </ListItem>
                  <ListItem>Brings relief from constipation</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  EVER HERB
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Expires on or After:
                  </Text>{" "}
                  29/09/2023
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Country of Origin:
                  </Text>{" "}
                  India
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            onClick={PostData}
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}>
            Add to cart
          </Button>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
