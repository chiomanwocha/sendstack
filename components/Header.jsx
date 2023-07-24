import { Box, Divider, Text } from "@chakra-ui/react";
import UserAvatar from "./UserAvatar";

const Header = ({ text, firstname, lastname, email  }) => {
  return (
    <Box top={0} padding={5} bg="white" >
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Text fontSize={{base: '36px', lg:"40px"}} fontWeight="bold" textTransform="capitalize">
          {text}
        </Text>
        <Box display={{base: 'none', lg: 'block'}}>
          <Box display="flex" gap={2}>
            <UserAvatar firstname={firstname} lastname={lastname} size="md" />
            <Box>
              <Text fontWeight="500" textTransform="capitalize">
                Hi, {firstname} &#128075;
              </Text>
              <Text fontSize="sm" color="brand.grey">
                {email}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider width="100%" />
    </Box>
  );
};

export default Header;
