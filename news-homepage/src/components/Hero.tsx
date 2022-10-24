import { Box, Grid, GridItem, Image, Text, Button, Heading, Flex } from "@chakra-ui/react";
import HeroImage from "../assets/images/image-web-3-desktop.jpg";
import HeroImageMobile from "../assets/images/image-web-3-mobile.jpg";
import { Aside } from "./Aside";

export function Hero() {
    return (
        <Grid templateColumns={{ lg: "2fr 1fr", md: "1fr" }} gap="2rem">
            <GridItem>
                <Image w={'full'} h="300px" display={{md: "block", base: "none"}} src={HeroImage} alt={"Image web3 desktop"} objectFit="cover" />
                <Image w={'full'} display={{base: "block", md: "none"}} src={HeroImageMobile} alt={"Image web3 desktop"} objectFit="cover" />

                <Grid templateColumns={{ lg: "repeat(2, 1fr)", md: "1fr" }} gap={{ base: "34px", md: "35px"}} margin={{base: "2rem 0", md: "1rem 0"}}>
                    <Heading as="h1" fontSize={{md: "6xl", base: "5xl"}} fontWeight="bold" lineHeight={{lg: '3.3rem', base: "4rem"}}>
                        The Bright Future of Web 3.0?
                    </Heading>

                    <Flex flexDirection="column" alignItems="start" justifyContent="space-between" gap={"1rem"}>
                        <Text color="#5d5f79">
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                        </Text>

                        <Button borderRadius="0px" w="150px" _hover={{
                            bgColor: "#00001a",
                            color: "#fff"
                        }} bgColor="#f15e50" color="#fff" fontSize=".8rem" letterSpacing="2px">READ MORE</Button>
                    </Flex>
                </Grid>
            </GridItem>

            <GridItem>
                <Aside />
            </GridItem>
        </Grid>
    );
}