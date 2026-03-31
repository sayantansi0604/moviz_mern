import React from 'react';
import NavB from './Navbar';
import { Container } from 'react-bootstrap';

export default function Profile() {
  return (
    <div>
      <NavB />
      <Container className="mt-5 pt-5 text-white">
        <h1>User Profile</h1>
        <p>Welcome back, Sayantan!</p>
      </Container>
    </div>
  );
}