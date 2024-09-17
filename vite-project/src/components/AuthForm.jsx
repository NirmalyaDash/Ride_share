import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Heading } from '@chakra-ui/react';

const AuthForm = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login/register logic
    console.log('AuthForm Submitted', { email, password });
  };

  return (
    <Box maxW="sm" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading mb={6}>{mode === 'login' ? 'Log In' : 'Register'}</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password" mt={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={6} width="full">
          {mode === 'login' ? 'Log In' : 'Register'}
        </Button>
      </form>
    </Box>
  );
};

export default AuthForm;
