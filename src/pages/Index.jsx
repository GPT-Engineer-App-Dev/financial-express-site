import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={10} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Main Headline: Breaking News
        </Heading>
        <Text fontSize="lg">
          This is the main headline section where the most important news will be displayed.
        </Text>
      </Box>

      {/* Featured Articles Section */}
      <VStack spacing={8} p={10} align="stretch">
        <Heading as="h3" size="lg" mb={4}>
          Featured Articles
        </Heading>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article 1</Heading>
          <Text mt={4}>This is a brief description of the first featured article.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article 2</Heading>
          <Text mt={4}>This is a brief description of the second featured article.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article 3</Heading>
          <Text mt={4}>This is a brief description of the third featured article.</Text>
        </Box>
      </VStack>

      {/* Footer */}
      <Box bg="gray.800" color="white" p={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact us: contact@financialtimes.com</Text>
          <HStack spacing={4}>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaLinkedin /></Link>
          </HStack>
          <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;