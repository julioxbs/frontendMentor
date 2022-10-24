import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./components/Home";

export function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}
