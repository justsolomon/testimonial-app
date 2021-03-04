import { ChakraProvider } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';
import customTheme from '../components/global/customTheme';
import LandingPage from '../pages/LandingPage';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
