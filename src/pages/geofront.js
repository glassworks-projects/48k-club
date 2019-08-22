import React from "react"
import {Link} from "gatsby"
import {Wrapper, InLink, ExtLink, Navigation, Bluebar, Socials, Poster} from "../components/export"
import styled from "styled-components"
import "../styles/global.css"
import { useSpring, animated } from 'react-spring'

import first00    from "../media/posters/zero-layers/first00.png"
import second00   from "../media/posters/zero-layers/second00.png"
import third00    from "../media/posters/zero-layers/third00.png"
import first01    from "../media/posters/one-layers/first01.png"
import second01   from "../media/posters/one-layers/second01.png"
import third01    from "../media/posters/one-layers/third01.png"
import first02    from "../media/posters/two-layers/first02.png"
import second02   from "../media/posters/two-layers/second02.png"
import third02    from "../media/posters/two-layers/third02.png"
import first03    from "../media/posters/three-layers/first03.png"
import second03   from "../media/posters/three-layers/second03.png"
import third03    from "../media/posters/three-layers/third03.png"

const Scroll = styled.div`
  height: 1200px;
  margin: 0 auto;
  overflow-y: scroll;
`
const IMG = styled.img`
  width: 75vw;
  display: block;
  margin: 0 auto;
  padding: 2vh 0;
  @media screen and (max-height: 500px) {
    width: 40vw;
  }
`
const Container = styled.div`
  padding-top: 10vh;
  @media screen and (max-height: 500px) {
    padding-top: 12vh;
  }
`
function Small() {
  return (typeof window !== `undefined`) ?
    (window.innerWidth < 600 || window.innerHeight < 500) :
    false;
}

function Floats() {
  return (
    <div>
      <Scroll>
        <Link to="geofront-02">
          <Poster first={first02} second={second02} third={third02} top={200} left={550} />
        </Link>
        <Link to="geofront-00">
          <Poster first={first00} second={second00} third={third00} top={100} left={100} />
        </Link>
        <Link to="geofront-03">
          <Poster first={first03} second={second03} third={third03} top={750} left={700}/>
        </Link>
        <Link to="geofront-01">
          <Poster first={first01} second={second01} third={third01} top={800} left={110}/>
        </Link>
      </Scroll>
    </div>
  )
}

function Static() {
  return (
    <Container>
      <Link to="geofront-03">
        <IMG src={require("../media/posters/gf_three.png")} alt="GeoFront-03 Poster"/>
      </Link>
      <Link to="geofront-02">
        <IMG src={require("../media/posters/gf_two.jpg")} alt="GeoFront-02 Poster"/>
      </Link>
      <Link to="geofront-01">
        <IMG src={require("../media/posters/gf_one.png")} alt="GeoFront-01 Poster"/>
      </Link>
      <Link to="geofront-00">
        <IMG src={require("../media/posters/gf_zero.png")} alt="GeoFront-00 Poster"/>
      </Link>
    </Container>
  )
}

export default class Geofront extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }

  updateWindowDimensions() {
    if (typeof window !== `undefined`) {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
  }

  render () {
    return (
      <Wrapper title="GeoFront" blue={true}>
        <body>
          <Bluebar name="GEOFRONT"/>
          <Socials color="black"/>
          <Navigation />
          {Small() ? <Static /> :  <Floats />}
        </body>
      </Wrapper>
    )
  }
}
