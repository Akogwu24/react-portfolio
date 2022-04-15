import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import Header from './component/Head/Header';
import Hero from './component/Hero/Hero';
import Portfolio from './component/Portfolio/Portfolio';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer';

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          fontFamily: 'Raleway, sans-serif',
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
