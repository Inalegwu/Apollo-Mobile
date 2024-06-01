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
      <Text color="accent">Hello World</Text>
      <Feather name="key" size={20} />
      <Box
        width={100}
        height={100}
        backgroundColor="accent"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        padding="s"
      >
        <Text color="primary">Keychain ID</Text>
      </Box>
    </Box>
  );
}
