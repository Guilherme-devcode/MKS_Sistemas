import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;

export const StyledContainerHeader = styled(Container)`
  max-width: none;
`;
export const Brand = styled(Navbar.Brand)`
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  margin-right: 5px;
`;

export const BrandSecondary = styled.span`
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
`;

export const ShoppingButton = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.25s;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    background: black;
  }
`;
