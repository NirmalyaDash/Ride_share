import React from 'react';
import Profile from './pages/Profile';
import RideBooking from './components/RideBooking';
import AuthForm from './components/AuthForm';
import RideHistory from './components/RideHistory';
import Home from './pages/Home';
import PaymentMethods from './components/PaymentMethods';
import Feedback from './components/Feedback';
import RideSharing from './components/RideSharing';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book-ride" element={<RideBooking />} />
          <Route path="/history" element={<RideHistory />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/payment" element={<PaymentMethods />} />
          <Route path="/share-ride" element={<RideSharing />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

