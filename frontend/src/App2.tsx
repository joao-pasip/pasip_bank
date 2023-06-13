import { ChakraProvider } from "@chakra-ui/react";
import { Card } from "./components/Card/Card";


function App2() {
  return (
    <ChakraProvider>
      <Card />
    </ChakraProvider>
  );
}

export default App2;
