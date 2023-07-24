import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import useGetStoredInfo from "@/libs/useGetStoredInfo";
import HamburgerMenu from "./HamburgerMenu";

const AppShell = ({ title, children }) => {
  const { formattedStoredUserData } = useGetStoredInfo();
  return (
    <Box position="relative">
      <Box display="flex" flexDirection={{ base: "column", lg: "row" }}>
        <Box
          display={{ base: "block", lg: "none" }}
          position="sticky"
          top="0"
          right="0"
          zIndex="10000"
        >
          <HamburgerMenu />
        </Box>
        <Box display={{ base: "none", lg: "block" }}>
          <Sidebar />
        </Box>
        <Box  width={{base: '100vw', lg:"80vw"}}>
          <Header
            text={title}
            firstname={formattedStoredUserData?.firstname ?? ""}
            lastname={formattedStoredUserData?.lastname ?? ""}
            email={formattedStoredUserData?.email ?? ""}
          />
          <Box>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppShell;
