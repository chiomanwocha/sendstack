import { Avatar } from "@chakra-ui/react";

const UserAvatar = ({firstname, lastname, size}) => {
    return ( 
        <Avatar
        name={`${firstname} ${lastname}`}
        bg="brand.primary2"
        size={size}
        color="white"
      />
     );
}
 
export default UserAvatar;