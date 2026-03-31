import React, { useState, useEffect } from "react"; // 1. Add hooks
import { FaPlus } from "react-icons/fa";
import { CameraReels } from 'react-bootstrap-icons';
import { Container, Row, Col, Card } from "react-bootstrap";
import Banner from './Banner';

export default function MoviePortal({ addW }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies/all')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(err => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div>
      <Banner/>
      <Container className="mt-4">
          <div className="Title">
            <CameraReels className="IconT"/>
            <h1 className="DesignT">Sayantan's Movie Portal</h1>
          </div>
        <Row className="g-3">
          {/* 4. This now maps over the 'movies' state from the DB! */}
          {movies.map((movie) => (
            <Col key={movie._id || movie.id} xs={6} md={4} lg={2}>
              <Card className="movie-card">
                <div className="card-img-wrapper">
                  <div className="poster-container">
                    <Card.Img variant="top" src={movie.image} alt={movie.title} className="movie-poster"/>
                  </div>
                  <div className="plus-overlay">
                    <FaPlus 
                      className="plus-icon" 
                      onClick={(e) => {
                        e.stopPropagation();
                        addW(movie); 
                      }} 
                    />
                  </div>
                </div>
                <Card.Body style={{ color: '#ffffff' }}>
                  <Card.Title className="movie-title">{movie.title}</Card.Title>
                  <Card.Text>⭐ {movie.rating}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}