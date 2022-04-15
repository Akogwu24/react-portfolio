import { Avatar, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      my="20"
      py="10"
      bg="#eee"
      justify="space-evenly"
      align="center"
    >
      <Avatar
        size="lg"
        name="Prosper Otemuyiwa"
        src="https://bit.ly/prosper-baba"
      />
      <Text as="h4" fontSize="1.5rem">
        © 2021. made with &#65039; by Akogwu Emmanuel
      </Text>
    </Flex>
  );
};

export default Footer;
