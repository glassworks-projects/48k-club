import React from "react"
import styled from "styled-components"
import {Wrapper, Navigation, Bluebar, Socials} from "../components/export"
import "../styles/global.css"
import {Link} from "gatsby"

const Titles = styled.div`
  margin: 0 auto;
  font-size: 2em;
  padding-top: 20vh;
  display: block;
  width: 80%;
  ${'' /* background-color: red; */}
  @media screen and (max-width: 600px) {
    font-size: 1.5em;
    line-height: 1.2em;
  }
`

const Entry = styled.p`
  position: relative;
  width: fit-content;
  cursor: inherit;
  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
  @media screen and (max-width: 600px) {
    max-width: 87%;
  }
  padding-bottom: 5vh;
`
const Spacer = styled.span`
  letter-spacing: -0.2em;
`

const L = styled(Link)`
  text-decoration: inherit;
  color:inherit;
  cursor: inherit;
`

function Wide() {
  return (typeof window !== `undefined`) ? (window.innerWidth > 600) : true;
}

export default class Releases extends React.Component {

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
      <Wrapper title="Releases" blue={true}>
        <body>
          <Navigation />
          <Bluebar name="RELEASES" />

          <Titles>
          <L to="/releases/tell-you">
              <Entry>48K006
                {Wide() ? <Spacer>—————————————————————</Spacer> : <br />}  
                {Wide() ? <span>&nbsp;Callosum - Tell You</span> : 
                <span>Callosum <br />Tell You</span>}
                </Entry>
              </L>
          <L to="/releases/click-refresh">
              <Entry>48KS008
                {Wide() ? <Spacer>———————————————————</Spacer> : <br />}  
                {Wide() ? <span>&nbsp;Adder - Click Refresh</span> : 
                <span>Adder <br />Click Refresh</span>}
                </Entry>
              </L>
          <L to="/releases/the-expanse">
              <Entry>48KS007
                {Wide() ? <Spacer>—————————————</Spacer> : <br />}  
                {Wide() ? <span>&nbsp;Adder - The Expanse (with bk beats)</span> : 
                <span>Adder <br />The Expanse (with bk beats)</span>}
                </Entry>
              </L>
          <L to="/releases/tree-wav">
              <Entry>48KS006
                {Wide() ? <Spacer>—————————————————————</Spacer> : <br />}  
                {Wide() ? <span>&nbsp;Adder - tree.wav</span> : 
                <span>Adder <br />tree.wav</span>}
                </Entry>
              </L>
          <L to="/releases/lucha">
              <Entry>48KS005
                {Wide() ? <Spacer>———————————————————————</Spacer> : <br />}  
                {Wide() ? <span>&nbsp;Adder - ¡Lucha!</span> : 
                <span>Adder <br />¡Lucha!</span>}
                </Entry>
              </L>
          <L to="/releases/eva-arp2">
              <Entry>48KS004
                {Wide() ? <Spacer>——————————————————</Spacer> : <br />}  
                {Wide() ? <span>&nbsp;Wild Kid - EVA.ARP2</span> : 
                <span>Wild Kid <br />EVA.ARP2</span>}
                </Entry>
              </L>
          <L to="/releases/extremely-naive">
              <Entry>48KS003 
                {Wide() ? <Spacer>——————————————————</Spacer> : <br />}  
                {Wide() ? <span>&nbsp;Adder - Extremely Naïve</span> : 
                <span>Adder <br />Extremely Naïve</span>}
                </Entry>
              </L>
          <L to="/releases/meadow-cycles">
              <Entry>48KS002 
                {Wide() ? <Spacer>———————————————</Spacer> : <br />}  
                {Wide() ? <span>&nbsp;Callosum - Meadow Cycles</span> : 
                <span>Callosum <br />Meadow Cycles</span>}
                </Entry>
              </L>
            <L to="/releases/memory-ha">
              <Entry>48K005 
                {Wide() ? <Spacer>—————————————————</Spacer> : <br />}  
                {Wide() ? <span>&nbsp;Miracles - Memory Ha</span> : 
                <span>Miracles <br />Memory Ha</span>}
                </Entry>
              </L>

            <L to="/releases/bitl">
              <Entry>48K004 
                {Wide() ? <Spacer>———————</Spacer> : <br />}
                {Wide() ? <span>&nbsp;ADORE ADORE - Break In The Line</span> : 
                <span>ADORE ADORE <br />Break In The Line</span>
                }
                </Entry>
                </L>
            <L to="/releases/formless">
              <Entry>48K003 
                {Wide() ? <Spacer>————————————</Spacer> : <br />}
                {Wide()? <span>&nbsp;Wild Kid - Formless</span> : <span>Wild Kid <br />Formless</span>}
                </Entry>
                </L>
            <L to="/releases/screamtape">
              <Entry>48K002
                {Wide() ? <Spacer>—————————————————</Spacer> : <br />}
                {Wide() ? <span>&nbsp;Wild Kid - Scream Tape</span> : <span> Wild Kid <br />Scream Tape</span>}
                </Entry>
                </L>
            <L to="/releases/lapse">
              <Entry>48KS001
                {Wide() ? <Spacer>————————————</Spacer> : <br />}
                {Wide() ? <span>&nbsp;Wild Kid - Lapse (Miracles Remix)</span> :
                <span>Wild Kid <br />Lapse (Miracles Remix)</span>}
                </Entry>
                </L>
            <L to="/releases/cathedral">
              <Entry>48K001
                {Wide() ? <Spacer>———————————</Spacer> : <br />}
                {Wide() ? <span>&nbsp;Wild Kid - Cathedral</span> : 
                <span>Wild Kid <br />Cathedral</span>}
                </Entry>
                </L>
          </Titles>
          <Socials color="black" />
        </body>
      </Wrapper>
    )
  }
}
