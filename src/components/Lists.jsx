import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function Lists() {
  const movies = useSelector((state) => state.selectReducer.movies);
  console.log(movies);
  return (
    <ListGroup className="m-2">
      {movies ? (
        movies.map((movie) => (
          <ListGroup.Item key={movie.id}>
            {movie.name},{movie.country} &nbsp;{" "}
          </ListGroup.Item>
        ))
      ) : (
        <ListGroup.Item>No data</ListGroup.Item>
      )}
    </ListGroup>
  );
}

export default Lists;
