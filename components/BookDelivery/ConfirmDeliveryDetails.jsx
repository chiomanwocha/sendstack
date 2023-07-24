import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import DisplayDetails from "../DisplayDetails";
import TotalPriceModal from "../TotalPriceModal";
import AppButton from "../AppButton";
import useConfirmDeliveryDetailsLogic from "@/hooks/components/BookDelivery/useConfirmDeliveryDetailsLogic";

const ConfirmDeliveryDetails = ({
  setFormIndex,
  setInitialItems,
  totalDropOffLocation,
  pickupInfo,
}) => {
  const {
    openModal,
    setOpenModal,
    prices,
    isDisabled,
    updatedArray,
    isLoading,
    result,
  } = useConfirmDeliveryDetailsLogic(totalDropOffLocation, pickupInfo);
  return (
    <Box>
      <Text fontSize="20px" letterSpacing=".5px" fontWeight="700" mb={5}>
        Confirm Delivery
      </Text>
      <Stack bg="brand.primary" borderRadius="md" padding={5} spacing={4}>
        <Box gap={5}>
          <Text fontWeight="700">Pick-up Details:</Text>
          <Box ml={20} my={2}>
            <DisplayDetails
              name={pickupInfo.pickupName}
              address={pickupInfo.address}
              phoneNumber={pickupInfo.pickupNumber}
              altPhoneNumber={pickupInfo.altPickupNumber}
              note={pickupInfo.note}
              date={pickupInfo.pickupDate}
            />
          </Box>
        </Box>
        <Box gap={5}>
          <Text fontWeight="700">Recipient&apos;s Details:</Text>
          <Stack spacing={3} height="40vh" overflowY="scroll" ml={20} my={2}>
            {totalDropOffLocation.map((item, index, array) => (
              <>
                <DisplayDetails
                  key={item.address}
                  name={item.recipientName}
                  address={item.address}
                  phoneNumber={item.recipientNumber}
                  altPhoneNumber={item.altRecipientNumber}
                />
                {index !== array.length - 1 ? <Divider /> : null}
              </>
            ))}
          </Stack>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <AppButton
            mt={4}
            onClick={() => {
              setFormIndex("2");
              setInitialItems((prevItems) => {
                const updatedItems = prevItems.map((item, index) => {
                  if (index === 2) return { ...item, isActive: false };
                  return item;
                });
                return updatedItems;
              });
            }}
            title="Previous"
          />
          <AppButton
            isLoading={isLoading}
            isDisabled={
              !isLoading &&
              (pickupInfo?.price === undefined ||
                result?.length <= 0 ||
                isDisabled)
            }
            onClick={() => {
              setInitialItems((prevItems) => {
                const updatedItems = prevItems.map((item, index) => {
                  if (index === 2) return { ...item, isActive: true };
                  return item;
                });
                return updatedItems;
              });
              setOpenModal(true);
            }}
            title="Done"
            mt={4}
          />
        </Box>
      </Stack>
      <TotalPriceModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        totalDropOffLocation={totalDropOffLocation}
        pickupInfo={pickupInfo}
        prices={prices}
        isLoading={isLoading}
        updatedArray={updatedArray}
      />
    </Box>
  );
};

export default ConfirmDeliveryDetails;
