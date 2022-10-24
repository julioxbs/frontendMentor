import { Box } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";

export function Home() {
    return (
        <Box padding={{ md: "3rem 7rem", base: "2rem 1rem" }}>
            <Navigation />
            <Hero />
            <Footer />
        </Box>
    );
}