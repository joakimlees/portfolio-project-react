import styled from "styled-components";

export const Footer = styled.footer`
  color: ${({ theme }) => theme.color.yellow};
  background-color: ${({ theme }) => theme.color.dark};
  font-family: ${({ theme }) => theme.font.family.paragraphs};
  font-size: ${({ theme }) => theme.font.size.small};
  padding: 50px 20px;
  border-top: solid;
  border-color: ${({ theme }) => theme.color.purple};

  a {
    color: ${({ theme }) => theme.color.yellow};
    font-family: ${({ theme }) => theme.font.family.links};
    text-decoration: none;
  }
`;
