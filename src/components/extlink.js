import React from "react"
import styled from "styled-components"
import typography from "../utils/typography"

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: inherit;

  &:hover {
    font-family: ${props => props.serif ? 'Cormorant Garamond' : 'Roboto'};
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: blue;
  }
`

export default function ExtLink(props) {
  return (
    <StyledLink href={props.href} serif={props.serif} target="_blank">
      {props.children}
    </StyledLink>
  )
}
