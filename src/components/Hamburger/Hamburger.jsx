"use client";

import { Link } from "react-router-dom";
const NavLink = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "fashion",
    href: "/fashion",
  },
  {
    title: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    title: "Brands",
    href: "/brands",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";

export default function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} size="sm" onClick={onOpen}>
        <Menu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Logo</DrawerHeader>

          <DrawerBody
            className="flex flex-col  items-center mt-20 justify-start 
          space-y-2"
          >
            {NavLink.map((link) => (
              <Link
                className="text-lg 
                 font-medium 
                 capitalize hover:scale-110 "
                key={link.title}
                to={link.href}
              >
                {link.title}
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter>@2024 logo</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
