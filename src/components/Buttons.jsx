import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch } from "react-redux";
import {
  SELECT_ALL,
  SELECT_COUNTRY,
  SELECT_HIND,
  SELECT_USA,
} from "../redux/constant/selectConstant";

function Buttons() {
  const dispatch = useDispatch();

  return (
    <ButtonGroup aria-label="Basic example" className="m-2">
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: SELECT_ALL })}
      >
        All
      </Button>
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: SELECT_COUNTRY, payload: { country: "Hind" } })}
      >
        Hind
      </Button>
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: SELECT_COUNTRY, payload: { country: "Amerika" } })}
      >
        Amerika
      </Button>
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: SELECT_COUNTRY, payload: { country: "Xitoy" } })}
      >
        Xitoy
      </Button>
    </ButtonGroup>
  );
}

export default Buttons;
