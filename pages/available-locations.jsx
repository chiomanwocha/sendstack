import AppShell from "@/components/AppShell";
import Loader from "@/components/Loader";
import useGetAvailableLocation from "@/libs/request/useGetAvailableLocations";
import { Box, Text } from "@chakra-ui/react";

const AvailableLocations = () => {
  const { data, isLoading } = useGetAvailableLocation();
  return (
    <AppShell title="available locations">
      <Box px={{base: 5, md:10}}>
        <Box>
          <Text fontSize="18px">
            Currently serving{" "}
            <Text as="span" fontWeight="800" mx={1}>
              Lagos
            </Text>{" "}
            with plans to expand soon. &#128640;
          </Text>
          <Text>See our delivery locations below.</Text>
        </Box>
        {isLoading ? <Loader /> :
        <Box
          bg="brand.primary"
          width={{base: '100%', lg:"70vw"}}
          height="65vh"
          overflowY="scroll"
          mt={10}
          p={5}
          display="grid"
          gridTemplateColumns={{base: "repeat(2, 1fr)", md:"repeat(4, 1fr)"}}
          gap={5}
        >
          {data?.data[0]?.locals?.map((item) => (
            <Box
              key={item?.locationCode}
              bg="white"
              py={2}
              px={3}
              borderRadius="md"
              boxShadow="0px 0px 2px 0px #A412E2"
              _hover={{
                boxShadow: "0px 0px 5px 0px #A412E2",
              }}
              cursor="default"
            >
              <Text fontSize="2xs" color="brand.grey">
                {item?.locationCode}
              </Text>
              <Text>{item?.name}</Text>
            </Box>
          ))}
        </Box>
         }
      </Box>
    </AppShell>
  );
};

export default AvailableLocations;
