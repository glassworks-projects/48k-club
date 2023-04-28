import React from "react"
import {ExtLink, ImgAbout} from "../../components/export"
import evaarp2 from "../../media/album-artwork/evaarp2.jpg"

const releaseText = require("../../text/release-about.json").releasetext.evaarp2_about

/*
 include: title, img, artistName, releaseName, text, href
*/

function Press() {
  return(
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <h3 style={{fontWeight: `300`}}>Press: </h3>
        <ExtLink href="https://djmag.com/music/premiere-wild-kid-evaarp2">
          Premiered at DJ Mag
        </ExtLink>
      </p>
    </div>
  )
}

export default class EvaArp2 extends React.Component {
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

  render() {
    return(
      <ImgAbout
        artistLink="https://soundcloud.com/adder48k/"
        gf={false}
        title="48KS004 - Wild Kid - EVA.ARP2"
        img={evaarp2}
        heading = "WILD KID"
        subheading = "EVA.ARP2"
        text={releaseText}
        href="https://48ksps.bandcamp.com/track/eva-arp2"
        anythingElse={Press()}
      />
    )
  }
}
