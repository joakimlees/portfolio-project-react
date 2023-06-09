import * as S from "./styles/index";
import joakim from "../utils/images/joakim.jpg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <S.Home>
      <h1>
        <span className="header-line1">Are You looking for</span>
        <span className="header-line2">Joakim Lee</span>
        <span className="header-line3">Front-End Developer</span>
      </h1>
      <section className="about-section">
        <h2>About me</h2>
        <div className="image-wrapper">
          <img src={joakim} alt="" />
        </div>
        <article>
          <h3>Hi I'm Joakim Lee</h3>
          <ul>
            <li>
              Nationality: <span>Norwegian</span>
            </li>
            <li>
              Location: <span>Oslo, Norway</span>
            </li>
            <li>
              Age: <span>32yo</span>
            </li>
          </ul>
          <p>Studied Front-End development at Noroff - School of Technology and Digital Media</p>
          <p>
            Currently working fulltime with CRO & data at{" "}
            <Link to="https://fullstakk.no" target="_blank" rel="noopener noreferrer">
              Fullstakk
            </Link>
          </p>
          <p>I'm passionate about programming and Front-End Web development.</p>
        </article>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li></li>
        </ul>
      </section>
    </S.Home>
  );
}
