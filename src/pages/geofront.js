import React from "react"
import {Link} from "gatsby"
import {Wrapper, InLink, ExtLink, Navigation, Bluebar, Socials} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import gf_zero from "../media/posters/gf_zero.png"
import gf_one from "../media/posters/gf_one.png"
import gf_two from "../media/posters/gf_two.jpg"
import gf_three from "../media/posters/gf_three.png"
import "../styles/global.css"
import { useSpring, animated } from 'react-spring'

const Poster = styled.img`
  position: absolute;
  width: 400px;
  &:hover {
    transform: scale(1.1);
    transition: all .15s ease-in-out;
  }
`
const Scroll = styled.div`
  height: 1200px;
  margin: 0 auto;
  overflow-y: scroll;
`

// for later: implementing parallax
// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
//
// function Card() {
//   const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
//   return (
//     <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
//       <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
//       <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
//       <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
//       <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
//     </div>
//   )
// }

export default class Geofront extends React.Component {
  render () {
    return (
      <Wrapper title="GeoFront" blue={true}>
        <body>
          <Bluebar name="GEOFRONT" />
          <Socials color="black" sidebar={true}/>
          <Scroll>
            <Navigation />

            <Poster style={{top: `650px`, left: `20%`}} src={gf_two} />
            <Link to="geofront-03">
              <Poster style={{top: `750px`, left: `55%`}} src={gf_three} />
            </Link>
            <Poster style={{top: `16%`, left: `18%`}} src={gf_zero} />
            <Poster style={{top: `30%`, left: `48%`}} src={gf_one} />
          </Scroll>
        </body>

      </Wrapper>
    )
  }
}
