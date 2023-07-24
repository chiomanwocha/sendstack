import AppShell from "@/components/AppShell";
import Loader from "@/components/Loader";
import UserAvatar from "@/components/UserAvatar";
import useMyProfilePageLogic from "@/hooks/useMyProfilePageLogic";
import convertDateForm from "@/utils/convertDateForm";
import {
  Box,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Profile = () => {
  const {
    formattedStoredUserData,
    walletBalance,
    isWalletBalanceDataLoading,
    walletTransaction,
    isWalletTransactionDataLoading,
    tableHead,
    colorReducer,
  } = useMyProfilePageLogic();

  return (
    <AppShell title="my profile">
      <Box px={10}>
        <Box
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          gap={3}
          alignItems={{ base: "start", lg: "center" }}
        >
          <UserAvatar
            firstname={formattedStoredUserData?.firstname ?? ""}
            lastname={formattedStoredUserData?.lastname ?? ""}
            size="2xl"
          />
          <Box>
            <Text fontSize="24px" fontWeight="500" letterSpacing=".2px">
              {`${formattedStoredUserData?.firstname ?? ""} ${
                formattedStoredUserData?.lastname ?? ""
              }`}
            </Text>
            <Text>{`${formattedStoredUserData?.email ?? ""}`}</Text>
          </Box>
        </Box>
        {(isWalletBalanceDataLoading && isWalletTransactionDataLoading) ||
        !(
          walletBalance?.status === true && walletTransaction?.status === true
        ) ? (
          <Loader />
        ) : (
          <Stack mt={5} spacing={4}>
            {!isWalletBalanceDataLoading ? (
              <Box display="flex">
                <Text fontWeight="700">My wallet balance:</Text>
                <Text ml={2}>
                  &#8358;
                  {`${walletBalance?.data?.balance?.toLocaleString("en-US")}`}
                </Text>
              </Box>
            ) : null}
            {!isWalletTransactionDataLoading ? (
              <Box>
                <Text fontWeight="700">My latest wallet transactions:</Text>
                <TableContainer height="50vh" overflowY="scroll" my={5}>
                  <Table p={5} colorScheme="pink">
                    <Thead>
                      <Tr>
                        {tableHead.map((head) => (
                          <Th key={head} fontWeight="900">
                            {head}
                          </Th>
                        ))}
                      </Tr>
                    </Thead>
                    <Tbody>
                      {walletTransaction?.data?.map((data, index) => {
                        const {
                          id,
                          amount,
                          description,
                          type,
                          balance,
                          createdAt,
                        } = data;
                        return (
                          <Tr key={id} fontSize="sm" _hover={{ opacity: ".8" }}>
                            <Td>{index + 1}.</Td>
                            <Td>{description}</Td>
                            <Td>&#8358;{amount?.toLocaleString("en-US")}</Td>
                            <Td>
                              <Text
                                bg={colorReducer(type).bg}
                                color={colorReducer(type).color}
                                width="fit-content"
                                borderRadius="full"
                                px={2}
                                // border="1px solid"
                                fontSize="sm"
                              >
                                {type?.charAt(0) + type?.slice(1).toLowerCase()}
                              </Text>
                            </Td>
                            <Td>&#8358;{balance?.toLocaleString("en-US")}</Td>
                            <Td>{convertDateForm(createdAt)}</Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            ) : null}
          </Stack>
        )}
      </Box>
    </AppShell>
  );
};

export default Profile;
