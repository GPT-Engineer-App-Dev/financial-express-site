import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">Financial Times</Heading>
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
        <Heading size="2xl" mb={4}>Main Headline</Heading>
        <Text fontSize="xl">This is the main headline section where the top news story will be featured.</Text>
      </Box>

      {/* Featured Articles Section */}
      <VStack spacing={8} p={10} align="stretch">
        <Heading size="lg">Featured Articles</Heading>
        <Box bg="white" p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Article 1</Heading>
          <Text mt={4}>Summary of the first featured article. This is a brief description to entice readers to click and read more.</Text>
        </Box>
        <Box bg="white" p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Article 2</Heading>
          <Text mt={4}>Summary of the second featured article. This is a brief description to entice readers to click and read more.</Text>
        </Box>
        <Box bg="white" p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Article 3</Heading>
          <Text mt={4}>Summary of the third featured article. This is a brief description to entice readers to click and read more.</Text>
        </Box>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} textAlign="center">
        <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
        <HStack spacing={4} justify="center" mt={2}>
          <Link href="#" color="white">Contact Us</Link>
          <Link href="#" color="white">Privacy Policy</Link>
          <Link href="#" color="white">Terms of Service</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;