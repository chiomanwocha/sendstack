import { useToast } from "@chakra-ui/react";

const useComponentToast = () => {
    const toast = useToast();
  
    const showToast = (title, description, status) => {
      toast({
        title,
        description,
        position: "top-right",
        variant: "left-accent",
        status,
        duration: 2000,
        isClosable: true,
      });
    };
  
    return { showToast };
  };

export default useComponentToast;
