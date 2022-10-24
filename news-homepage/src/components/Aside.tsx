import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const articles = [
    {title: "Hydrogen VS Electric", desc: "Cars Will hydrogen-fueled cars ever catch up to EVs?"},
    {title: "The Downsides of AI Artistry", desc: "What are the possible adverse effects of on-demand AI image generation?"},
    {title: "Is VC Funding Drying Up?", desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means."},
]

export function Article({title, desc}: {title: string, desc: string}) {
    return (
        <Box display='flex' flexDirection="column" gap="1rem">
            <hr />
            <Heading cursor="pointer" _hover={{color: "#e9ab53"}} color="#fff" as="h3" size="md">{title}</Heading>
            <Text color="#c5c6ce">{desc}</Text>
        </Box>
    );
}

export function Aside() {
    return (
        <VStack bgColor="#00001a" align="initial" padding="1.5rem" gap="1rem" minH={"full"}>
            <Heading color="#e9ab53" as="h2">New</Heading>

            {articles.map((article, index) => {
                return <Article key={index} title={article.title} desc={article.desc} />
            })}
        </VStack>
    );
}