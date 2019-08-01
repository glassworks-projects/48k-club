import React from "react"
import {Link} from "gatsby"
import {Wrapper, InLink, ExtLink, Navigation, Bluebar, Socials, Poster} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
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

export default class Geofront extends React.Component {
  render () {
    return (
      <Wrapper title="GeoFront" blue={true}>
        <body>
          <Bluebar name="GEOFRONT"/>
          <Socials color="black"/>
          <Scroll>
            <Navigation />
            <Poster first={first02} second={second02} third={third02} top={200} left={450} />
            <Poster first={first00} second={second00} third={third00} top={100} left={0} />
            <Link to="geofront-03">
              <Poster first={first03} second={second03} third={third03} top={750} left={600}/>
            </Link>
            <Poster first={first01} second={second01} third={third01} top={800} left={10}/>
          </Scroll>
        </body>

      </Wrapper>
    )
  }
}
