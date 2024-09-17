import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  Text,
} from '@chakra-ui/react';

const RideBooking = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [rideType, setRideType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage('');
    
    // Input validation
    if (pickup === destination) {
      setErrorMessage('Pickup and destination locations cannot be the same.');
      return;
    }

    // Simulate a booking API call
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setConfirmationMessage(`Ride successfully booked from ${pickup} to ${destination} (${rideType})!`);

      // Clear the form
      setPickup('');
      setDestination('');
      setRideType('');
    }, 2000); // Simulate a 2-second delay for the booking process
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading mb={6}>Book a Ride</Heading>

      {/* Error message */}
      {errorMessage && (
        <Text color="red.500" mb={4}>
          {errorMessage}
        </Text>
      )}

      {/* Confirmation message */}
      {confirmationMessage && (
        <Text color="green.500" mb={4}>
          {confirmationMessage}
        </Text>
      )}

      <form onSubmit={handleSubmit}>
        <FormControl id="pickup" isRequired>
          <FormLabel>Pickup Location</FormLabel>
          <Input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter pickup location"
          />
        </FormControl>

        <FormControl id="destination" mt={4} isRequired>
          <FormLabel>Destination Location</FormLabel>
          <Input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination location"
          />
        </FormControl>

        <FormControl id="rideType" mt={4} isRequired>
          <FormLabel>Ride Type</FormLabel>
          <Select
            placeholder="Select ride type"
            value={rideType}
            onChange={(e) => setRideType(e.target.value)}
          >
            <option value="economy">Economy</option>
            <option value="premium">Premium</option>
          </Select>
        </FormControl>

        <Button
          type="submit"
          colorScheme="teal"
          mt={6}
          width="full"
          isLoading={isLoading}
        >
          Confirm Booking
        </Button>
      </form>
    </Box>
  );
};

export default RideBooking;
