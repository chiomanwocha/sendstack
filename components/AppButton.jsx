import { Button } from "@chakra-ui/react";

const AppButton = ({ isLoading, isDisabled, onClick, title, ...rest }) => {
  return (
    <Button
      mt={4}
      bg="brand.primary3"
      color="brand.primary2"
      border="1px solid #FAF5FF"
      _hover={{ border: "1px solid #A412E2", bg: "transparent" }}
      isLoading={isLoading}
      isDisabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default AppButton;
