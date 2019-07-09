import React from "react"
import {Wrapper, InLink, ExtLink, SVG, BlogPost} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"

const HomeNav = styled.ul`
  padding-top: 5%;
  font-size: 7em;
  text-align: center;
  list-style: none;
`

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBlog : false
    }
  }

  postLoad() {
    this.setState({showBlog : !this.state.showBlog});
  }

  render() {
    return (
      <Wrapper title="Home">
        <body>

          <HomeNav>
            <li onClick={this.postLoad.bind(this)}>BLOG</li>
            {this.state.showBlog && <BlogPost />}
            <li><InLink to="releases">RELEASES</InLink></li>
            <li><ExtLink serif={true} href="https://48ksps.bigcartel.com">STORE</ExtLink></li>
            <li><InLink to="geofront">GEOFRONT</InLink></li>
            <li><InLink to="offpeak">OFF PEAK</InLink></li>
            <li><InLink to="about">ABOUT</InLink></li>
          </HomeNav>
          <SVG>
            <polygon points="5,2 1200,2 5,680" />
          </SVG>
        </body>
      </Wrapper>
    )
  }
}
