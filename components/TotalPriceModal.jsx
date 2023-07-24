import {
  Box,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Loader from "./Loader";
import AppButton from "./AppButton";
import useTotalModalPriceLogic from "@/hooks/useTotalModalPriceLogic";

const TotalPriceModal = ({
  isOpen,
  onClose,
  prices,
  isLoading,
  pickupInfo,
  updatedArray: updatedTotalDropOffLocationArray,
}) => {
  const { totalPrice, isRequestDeliveryLoading, handleAction, updatedArray } =
    useTotalModalPriceLogic(
      updatedTotalDropOffLocationArray,
      prices,
      pickupInfo
    );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="24px">Order Summary</Text>
          </ModalHeader>
          <Divider />
          {isLoading ? (
            <Loader />
          ) : (
            <ModalBody>
              <Box mb={5}>
                <Box>
                  {updatedArray?.map((item, index, array) => (
                    <>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        key={item?.address}
                      >
                        <Box>
                          <Text fontWeight="700" fontSize="18px">
                            {item?.recipientName}
                          </Text>
                          <Text color="brand.grey">{item.address}</Text>
                          <Text color="brand.grey">{item.recipientNumber}</Text>
                        </Box>
                        <Text color="brand.grey" fontWeight="500">
                          &#8358;{item.price?.toLocaleString("en-US")}
                        </Text>
                      </Box>
                      {index !== array.length - 1 ? <Divider my={3} /> : null}
                    </>
                  ))}
                </Box>
              </Box>
              <Box display="flex" gap={4}>
                <Text fontWeight="700" fontSize="18px">
                  Total:
                </Text>
                <Text fontWeight="700" fontSize="18px">
                  &#8358;{totalPrice?.toLocaleString("en-US")}
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={5}>
                <AppButton
                  mt={6}
                  variant="outline"
                  onClick={onClose}
                  title="Cancel"
                />
                <AppButton
                  onClick={handleAction}
                  mt={4}
                  isLoading={isRequestDeliveryLoading}
                  title="Checkout"
                />
              </Box>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TotalPriceModal;
