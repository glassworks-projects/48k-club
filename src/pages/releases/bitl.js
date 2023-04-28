import React from "react"
import {ImgAbout} from "../../components/export"
import bitl from "../../media/album-artwork/bitl.jpg"

const releaseText = require("../../text/release-about.json").releasetext.bitl_about

/*
 include: title, img, artistName, releaseName, text, href
*/

export default class Bitl extends React.Component {
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
        artistLink="https://soundcloud.com/adoreadorexx"
        gf={false}
        title="48K004 - ADORE ADORE - Break In The Line"
        img={bitl}
        heading = "ADORE ADORE"
        subheading = "BREAK IN THE LINE"
        text={releaseText}
        href="https://48ksps.bandcamp.com/album/break-in-the-line"
      />
    )
  }
}
