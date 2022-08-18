import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./styles.css";
export const Banner = () => {
  const [index, setIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          console.log(result.length);
          setMovies(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ padding: "1.25rem" }}
    >
      <Carousel.Item>
        <Container
          className="carousel"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "1.25rem",
          }}
        >
          <Card style={{ width: "16rem" }} bg="dark" className="text-light">
            <Card.Img variant="top" src={movies[0]?.Images[0]} />
            <Card.Body>
              <Card.Title className="text-center">
                {movies[0]?.Title}
              </Card.Title>
              <Card.Text>{movies[0]?.Plot}</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }} bg="dark" className="text-light">
            <Card.Img variant="top" src={movies[1]?.Images[0]} />
            <Card.Body>
              <Card.Title className="text-center">
                {movies[1]?.Title}
              </Card.Title>
              <Card.Text>{movies[1]?.Plot}</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }} bg="dark" className="text-light">
            <Card.Img variant="top" src={movies[2]?.Images[0]} />
            <Card.Body>
              <Card.Title className="text-center">
                {movies[2]?.Title}
              </Card.Title>
              <Card.Text>{movies[2]?.Plot}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container
          className="carousel"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "1.25rem",
          }}
        >
          <Card style={{ width: "16rem" }} bg="dark" className="text-light">
            <Card.Img variant="top" src={movies[3]?.Images[0]} />
            <Card.Body>
              <Card.Title className="text-center">
                {movies[3]?.Title}
              </Card.Title>
              <Card.Text>{movies[3]?.Plot}</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }} bg="dark" className="text-light">
            <Card.Img variant="top" src={movies[4]?.Images[0]} />
            <Card.Body>
              <Card.Title className="text-center">
                {movies[4]?.Title}
              </Card.Title>
              <Card.Text>{movies[4]?.Plot}</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }} bg="dark" className="text-light">
            <Card.Img variant="top" src={movies[5]?.Images[0]} />
            <Card.Body>
              <Card.Title className="text-center">
                {movies[5]?.Title}
              </Card.Title>
              <Card.Text>{movies[5]?.Plot}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container
          className="carousel"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "1.25rem",
          }}
        >
          <Card style={{ width: "16rem" }} bg="dark" className="text-light">
            <Card.Img variant="top" src={movies[6]?.Images[0]} />
            <Card.Body>
              <Card.Title className="text-center">
                {movies[6]?.Title}
              </Card.Title>
              <Card.Text>{movies[6]?.Plot}</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }} bg="dark" className="text-light">
            <Card.Img variant="top" src={movies[7]?.Images[0]} />
            <Card.Body>
              <Card.Title className="text-center">
                {movies[7]?.Title}
              </Card.Title>
              <Card.Text>{movies[7]?.Plot}</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }} bg="dark" className="text-light">
            <Card.Img variant="top" src={movies[8]?.Images[0]} />
            <Card.Body>
              <Card.Title className="text-center">
                {movies[8]?.Title}
              </Card.Title>
              <Card.Text>{movies[8]?.Plot}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};
export default Banner;
