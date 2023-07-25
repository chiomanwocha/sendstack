import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ data, page, setPage }) => {
  const [pageOffset, setPageOffset] = useState(0);
  const handlePageClick = (event) => {
    setPageOffset(event.selected);
    setPage(event.selected + 1);
  };

  return (
    <Box
      px={5}
      py={{base: 5, md: 0}}
      gap={{base: 2, md: 0}}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ base: "start", md: "center" }}
      
    >
      <Text fontSize="sm">
        Showing page {data?.data?.page} of {data?.data?.totalPages}
      </Text>
      <Box overflow="scroll" width="100%">

      <ReactPaginate
        className="paginate"
        previousClassName={`${data?.data?.page === 1 && "hide-cursor"}`}
        previousLinkClassName={`${data?.data?.page === 1 && "hide-cursor"}`}
        nextClassName={`${page + 1 === data?.data?.totalPages && "hide-cursor"}`}
        nextLinkClassName={`${
          page + 1 === data?.data?.totalPages && "cursor-default hidden"
        }`}
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        pageCount={data?.data?.totalPages ?? 1}
        previousLabel="Prev"
        containerClassName={`paginate-container ${
          data?.pagination?.totalPages === 1 && "hide-cursor"
        }`}
        activeClassName="paginate-active"
        forcePage={pageOffset}
      />
      </Box>
    </Box>
  );
};

export default Pagination;
