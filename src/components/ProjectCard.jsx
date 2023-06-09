import * as S from "./styles/index";
import { Link } from "react-router-dom";

export function ProjectCard({ project: { title, image, description, github, hosted_url } }) {
  return (
    <S.ProjectCard>
      <article>
        <h3>{title}</h3>
        <div className="image-wrapper">
          <img src={image} alt="" />
        </div>
        <p>{description}</p>
        <h4>View project</h4>
        <div className="button-wrapper">
          <Link to={hosted_url} target="_blank" rel="noopener noreferrer">
            Website
          </Link>
          <Link to={github} target="_blank" rel="noopener noreferrer">
            Github
          </Link>
        </div>
      </article>
    </S.ProjectCard>
  );
}
