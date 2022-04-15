import React, { useState } from 'react';
import './header.css';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Avatar,
  Flex,
  HStack,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const Header = () => {
  // fixed Header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 0);
  });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <HStack>
            <Avatar
              src="https://drive.google.com/file/d/1zVAZnk5gSJY7MXMe8MXu8VN77vsINmge/view?usp=sharing"
              name="Akogwu Emmanuel"
              size="lg"
            />
            <Stack
              fontWeight="bold"
              fontSize="1.2rem"
              fontFamily="Rubik Moonrocks"
            >
              <Text>Akogwu</Text>
              <Text m="0 !important">Emmanuel</Text>
            </Stack>
          </HStack>

          <Flex as="nav" className="navlink">
            <UnorderedList
              alignItems="center"
              className={Mobile ? 'nav-links-mobile' : 'link f_flex capitalize'}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">home</a>
              </li>

              <li>
                <a href="#portfolio">portfolio</a>
              </li>

              <li>
                <a href="#blog">blog</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <ColorModeSwitcher justifySelf="flex-end" />
              </li>
            </UnorderedList>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </Flex>
        </div>
      </header>
    </>
  );
};

export default Header;
