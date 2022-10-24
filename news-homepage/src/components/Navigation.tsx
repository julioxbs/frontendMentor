import Logo from "../assets/images/logo.svg";
import { UnorderedList, List, Link, Image, Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { MenuMobile } from "./MenuMobile";

export function Navigation() {
    return (
        <UnorderedList marginLeft='0' marginBottom="3rem" justifyContent={"space-between"} display="flex">
            <Image h="40px" w="60px" src={Logo} alt="Logo W" />
            <List display={{ md: "flex", base: "none" }} alignItems={"center"} gap={"2.5rem"}>
                {["Home", "New", "Popular", "Trending", "Categories"].map((item, index) => {
                    return <NavLink key={index}>{item}</NavLink>
                })}
            </List>

            <MenuMobile />
        </UnorderedList>
    );
}

export function NavLink({children}: {children: ReactNode}) {
    return (
        <Link href="#" _hover={{textDecoration: "none", color: "#f15e50"}}>
            {children}
        </Link>
    );
}