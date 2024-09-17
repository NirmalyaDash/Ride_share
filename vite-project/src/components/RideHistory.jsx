import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';

const dummyRides = [
  { date: '2024-09-01', pickup: 'Location A', destination: 'Location B', fare: '$15', driver: 'John Doe' },
  { date: '2024-09-05', pickup: 'Location C', destination: 'Location D', fare: '$25', driver: 'Jane Doe' },
];

const RideHistory = () => {
  return (
    <Box maxW="lg" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading mb={6}>Ride History</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Pickup</Th>
            <Th>Destination</Th>
            <Th>Fare</Th>
            <Th>Driver</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dummyRides.map((ride, index) => (
            <Tr key={index}>
              <Td>{ride.date}</Td>
              <Td>{ride.pickup}</Td>
              <Td>{ride.destination}</Td>
              <Td>{ride.fare}</Td>
              <Td>{ride.driver}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default RideHistory;
