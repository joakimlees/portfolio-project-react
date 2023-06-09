import styled from "styled-components";

export const ProjectCard = styled.li`
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.purple};
  max-width: 300px;

  h3,
  h4 {
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.family.headings};
  }

  p {
    font-family: ${({ theme }) => theme.font.family.paragraphs};
    color: ${({ theme }) => theme.color.white};
  }

  article {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border-radius: 10px;
  }

  h4 {
    margin: auto 0px 0px 0px;
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;

    a {
      font-family: ${({ theme }) => theme.font.family.links};
      text-decoration: none;
      color: ${({ theme }) => theme.color.yellow};
      margin: 5px 30px;
    }
  }
`;
