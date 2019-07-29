import React from "react"
import { SocialIcon } from 'react-social-icons';
import styled from "styled-components"

const SocFooter = styled.div`
  list-style: none;
  text-align: center;
  position: fixed;
  transform: rotate(-90deg);
  right: -3%;
  bottom: 5vw;
`

const Li = styled.li`
  display: inline-block;
  padding: 10px;
`
function Icon (props) {
  return(
    <SocialIcon url={props.url} bgColor="transparent" fgColor={props.color}
      style={{
        height: `35px`,
        width: `35px`,
        cursor: `inherit`,
      }}
    target= "_blank"/>
  )
}

export default function Socials(props) {
  return (
      <SocFooter>
        <Icon url="https://facebook.com/48ksps" color={props.color}/>
        <Icon url="https://twitter.com/48ksps" color={props.color}/>
        <Icon url="https://instagram.com/48ksps" color={props.color}/>
        <Icon url="https://soundcloud.com/48ksps" color={props.color}/>
      </SocFooter>
  )
}
