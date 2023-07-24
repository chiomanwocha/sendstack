/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import { Box, ListItem, Slide, Text, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box bg="brand.primary2" zIndex="10000">
      <Box id="menuToggle" onClick={() => setIsOpen(!isOpen)}>
        <Box color="white" display="flex" justifyContent="end">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </Box>
        <Slide direction="top" in={isOpen}>
          <UnorderedList
            id="menu"
            pt={2}
            m={0}
            bg="brand.primary2"
            display="flex"
            flexDirection="column"
            mt={10}
            justifyContent="end"
            position="relative"
          >
            {[
              { title: "My Profile", link: "/my-profile" },
              { title: "Book delivery", link: "/book-delivery" },
              { title: "history", link: "/history" },
              { title: "available locations", link: "/available-locations" },
            ].map((list) => (
              <ListItem
                key={list.title}
                textTransform="capitalize"
                listStyleType="none"
                cursor="pointer"
                color="white"
                fontWeight="700"
              >
                <Link href={list.link} legacyBehavior>
                  <Box
                    paddingX={4}
                    paddingY={4}
                    width="100%"
                    textAlign="start"
                    borderRadius="md"
                  >
                    <Text letterSpacing=".2px" fontWeight="600">
                      {list.title}
                    </Text>
                  </Box>
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Slide>
      </Box>
    </Box>
  );
};

export default HamburgerMenu;
