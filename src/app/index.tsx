import { Box, Text } from "@atoms";
import { Feather } from "@expo/vector-icons";
import React from "react";

export default function Page() {
  return (
    <Box
      width="100%"
      flex={1}
      backgroundColor="background"
      alignItems="center"
      justifyContent="center"
    >
      <Text>Hello World</Text>
      <Feather name="key" size={20} />
    </Box>
  );
}
