import React from 'react';
import './Hero.css';

import {
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiTypescript,
} from 'react-icons/si';
import { FaGitSquare } from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr';
import { Typewriter } from 'react-simple-typewriter';
import { Box, Flex, Img, Link, Stack, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <>
      <Box className="hero" w="100%" bg="blackAlpha.100" id="home">
        <Flex
          gap="5rem"
          align="center"
          justify="space-between"
          className="container f_flex top"
        >
          <div className="left top">
            <Text as="h3">WELCOME TO MY WORLD</Text>
            <Text as="h1">
              Hi, <span> Akogwu Emmanuel</span> here.
            </Text>
            <h2>
              A
              <Text color="#ff014f !important" as="span">
                <Typewriter
                  words={[
                    ' Front End ',
                    ' React ',
                    ' WEB 3',
                    ' JavaScript ',
                    ' Block Chain',
                    ' Software',
                  ]}
                  loop
                  cursor
                  cursorStyle=" "
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Text>
              <span style={{ color: 'inherit' }}>Developer</span>
            </h2>

            <p>
              A passionate and Innovative Front End Developer with solid
              experience in building application’s with excellent user
              experience and user Interface so as to effectively and
              aesthetically deliver information to users. <br /> some of my
              mostly used tools are Recatjs, JavaScript, Chakra UI,
              Tailwind-CSS, HTML5, CSS3, TypeScript, ReactNative, Version
              control(Git and GitHub) Bootstrap to mention a few.
            </p>
          </div>

          <Box className="right">
            <Box className="right_img">
              <Img src="images/developer.jpg" alt="" />
            </Box>
          </Box>
        </Flex>
        <Flex
          py="10"
          bg="green.100"
          gap="3rem"
          justify="space-between"
          direction={['column', '', 'row']}
          className="hero_btn container"
        >
          <Stack flex={[1]}>
            <Text fontWeight="600" fontSize="2.5rem !important" py="8">
              Tools
            </Text>
            <Flex wrap="wrap" gap="2.5rem">
              <button className="btn_shadow">
                <i class="fa-brands fa-react"></i>
              </button>
              <button className="btn_shadow">
                <i class="fa-brands fa-js-square"></i>
              </button>
              <button className="btn_shadow">
                <i class="fa-brands fa-css3-alt"></i>
              </button>
              <button className="btn_shadow">
                <SiTailwindcss />
              </button>
              <button className="btn_shadow">
                <SiRedux />
              </button>
              <button className="btn_shadow">
                <Img w="45px" src="images/chakra-ui.svg" alt="chakra-ui" />
              </button>
              <button className="btn_shadow">
                <SiBootstrap />
              </button>
              <button className="btn_shadow">
                <SiTypescript />
              </button>
              <button className="btn_shadow">
                <GrGraphQl />
              </button>
              <button className="btn_shadow">
                <FaGitSquare />
              </button>
            </Flex>
          </Stack>
          <Stack flex={[0.7]} bg="red.100">
            <Text fontWeight="600" fontSize="2.5rem !important" py="8">
              Socials
            </Text>
            <Flex wrap="wrap" gap="2.5rem" className="button">
              <Link href="github.com/akogwu24">
                <button className="btn_shadow">
                  <i class="fa-brands fa-github"></i>
                </button>
              </Link>
              <Link href="github.com/akogwu24">
                <button className="btn_shadow">
                  <i class="fa-brands fa-twitter"></i>
                </button>
              </Link>
              <Link href="github.com/akogwu24">
                <button className="btn_shadow">
                  <i class="fa-brands fa-linkedin-in"></i>
                </button>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Hero;
