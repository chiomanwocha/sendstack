import {
  Box,
  CloseButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import DisplayDetails from "../DisplayDetails";
import Asteriks from "../Asteriks";
import AppButton from "../AppButton";
import useDestinationFormLogic from "@/hooks/components/BookDelivery/useDestinationFormLogic";

const DestinationForm = ({
  setFormIndex,
  setInitialItems,
  totalDropOffLocation,
  setTotalDropOffLocation,
  recipientInfo,
  setRecipientInfo,
}) => {
  const {
    inputDetails,
    deleteLocation,
    handleSubmitForm,
    handlePrevious,
    handleNext,
  } = useDestinationFormLogic(
    totalDropOffLocation,
    setTotalDropOffLocation,
    recipientInfo,
    setRecipientInfo,
    setFormIndex,
    setInitialItems
  );

  return (
    <>
      <Box
        display="flex"
        gap={3}
        flexWrap="wrap"
        maxHeight="25vh"
        overflowY="scroll"
        mt={5}
      >
        {totalDropOffLocation.length <= 0 ? (
          <Box
            textAlign="center"
            width="fit-content"
            m="0 auto"
            color="brand.primary2"
          >
            <Text fontSize="18px" fontWeight="700">
              When you add a location
            </Text>
            <Text>It will be shown here &#128717;.</Text>
          </Box>
        ) : (
          <>
            {totalDropOffLocation.map((item, index) => (
              <Box
                bg="white"
                width="fit-content"
                padding={2}
                borderRadius="md"
                key={item.address}
              >
                <Box display="flex" gap={2} bg="white">
                  <Box
                    w={5}
                    h={5}
                    fontSize="sm"
                    bg="brand.primary3"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    fontWeight="600"
                  >
                    <Text>{index + 1}</Text>
                  </Box>

                  <Box display="flex" gap={5}>
                    <DisplayDetails
                      name={item.recipientName}
                      address={item.address}
                      phoneNumber={item.recipientNumber}
                      altPhoneNumber={item.altRecipientNumber}
                    />
                    <CloseButton
                      size="sm"
                      color="red"
                      _hover={{ bg: "transparent" }}
                      onClick={() => deleteLocation(index)}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </>
        )}
      </Box>
      <Box bg="brand.primary" mt={10} borderRadius="md" padding={5}>
        <Box>
          <Box as="form" mt={2} onSubmit={(e) => handleSubmitForm(e)}>
            <Stack spacing={4}>
              {inputDetails.map((item) => (
                <Box key={item.title}>
                  <Text mb={2}>
                    {item.title} {item.required ? <Asteriks /> : null}
                  </Text>
                  <Input
                    outline="none"
                    focusBorderColor="#E2E8F0"
                    bg="white"
                    placeholder={item.placeholder}
                    _placeholder={{ opacity: 0.3 }}
                    onChange={(e) => {
                      setRecipientInfo({
                        ...recipientInfo,
                        [item.stateTag]: e.target.value,
                      });
                    }}
                    type={
                      item.title === "Recipient Number" ||
                      item.title === "Recipient Alternative Number"
                        ? "number"
                        : "text"
                    }
                    value={recipientInfo[item.stateTag]}
                    required={item.required}
                  />
                </Box>
              ))}
            </Stack>
            <AppButton mt={4} width="100%" type="submit" title="Add" />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={5}>
          <AppButton mt={4} onClick={handlePrevious} title="Previous" />
          <AppButton
            mt={4}
            isDisabled={totalDropOffLocation.length <= 0}
            onClick={handleNext}
            title="Next"
          />
        </Box>
      </Box>
    </>
  );
};

export default DestinationForm;
