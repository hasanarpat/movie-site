import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./styles.css";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [liked, setLiked] = useState(true);
  let url = "http://localhost:3000/movie/";
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
    <Container className="container-fluid">
      <h3
        className="text-light text-center"
        style={{ marginBottom: "2rem", marginTop: "1rem" }}
      >
        Best Of All Times
      </h3>
      <Row
        style={{
          marginInline: "auto",
        }}
      >
        {movies.length >= 0 &&
          movies.map((item) => {
            if (item) {
              return (
                <Col
                  key={item.imdbID}
                  style={{
                    marginBottom: "3rem",
                    paddingInline: "auto",
                  }}
                >
                  <Card
                    className="text-left text-dark movie-card"
                    bg="warning"
                    style={{ width: "16rem", minHeight: "28rem" }}
                  >
                    <Card.Img
                      style={{ height: "10rem" }}
                      variant="top"
                      src={item.Images[0]}
                    />
                    <Card.Body>
                      <Card.Title className="text-danger text-center">
                        {item.Title}
                      </Card.Title>
                      <Card.Text>
                        <b>Director: </b>
                        {item.Director}
                      </Card.Text>
                      <Card.Text>
                        <b>Actors: </b>
                        {item.Actors}.
                      </Card.Text>
                      <Card.Text>
                        <b>IMDB Rating: </b>
                        {item.imdbRating}.
                      </Card.Text>
                      {item.totalSeasons && (
                        <Card.Text>
                          <b>Seasons: </b>
                          {item.totalSeasons}.
                        </Card.Text>
                      )}
                      <Container className="text-center">
                        <i
                          class="bi bi-star-fill  "
                          style={{ fontSize: "1.5rem", color: "green" }}
                        ></i>
                        <i
                          class="bi bi-star-fill  "
                          style={{ fontSize: "1.5rem", color: "green" }}
                        ></i>
                        <i
                          class="bi bi-star-half"
                          style={{ fontSize: "1.5rem", color: "green" }}
                        ></i>
                      </Container>
                      <Card.Text>
                        <b>Year: {item.Year}</b>
                      </Card.Text>
                      <Card.Text>
                        <b>Genre: </b>
                        {item.Genre}
                      </Card.Text>
                      <Card.Text>
                        <b>Awards: </b>
                        {item.Awards}
                      </Card.Text>{" "}
                      <Container
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <p
                          style={{
                            display: "inline-block",
                            marginRight: ".5rem",
                          }}
                        >
                          Add to favorites
                        </p>
                        {liked ? (
                          <i
                            class="bi bi-heart-fill btn-danger btn"
                            style={{ fontSize: ".8rem" }}
                          ></i>
                        ) : (
                          <i class="bi bi-heart"></i>
                        )}
                      </Container>
                      <a href={url + item.imdbID}>See More Details...</a>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          })}
      </Row>
    </Container>
  );
};

export default Movies;
