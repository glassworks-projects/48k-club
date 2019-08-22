import React from "react"
import styled from "styled-components"
import {Wrapper, Navigation, Bluebar, ExtLink, Socials} from "../components/export"
import "../styles/global.css"

const BodyText = styled.div`
  position: absolute;
  text-align: center;
  height: 30%;
  top: 35%;
  width: 50vw;
  left: 25vw;
  font-size: 1.5em;
  @media screen and (max-width: 600px) {
    width: 80%;
    left: 10%;
    top: 30%;
    font-size: 1.7em;
  }
`
const Mail = styled.a`
  font: inherit;
  color: white;
  text-decoration: none;
  cursor: inherit;

  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`
export default class About extends React.Component {
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
      <Wrapper>
        <Navigation />
        <Bluebar name="ABOUT" />
        <Socials sidebar={true} color="blue" />
        <body>
          <BodyText>
            We make work that we think deserves a place in the world.
            We aim to give you something that matters to you. <br />
            Good art, no bullshit.
            <br /> <br />
            Say hi: <Mail href="mailto:hello@48k.club">hello@48k.club</Mail>
          </BodyText>
        </body>
      </Wrapper>
    )
  }
}
