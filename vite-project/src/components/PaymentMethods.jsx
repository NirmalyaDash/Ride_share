import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, Stack } from '@chakra-ui/react';

const PaymentMethods = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleAddPayment = () => {
    // Logic to add payment method
    console.log('Payment method added:', { cardNumber, expiryDate, cvv });
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading mb={6}>Manage Payment Methods</Heading>
      <Stack spacing={4}>
        <FormControl id="cardNumber" isRequired>
          <FormLabel>Card Number</FormLabel>
          <Input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter your card number"
          />
        </FormControl>
        <FormControl id="expiryDate" isRequired>
          <FormLabel>Expiry Date</FormLabel>
          <Input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />
        </FormControl>
        <FormControl id="cvv" isRequired>
          <FormLabel>CVV</FormLabel>
          <Input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="Enter CVV"
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleAddPayment} width="full">
          Add Payment Method
        </Button>
      </Stack>
    </Box>
  );
};

export default PaymentMethods;
