import React from "react"
import {ImgAbout} from "../../components/export"
import meadowcycles from "../../media/album-artwork/meadowcycles.jpg"

const releaseText = require("../../text/release-about.json").releasetext.meadowcycles_about

/*
 include: title, img, artistName, releaseName, text, href
*/

export default class MeadowCycles extends React.Component {
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
        artistLink="https://soundcloud.com/callosum-1/"
        gf={false}
        title="48KS002 - Callosum - Meadow Cycles"
        img={meadowcycles}
        heading = "CALLOSUM"
        subheading = "MEADOW CYCLES"
        text={releaseText}
        href="https://48ksps.bandcamp.com/album/meadow-cycles"
      />
    )
  }
}
