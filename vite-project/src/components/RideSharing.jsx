import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, Heading } from '@chakra-ui/react';

const RideSharing = () => {
  const [rideId, setRideId] = useState('');
  const [shareWith, setShareWith] = useState('');

  const handleShareRide = () => {
    // Logic to share the ride
    console.log('Ride shared:', { rideId, shareWith });
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading mb={6}>Share a Ride</Heading>
      <FormControl id="rideId" isRequired>
        <FormLabel>Ride ID</FormLabel>
        <Input
          type="text"
          value={rideId}
          onChange={(e) => setRideId(e.target.value)}
          placeholder="Enter ride ID"
        />
      </FormControl>
      <FormControl id="shareWith" mt={4} isRequired>
        <FormLabel>Share with</FormLabel>
        <Input
          type="text"
          value={shareWith}
          onChange={(e) => setShareWith(e.target.value)}
          placeholder="Enter user email or phone"
        />
      </FormControl>
      <Button colorScheme="teal" mt={6} onClick={handleShareRide} width="full">
        Share Ride
      </Button>
    </Box>
  );
};

export default RideSharing;
