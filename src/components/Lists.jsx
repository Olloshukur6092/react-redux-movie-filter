import { Button, Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Lists.css";

function Lists() {
  const movies = useSelector((state) => state.select.movies);
  return (
    <>
      <div className="row">
        {movies.length ? (
          movies.map((movie) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={movie.id}>
              <Card className="shadow mb-2">
                <Card.Img
                  variant="top"
                  src={movie.image}
                  className="img-fluid images"
                />
                <Card.Body>
                  <Card.Title>Nomi: {movie.name}</Card.Title>
                  <Card.Title>Davlati: {movie.country}</Card.Title>
                  <Button variant="primary">Toshoma qilish</Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="text-center display-5 my-3 text-danger">No movie</div>
        )}
      </div>
    </>
  );
}

export default Lists;
