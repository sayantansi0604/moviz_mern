import React from 'react'
import NavB from './Navbar';
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
export default function Watchlist({ watchlist,removeW}) {
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
            <Col key={movie.id} xs={6} md={4} lg={2}>
              <Card className="movie-card">
                <Card.Img src={movie.image} />
                <div className="Delete-overlay">
                    <FaTrash 
                      className="Delete-icon" 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents the card's main onClick from firing
                        removeW(movie.id);
                      }} 
                    />
                </div>
                <Card.Body style={{ color: '#ffffff' }}>
                  {/* Added custom class for truncation */}
                  <Card.Title className="movie-title">{movie.title}</Card.Title>
                  <Card.Text>⭐ {movie.rating}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Your watchlist is empty. Go add some movies!</p>
        )}
      </Row>
      </Container>
    </div>
  );
}




