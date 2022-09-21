import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const ButtonContainer = styled(NavLink)`
  font-weight: bold;
  color: ${(props) => `${props.state ? "black" : "gray"}`};
  text-decoration: none;

  ${(props) =>
    props.state &&
    `::after {
    content: "";
    margin-top: 0.25rem;
    display: block;
    background-color: #279a90;
    width: inherit;
    height: 0.2rem;
  }`}
`
