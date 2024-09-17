import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Textarea, Heading } from '@chakra-ui/react';

const Feedback = () => {
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    // Logic to submit feedback
    console.log('Feedback submitted:', { rating, comments });
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading mb={6}>Leave Feedback</Heading>
      <FormControl id="rating" isRequired>
        <FormLabel>Rating (1-5)</FormLabel>
        <Input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Enter rating"
        />
      </FormControl>
      <FormControl id="comments" mt={4}>
        <FormLabel>Comments</FormLabel>
        <Textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Leave your comments"
        />
      </FormControl>
      <Button colorScheme="teal" mt={6} onClick={handleSubmit} width="full">
        Submit Feedback
      </Button>
    </Box>
  );
};

export default Feedback;
