import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Figure from "react-bootstrap/Figure";
import Table from "react-bootstrap/Table";
const MovieDetails = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch("http://localhost:8080/movie/" + id)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setMovie(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  console.log(id);
  if (movie?.Images) {
    return (
      <Container>
        <Figure>
          <Figure.Image
            alt={id}
            src={movie?.Images[0]}
            style={{
              width: "75vw",
              marginInline: "auto",
            }}
          />
          <Figure.Caption
            className="text-light text-center"
            style={{ fontSize: "1.25rem" }}
          >
            {movie.Plot}
          </Figure.Caption>
        </Figure>
        <Container>
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <td>Actors</td>
                <td>{movie.Actors}</td>
              </tr>
              <tr>
                <td>Awards</td>
                <td>{movie.Awards}</td>
              </tr>
              <tr>
                <td>Director</td>
                <td colSpan={2}>{movie.Director}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td colSpan={2}>{movie.Genre}</td>
              </tr>
              <tr>
                <td>Metascore</td>
                <td colSpan={2}>{movie.Metascore}</td>
              </tr>
              <tr>
                <td>Released</td>
                <td colSpan={2}>{movie.Released}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td colSpan={2}>{movie.Type}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td colSpan={2}>{movie.Year}</td>
              </tr>
              <tr>
                <td>IMDB Rating</td>
                <td colSpan={2}>{movie.imdbRating}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default MovieDetails;
