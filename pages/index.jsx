import AppButton from "@/components/AppButton";
import Asteriks from "@/components/Asteriks";
import useLogicPageLogic from "@/hooks/useLoginPageLogic";
import { Box, Input, Text } from "@chakra-ui/react";
import logo from "@/public/logo.png";

import React from "react";
import Image from "next/image";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
};

const Login = () => {
  const { login, inputDetails, userDetails, setUserDetails } =
    useLogicPageLogic(initialState);
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
          <Box>
            <Image src={logo} width={50} height={50} alt="sendstack logo" />
          </Box>
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
