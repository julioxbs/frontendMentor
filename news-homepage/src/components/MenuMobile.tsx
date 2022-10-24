import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  Image,
  VStack,
  UnorderedList,
  List,
  Box,
} from "@chakra-ui/react";
import IconMenu from "../assets/images/icon-menu.svg";
import CloseMenu from "../assets/images/icon-menu-close.svg";
import React, { useRef } from "react";
import { NavLink } from "./Navigation";

export function MenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Button role={"button"} bg={'none'} _hover={{
        bg: "#c5c6ce",
        color: "#fff"
      }} onClick={onOpen} display={{ md: "none", base: "flex" }}>
        <Image src={IconMenu} alt="icon menu" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box mb={"4rem"}>
            <DrawerCloseButton _focus={{bg: 'none'}}>
                <Image src={CloseMenu} alt="close menu icon" />
            </DrawerCloseButton>
          </Box>

          <DrawerBody>
            <UnorderedList>
              <List display={"flex"} flexDirection="column" gap={"1rem"}>
                {["Home", "New", "Popular", "Trending", "Categories"].map(
                  (item, index) => {
                    return <NavLink key={index}>{item}</NavLink>;
                  }
                )}
              </List>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
