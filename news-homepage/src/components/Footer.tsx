import { Box, Flex, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import IconRetro from "../assets/images/image-retro-pcs.jpg";
import IconLaptops from "../assets/images/image-top-laptops.jpg";
import IconGaming from "../assets/images/image-gaming-growth.jpg";

const footerArticles = [
  {
    image: IconRetro,
    desc: {
      number: "01",
      title: "Reviving Retro PCs",
      desc: "What happens when old PCs are given modern upgrades?"
    }
  },
  {
    image: IconLaptops,
    desc: {
      number: "02",
      title: "Top 10 Laptops of 2022",
      desc: "Our best picks for various needs and budgets.",
    }  
  },
  {
    image: IconGaming,
    desc: {
      number: "03",
      title: "The Growth of Gaming",
      desc: "How the pandemic has sparked fresh opportunities.",
    }
  },
];

export function Footer() {
  return (
    <Grid templateColumns={{lg: "repeat(3, 1fr)", md: "1fr"}} gap="1rem" marginTop="3rem">
      {footerArticles.map((article, index) => {
        return (
          <Flex key={index} gap="1rem">
            <Image w="120px" h="150px" src={article.image} alt={article.desc.title} />

            <VStack align="initial">
              <Text color="#c5c6ce" fontSize="2xl" fontWeight="bold">{article.desc.number}</Text>
              <Text cursor="pointer" _hover={{color: "#f15e50"}} color="#00001a" fontWeight="bold">{article.desc.title}</Text>
              <Text color="#5d5f79">{article.desc.desc}</Text>
            </VStack>
          </Flex>
        );
      })}
    </Grid>
  );
}
