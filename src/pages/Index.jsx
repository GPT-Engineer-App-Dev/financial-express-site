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
          <Link href="#" color="white">Culture</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={8} textAlign="center">
        <Heading size="2xl" mb={4}>Main Headline</Heading>
        <Text fontSize="lg">This is the main headline section where the top news story will be highlighted.</Text>
      </Box>

      {/* Featured Articles Section */}
      <VStack spacing={8} p={8}>
        <Heading size="lg">Featured Articles</Heading>
        <HStack spacing={8} wrap="wrap" justify="center">
          <Box bg="white" p={4} shadow="md" borderWidth="1px" width="300px">
            <Heading size="md" mb={2}>Article 1</Heading>
            <Text>This is a brief description of the first featured article.</Text>
          </Box>
          <Box bg="white" p={4} shadow="md" borderWidth="1px" width="300px">
            <Heading size="md" mb={2}>Article 2</Heading>
            <Text>This is a brief description of the second featured article.</Text>
          </Box>
          <Box bg="white" p={4} shadow="md" borderWidth="1px" width="300px">
            <Heading size="md" mb={2}>Article 3</Heading>
            <Text>This is a brief description of the third featured article.</Text>
          </Box>
        </HStack>
      </VStack>

      {/* Footer */}
      <Box bg="gray.800" color="white" p={4} textAlign="center">
        <Text>Contact us: contact@financialtimes.com</Text>
        <HStack spacing={4} justify="center" mt={2}>
          <Link href="#" color="white">Privacy Policy</Link>
          <Link href="#" color="white">Terms of Service</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;