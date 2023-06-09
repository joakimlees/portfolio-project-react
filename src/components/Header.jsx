import * as S from "./styles/index";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <S.Header>
      <Link to="/">
        <div className="logo">JLee</div>
      </Link>
    </S.Header>
  );
}
