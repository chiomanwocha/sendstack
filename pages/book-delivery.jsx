import AppShell from "@/components/AppShell";
import ConfirmDeliveryDetails from "@/components/BookDelivery/ConfirmDeliveryDetails";
import DestinationForm from "@/components/BookDelivery/DestinationForm";
import PickupForm from "@/components/BookDelivery/PickupForm";
import useBookDeliveryPageLogic from "@/hooks/useBookDeliveryPageLogic";
import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  const {
    initialItems,
    setInitialItems,
    formIndex,
    setFormIndex,
    pickupInfo,
    setPickupInfo,
    totalDropOffLocation,
    setTotalDropOffLocation,
    recipientInfo,
    setRecipientInfo,
  } = useBookDeliveryPageLogic();

  return (
    <AppShell title="book delivery">
      <Box px={{ base: 5, md: 10 }} pb={10}>
        <Text mb={2}>Book delivery in 3 easy steps! &#128230;</Text>
        <Box display="flex" gap={2}>
          {initialItems.map((item) => (
            <React.Fragment key={item.item}>
              <Avatar
                name={item.item}
                size="sm"
                bg={item.isActive ? "brand.primary2" : "transparent"}
                color={item.isActive ? "white" : "brand.primary2"}
                border={item.isActive ? "transparent" : "1px solid #A412E2"}
              />
              {item.item !== "3" ? (
                <Box display="flex" alignItems="center">
                  <Box borderBottom="1px dashed #A412E2" width="15vw"></Box>
                </Box>
              ) : null}
            </React.Fragment>
          ))}
        </Box>
        <Box
          width={{ base: "100%", md: "80vw", lg: "40vw" }}
          overflowY="scroll"
          mt={5}
        >
          {formIndex === "1" ? (
            <PickupForm
              name="chioma nwocha"
              setFormIndex={setFormIndex}
              setInitialItems={setInitialItems}
              initialItems={initialItems}
              setPickupInfo={setPickupInfo}
              pickupInfo={pickupInfo}
            />
          ) : null}
          {formIndex === "2" ? (
            <DestinationForm
              setFormIndex={setFormIndex}
              setInitialItems={setInitialItems}
              initialItems={initialItems}
              totalDropOffLocation={totalDropOffLocation}
              setTotalDropOffLocation={setTotalDropOffLocation}
              recipientInfo={recipientInfo}
              setRecipientInfo={setRecipientInfo}
            />
          ) : null}
          {formIndex === "3" ? (
            <ConfirmDeliveryDetails
              setFormIndex={setFormIndex}
              setInitialItems={setInitialItems}
              initialItems={initialItems}
              totalDropOffLocation={totalDropOffLocation}
              setTotalDropOffLocation={setTotalDropOffLocation}
              pickupInfo={pickupInfo}
              recipientInfo={recipientInfo}
              setRecipientInfo={setRecipientInfo}
            />
          ) : null}
        </Box>
      </Box>
    </AppShell>
  );
};

export default Home;
