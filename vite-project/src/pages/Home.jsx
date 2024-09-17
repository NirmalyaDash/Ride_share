import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mb={5}>
        Welcome to Ride Sharing App
      </Heading>
      <Text fontSize="lg" mb={6}>
        Book your rides with ease and track your ride history!
      </Text>
      <Button colorScheme="teal" size="lg" as={Link} to="/book-ride">
        Book a Ride
      </Button>
      <Button colorScheme="blue" size="lg" as={Link} to="/history" ml={4}>
        View Ride History
      </Button>
    </Box>
  );
};

export default Home;
