import useComponentToast from "@/utils/useComponentToast";
import { Box, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const { showToast } = useComponentToast();
  const logout = () => {
    router.push("/");
    showToast(
      "Successful!",
      "Logged out successfully.",
      "success"
    );
  };

  return (
    <Box
      width="20vw"
      bg="brand.primary"
      height="100vh"
      paddingX={5}
      paddingY={6}
      position="sticky"
      top={0}
      left={0}
    >
      <Text
        fontSize="26px"
        fontWeight="800"
        color="brand.primary2"
        letterSpacing="1px"
        textShadow="10px 0px 10px #E7C1F5"
      >
        Sendstack
      </Text>
      <Box>
        <UnorderedList
          m="20px 0 0 0"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="80vh"
        >
          <Box>
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
              >
                <Link href={list.link} legacyBehavior>
                  <Box
                    paddingX={4}
                    paddingY={4}
                    width="100%"
                    textAlign="start"
                    bg={
                      router.asPath === list.link
                        ? "brand.primary3"
                        : "transparent"
                    }
                    borderRadius="md"
                  >
                    <Text letterSpacing=".2px" fontWeight="600">
                      {list.title}
                    </Text>
                  </Box>
                </Link>
              </ListItem>
            ))}
          </Box>
          <Box onClick={logout}>
            <ListItem
              textTransform="capitalize"
              listStyleType="none"
              cursor="pointer"
            >
              <Box
                paddingX={4}
                paddingY={4}
                width="100%"
                textAlign="start"
                borderRadius="md"
              >
                <Text letterSpacing=".2px" fontWeight="600">
                  Log out
                </Text>
              </Box>
            </ListItem>
          </Box>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Sidebar;
