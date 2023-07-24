import { Skeleton, Stack } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Stack my={10}>
      {[1, 2, 3, 4].map((line) => (
        <Skeleton
          height="30px"
          startColor="#F5FBFF"
          endColor="#fbefff"
          key={line}
        />
      ))}
    </Stack>
  );
};

export default Loader;
