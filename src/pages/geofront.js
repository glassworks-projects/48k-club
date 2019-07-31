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
import first00 from "../media/posters/zero-layers/first00.png"
import second00 from "../media/posters/zero-layers/second00.png"
import third00 from "../media/posters/zero-layers/third00.png"
import first03 from "../media/posters/three-layers/first03.png"
import second03 from "../media/posters/three-layers/second03.png"
import third03 from "../media/posters/three-layers/third03.png"
import first02 from "../media/posters/two-layers/first02.png"
import second02 from "../media/posters/two-layers/second02.png"
import third02 from "../media/posters/two-layers/third02.png"

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
            <Poster first={first02} second={second02} third={third02} top={200} left={450} />
            <Poster first={first00} second={second00} third={third00} top={100} left={0} />
            <Link to="geofront-03">
              <Poster first={first03} second={second03} third={third03} top={750} left={600}/>
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
