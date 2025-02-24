import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  './index.css'
import { ChakraProvider} from "@chakra-ui/react";
import theme from "./theme/theme.ts";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider theme={theme}>
    <App />
      </ChakraProvider>
  </StrictMode>,
)

export default App;