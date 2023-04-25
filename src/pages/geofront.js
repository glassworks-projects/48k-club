import React from "react"
import {Link} from "gatsby"
import {Wrapper, Navigation, Bluebar, Socials, Poster} from "../components/export"
import styled from "styled-components"
import "../styles/global.css"

// parallax poster layers
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
import first04    from "../media/posters/four-layers/first04.png"
import second04   from "../media/posters/four-layers/second04.png"
import third04    from "../media/posters/four-layers/third04.png"

// static imgs
import gf_four    from "../media/posters/gf_four.png"
import gf_three   from "../media/posters/gf_three.png"
import gf_two     from "../media/posters/gf_two.png"
import gf_one     from "../media/posters/gf_one.png"
import gf_zero    from "../media/posters/gf_zero.png"

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
        <Link to="/geofront-02">
          <Poster first={first02} second={second02} third={third02} top={700} left={110} />
        </Link>
        <Link to="/geofront-00">
          <Poster first={first00} second={second00} third={third00} top={1400} left={250} />
        </Link>
        <Link to="/geofront-03">
          <Poster first={first03} second={second03} third={third03} top={200} left={650}/>
        </Link>
        <Link to="/geofront-01">
          <Poster first={first01} second={second01} third={third01} top={810} left={600}/>
        </Link>
        <Link to="/geofront-04">
          <Poster first={first04} second={second04} third={third04} top={100} left={100}/>
        </Link>
      </Scroll>
    </div>
  )
}

function Static() {
  return (
    <Container>
      <Link to="/geofront-04">
        <IMG src={gf_four} alt="GeoFront-04 Poster"/>
      </Link>
      <Link to="/geofront-03">
        <IMG src={gf_three} alt="GeoFront-03 Poster"/>
      </Link>
      <Link to="/geofront-02">
        <IMG src={gf_two} alt="GeoFront-02 Poster"/>
      </Link>
      <Link to="/geofront-01">
        <IMG src={gf_one} alt="GeoFront-01 Poster"/>
      </Link>
      <Link to="/geofront-00">
        <IMG src={gf_zero} alt="GeoFront-00 Poster"/>
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
