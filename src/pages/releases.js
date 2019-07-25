import React from "react"
import { TypographyStyle, GoogleFont } from 'react-typography'
import cathedral from "../media/album-artwork/cathedral.jpg"
import lapse from "../media/album-artwork/lapse.jpg"
import st from "../media/album-artwork/st.jpg"
import styled from "styled-components"
import {Wrapper, Navigation, Bluebar, SVG, ExtLink} from "../components/export"
import {releasetext} from "../text/release-about.json"
import "../styles/global.css"

const ReleaseNames = styled.ul`
  position: absolute;
  padding-right: 20px;
  width: 35%;
  top: 18%;
  list-style: none;
  font-size: 2.5vw;
  line-height: 1.1em;
  font-weight: 300;

  li {
    &:hover {
      text-decoration: underline;
      text-decoration-color: blue;
    }
  }
`
const ReleaseAbout = styled(Release)`
  position: fixed;
  ${'' /* overflow: scroll; */}
  margin-left:auto;
  margin-right:auto;
  left: 40%;
  top: 15%;
  width: 55%;
  height: 80%;

  h1 {
    font-weight: 300;
    font-size: 3vw;
    text-align: center;
    padding-bottom: 2vh;
  }

  p {
    font-weight: 300;
    font-size: 3.5vh;
    position: relative;
    padding-top: 1em;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    line-height: 1.2em;
    width: 80vh;
  }

  a {
    font-size: 4vh;
  }

  img {
    display: block;
    background-size: contain;
    position: relative;
    margin: auto;
  }
`

function Release (props) {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <img src={props.image} width="300vh" height="300vh" />
      <p>
        {props.text}
        <br />
        <br />
        <ExtLink href={props.href}>STREAM / BUY</ExtLink>
      </p>
    </div>
  )
}

export default class Releases extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      text: '',
      href: '',
      showComponent: false
    };
    this.update = this.update.bind(this);
  }

  update (img, title, text, href) {
    this.setState ({
      showComponent: true,
      image: img,
      title: title,
      text: text,
      href: href
    });
  }

  render () {

    return (
      <Wrapper title="Releases">
        <body>
          <Navigation />
          <Bluebar name="RELEASES" />
          <SVG>
            <line x1="35%" y1="70px" x2="35%" y2="100%"
              style={{stroke: `1px solid white`}}
            />
          </SVG>
          <ReleaseNames>
            <li onClick={this.update.bind(
              this,
              st,
              "Wild Kid - Scream Tape",
              releasetext.st_about,
              "http://smarturl.it/screamtape"
            )}>
              SCREAM TAPE
            </li>

            <li onClick={this.update.bind(
              this,
              lapse,
              "Wild Kid - Lapse (Miracles Remix)",
              releasetext.lapse_about,
              "http://hyperurl.co/48ks001"
            )}>
              LAPSE (MIRACLES REMIX)
            </li>

            <li onClick={this.update.bind(
              this,
              cathedral,
              "Wild Kid - Cathedral",
              releasetext.cath_about,
              "http://smarturl.it/cathedral"
            )}>
              CATHEDRAL
            </li>
          </ReleaseNames>
          <div>
            {this.state.showComponent ?
              <ReleaseAbout
                image={this.state.image}
                title={this.state.title}
                text={this.state.text}
                href={this.state.href}
              /> : null}
          </div>
        </body>
      </Wrapper>
    );
  }

}
