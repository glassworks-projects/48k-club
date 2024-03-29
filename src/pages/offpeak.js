import React from "react"
import {ExtLink, Navigation, Bluebar, Wrapper, Socials} from "../components/export"
import styled from "styled-components"
import "../styles/global.css"

const Description = styled.div`
  width: 65vw;
  font-size: 1.5em;
  text-align: center;
  font-weight: 400;
  @media screen and (max-width: 650px) {
    width: 80vw;
  }
`

const Nav = styled.ul`
  ${'' /* position: absolute;
  left: 50%;
  top: 75%; */}
  font-size: 5em;
  ${'' /* transform: translate(-50%, -50%); */}
  text-align: center;
  list-style: none;
  width: 80vw;
  padding-top: 0.7em;
  @media screen and (max-width: 650px) {
    font-size: 2em;
  }
  @media screen and (max-height: 500px) {
    padding-top: 0.2em;
    font-size: 4em;
  }

`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20vh;
  width: 80vw;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    padding-top: 15vh;
  }
`
const LI = styled.li`
  @media screen and (max-width: 600px) {
    padding: 1vh 0;
  }
`
export default class OffPeak extends React.Component {
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
      <Wrapper title="Off Peak">
        <body>
          <Navigation />
          <Bluebar name="OFF PEAK"/>
          <Socials color="blue" />
          <Container>
            <Description>
              Off Peak is a playlist and interview series produced in collaboration with Insert.
              <br />
              Click on the installments below to read the interviews and hear the playlists.
            </Description>
            <Nav> 
            <LI>
                <ExtLink href="https://ins-rt.net/text/off-peak-jake-knight-club-djembe">
                  JAKE KNIGHT
                </ExtLink>
              </LI>       
            <LI>
                <ExtLink href="https://ins-rt.net/text/off-peak-briana-cheng">
                  BRIANA CHENG
                </ExtLink>
              </LI>          
              <LI>
                <ExtLink href="https://ins-rt.net/text/off-peak-martha">
                  MARTHA
                </ExtLink>
              </LI>
            <LI>
                <ExtLink href="https://weareinsert.com/textual/off-peak-nicole-ruggiero/">
                  NICOLE RUGGIERO
                </ExtLink>
              </LI>
              <LI>
                <ExtLink href="https://weareinsert.com/textual/off-peak-free-at-last/">
                  FREE AT LAST
                </ExtLink>
              </LI>
              <LI>
                <ExtLink href="https://weareinsert.com/textual/off-peak-tomas-fraser/">
                  TOMAS FRASER
                </ExtLink>
              </LI>
              <LI>
                <ExtLink href="https://weareinsert.com/textual/off-peak-bbylu/">
                  BBYLU
                </ExtLink>
              </LI>
              <LI>
                <ExtLink href="https://weareinsert.com/textual/off-peak-spurz/">
                  SPURZ
                </ExtLink>
              </LI>
              <LI>
                <ExtLink href="https://weareinsert.com/textual/off-peak-jsport/">
                  JSPORT
                </ExtLink>
              </LI>
              <LI>
                <ExtLink href="https://weareinsert.com/textual/off-peak-qrtr/">
                  QRTR
                </ExtLink>
              </LI>
            </Nav>
          </Container>
        </body>
      </Wrapper>
    )
  }

}
