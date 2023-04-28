import React from "react"
import {ImgAbout} from "../../components/export"
import lapse from "../../media/album-artwork/lapse.jpg"

const releaseText = require("../../text/release-about.json").releasetext.lapse_about

export default class Lapse extends React.Component {
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
        gf={false}
        title="48KS001 - Wild Kid - Lapse (Miracles Remix)"
        img={lapse}
        heading= "WILD KID"
        subheading= "LAPSE (MIRACLES REMIX)"
        text={releaseText}
        href="http://hyperurl.co/48ks001"
      />
    )
  }
}