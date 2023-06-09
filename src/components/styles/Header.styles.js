import { styled } from "styled-components";

export const Header = styled.header`
  padding: 10px 10px;

  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.family.buttons};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  border-bottom: solid;
  border-color: ${({ theme }) => theme.color.purple};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
  }
`;
