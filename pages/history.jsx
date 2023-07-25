import AppShell from "@/components/AppShell";
import Loader from "@/components/Loader";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import DeliveryDetailsModal from "@/components/DeliveryDetailsModal";
import AppButton from "@/components/AppButton";
import useHistoryPageLogic from "@/hooks/useHistoryPageLogic";
import convertDateForm from "@/utils/convertDateForm";
import Pagination from "@/components/Pagination";

const TrackDelivery = () => {
  const {
    data,
    isLoading,
    tableHead,
    openDetails,
    setOpenDetails,
    detailsBody,
    setDetailsBody,
    page,
    setPage,
  } = useHistoryPageLogic();

  return (
    <AppShell title="history">
      <Box px={10}>
        <Text>Below are the list of all your deliveries. &#128666;</Text>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <TableContainer mt={10} height={{base: "50vh", md: "70vh"}} overflowY="scroll">
              <Table colorScheme="pink">
                <Thead bg="#FAF5FF">
                  <Tr>
                    {tableHead.map((item, id) => (
                      <Th key={id} fontWeight="900">
                        {item}
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.data?.results?.map((item) => (
                    <Tr
                      fontSize="sm"
                      key={item?.id}
                      cursor="default"
                      _hover={{ bg: "#FAF5FF" }}
                    >
                      <Td fontSize="xs">
                        <Text
                          bg="#F1F1F1"
                          p={1}
                          borderRadius="lg"
                          fontWeight="600"
                          textAlign="center"
                        >
                          {item?.batchId}
                        </Text>
                      </Td>
                      <Td>{item?.pickup?.pickupName}</Td>
                      <Td>{item?.pickup?.address}</Td>
                      <Td>
                        &#8358;{item?.totalAmount.toLocaleString("en-US")}
                      </Td>
                      <Td>{convertDateForm(item?.createdAt)}</Td>
                      <Td>
                        <AppButton
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDetails(true);
                            setDetailsBody(item);
                          }}
                          size="sm"
                          _hover={{
                            bg: "#FAF5FF",
                            border: "1px solid #E7C0F4",
                          }}
                          title="See details"
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <DeliveryDetailsModal
              isOpen={openDetails}
              onClose={() => setOpenDetails(false)}
              details={detailsBody}
            />
            <Pagination data={data} page={page} setPage={setPage} />
          </>
        )}
      </Box>
    </AppShell>
  );
};

export default TrackDelivery;
