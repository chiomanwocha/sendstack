import { Box, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import Asteriks from "../Asteriks";
import AppButton from "../AppButton";
import usePickupFormLogic from "@/hooks/components/BookDelivery/usePickupFormLogic";

const PickupForm = ({
  setFormIndex,
  setInitialItems,
  pickupInfo,
  setPickupInfo,
}) => {
  const { today, handleSubmit, inputDetails } = usePickupFormLogic(
    setPickupInfo,
    pickupInfo,
    setFormIndex,
    setInitialItems
  );

  return (
    <Box
      as="form"
      bg="brand.primary"
      borderRadius="md"
      padding={5}
      onSubmit={(e) => handleSubmit(e)}
    >
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
              type={
                item.title === "Pick-up Alternative Number" ||
                item.title === "Pick-up Number"
                  ? "number"
                  : "text"
              }
              placeholder={item.placeholder}
              _placeholder={{ opacity: 0.3 }}
              onChange={(e) =>
                setPickupInfo({
                  ...pickupInfo,
                  [item.stateTag]: e.target.value,
                })
              }
              value={pickupInfo[item.stateTag]}
              maxLength={
                item.title === "Pick-up Alternative Number" ||
                item.title === "Pick-up Number"
                  ? "11"
                  : "50"
              }
            />
          </Box>
        ))}
        <Box>
          <Text mb={2}>
            Pick-up Date <Asteriks />
          </Text>
          <Input
            outline="none"
            focusBorderColor="#E2E8F0"
            bg="white"
            placeholder="Select Date"
            size="md"
            type="date"
            min={today}
            value={pickupInfo.pickupDate}
            onChange={(e) =>
              setPickupInfo({ ...pickupInfo, pickupDate: e.target.value })
            }
          />
        </Box>
        <Box>
          <Text mb={2}>
            Note <Asteriks />{" "}
          </Text>
          <Textarea
            outline="none"
            focusBorderColor="#E2E8F0"
            bg="white"
            placeholder="Enter your note (if any)"
            _placeholder={{ opacity: 0.3, color: "brand,grey" }}
            value={pickupInfo.note}
            onChange={(e) =>
              setPickupInfo({ ...pickupInfo, note: e.target.value })
            }
            required
          ></Textarea>
        </Box>
      </Stack>
      <Box display="flex" justifyContent="end">
        <AppButton
          isDisabled={
            !pickupInfo.address ||
            !pickupInfo.pickupName ||
            !pickupInfo.pickupNumber ||
            !pickupInfo.pickupDate ||
            !pickupInfo.altPickupNumber ||
            !pickupInfo.note
          }
          title="Next"
          position="relative"
          zIndex={100}
          mt={5}
          type="submit"
        />
      </Box>
    </Box>
  );
};

export default PickupForm;
