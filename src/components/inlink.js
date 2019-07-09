import React from "react"
import styled from "styled-components"
import typography from "../utils/typography"
import {Link} from "gatsby"

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: inherit;

  &:hover {
    font-family: 'Cormorant Garamond';
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: blue;
  }
`

export default function InLink(props) {
  return (
    <StyledLink to={props.to}>{props.children}</StyledLink>
  )
}
