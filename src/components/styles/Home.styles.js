import styled from "styled-components";

export const Home = styled.main`
  flex-grow: 1;

  background-color: ${({ theme }) => theme.color.dark};

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto 50px;
    max-width: 300px;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.color.yellow};

    .header-line1 {
      color: ${({ theme }) => theme.color.white};
      font-family: ${({ theme }) => theme.font.family.headings};
      font-size: ${({ theme }) => theme.font.size.large};
      font-weight: ${({ theme }) => theme.font.weight.thin};
      text-align: start;
      align-self: flex-start;
    }

    .header-line2 {
      color: ${({ theme }) => theme.color.white};
      font-family: ${({ theme }) => theme.font.family.headings};
      font-size: ${({ theme }) => theme.font.size.xLarge};
    }

    .header-line3 {
      color: ${({ theme }) => theme.color.yellow};
      font-weight: ${({ theme }) => theme.font.weight.thin};
      font-family: ${({ theme }) => theme.font.family.paragraphs};
      font-size: ${({ theme }) => theme.font.size.small};
      align-self: flex-end;
      margin: -10px 85px 0px 0px;
    }
  }

  .about-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 90px auto;

    h2 {
      color: ${({ theme }) => theme.color.white};
      font-family: ${({ theme }) => theme.font.family.headings};
    }

    .image-wrapper {
      width: 300px;

      img {
        border-radius: 10px;
      }
    }

    article {
      display: flex;
      flex-direction: column;
      max-width: 350px;
      color: white;
      font-family: ${({ theme }) => theme.font.family.paragraphs};

      h3 {
        font-family: ${({ theme }) => theme.font.family.headings};
      }

      ul {
        padding: 0px;
        list-style: none;
        text-decoration: none;
      }

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.coral};
      }
    }

    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr;
      max-width: 100%;
      column-gap: 30px;

      h2 {
        grid-row: 1/2;
        grid-column: 1/-1;
        justify-self: center;
      }

      .image-wrapper {
        grid-column: 1/2;
        grid-row: 2;
        width: 350px;
        justify-self: end;
      }
    }
  }

  h2 {
    font-family: ${({ theme }) => theme.font.family.headings};
    color: ${({ theme }) => theme.color.white};
    text-align: center;
  }
`;
