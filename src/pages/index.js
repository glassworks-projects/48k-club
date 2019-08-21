import React from "react"
import {Wrapper, InLink, ExtLink, SVG, BlogCarousel, Socials} from "../components/export"
import styled from "styled-components"
import "../styles/global.css"

const HomeNav = styled.ul`
  padding-top: 5%;
  font-size: 7em;
  text-align: center;
  list-style: none;
  @media screen and (max-width: 600px) {
    padding-top: 20%;
    font-size: 3.5em;
  }
  @media screen and (max-height: 500px) {
    padding-top: 12%;
    font-size: 4em;
  }
`

const BlueLi = styled.li`

  color: white;
  text-decoration: none;
  cursor: inherit;

  &:hover {
    ${'' /* font-family: 'Cormorant Garamond';
    font-weight: 500; */}
    text-decoration: underline;
    text-decoration-color: blue;
  }
`

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBlog : false,
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

  postLoad() {
    this.setState({showBlog : !this.state.showBlog});
  }

  render() {
    return (
      <Wrapper title="Home" blue={true} svg={true}>
        {/* <Layout> */}
        <body>
          {/* <Blue /> */}
          <HomeNav>
            <BlueLi onClick={this.postLoad.bind(this)}>BLOG</BlueLi>
            {this.state.showBlog && <BlogCarousel />}
            <li><InLink to="releases">RELEASES</InLink></li>
            <li><InLink to="geofront">GEOFRONT</InLink></li>
            <li><InLink to="offpeak">OFF PEAK</InLink></li>
            <li><ExtLink href="https://48ksps.bigcartel.com">STORE</ExtLink></li>
            <li><InLink to="about">ABOUT</InLink></li>
          </HomeNav>
          <br />
          <Socials color="black"/>

          <SVG>
            <polygon points="0,2 1260,2 2,700" />
          </SVG>
        </body>
        {/* </Layout> */}

      </Wrapper>
    )
  }
}
