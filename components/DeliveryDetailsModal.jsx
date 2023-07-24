import {
  Box,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import DisplayDetails from "./DisplayDetails";
import AppButton from "./AppButton";
import useDeliveryDetailsModalLogic from "@/hooks/components/useDeliveryDetailsModalLogic";

const DeliveryDetailsModal = ({ isOpen, onClose, details }) => {
  const { isLoading, cancelDelivery, hasCancelledStatus } =
    useDeliveryDetailsModalLogic(onClose, details);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delivery for batch - {details?.batchId}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={5}>
            <Stack spacing={4}>
              <Box>
                <Text fontWeight="700">Pick-up Details:</Text>
                <DisplayDetails
                  ml={20}
                  my={2}
                  name={details?.pickup?.pickupName}
                  address={details?.pickup?.address}
                  phoneNumber={details?.pickup?.pickupNumber}
                  altPhoneNumber={details?.pickup?.altPickupNumber}
                  note={details?.pickup?.note}
                  date={details?.pickup?.pickupDate}
                />
              </Box>
              <Box>
                <Text fontWeight="700">Recipient&apos;s Details:</Text>
                <Stack
                  spacing={3}
                  overflowY="scroll"
                  ml={20}
                  my={2}
                >
                  {details?.drops?.map((item, index, array) => (
                    <>
                      <Box>
                        <DisplayDetails
                          key={item?.id}
                          status={item?.status}
                          name={item?.recipientName}
                          address={item?.address}
                          phoneNumber={item?.recipientNumber}
                          altPhoneNumber={item?.altRecipientNumber}
                          estimatedPickupWindow={
                            item?.estimatedPickupWindow?.date
                          }
                          estimatedDropoffWindow={
                            item?.estimatedDropoffWindow?.date
                          }
                        />
                      </Box>
                      {index !== array.length - 1 ? <Divider /> : null}
                    </>
                  ))}
                </Stack>
              </Box>
              <Box>
                <Text fontWeight="700">
                  Amount Paid:{" "}
                  <Text as="span" fontWeight="normal">
                    &#8358;{details?.totalAmount?.toLocaleString("en-US")}
                  </Text>
                </Text>
              </Box>
            </Stack>
            {!hasCancelledStatus ? (
              <Box display="flex" justifyContent="center" mt={10}>
                <AppButton
                  isLoading={isLoading}
                  width="70%"
                  onClick={() => cancelDelivery(details?.id)}
                  title="Cancel Delivery"
                />
              </Box>
            ) : null}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeliveryDetailsModal;
