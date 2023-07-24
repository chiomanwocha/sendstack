import AppButton from "@/components/AppButton";
import Asteriks from "@/components/Asteriks";
import useLogicPageLogic from "@/hooks/useLoginPageLogic";
import { Avatar, Box, Input, Text } from "@chakra-ui/react";

import React from "react";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
};

const Login = () => {
  const { login, inputDetails, userDetails, setUserDetails } = useLogicPageLogic(initialState);
  return (
    <Box
      bg="linear-gradient(180deg, rgba(245,251,255,1) 0%, rgba(251,239,255,1) 62%)"
      height="100vh"
    >
      <Box
        as="form"
        onSubmit={(e) => login(e)}
        width={{ base: "90vw", md: "60vw", lg: "40vw" }}
        margin="0 auto"
        py={{ base: 20, md: 40 }}
      >
        <Box display="flex" justifyContent="center">
          <Avatar
            src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-1/278223249_110695638275758_1722150398171146232_n.png?stp=c26.0.200.200a_dst-png_p200x200&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeEnbZvNLrsV914S487gifNOh96ktyAsLCyH3qS3ICwsLOcSdaLgOGKRfduIZrCRFOLja8xeutpEnnDyWilK7Cgn&_nc_ohc=gN-4vT7CN6oAX8tSn3W&_nc_ht=scontent.flos1-2.fna&oh=00_AfCQ69kuNbcdaCtKx62WexLaxU3tpr_ycQL0DBabVuH9oA&oe=64BC6C69"
            name="send stack"
          />
        </Box>
        <Box textAlign="center">
          <Text
            fontSize="36px"
            letterSpacing=".5px"
            fontWeight="700"
            color="brand.primary2"
            textShadow="10px 0px 10px #E7C1F5"
          >
            Welcome back!
          </Text>
        </Box>
        <Box
          bg="white"
          padding={5}
          mt={5}
          borderRadius="md"
          boxShadow="0px 0px 5px #E7C1F5"
        >
          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            gap={5}
          >
            {inputDetails.map((item) => (
              <React.Fragment key={item.title}>
                <Box key={item.title} width="100%">
                  <Text mb={1} textTransform="capitalize" fontSize="sm">
                    {item.title}
                    <Asteriks />
                  </Text>
                  <Input
                    outline="none"
                    focusBorderColor="#E2E8F0"
                    bg="white"
                    type="text"
                    required
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        [item.stateName]: e.target.value,
                      })
                    }
                    value={userDetails[item.stateName]}
                    placeholder={item.placeholder}
                    _placeholder={{ opacity: 0.3 }}
                  />
                </Box>
              </React.Fragment>
            ))}
          </Box>
          <Box mt={5} mb={10}>
            <Text mb={1} textTransform="capitalize" fontSize="sm">
              email
              <Asteriks />
            </Text>
            <Input
              outline="none"
              focusBorderColor="#E2E8F0"
              bg="white"
              type="email"
              required
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              placeholder="eg- nwochachioma1998@gmail.com"
              _placeholder={{ opacity: 0.3 }}
            />
          </Box>
          <AppButton
            width="100%"
            type="submit"
            isDisabled={
              !userDetails.email ||
              !userDetails.firstname ||
              !userDetails.lastname
            }
            title="Proceed"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
