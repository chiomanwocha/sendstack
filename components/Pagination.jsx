import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { Paginate } from "react-paginate-chakra-ui";

const Pagination = ({ data, page, setPage }) => {
  const handlePageClick = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <Box
      px={5}
      display="flex"
      flexDirection={{base: 'column', md: 'row'}}
      justifyContent="space-between"
      alignItems={{base: 'start', md:"center"}}
    >
      <Text fontSize="sm">Page {page + 1} of {data?.data?.totalPages}</Text>
      <Paginate
        page={page}
        count={data?.data?.totalResults}
        pageSize={data?.data?.limit}
        previousIcon={
          data?.data?.page !== 1 ? <ChevronLeftIcon /> : null
        }
        nextIcon={
          page + 1 !== data?.data?.totalPages ? <ChevronRightIcon /> : null
        }
        onPageChange={handlePageClick}
        margin={1}
        variant="ghost"
        bg="transparent"
        _hover={{ bg: "brand.primary3" }}
        w="full"
        size="sm"
      />
    </Box>
  );
};

export default Pagination;
