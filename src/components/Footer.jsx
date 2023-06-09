import * as S from "./styles/index";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <S.Footer>
      <Link to="https://github.com/joakimlees" target="_blank" rel="noopener noreferrer">
        My Github profile
      </Link>
    </S.Footer>
  );
}
