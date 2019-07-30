import React from "react"
import {Link} from "gatsby"
import {Wrapper, InLink, ExtLink, Navigation, Bluebar, Socials, Poster} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
// import gf_zero from "../media/posters/gf_zero.png"
// import gf_one from "../media/posters/gf_one.png"
// import gf_two from "../media/posters/gf_two.jpg"
// import gf_three from "../media/posters/gf_three.png"
import "../styles/global.css"
import { useSpring, animated } from 'react-spring'
import first from "../media/posters/three-layers/first.png"
import second from "../media/posters/three-layers/second.png"
import third from "../media/posters/three-layers/third.png"

// const Poster = styled.img`
//   position: absolute;
//   width: 400px;
//   &:hover {
//     transform: scale(1.1);
//     transition: all .15s ease-in-out;
//   }
// `
const Scroll = styled.div`
  height: 1200px;
  margin: 0 auto;
  overflow-y: scroll;
`

export default class Geofront extends React.Component {
  render () {
    return (
      <Wrapper title="GeoFront" blue={true}>
        <body>
          <Bluebar name="GEOFRONT" />
          <Socials color="black" sidebar={true}/>
          <Scroll>
            <Navigation />
            <Link to="geofront-03">
              <Poster first={first} second={second} third={third} />
            </Link>
            {/* <Poster style={{top: `650px`, left: `20%`}} src={gf_two} />
              <Link to="geofront-03">
              <Poster style={{top: `750px`, left: `55%`}} src={gf_three} />
              </Link>
              <Poster style={{top: `16%`, left: `18%`}} src={gf_zero} />
            <Poster style={{top: `30%`, left: `48%`}} src={gf_one} /> */}
          </Scroll>
        </body>

      </Wrapper>
    )
  }
}
