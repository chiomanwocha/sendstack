import { Box, Avatar, Text, Icon, Tooltip } from "@chakra-ui/react";
import {
  SearchIcon,
  PhoneIcon,
  ChatIcon,
  CalendarIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import useColorReducer from "@/utils/useColorReducer";
import convertDateForm from "@/utils/convertDateForm";

const DisplayDetails = ({
  name,
  address,
  phoneNumber,
  altPhoneNumber,
  note,
  date,
  estimatedPickupWindow,
  estimatedDropoffWindow,
  status,
  ...rest
}) => {
  const { colorReducer } = useColorReducer();
  return (
    <>
      <Box {...rest}>
        {status ? (
          <Box display="flex" justifyContent="end">
            <Text
              bg={colorReducer(status).bg}
              color={colorReducer(status).color}
              width="fit-content"
              borderRadius="full"
              px={2}
              border="1px solid"
              fontSize="sm"
            >
              {status?.charAt(0) + status?.slice(1).toLowerCase()}
            </Text>
          </Box>
        ) : null}
        <Box display="flex" gap={2} alignItems="center">
          <Avatar size="2xs" bg="black" />:<Text>{name}</Text>
        </Box>
        <Box display="flex" gap={2} alignItems="center">
          <Tooltip label="Location">
            <Icon size="sm" as={SearchIcon} />
          </Tooltip>
          :<Text overflow="auto">{address}</Text>
        </Box>
        <Box display="flex" gap={2}>
          <Tooltip label="Number">
            <Icon as={PhoneIcon} />
          </Tooltip>
          :
          <Box>
            <Text>{phoneNumber}</Text>
            <Text>{altPhoneNumber}</Text>
          </Box>
        </Box>
        {note ? (
          <Box display="flex" gap={2} alignItems="center">
            <Tooltip label="Note">
              <Icon as={ChatIcon} />
            </Tooltip>
            :<Text overflow="auto">{note}</Text>
          </Box>
        ) : null}
        {date ? (
          <Box display="flex" gap={2} alignItems="center">
            <Tooltip label="Pick-up Date">
              <Icon as={CalendarIcon} />
            </Tooltip>
            :<Text overflow="auto">{convertDateForm(date)}</Text>
          </Box>
        ) : null}
        {estimatedPickupWindow && estimatedDropoffWindow ? (
          <Box display="flex" gap={2} mt={2} alignItems="center">
            <Tooltip label="Estimated Time Window">
              <Icon as={TimeIcon} />
            </Tooltip>
            :
            <Box overflow="auto">
              <Text fontWeight="700">
                From{" "}
                <Text as="span" fontWeight="normal">
                  {convertDateForm(estimatedPickupWindow)}
                </Text>
              </Text>
              <Text fontWeight="700">
                To{" "}
                <Text as="span" fontWeight="normal">
                  {convertDateForm(estimatedDropoffWindow)}
                </Text>
              </Text>
            </Box>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default DisplayDetails;
