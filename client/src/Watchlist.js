import React from 'react'
import NavB from './Navbar';
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

export default function Watchlist({ watchlist, removeW }) {
  return (
    <div>
      <NavB/>
      <Container className="mt-4">
          <div className="Title">
            <h1 className="HeadW">My Watchlist</h1>
          </div>
        <Row className="g-3 mt-3">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            /* FIX 1: Use _id || id for the key */
            <Col key={movie._id || movie.id} xs={6} md={4} lg={2}>
              <Card className="movie-card">
                <Card.Img src={movie.image} />
                <div className="Delete-overlay">
                    <FaTrash 
                      className="Delete-icon" 
                      onClick={(e) => {
                        e.stopPropagation(); 
                        /* FIX 2: Send the correct ID to the remove function */
                        removeW(movie._id || movie.id);
                      }} 
                    />
                </div>
                <Card.Body style={{ color: '#ffffff' }}>
                  <Card.Title className="movie-title">{movie.title}</Card.Title>
                  <Card.Text>⭐ {movie.rating}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
            Your watchlist is empty. Go add some movies!
          </p>
        )}
      </Row>
      </Container>
    </div>
  );
}